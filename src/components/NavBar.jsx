import React from "react";
const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 navbar-dark corNav scrolled rounded-bottom-4 position-relative">
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mx-auto my-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Meus projetos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="github-logo-navbar"
          width="50px"
          src={props.github}
          alt=""
        />
      </nav>
    </>
  );
};

export default NavBar;
