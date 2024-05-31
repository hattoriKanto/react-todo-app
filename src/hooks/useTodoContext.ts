import { useContext } from 'react';
import { TodoContext } from '../context/todoContext/todoContext';

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      'useTodoContext must be used within a TodoContext.Provider',
    );
  }

  return context;
};
