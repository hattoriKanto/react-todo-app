import React from "react";
import { Todo } from "../../types/Todo";
import { FilterOptionsType } from "../../types/FilterOptions";

export interface todoContextType {
  todos: Todo[];
  processingTodoIds: number[];
  newTodoTitle: string;
  tempTodo: Todo | null;
  filterOption: FilterOptionsType;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setProcessingTodoIds: React.Dispatch<React.SetStateAction<number[]>>;
  setNewTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  setTempTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
  setFilterOption: React.Dispatch<React.SetStateAction<FilterOptionsType>>;
  activeTodos: Todo[];
  completedTodos: Todo[];
  visibleTodos: Todo[];
}

export interface todoProviderType {
  children: React.ReactNode;
}
