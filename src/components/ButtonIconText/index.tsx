import React from "react";
import styles from "./styles.module.css";
type ButtonIconTextProps = {
  icon?: any;
  children?: React.ReactNode;
  label: string;
  active?: boolean;
  badgeCount?: number;
  onClick?: () => void;
};

export default function ButtonIconText({
  icon,
  label,
  children,
  active,
  badgeCount,
  onClick,
}: ButtonIconTextProps) {
  return (
    <div
      className={[styles.container, active ? styles.active : null].join(" ")}
      onClick={onClick}
    >
      {icon ? <img src={icon} /> : null}
      {children ? children : null}
      <label>{label}</label>
      {badgeCount ? <span>{badgeCount}</span> : null}
    </div>
  );
}
