import styles from "./styles.module.css";
// type SignInProps = {}

export default function SignIn() {
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.description}>
          <h1>rede social</h1>
          <p>Conecte-se com pessoas e compartilhe suas ideias</p>
        </div>
        <div className={styles.form}>
          <input placeholder="Email" type="email" />
          <input placeholder="Senha" type="password" />
          <button>Entrar</button>
          <a href="javascript:void(0)">Esqueceu a senha?</a>
          <hr />
          <button className={styles.buttonCreateAccount}>
            Criar nova conta
          </button>
        </div>
      </div>
      <footer>
        <p>Rede Social © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
