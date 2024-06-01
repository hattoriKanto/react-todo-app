import React, { useEffect, useRef, useState } from "react";

import { getPreparedTodos } from "./client/getPreparedTodos";

import { ErrorMessages } from "./types/Messages";
import { FilterOptions } from "./types/FilterOptions";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { useTodoContext } from "./hooks/useTodoContext";
import { useFetchContext } from "./hooks/useFetchContext";
import classNames from "classnames";
import { useThemeContext } from "./hooks/useThemeContext";
import { ThemeOptionsType } from "./context/themeContext";
import { Buttons } from "./components/Buttons/Buttons";

export const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { todos, tempTodo, newTodoTitle } = useTodoContext();
  const { themeOption } = useThemeContext();
  const { handleTodoDelete, handleUpdateTodo, handleAddNewTodo } =
    useFetchContext();

  const [filterOption, setFilterOption] = useState<FilterOptions>(
    FilterOptions.All
  );
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>(
    ErrorMessages.NoError
  );

  const visibleTodos = getPreparedTodos(todos, filterOption);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  const isAllTodosCompleted = todos.length === completedTodos.length;

  const handleShowError = (message: ErrorMessages) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(ErrorMessages.NoError);
    }, 3000);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedTitle = newTodoTitle.trim();

    if (!normalizedTitle) {
      handleShowError(ErrorMessages.EmptyTitle);

      return;
    } else {
      setErrorMessage(ErrorMessages.NoError);
      handleAddNewTodo(normalizedTitle);
    }
  };

  const handleFilter = (value: FilterOptions) => {
    setFilterOption(value);
  };

  const handleDeleteAllCompleted = () => {
    todos.forEach((todo) => {
      if (todo.completed) {
        handleTodoDelete(todo.id);
      }
    });
  };

  const handleChangeStatus = () => {
    if (activeTodos.length !== 0) {
      activeTodos.forEach((todo) => handleUpdateTodo(todo.id, !todo.completed));
    } else {
      completedTodos.forEach((todo) =>
        handleUpdateTodo(todo.id, !todo.completed)
      );
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todos, errorMessage]);

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
          <Header
            onSubmit={handleSubmit}
            inputRef={inputRef}
            isTodosEmpty={!todos.length}
            isButtonActive={isAllTodosCompleted}
            onChangeStatus={handleChangeStatus}
          />
          <TodoList
            todos={visibleTodos}
            inputRef={inputRef}
          />
          {tempTodo && (
            <TodoItem
              todo={tempTodo}
              isShowLoader={Boolean(tempTodo)}
            />
          )}
          {!!todos.length && (
            <Footer
              counter={activeTodos.length}
              filterOption={filterOption}
              onFilter={handleFilter}
              isClearButtonShowing={Boolean(completedTodos.length)}
              onDeleteCompleted={handleDeleteAllCompleted}
            />
          )}
        </div>
      </div>
    </div>
  );
};
