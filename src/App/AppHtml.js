import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { LeftSection } from '../LeftSection';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppHtml() {
  const {loading,
    error, 
    searchedTodos, 
    toCompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal} = React.useContext(TodoContext)
    return (
        <React.Fragment>
          <TodoCounter />
          <TodoSearch/>
    
          <TodoList>
          {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => toCompleteTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          <LeftSection></LeftSection>
          <CreateTodoButton setOpenModal={setOpenModal} /> 

          {openModal && (<Modal> <TodoForm /></Modal>)}
          </React.Fragment>
      );
}

export { AppHtml}