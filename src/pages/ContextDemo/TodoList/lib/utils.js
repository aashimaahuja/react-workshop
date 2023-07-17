export const getInitialList = () => [
  {
    id: 1,
    name: 'Wash clothes',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Buy groceries',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'Complete training',
    isCompleted: false,
  },
  {
    id: 4,
    name: 'House Cleaning',
    isCompleted: true,
  },
  {
    id: 5,
    name: 'Watering plants',
    isCompleted: true,
  },
];

export const addItem = (todos, name) => [
  { id: todos.length + 1, name: name, isCompleted: false },
  ...todos,
];

export const deleteItem = (todos, id) => todos.filter((item) => item.id !== id);

export const updateItem = (todos, id, value) =>
  todos.map((item) => {
    if (item.id === id) return { ...item, ...value };
    return item;
  });
