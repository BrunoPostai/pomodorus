import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">How does pomodoro work?</RouterLink>
      <RouterLink href="/">
        Pomodorus time manager &copy; {new Date().getFullYear()} - Made with ❤️
      </RouterLink>
    </footer>
  );
}
