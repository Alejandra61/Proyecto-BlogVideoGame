import React from "react";

const NavarHeader = (props) => {
  return (
    <>
      <nav className="bg-dark lead fixed-top">
        <ul  className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-white" href=" #">Inicio</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white" href=" #">Video juegos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href=" #">Desarrollos web</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href=" #">Contacto</a>
          </li>
          
            <a href=" #" className={props.className}><i class="fab fa-instagram  text-white"></i></a>
            <a href=" #" className={props.className}><i class="fab fa-github-alt  text-white"></i></a>
            <a href=" #" className={props.className}><i class="fab fa-tiktok  text-white"></i></a>

        </ul>
      </nav>
    </>
  )
}
export default NavarHeader;