import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos}= React.useContext(TodoContext);
    return(
      <header className="TodoCounter">
        <h1 className="title">DAILY TASKS</h1>
      <h2 >You've completed <span>{completedTodos}</span> from <span>{totalTodos}</span> TODOs</h2>
      </header>
    )
  }

export { TodoCounter };