import Logo from "../assets/code.png";
import "../css/Header.css"
export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="..." />
      <a href="/">Home</a>
    </header>
  );
};
