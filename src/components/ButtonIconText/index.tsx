import styles from "./styles.module.css";
type ButtonIconTextProps = {
  icon: any;
  label: string;
};

export default function ButtonIconText({ icon, label }: ButtonIconTextProps) {
  return (
    <div className={styles.container}>
      <img src={icon} />
      <label>{label}</label>
    </div>
  );
}
