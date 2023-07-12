import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import AlanTuringHistoria from './AlanTuring';
import AlanTuringEstudios from './AlanTuringEstudios';
import AlanTuringLogros from './AlanTuringLogros';

const Inicio = () => {
  return (
    <div>
      <h1>Indice</h1>
      <br></br>
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/AlanTuringHistoria">Historia</Link>
            </li>
            <li>
              <Link to="/AlanTuringEstudios">Estudios</Link>
            </li>
            <li>
              <Link to="/AlanTuringLogros">Logros</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/AlanTuringHistoria" element={<AlanTuringHistoria />} />

          <Route path="/AlanTuringEstudios" element={<AlanTuringEstudios />} />

          <Route path="/AlanTuringLogros" element={<AlanTuringLogros />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Inicio;
