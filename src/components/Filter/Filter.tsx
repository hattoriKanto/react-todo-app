import React from "react";
import { FilterOptionsType } from "../../types/FilterOptions";
import { FilterOption } from "../FilterOption";
import { useTodoContext } from "../../hooks";

export const Filter: React.FC = () => {
  const { filterOption, setFilterOption } = useTodoContext();

  const handleFilter = (value: FilterOptionsType) => {
    setFilterOption(value);
  };

  return (
    <nav
      className="filter"
    >
      {Object.values(FilterOptionsType).map((option) => (
        <FilterOption
          key={option}
          filterOption={filterOption}
          onFilter={handleFilter}
          optionName={option}
        />
      ))}
    </nav>
  );
};
