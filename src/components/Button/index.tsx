import React from "react";
import styles from "./styles.module.css";
type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
};

export default function Button({
  className,
  children,
  primary,
  secondary,
  fullWidth,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={[
        styles.button,
        secondary ? styles.buttonSecondary : "",
        fullWidth ? styles.buttonFullWidth : "",
        className || "",
      ].join(" ")}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
