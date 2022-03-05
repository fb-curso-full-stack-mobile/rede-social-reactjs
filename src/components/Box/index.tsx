import React from "react";
import styles from "./styles.module.css";
type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Box({ children, className }: BoxProps) {
  return (
    <div className={[styles.container, className || ""].join(" ")}>
      {children}
    </div>
  );
}
