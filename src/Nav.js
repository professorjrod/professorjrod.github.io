import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
const Nav = () => {
  return (
    <nav>
      <a className="rounded-lg px-3 py-2">Jared's personal page</a>

      <a
        className=" inline-block h-fit w-fit p-2 items-center justify-center rounded-lg bg-violet-400 hover:bg-violet-500"
        href="https://www.github.com/professorjrod"
      >
        Github👋
      </a>

      <ul className="gap-2 text-sm font-medium text-black">
        <li>
          <Link to="/about">
            <a className="rounded-lg px-3 py-2"> About </a>
          </Link>
        </li>

        <li>
          <Link to="/">
            <a className="rounded-lg px-3 py-2 "> Projects </a>
          </Link>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2 grow" href="https://dev.to/jaredm">
            Blog
          </a>
        </li>
        <li>
          <div className="flex">
            <a
              className="flex items-center rounded-lg px-3 py-2 "
              href="https://www.linkedin.com/in/jared-mumaw-9395a6243/"
            >
              LinkedIn
            </a>
            <FaExternalLinkAlt className="m-auto" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
