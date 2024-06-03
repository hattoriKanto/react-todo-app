import React from "react";

import { Form } from "../Form/Form";
import classNames from "classnames";
import { useFetchContext, useTodoContext } from "../../hooks";

type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const Header: React.FC<Props> = ({ inputRef }) => {
  const { visibleTodos, activeTodos, completedTodos } = useTodoContext();
  const { handleUpdateMany } = useFetchContext();

  const isButtonActive = visibleTodos.length === completedTodos.length;

  const handleChangeStatus = () => {
    if (activeTodos.length !== 0) {
      const ids = activeTodos.map((todo) => todo.id);
      const completed = true;

      handleUpdateMany(ids, completed);
    } else {
      const ids = completedTodos.map((todo) => todo.id);
      const completed = false;

      handleUpdateMany(ids, completed);
    }
  };

  return (
    <header className="todoapp__header">
      {!!visibleTodos.length && (
        <button
          type="button"
          className={classNames("todoapp__toggle-all", {
            active: isButtonActive,
          })}
          onClick={handleChangeStatus}
        />
      )}

      <Form inputRef={inputRef} />
    </header>
  );
};
