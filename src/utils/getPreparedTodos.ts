import { FilterOptionsType } from "../types/FilterOptions";
import { Todo } from "../types/Todo";

export const getPreparedTodos = (
  todos: Todo[],
  filterOption: FilterOptionsType
) => {
  let preparedTodos = todos;

  switch (filterOption) {
    case FilterOptionsType.Active:
      return (preparedTodos = todos.filter((todo) => !todo.completed));
    case FilterOptionsType.Completed:
      return (preparedTodos = todos.filter((todo) => todo.completed));
    default:
      return preparedTodos;
  }
};
