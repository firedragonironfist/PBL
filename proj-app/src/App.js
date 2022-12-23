import React from "react";
import './App.css';
import Nav from './component/Nav.js';

function App() {
  return (
    <body>
    <Nav></Nav>
    <text>Are you safe?
    </text>
    <div class="dropdown">
      <button class="link">Area</button>
      <div class="dropdown-menu">
       <a id='state'>Andhra</a>
       <a id='state'>Karnataka</a> 
      </div>
    </div>
    </body>
    );
}

export default App;
