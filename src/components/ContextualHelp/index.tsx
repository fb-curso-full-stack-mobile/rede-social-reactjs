import React, { useEffect, useRef, useState } from "react";

import icQuestion from "../../assets/ic_question.png";
import styles from "./styles.module.css";

type ContextualHelpProps = {
  children: React.ReactNode;
};

export default function ContextualHelp({ children }: ContextualHelpProps) {
  const [helpVisible, setHelpVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>();

  const handleClickOutside = (event: any) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setHelpVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={(ref) => (componentRef.current = ref)}
      className={styles.container}
    >
      <img src={icQuestion} onClick={() => setHelpVisible(true)} />
      {helpVisible && <div>{children}</div>}
    </div>
  );
}
