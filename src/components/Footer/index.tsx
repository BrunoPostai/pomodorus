import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro">How does pomodoro work?</Link>
      <Link to="/">
        Pomodorus time manager &copy; {new Date().getFullYear()} - Made with ❤️
      </Link>
    </footer>
  );
}
