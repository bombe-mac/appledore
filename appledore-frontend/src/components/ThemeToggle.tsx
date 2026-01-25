import { useTheme } from "../theme/ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-slate-100 shadow-sm hover:shadow transition"
    >
      <span className="text-lg" aria-hidden>
        {isDark ? "☀️" : "🌙"}
      </span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
};
