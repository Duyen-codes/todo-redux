import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filterSelected = (value) => {
    dispatch(setFilter(value));
  };
  return (
    <div>
      all{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("ALL")}
      />
      completed{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("COMPLETED")}
      />
      not completed{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("NOTCOMPLETED")}
      />
    </div>
  );
};

export default Filter;
