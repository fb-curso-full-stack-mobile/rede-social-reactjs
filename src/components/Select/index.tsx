import styles from "./styles.module.css";

type SelectProps = {
  options: string[] | number[];
  className?: string;
  defaultValue?: string;
  onSelected?: (item: string | number) => void;
};

export default function Select({
  options,
  className,
  defaultValue,
  onSelected,
}: SelectProps) {
  const handleOnSelected = (item: string | number) => {
    if (onSelected) {
      onSelected(item);
    }
  };

  return (
    <select
      className={[styles.select, className].join(" ")}
      onChange={(e) => handleOnSelected(e.target.value)}
    >
      {options.map((item, index) => (
        <option
          key={`option-${item}-${index}`}
          value={item}
          defaultValue={defaultValue}
        >
          {item}
        </option>
      ))}
    </select>
  );
}
