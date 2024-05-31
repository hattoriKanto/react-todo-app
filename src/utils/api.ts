import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fastify-todo-app-with-db.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllTodos = async () => {
  try {
    const response = await apiClient.get('/todos');

    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error('Failed to fetch todos:', err);
      throw err.message;
    }
  }
};

export const createOneTodo = async (title: string) => {
  try {
    await apiClient.post('/todos', { title });
  } catch (err) {
    if (err instanceof Error) {
      console.error('Failed to add todo:', err);
      throw err.message;
    }
  }
};

export const deleteOneTodo = async (todoId: number) => {
  try {
    await apiClient.delete(`/todos/${todoId}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Failed to delete todo:', err);
      throw err.message;
    }
  }
};

export const updateOneTodo = async (
  todoId: number,
  option: string | boolean,
) => {
  try {
    let key = 'completed';
    if (typeof option === 'string') {
      key = 'title';
    }
    await apiClient.patch(`/todos/${todoId}`, { [key]: option });
  } catch (err) {
    if (err instanceof Error) {
      console.error('Failed to update todo:', err);
      throw err.message;
    }
  }
};
