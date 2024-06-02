import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import { useTodoContext } from "../../hooks/useTodoContext";

type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const TodoList: React.FC<Props> = ({ inputRef }) => {
  const { processingTodoIds, visibleTodos } = useTodoContext();

  return (
    <section
      className="todoapp__main"
    >
      {visibleTodos.map((todo) => {
        const isTodoProcessing = processingTodoIds.includes(todo.id);

        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            isShowLoader={isTodoProcessing}
            inputRef={inputRef}
          />
        );
      })}
    </section>
  );
};
