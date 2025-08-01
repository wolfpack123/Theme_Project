import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { setTheme } from "../features/themeSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value;
    dispatch(setTheme(newTheme));
    document.body.className = `transition-theme ${newTheme}`;
  };

  return (
    <header className="fixed w-full p-4 shadow bg-white dark:bg-gray-800 z-50 flex justify-between items-center">
      <h1 className="font-bold text-xl">Redux Themed App</h1>
      <select value={theme} onChange={handleChange} className="ml-4 p-2 border rounded">
        <option value="theme-light">Light</option>
        <option value="theme-dark">Dark</option>
        <option value="theme-funky">Funky</option>
      </select>
    </header>
  );
};

export default Header;
