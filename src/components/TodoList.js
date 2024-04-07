import React from 'react';

function TodoList({ todos, handleComplete }) {
  <>
  <h2>Child Component</h2>
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}{' '}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
  </>
}

export default TodoList;
