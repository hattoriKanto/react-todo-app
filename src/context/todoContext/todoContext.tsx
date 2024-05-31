import React, { createContext, useState } from 'react';
import { todoContextType, todoProviderType } from './todoContext.types';
import { Todo } from '../../types/Todo';

export const TodoContext = createContext<todoContextType>({
  todos: [],
  processingTodoIds: [],
  isInputDisabled: false,
  newTodoTitle: '',
  tempTodo: null,
  setTodos: () => {},
  setProcessingTodoIds: () => {},
  setIsInputDisabled: () => {},
  setNewTodoTitle: () => {},
  setTempTodo: () => {},
});

export const TodoProvider: React.FC<todoProviderType> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [processingTodoIds, setProcessingTodoIds] = useState<number[]>([]);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [tempTodo, setTempTodo] = useState<Todo | null>(null);

  const todosState: todoContextType = {
    todos,
    processingTodoIds,
    isInputDisabled,
    newTodoTitle,
    tempTodo,
    setTodos,
    setProcessingTodoIds,
    setIsInputDisabled,
    setNewTodoTitle,
    setTempTodo,
  };

  return (
    <TodoContext.Provider value={todosState}>{children}</TodoContext.Provider>
  );
};
