import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input type={type} id={id} {...rest} className={styles.input}/>
    </>
  );
}
