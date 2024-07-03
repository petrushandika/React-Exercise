import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-slate-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            CodeBook
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="https://www.instagram.com/petrushandika"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/petrushandika/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              to="https://open.spotify.com/user/31tfwh7e36cgity6gm7nemfh4c6a?si=1a1d3a9e641b40b7&nd=1&dlsi=c8d5ba9e6d5c4757"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Spotify
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/petrushandika"
              target="_blank"
              className="hover:underline"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
