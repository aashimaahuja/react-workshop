import { useState, useCallback, useEffect } from 'react';
import { useHttp } from './useHttp';

export const useTodoList = () => {
  const { isLoading, get, post } = useHttp(
    'https://jsonplaceholder.typicode.com',
  );
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('userTodos');
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const fetchTodos = useCallback(async () => {
    setActiveTab('userTodos');
    const todos = await get('/user/1/todos/');
    setTodos(todos);
  }, [get]);

  const fetchAllTodos = useCallback(async () => {
    setActiveTab('allTodos');
    const todos = await get('/todos/');
    setTodos(todos);
  }, [get]);

  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);

  const addTodo = useCallback(async () => {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: {
        completed: false,
        id: todos.length + 1,
        title: input,
        userId: 1,
      },
    };

    const newTodo = await post('/todos', options);
    setTodos([...todos, newTodo]);
    setInput('');
  }, [todos, input, post]);

  return {
    isLoading,
    todos,
    input,
    addTodo,
    fetchAllTodos,
    fetchTodos,
    activeTab,
    handleInputChange,
  };
};
