import React, { createContext, useState } from "react";
import { todoContextType, todoProviderType } from "./todoContext.types";
import { Todo } from "../../types/Todo";
import { getPreparedTodos } from "../../utils/getPreparedTodos";
import { FilterOptionsType } from "../../types/FilterOptions";

export const TodoContext = createContext<todoContextType>({
  todos: [],
  processingTodoIds: [],
  newTodoTitle: "",
  tempTodo: null,
  filterOption: FilterOptionsType.All,
  setTodos: () => {},
  setProcessingTodoIds: () => {},
  setNewTodoTitle: () => {},
  setTempTodo: () => {},
  setFilterOption: () => {},
  activeTodos: [],
  completedTodos: [],
  visibleTodos: [],
});

export const TodoProvider: React.FC<todoProviderType> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [processingTodoIds, setProcessingTodoIds] = useState<number[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [tempTodo, setTempTodo] = useState<Todo | null>(null);
  const [filterOption, setFilterOption] = useState<FilterOptionsType>(
    FilterOptionsType.All
  );

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  const visibleTodos = getPreparedTodos(todos, filterOption);

  const todosState: todoContextType = {
    todos,
    processingTodoIds,
    newTodoTitle,
    tempTodo,
    filterOption,
    setTodos,
    setProcessingTodoIds,
    setNewTodoTitle,
    setTempTodo,
    setFilterOption,
    activeTodos,
    completedTodos,
    visibleTodos,
  };

  return (
    <TodoContext.Provider value={todosState}>{children}</TodoContext.Provider>
  );
};
