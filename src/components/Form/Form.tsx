import React, { useState } from "react";

import { ErrorMessages } from "../../types/Messages";
import { ToastOptions } from "../../context";
import { useFetchContext, useToastContext, useTodoContext } from "../../hooks";

type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const Form: React.FC<Props> = ({ inputRef }) => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const { newTodoTitle, setNewTodoTitle } = useTodoContext();
  const { handleAddNewTodo } = useFetchContext();
  const { notify } = useToastContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInputDisabled(true);

    const normalizedTitle = newTodoTitle.trim();
    if (!normalizedTitle) {
      notify(ToastOptions.Error, ErrorMessages.EmptyTitle);
      return;
    }

    handleAddNewTodo(normalizedTitle);
    setIsInputDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodoTitle}
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        ref={inputRef}
        disabled={isInputDisabled}
        onChange={(event) => setNewTodoTitle(event.target.value)}
      />
    </form>
  );
};
