import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-4">
      <label className="mr-2 font-semibold">Theme:</label>
      <select
        className="p-2 border rounded-md dark:bg-red-700 dark:text-white"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
