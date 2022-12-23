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
        <div class="dropdown-links">
        <a href="proj-app\src\component\page.html">Andhra Pradesh</a>
        <a href="proj-app\src\component\page.html">Arunachal Pradesh</a>
        <a>Assam</a>
        <a>Bihar</a>
        <a>Chhattisgarh</a>
        <a>Goa</a>
        <a>Gujarat</a>
        <a>Haryana</a>
        <a>Himachal Pradesh</a>
        <a>Jharkhand</a>
        <a>Karnataka</a>
        <a>Kerala</a>
        <a>Madhya Pradesh</a>
        <a>Maharashtra</a>
        <a>Manipur</a>
        <a>Meghalaya</a>
        <a>Mizoram</a>
        <a>Nagaland</a>
        <a>Odisha</a>
        <a>Punjab</a>
        <a>Rajasthan</a>
        <a>Sikkim</a>
        <a>Tamil Nadu</a>
        <a>Telangana</a>
        <a>Tripura</a>
        <a>Uttar Pradesh</a>
        <a>Uttarakhand</a>
        <a>West Bengal</a>

        </div>
      </div>
    </div>
    </body>
    );
}

export default App;
