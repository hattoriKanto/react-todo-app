import React from 'react';
import { Todo } from '../../types/Todo';

export interface todoContextType {
  todos: Todo[];
  processingTodoIds: number[];
  isInputDisabled: boolean;
  newTodoTitle: string;
  tempTodo: Todo | null;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setProcessingTodoIds: React.Dispatch<React.SetStateAction<number[]>>;
  setIsInputDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setNewTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  setTempTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}

export interface todoProviderType {
  children: React.ReactNode;
}
