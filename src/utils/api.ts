import axios from "axios";

enum ActionsOnMany {
  delete = "delete",
  update = "update",
}

const apiClient = axios.create({
  // http://127.0.0.1:3000
  baseURL: "https://fastify-todo-app-with-db.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllTodos = async () => {
  try {
    const response = await apiClient.get("/todos");

    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to fetch todos:", err);
      throw err.message;
    }
  }
};

export const createOneTodo = async (title: string) => {
  try {
    await apiClient.post("/todos", { title });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to add todo:", err);
      throw err.message;
    }
  }
};

export const deleteOneTodo = async (todoId: number) => {
  try {
    await apiClient.delete(`/todos/${todoId}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to delete todo:", err);
      throw err.message;
    }
  }
};

export const updateOneTodo = async (
  todoId: number,
  option: string | boolean
) => {
  try {
    let key = "completed";
    if (typeof option === "string") {
      key = "title";
    }
    await apiClient.patch(`/todos/${todoId}`, { [key]: option });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to update todo:", err);
      throw err.message;
    }
  }
};

export const updateMany = async (ids: number[], completed: boolean) => {
  try {
    await apiClient.patch(
      `/todos`,
      { ids, completed },
      {
        params: {
          action: ActionsOnMany.update,
        },
      }
    );
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to update todo:", err);
      throw err.message;
    }
  }
};

export const deleteMany = async (ids: number[]) => {
  try {
    await apiClient.delete(`/todos`, {
      params: {
        action: ActionsOnMany.delete,
        ids: ids.join(","),
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to update todo:", err);
      throw err.message;
    }
  }
};
