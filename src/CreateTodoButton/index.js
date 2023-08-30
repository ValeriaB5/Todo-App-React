import React from 'react'
import './CreateTodoButton.css';

// {} es para escribir codido JS   -----en setOpenModal, esa arrow es una forma de actualizar estado
function CreateTodoButton({ setOpenModal }) {
  return (
    <button
    className="CreateTodoButton"
    onClick={
      () => {
        setOpenModal(state => !state);
      }
    }
  >Add a TODO here</button>
);
}

export { CreateTodoButton }