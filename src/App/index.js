import React from 'react';
import { AppHtml } from './AppHtml';
import { TodoProvider } from '../TodoContext';

function App() {//poninendo el provider a AppHtml, todos sus hijos tienen acceso a las propiedades del context
  
  return (
    <TodoProvider>
      <AppHtml /> 
    </TodoProvider>
  )
}

export default App;
