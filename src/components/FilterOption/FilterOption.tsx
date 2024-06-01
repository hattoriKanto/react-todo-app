import React from "react";
import classNames from "classnames";

import { FilterOptionsType } from "../../types/FilterOptionsType";

type Props = {
  filterOption: FilterOptionsType;
  onFilter: (value: FilterOptionsType) => void;
  optionName: FilterOptionsType;
};

export const FilterOption: React.FC<Props> = ({
  filterOption,
  onFilter,
  optionName,
}) => {
  return (
    <a
      href={`#/${optionName}`}
      className={classNames("filter__link", {
        selected: filterOption === optionName,
      })}
      data-cy={`FilterLink${optionName}`}
      onClick={() => onFilter(optionName)}
    >
      {optionName}
    </a>
  );
};
