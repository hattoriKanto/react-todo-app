import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Todo } from "../../types/Todo";
import { useFetchContext } from "../../hooks/useFetchContext";

type Props = {
  todo: Todo;
  isShowLoader: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export const TodoItem: React.FC<Props> = ({ todo, isShowLoader, inputRef }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const { handleTodoDelete, handleUpdateTodo } = useFetchContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const normalizedTitle = newTitle.trim();

    if (normalizedTitle === todo.title) {
      setIsEditing(false);

      return;
    }

    if (!normalizedTitle) {
      if (handleTodoDelete) {
        handleTodoDelete(todo.id);
      }

      return;
    }

    if (handleUpdateTodo) {
      try {
        handleUpdateTodo(todo.id, normalizedTitle);
        setIsEditing(false);
      } catch (err) {
        if (inputRef) {
          inputRef.current?.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [isEditing, inputRef]);

  return (
    <div
      className={classNames("todo", { completed: todo.completed })}
    >
      <label
        aria-label="Todo status"
        className="todo__status-label"
      >
        <input
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          onChange={() => {
            if (handleUpdateTodo) {
              handleUpdateTodo(todo.id, !todo.completed);
            }
          }}
        />
      </label>

      {!isEditing && (
        <>
          <span
            className="todo__title"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </span>

          <button
            type="button"
            className="todo__remove"
            onClick={() => {
              if (handleTodoDelete) {
                handleTodoDelete(todo.id);
              }
            }}
          >
            ×
          </button>
        </>
      )}

      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo__title-field"
            placeholder="Empty todo will be deleted"
            value={newTitle}
            ref={inputRef}
            onChange={(event) => setNewTitle(event.target.value)}
            onBlur={handleSubmit}
            onKeyUp={(event) => {
              if (event.key === "Escape") {
                setIsEditing(false);
              }
            }}
          />
        </form>
      )}

      <div
        className={classNames("modal overlay", { "is-active": isShowLoader })}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
