import styles from "./styles.module.css";
type InputProps = {
  placeholder?: string;
  type?: string;
  className?: string;
};

export default function Input({ placeholder, type, className }: InputProps) {
  return (
    <input
      className={[styles.input, className || ""].join(" ")}
      placeholder={placeholder}
      type={type}
    />
  );
}
