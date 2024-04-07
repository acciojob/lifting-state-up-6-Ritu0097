import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  let handleCompleteMock;
  let todos;

  beforeEach(() => {
    handleCompleteMock = jest.fn();
    todos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a todo app', completed: false }
    ];
  });

  test('should mark a todo as completed when the complete button is clicked', () => {
    render(<TodoList todos={todos} handleComplete={handleCompleteMock} />);

    fireEvent.click(screen.getByText('Complete', { exact: false }));

    expect(handleCompleteMock).toHaveBeenCalledTimes(1);
  });
});
