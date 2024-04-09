import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // Initialize todos state
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Deploy the app', completed: false }
  ]);

  // Function to handle marking a todo as completed
  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  // Render TodoList component and pass todos and handleComplete as props
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
