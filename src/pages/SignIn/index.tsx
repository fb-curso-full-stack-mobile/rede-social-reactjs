import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import styles from "./styles.module.css";
import { useState } from "react";
// type SignInProps = {}

export default function SignIn() {
  const [modaOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.description}>
          <h1>rede social</h1>
          <p>Conecte-se com pessoas e compartilhe suas ideias</p>
        </div>
        <div className={styles.form}>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button fullWidth>Entrar</Button>
          <a href="javascript:void(0)">Esqueceu a senha?</a>
          <hr />
          <Button secondary onClick={() => setModalOpen(true)}>
            Criar nova conta
          </Button>
        </div>
      </div>
      <footer>
        <p>Rede Social © {new Date().getFullYear()}</p>
      </footer>
      <Modal
        title="Cadastre-se"
        subtitle="É rápido e fácil."
        visible={modaOpen}
        onClose={() => setModalOpen(false)}
      >
        <form className={styles.modalForm}>
          <div className={styles.modalFormName}>
            <Input placeholder="Nome" />
            <div />
            <Input placeholder="Sobrenome" />
          </div>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button secondary>Criar nova conta</Button>
        </form>
      </Modal>
    </div>
  );
}
