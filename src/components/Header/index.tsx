import UserPhoto from "../UserPhoto";
import icDropdown from "../../assets/ic_dropdown.svg";
import logo from "../../assets/logo_small.svg";
import styles from "./styles.module.css";
import { useAuth } from "../../contexts/auth-context";
// type HeaderProps = {}

export default function Header() {
  const { logout } = useAuth();
  return (
    <div className={styles.container}>
      <img src={logo} />
      <div>
        <UserPhoto small />
        <span>Nome do Usuário</span>
        <img
          style={{ cursor: "pointer" }}
          src={icDropdown}
          onClick={() => logout()}
        />
      </div>
    </div>
  );
}
