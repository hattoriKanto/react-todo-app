import React from "react";

import { Form } from "../Form/Form";
import classNames from "classnames";
import { useFetchContext, useTodoContext } from "../../hooks";

type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const Header: React.FC<Props> = ({ inputRef }) => {
  const { todos, activeTodos, completedTodos } = useTodoContext();
  const { handleUpdateTodo } = useFetchContext();

  const isButtonActive = todos.length === completedTodos.length;

  const handleChangeStatus = () => {
    if (activeTodos.length !== 0) {
      activeTodos.forEach((todo) => handleUpdateTodo(todo.id, !todo.completed));
    } else {
      completedTodos.forEach((todo) =>
        handleUpdateTodo(todo.id, !todo.completed)
      );
    }
  };

  return (
    <header className="todoapp__header">
      {!!todos.length && (
        <button
          type="button"
          className={classNames("todoapp__toggle-all", {
            active: isButtonActive,
          })}
          data-cy="ToggleAllButton"
          onClick={handleChangeStatus}
        />
      )}

      <Form inputRef={inputRef} />
    </header>
  );
};
