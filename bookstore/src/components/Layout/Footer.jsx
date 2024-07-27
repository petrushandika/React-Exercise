import { Link } from "react-router-dom";
import { BiLogoInstagram, BiLogoWhatsapp, BiLogoGithub } from "react-icons/bi";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link
                to="https://flowbite.com/"
                className="hover:underline"
              >
                Book Store
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Link
                to="/"
                className="text-2xl text-black dark:text-white hover:underline"
              >
                <BiLogoInstagram />
              </Link>
              <Link
                to="/"
                className="text-2xl text-black dark:text-white hover:underline"
              >
                <BiLogoWhatsapp />
              </Link>
              <Link
                to="/cart"
                className="text-2xl text-black dark:text-white hover:underline"
              >
                <BiLogoGithub />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
