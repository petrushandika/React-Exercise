import { useEffect, useState } from "react";
import Logo from "../assets/code.png";
import "../css/Header.css";

export default function Header() {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || "medium"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span onClick={() => setTheme("light")} className="light"></span>
        <span onClick={() => setTheme("medium")} className="medium"></span>
        <span onClick={() => setTheme("dark")} className="dark"></span>
        <span onClick={() => setTheme("gradient")} className="gradient"></span>
      </div>
    </header>
  );
}
