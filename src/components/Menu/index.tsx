import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { RouterLink } from "../RouterLink";

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
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="HOME"
        title="HOME"
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history"
        aria-label="HISTORY"
        title="HISTORY"
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings"
        aria-label="SETTINGS"
        title="SETTINGS"
      >
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="#"
        aria-label="CHANGE THEME"
        title="CHANGE THEME"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </div>
  );
}
