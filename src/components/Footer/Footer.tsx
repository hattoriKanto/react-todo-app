import React from "react";

import { Filter } from "../Filter/Filter";
import { useFetchContext, useTodoContext } from "../../hooks";

export const Footer: React.FC = () => {
  const { activeTodos, completedTodos, visibleTodos } = useTodoContext();
  const { handleDeleteMany } = useFetchContext();

  const isButtonActive =
    visibleTodos.length >= completedTodos.length &&
    completedTodos.length !== 1 &&
    completedTodos.length !== 0;

  const handleDeleteAllCompleted = () => {
    const ids = completedTodos.map((todo) => todo.id);

    handleDeleteMany(ids);
  };

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">{activeTodos.length} items left</span>

      <Filter />

      <button
        type="button"
        className="todoapp__clear-completed"
        disabled={!isButtonActive}
        onClick={handleDeleteAllCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
