import React from 'react';
import { useTodoContext } from '../../hooks/useTodoContext';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

export const Form: React.FC<Props> = ({ onSubmit, inputRef }) => {
  const { newTodoTitle, isInputDisabled, setNewTodoTitle } = useTodoContext();

  return (
    <form onSubmit={onSubmit}>
      <input
        data-cy="NewTodoField"
        type="text"
        value={newTodoTitle}
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        ref={inputRef}
        disabled={isInputDisabled}
        onChange={event => setNewTodoTitle(event.target.value)}
      />
    </form>
  );
};
