import React from "react";

import { Filter } from "../Filter/Filter";
import { useFetchContext, useTodoContext } from "../../hooks";

export const Footer: React.FC = () => {
  const { todos, activeTodos, completedTodos } = useTodoContext();
  const { handleTodoDelete } = useFetchContext();

  const handleDeleteAllCompleted = () => {
    todos.forEach((todo) => {
      if (todo.completed) {
        handleTodoDelete(todo.id);
      }
    });
  };

  return (
    <footer
      className="todoapp__footer"
      data-cy="Footer"
    >
      <span
        className="todo-count"
        data-cy="TodosCounter"
      >
        {activeTodos.length} items left
      </span>

      <Filter />

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!completedTodos.length}
        onClick={handleDeleteAllCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
