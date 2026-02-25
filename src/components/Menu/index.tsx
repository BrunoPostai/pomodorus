import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Don't follow the link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <Link className={styles.menuLink} to="/" aria-label="HOME" title="HOME">
        <HouseIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to="/history"
        aria-label="HISTORY"
        title="HISTORY"
      >
        <HistoryIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to="/settings"
        aria-label="SETTINGS"
        title="SETTINGS"
      >
        <SettingsIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to="#"
        aria-label="CHANGE THEME"
        title="CHANGE THEME"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </Link>
    </div>
  );
}
