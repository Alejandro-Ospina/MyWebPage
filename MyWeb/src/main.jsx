import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const NavBar = () => {
  return (
    <nav>
      <h3>Un Developer</h3>
      <ul>
        <li>
          ¿Quién soy?
        </li>
        <li>
          Mis proyectos
        </li>
        <li>
          Trayectoria
        </li>
        <li>
          Contacto
        </li>
      </ul>
    </nav>
  );
}

root.render(
  <React.Fragment>
    <NavBar></NavBar>
  </React.Fragment>
)