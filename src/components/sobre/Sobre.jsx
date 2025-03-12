import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={styles.Conteudo}>
      <div className={styles.Texto}>
        <h1>
          Hello <span id={styles.vermeio}>World</span>
        </h1>
        <h3>
          I’m Bruno
          <span id={styles.vermeio}> FullStack Developer. </span>
        </h3>
      </div>
      <div className={styles.Profile}>
        <img
          src="https://i.pinimg.com/736x/5c/71/24/5c71248b8a38abd3210f2a656f0a0bbe.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sobre;
