import { Link } from "react-router-dom";
import { BiLogoInstagram, BiLogoWhatsapp, BiLogoGithub } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-primary dark:text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black dark:text-gray-300 sm:text-center">
            © 2023{" "}
            <Link
              to="https://flowbite.com/"
              className="hover:underline text-black dark:text-gray-300"
            >
              Book Store
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/"
              className="text-2xl hover:icon-gradient"
            >
              <BiLogoInstagram className="icon-gradient" />
            </Link>
            <Link
              to="/"
              className="text-2xl hover:icon-gradient"
            >
              <BiLogoWhatsapp className="icon-gradient" />
            </Link>
            <Link
              to="/cart"
              className="text-2xl hover:icon-gradient"
            >
              <BiLogoGithub className="icon-gradient" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
