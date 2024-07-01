import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/code.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 pb-2">
      <Link className="flex items-center gap-3" to="/">
        <img className="w-12" src={Logo} alt="logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="flex gap-3">
        <NavLink className="hover:bg-neutral-200 p-2 rounded" to="/" end>
          Home
        </NavLink>
        <NavLink className="hover:bg-neutral-200 p-2 rounded" to="/cart">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart">
        <span className="font-bold">Cart: 2</span>
      </Link>
    </header>
  );
}
