import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Cambiar tema claro/oscuro"
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-700 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      <span>{isDark ? "Oscuro" : "Claro"}</span>
    </button>
  );
}

export default ThemeToggle;