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
        <form>
          <a type= "button" id='state' href="PBL\proj-app\src\component\samplepage.js">Andhra</a>
          <a id='state'>Karnataka</a>
        </form>
       {/* <a id='state' href="https://www.google.com/">Andhra</a>
       <a id='state'>Karnataka</a>  */}
      </div>
    </div>
    </body>
    );
}

export default App;
