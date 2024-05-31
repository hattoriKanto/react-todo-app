import React from 'react';

import { Form } from '../Form/Form';
import classNames from 'classnames';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  isTodosEmpty: boolean;
  isButtonActive: boolean;
  onChangeStatus: () => void;
};

export const Header: React.FC<Props> = ({
  onSubmit,
  inputRef,
  isTodosEmpty,
  isButtonActive,
  onChangeStatus,
}) => {
  return (
    <header className="todoapp__header">
      {!isTodosEmpty && (
        <button
          type="button"
          className={classNames('todoapp__toggle-all', {
            active: isButtonActive,
          })}
          data-cy="ToggleAllButton"
          onClick={onChangeStatus}
        />
      )}

      <Form
        onSubmit={onSubmit}
        inputRef={inputRef}
      />
    </header>
  );
};
