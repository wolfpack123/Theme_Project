import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { useAppSelector } from "./hooks/useAppSelector";

const App = () => {
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    document.body.className = `transition-theme ${theme}`;
  }, [theme]);

  return (
  <Router>
  <Header />

  {theme === "theme-dark" && (
    <aside className="fixed left-0 top-16 h-full w-52 bg-gray-800 text-white p-4 z-40">
      <p className="font-bold mb-4">Menu</p>
      <Link to="/" className="block mb-2 hover:text-gray-300">Home</Link>
      <Link to="/about" className="block mb-2 hover:text-gray-300">About</Link>
      <Link to="/contact" className="block mb-2 hover:text-gray-300">Contact</Link>
    </aside>
  )}

  <div
    className={`min-h-screen ${
      theme === "theme-dark" ? "pl-52 pt-16 w-full" : "pt-24 w-full"
    } bg-gray-50 dark:bg-gray-900`}
  >
    <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg w-full:px-8">
      {theme !== "theme-dark" && (
        <nav className="mb-6 flex gap-4">
          <Link to="/" className="text-blue-500">Home</Link>
          <Link to="/about" className="text-blue-500">About</Link>
          <Link to="/contact" className="text-blue-500">Contact</Link>
        </nav>
      )}

      <main className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  </div>

  <footer className="mt-12 text-center text-sm text-gray-500 px-4 py-6">
    Hipster<br />
  </footer>
</Router>

  );
};

export default App;
