import * as React from "react";
import Bet from "@woffu/data/model/bet.model";
import { AddButton, ViewButton, EditButton, DeleteButton } from "@woffu/ui";
import moment from 'moment';

interface Props {
  list: Bet[];
  selected?: Bet;
  onAdd: () => void;
  onView: (bet: Bet) => void;
  onEdit: (bet: Bet) => void;
  onDelete: (bet: Bet) => void;
}

export const BetList = ({
  list,
  selected,
  onAdd,
  onView,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <>
      <section className="bet-list">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Horse</th>
                <th>Jockey</th>
                <th>Gambler</th>
                <th className="text-end">Amount</th>
                <th>Date</th>
                <th className="text-end">
                  <AddButton onClick={() => onAdd()} />
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr
                  key={item.id}
                  className={
                    selected && selected.id === item.id ? "table-primary" : ""
                  }
                >
                  <td>{item.id}</td>
                  <td>{item.horse}</td>
                  <td>{item.jockey}</td>
                  <td>{item.gambler}</td>
                  <td className="text-end">{item.betAmount}</td>
                  <td>{moment(new Date(item.raceDate)).format('DD/MM/YYYY')}</td>
                  <td className="text-end">
                    <ViewButton onClick={() => onView(item)} />
                    <EditButton onClick={() => onEdit(item)} />
                    <DeleteButton onClick={() => onDelete(item)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
