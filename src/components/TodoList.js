import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>{todo.text}</span>
          {!todo.completed && (
            <input
              type="button"
              value="Complete"
              onClick={() => handleComplete(todo.id)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;