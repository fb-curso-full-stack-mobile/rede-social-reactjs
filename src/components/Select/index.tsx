import styles from "./styles.module.css";

type SelectProps = {
  options: string[] | number[];
  selected?: string | number;
  className?: string;
};

export default function Select({ options, selected, className }: SelectProps) {
  return (
    <select className={[styles.select, className].join(" ")}>
      {options.map((item, index) => (
        <option key={`option-${item}-${index}`} selected={item === selected}>
          {item}
        </option>
      ))}
    </select>
  );
}
