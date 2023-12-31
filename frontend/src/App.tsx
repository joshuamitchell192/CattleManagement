import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/animals`}>Animals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/treatments`}>Treatments</Link>
              </li>
            </ul>
          <div/>
        </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
