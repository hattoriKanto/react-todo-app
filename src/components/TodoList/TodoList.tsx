import React from 'react';

import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import { useTodoContext } from '../../hooks/useTodoContext';

type Props = {
  todos: Todo[];
  inputRef: React.RefObject<HTMLInputElement>;
};

export const TodoList: React.FC<Props> = ({ todos, inputRef }) => {
  const { processingTodoIds } = useTodoContext();
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => {
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
