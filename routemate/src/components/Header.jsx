import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/code.png";
import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Code Logo" />
        <span>Routemate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className={"link"}>
          Home
        </NavLink>
        <NavLink to="/products" className={"link"}>
          Products
        </NavLink>
        <NavLink to="/contact" className={"link"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
