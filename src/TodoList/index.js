import './TodoList.css';

function TodoList({children}) {
  return(
    <section className="Fondo-lista">
    <ul className="TodoList">
      {children}
    </ul>
    </section>
  )
  }

export { TodoList };