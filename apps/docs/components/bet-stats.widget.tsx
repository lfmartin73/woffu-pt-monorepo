import * as React from "react";
import { FilterButton, Loading, Error, FontAwesomeIcon } from "@woffu/ui";
import { useEffect, useState } from "react";
import { BetService } from "@woffu/data";
import BetsDTO from "@woffu/data/dto/bets.dto";
import Filter from "../model/bet-filter.model";
import BetFilter from "./bet-filter.component";
import Stats from "../model/bet-stats.model";
import Bet from "@woffu/data/model/bet.model";
import moment from 'moment';

const BetStatsWidget = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [stats, setStats] = useState<Stats>({
    count: 0,
    sum: 0,
    average: 0,
  });
  const [filter, setFilter] = useState<Filter>({
    minDate: new Date(),
    maxDate: new Date(),
    new: true
  });

  const betService = new BetService();

  useEffect(() => {
    setLoading(true);
    betService.getAll().then((betsDTO: BetsDTO) => {
      setLoading(false);
      setError("");

      if (betsDTO.error) {
        setError(betsDTO.error);
        return;
      }

      let bets = applyFilter(betsDTO.bets);

      if (!bets) {
        setError("No bets found.");
        return;
      }

      //Calcular estadisticas a mostrar en widget
      stats.count = bets.length;
      stats.sum = bets.reduce((total, next) => total + next.betAmount, 0);
      stats.average = stats.count > 0 ? Math.round(stats.sum / stats.count) : 0;
      setStats(stats);
    });
  }, [filter.minDate, filter.maxDate]);

  const applyFilter = (bets: Bet[]) => {

    if (!bets) {
      return;
    }

    if (filter.new) {
      bets = bets.sort((a, b) =>
        a.raceDate && b.raceDate
          ? new Date(a.raceDate).getTime() - new Date(b.raceDate).getTime()
          : -1
      );

      filter.minDate = bets[0].raceDate;
      filter.maxDate = bets[bets.length - 1].raceDate;
      filter.new = false;
      setFilter(filter);
    } 
    else {
      bets = bets.filter(
        (item) =>
          new Date(item.raceDate) >= new Date(filter.minDate) &&
          new Date(item.raceDate) <= new Date(filter.maxDate)
      );
    }

    return bets;
  };

  const MODE = {
    WIDGET: "widget",
    FILTER: "filter",
  };
  const [mode, setMode] = useState(MODE.WIDGET);

  const handleCancel = () => {
    setMode(MODE.WIDGET);
  };

  const handleGoFilter = () => {
    setMode(MODE.FILTER);
  };

  const handleApplyFilter = (filter: Filter) => {
    setFilter(filter);
    setMode(MODE.WIDGET);
  };

  return (
    <>
      <main id="bets-widget" style={{ maxWidth: "20rem" }}>
        {loading && <Loading loading={loading} />}

        {error && <Error text={error} />}

        {!loading && mode === MODE.WIDGET && (
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-secondary"
              aria-current="true"
            >
              <h4 className="text-center">Bet stats</h4>
              <div onClick={handleGoFilter}>
                <FilterButton onClick={handleGoFilter}></FilterButton>
                <small className="text-muted">
                  From {moment(filter.minDate).format('DD/MM/YYYY')} to {' '}
                  {moment(filter.maxDate).format('DD/MM/YYYY')}
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-muted">Bets count</span>
              <span className="badge bg-primary rounded-pill">
                {stats.count}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-muted">Total amount</span>
              <span className="badge bg-primary rounded-pill">{stats.sum}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-muted">Average amount</span>
              <span className="badge bg-primary rounded-pill">
                {stats.average}
              </span>
            </li>
          </ul>
        )}

        {!loading && mode === MODE.FILTER && (
          <BetFilter
            filter={filter}
            onFilter={handleApplyFilter}
            onCancel={handleCancel}
          ></BetFilter>
        )}
      </main>
    </>
  );
};

export default BetStatsWidget;
