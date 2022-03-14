import Button from "../../components/Button";
import ContextualHelp from "../../components/ContextualHelp";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import { User } from "../../models/user";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [day, setDay] = useState<string | number>("");
  const [month, setMonth] = useState<string | number>("");
  const [year, setYear] = useState<string | number>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const { request, error, fetching } = useFetch<any>();

  const login = async (data: any) => {
    // navigate("/feed");
    setErrorMessage("");
    if (data.email && data.password) {
      const json = await request("/api/v1/sign-in", "POST", data);
      console.log(json);
      if (json.token) {
        localStorage.setItem("token", json.token);
        navigate("/feed");
      }
    } else {
      setErrorMessage("Preencha suas credenciais.");
    }
  };

  const signup = async (data: any) => {
    const user: User = { ...data };
    user.birthdate = `${day}/$${month}/${year}`;
    setErrorMessage("");
    if (user.name && user.surname && user.email && user.password) {
      const json = await request("/api/v1/sign-up", "POST", user);
      console.log(json);
      if (json.user.id) {
        setSuccessMessage("Cadastro feito com sucesso!");
        setModalOpen(false);
      }
    } else {
      setErrorMessage("Preencha seus dados.");
    }
  };

  const getCurrentMonthShort = () => {
    ``;
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
          <form onSubmit={handleSubmit(login)}>
            <Input
              placeholder="Email"
              type="email"
              register={register}
              name="email"
            />
            <Input
              placeholder="Senha"
              type="password"
              register={register}
              name="password"
            />
            {!modaOpen && (errorMessage || error) ? (
              <div className={styles.errorMessage}>{errorMessage || error}</div>
            ) : null}
            <Button fullWidth type="submit">
              Entrar
            </Button>
            {successMessage ? (
              <div className={styles.successMessage}>
                {successMessage || ""}
              </div>
            ) : null}
          </form>

          <a href="#" onClick={(e) => e.preventDefault()}>
            Esqueceu a senha?
          </a>
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
        <form className={styles.modalForm} onSubmit={handleSubmit(signup)}>
          <div className={styles.modalFormName}>
            <Input placeholder="Nome" register={register} name="name" />
            <div />
            <Input placeholder="Sobrenome" register={register} name="surname" />
          </div>
          <Input
            type="email"
            placeholder="Email"
            register={register}
            name="email"
          />
          <Input
            type="password"
            placeholder="Senha"
            register={register}
            name="password"
          />
          <div className={styles.modalFormBirthdate}>
            <div className={styles.modalFormBirthdateLabel}>
              <label>Data de nascimento</label>
              <ContextualHelp>
                Ao informar sua data de nascimento, você ajuda a garantir que a
                sua experiência na Rede Social seja adequada à sua idade.
              </ContextualHelp>
            </div>
            <div className={styles.modalFormBirthdateSelects}>
              <Select
                options={days}
                defaultValue={new Date().getDate().toString()}
                onSelected={setDay}
              />
              <div />
              <Select
                options={months}
                defaultValue={getCurrentMonthShort()}
                onSelected={setMonth}
              />
              <div />
              <Select
                options={years}
                onSelected={setYear}
                defaultValue={years[0].toString()}
              />
            </div>
          </div>
          {modaOpen && (errorMessage || error) ? (
            <div className={styles.errorMessage}>{errorMessage || error}</div>
          ) : null}
          <Button type="submit" secondary>
            Criar nova conta
          </Button>
        </form>
      </Modal>
    </div>
  );
}
