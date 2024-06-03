import React from "react";

export interface FetchContextType {
  handleTodoDelete: (todoId: number) => Promise<void>;
  handleAddNewTodo: (title: string) => Promise<void>;
  handleUpdateTodo: (todoId: number, option: string | boolean) => Promise<void>;
  handleUpdateMany: (ids: number[], completed: boolean) => Promise<void>;
  handleDeleteMany: (ids: number[]) => Promise<void>;
  isTodoLoading: boolean;
}

export interface FetchProviderType {
  children: React.ReactNode;
}
