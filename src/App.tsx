import React, { useEffect, useRef } from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { useTodoContext } from "./hooks/useTodoContext";
import classNames from "classnames";
import { useThemeContext } from "./hooks/useThemeContext";
import { ThemeOptionsType } from "./context/themeContext";
import { Buttons } from "./components/Buttons/Buttons";

export const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { todos, tempTodo } = useTodoContext();
  const { themeOption } = useThemeContext();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todos]);

  return (
    <div className="container">
      <Buttons />
      <div className="todoapp">
        <h1
          className={classNames(
            "todoapp__title",
            themeOption === ThemeOptionsType.dark
              ? "has-text-primary-light"
              : "has-text-primary-dark"
          )}
        >
          Todo App
        </h1>

        <div className="todoapp__content">
          <Header inputRef={inputRef} />
          <TodoList inputRef={inputRef} />
          {tempTodo && (
            <TodoItem
              todo={tempTodo}
              isShowLoader={Boolean(tempTodo)}
            />
          )}
          {!!todos.length && <Footer />}
        </div>
      </div>
    </div>
  );
};
