import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.Navbar}>
        <a className={styles.GoTo} href="">
          Home
        </a>
        <a className={styles.GoTo} href="">
          Sobre
        </a>
        <a className={styles.GoTo} href="">
          Meus Trabalhos
        </a>
        <a className={styles.GoTo} href="">
          Contato
        </a>
      </div>
      <a
        href="http://"
        id={styles.zap}
        target="_blank"
        rel="noopener noreferrer"
      >
        Me contrate
      </a>
    </header>
  );
};

export default Header;
