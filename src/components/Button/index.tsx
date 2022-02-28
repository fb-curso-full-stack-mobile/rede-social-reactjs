import React from "react";
import styles from "./styles.module.css";
type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function Button({
  className,
  children,
  primary,
  secondary,
  fullWidth,
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
    >
      {children}
    </button>
  );
}
