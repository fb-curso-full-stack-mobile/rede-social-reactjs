import UserPhoto from "../UserPhoto";
import icDropdown from "../../assets/ic_dropdown.svg";
import logo from "../../assets/logo_small.svg";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
// type HeaderProps = {}

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={logo} />
      <div>
        <UserPhoto small />
        <span>Nome do Usuário</span>
        <img
          style={{ cursor: "pointer" }}
          src={icDropdown}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
