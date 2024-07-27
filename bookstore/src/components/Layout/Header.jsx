import { Link } from "react-router-dom";
import Logo from "../../assets/code.png";
import { MdNightlight } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUserCircle2 } from "react-icons/lu";

export const Header = () => {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div>
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={Logo}
                className="h-8"
                alt="Code"
              />
              <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white">
                Book Store
              </span>
            </Link>
          </div>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  FaQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/"
              className="text-2xl text-black dark:text-white hover:underline"
            >
              <MdNightlight />
            </Link>
            <Link
              to="/"
              className="text-2xl text-black dark:text-white hover:underline"
            >
              <BiSearch />
            </Link>
            <Link
              to="/cart"
              className="text-2xl text-black dark:text-white hover:underline"
            >
              <HiOutlineShoppingBag />
            </Link>
            <Link
              to="/"
              className="text-xl text-black dark:text-white hover:underline"
            >
              <LuUserCircle2 />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
