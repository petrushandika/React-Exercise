import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to={"/"}>&copy; Copyright By Petrus Handika</Link>
    </footer>
  );
}
