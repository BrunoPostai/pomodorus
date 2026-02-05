import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a tecnica de pomodoro</a>
      <a href="">
        Pomodorus time manager &copy; {new Date().getFullYear()} - Made with ❤️
      </a>
    </footer>
  );
}
