import React from "react";
import icClose from "../../assets/ic_close.png";
import styles from "./styles.module.css";

type ModalProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};

export default function Modal({
  title,
  subtitle,
  children,
  visible,
  onClose,
}: ModalProps) {
  return visible ? (
    <div className={styles.container}>
      <div className={styles.box}>
        {/* Header: título e botão de fechar */}
        <div className={styles.boxTitle}>
          <h1>{title}</h1>
          <img src={icClose} onClick={onClose} />
        </div>

        {/* subtítulo */}
        {subtitle && <div>{subtitle}</div>}

        {/* linha */}
        <hr />
        {/* conteúdo */}
        <div>{children}</div>
      </div>
    </div>
  ) : null;
}
