import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.Navbar}>
        <a className={styles.GoTo} href="">
          Home
        </a>
        <a className={styles.GoTo} href="">
        My projects
        </a>
        <a className={styles.GoTo} href="">
          Contact
        </a>
      </div>
      <a
        href="http://"
        id={styles.zap}
        target="_blank"
        rel="noopener noreferrer"
      >
        Hire me
      </a>
    </header>
  );
};

export default Header;
