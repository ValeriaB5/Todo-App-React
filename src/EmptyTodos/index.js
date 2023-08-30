import React from "react";
import "./EmptyTodos.css";
import logo from "../Empty-icon.png"

function EmptyTodos() {
    return (
        <section>
        <p className="Empty-p">Hey! There are no TODOs. <br></br>Please add your first TODO</p>
        <img className="Empty-img" alt="Clock" src={logo} ></img>
        </section>
    )
}

export { EmptyTodos}