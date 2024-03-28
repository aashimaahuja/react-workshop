import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useHttp } from './useHttp';

export const useTodoList = () => {
  const [todos, setTodos] = useState([]);
  const { isLoading, get, post } = useHttp();
  const [activeTab, setActiveTab] = useState('allTodos');
  const [input, setInput] = useState('');

  const fetchAllTodos = useCallback(async () => {
    const todos = await get('/todos/');
    setTodos(todos);
    setActiveTab('allTodos');
  }, [get]);

  const fetchTodos = async () => {
    const todos = await get('/user/2/todos');
    setTodos(todos);
    setActiveTab('userTodos');
  };

  const addTodo = useCallback(async () => {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: {
        id: todos.length + 1,
        title: input,
        userId: 1,
      },
    };
    const newTodo = await post('/todos', options);
    setTodos([...todos, newTodo]);
    setInput('');
  }, [todos, input, post]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);

  return {
    isLoading,
    activeTab,
    todos,
    input,
    addTodo,
    fetchAllTodos,
    fetchTodos,
    onInputChange,
  };
};
