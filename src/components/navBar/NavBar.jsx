import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    // Navbar com efeito customizado + Bootstrap classes
    <nav className={`${styles.navEfect} navbar navbar-expand-lg bg-dark`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Menu de navegação principal */}
        <div className={`${styles.estilo} collapse navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            {/* Item: Home */}
            <li className="nav-item">
              <a className="nav-link text-white text-decoration-none" href="#">
                Home
              </a>
            </li>

            {/* Item: Sobre */}
            <li className="nav-item">
              <a className="nav-link text-white text-decoration-none" href="#">
                Sobre
              </a>
            </li>

            {/* Item: Projetos */}
            <li className="nav-item">
              <a className="nav-link text-white text-decoration-none" href="#">
                Projetos
              </a>
            </li>

            {/* Item: Contato */}
            <li className="nav-item">
              <a className="nav-link text-white text-decoration-none" href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Botão "Me contrate" com estilo customizado */}
        <div className="d-flex justify-content-center align-items-center">
          <button className={styles.button}>Me contrate</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
