import * as React from "react";
import { BackButton } from "@woffu/ui";
import Filter from "../model/bet-filter.model";
import { useState } from "react";
import moment from "moment";

interface Props {
  filter: Filter;
  onFilter: (filter: Filter) => void;
  onCancel: () => void;
}

const BetFilter = ({ filter, onFilter, onCancel }: Props) => {
  const [tempFilter, setTempFilter] = useState<Filter>(filter);

  const handleChange = (e: any) => {
    if (e.target.name == "minDate") {
      tempFilter.minDate = e.target.value;
    } else if (e.target.name == "maxDate") {
      tempFilter.maxDate = e.target.value;
    }
    setTempFilter(tempFilter);
  };

  const handleApplyFilter = () => {
    if (tempFilter.minDate && tempFilter.maxDate) {
      onFilter(tempFilter);
    }
  };

  return (
    <div className="card filter">
      <div className="card-body">
        <span className="float-start">
          <BackButton onClick={() => onCancel()}></BackButton>
        </span>
        <h3>Select stats range</h3>

        {filter && (
          <>
            <label>From:</label>
            <input
              type="date"
              name="minDate"
              className="form-control"
              defaultValue={moment(filter.minDate).format("YYYY-MM-DD")}
              onChange={handleChange}
            />

            <label>To:</label>
            <input
              type="date"
              name="maxDate"
              className="form-control"
              defaultValue={moment(filter.maxDate).format("YYYY-MM-DD")}
              onChange={handleChange}
            />
          </>
        )}

        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={handleApplyFilter}
          >
            Refresh stats
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetFilter;
