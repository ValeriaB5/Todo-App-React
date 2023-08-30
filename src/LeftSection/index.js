import React from 'react';
import './LeftSection.css';
import logo from '../TodoIcon.png';


function LeftSection() {
  return (
    <section className="Fondo-Add">
      <img className="taskIMG" alt="Tasks" src={logo}></img>
      
      
    </section>
    
  )
}

export { LeftSection }