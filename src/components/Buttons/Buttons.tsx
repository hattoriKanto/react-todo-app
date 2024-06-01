import React from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import { ThemeOptionsType } from "../../context/themeContext";
import { useThemeContext } from "../../hooks/useThemeContext";

export const Buttons: React.FC = () => {
  const { themeOption, setThemeOption } = useThemeContext();
  return (
    <div className="buttons__wrapper">
      <button
        className="switcher has-background-primary"
        onClick={() => {
          if (themeOption === ThemeOptionsType.dark) {
            setThemeOption(ThemeOptionsType.light);
            return;
          }

          setThemeOption(ThemeOptionsType.dark);
        }}
      >
        <FontAwesomeIcon
          className={classNames(
            themeOption === ThemeOptionsType.dark
              ? "has-text-primary-light"
              : "has-text-primary-dark"
          )}
          icon={faLightbulb}
          style={{ height: "30px" }}
        />
      </button>
    </div>
  );
};
