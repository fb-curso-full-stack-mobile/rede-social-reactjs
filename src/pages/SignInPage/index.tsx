import Button from "../../components/Button";
import ContextualHelp from "../../components/ContextualHelp";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import styles from "./styles.module.css";
import { useState } from "react";
// type SignInProps = {}

const days = Array.from({ length: 31 }, (_, day) => day + 1);
const months = Array.from({ length: 12 }, (_, monthNumber) => {
  const date = new Date(0, monthNumber);
  const month = date
    .toLocaleDateString("pt-BR", { month: "short" })
    .replace(".", "");
  return month.charAt(0).toUpperCase() + month.slice(1);
});
const years = Array.from({ length: 120 }, (_, val) => {
  return new Date().getFullYear() - val;
});

export default function SignIn() {
  const [modaOpen, setModalOpen] = useState(false);

  const getCurrentMonthShort = () => {
    const month = new Date()
      .toLocaleDateString("pt-BR", { month: "short" })
      .replace(".", "");
    return month.charAt(0).toUpperCase() + month.slice(1);
  };

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
          <div className={styles.modalFormBirthdate}>
            <div className={styles.modalFormBirthdateLabel}>
              <label>Data de nascimento</label>
              <ContextualHelp>
                Ao informar sua data de nascimento, você ajuda a garantir que a
                sua experiência na Rede Social seja adequada à sua idade.
              </ContextualHelp>
            </div>
            <div className={styles.modalFormBirthdateSelects}>
              <Select options={days} selected={new Date().getDate()} />
              <div />
              <Select options={months} selected={getCurrentMonthShort()} />
              <div />
              <Select options={years} />
            </div>
          </div>
          <Button secondary>Criar nova conta</Button>
        </form>
      </Modal>
    </div>
  );
}
