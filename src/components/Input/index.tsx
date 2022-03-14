import { FieldValues, UseFormRegister } from "react-hook-form";

import styles from "./styles.module.css";
type InputProps = {
  placeholder?: string;
  type?: string;
  className?: string;
  register?: UseFormRegister<FieldValues>;
  name?: string;
};

export default function Input({
  placeholder,
  type,
  className,
  register,
  name,
}: InputProps) {
  const registerProps = register && name ? { ...register(name) } : {};
  return (
    <input
      className={[styles.input, className || ""].join(" ")}
      placeholder={placeholder}
      type={type}
      {...registerProps}
    />
  );
}
