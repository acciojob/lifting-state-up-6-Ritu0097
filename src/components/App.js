import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id? {...todo, completed:!todo.completed } : todo))
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;