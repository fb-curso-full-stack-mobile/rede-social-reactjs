import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
type ButtonIconTextProps = {
  icon?: any;
  children?: React.ReactNode;
  label: string;
  active?: boolean;
  badgeCount?: number;
  list?: string[];
  onClick?: () => void;
};

export default function ButtonIconText({
  icon,
  label,
  children,
  active,
  badgeCount,
  list,
  onClick,
}: ButtonIconTextProps) {
  const [showList, setShowList] = useState(false);
  const componentRef = useRef<HTMLSpanElement>(null);

  const handleMouseOver = (event: any) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseover", handleMouseOver);
    // document.addEventListener("mouseout", handleClickOutside);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={[styles.container, active ? styles.active : null].join(" ")}
      onClick={onClick}
    >
      {icon ? <img src={icon} /> : null}
      {children ? children : null}
      <label>{label}</label>
      <div>
        {badgeCount ? <span ref={componentRef}>{badgeCount}</span> : null}
        {showList && list && (
          <div className={styles.badgeListItems}>
            {list.map((item, index) => (
              <div key={`like-badge-list-item-${index}`}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
