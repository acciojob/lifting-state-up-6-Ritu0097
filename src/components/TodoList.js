import React from 'react';
function TodoList({ todos, handleComplete }) {
  const handleClick = (id) => {
    handleComplete(id);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}{' '}
          {!todo.completed && (
            <button onClick={() => handleClick(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
