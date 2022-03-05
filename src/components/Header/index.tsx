import UserPhoto from "../UserPhoto";
import icDropdown from "../../assets/ic_dropdown.svg";
import logo from "../../assets/logo_small.svg";
import styles from "./styles.module.css";
// type HeaderProps = {}

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <div>
        <UserPhoto small />
        <span>Nome do Usuário</span>
        <img src={icDropdown} />
      </div>
    </div>
  );
}
