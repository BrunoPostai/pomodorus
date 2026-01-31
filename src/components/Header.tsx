import styles from "./Header.module.css";

type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return <h1 className={styles.header}>{children}</h1>;
}
