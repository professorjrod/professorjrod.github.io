import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
const Nav = () => {
  return (
    <nav>
      <span className="rounded-lg px-3 py-2">Jared's personal page</span>
      <a
        className=" inline-block h-fit w-fit p-2 ml-auto mr-autp rounded-lg bg-violet-400 hover:bg-violet-500"
        href="https://www.github.com/professorjrod"
        target="_blank"
        rel="noreferrer"
      >
        Github👋
      </a>
      <ul className="gap-2 text-sm font-medium text-black">
        <li>
          <Link to="/">
            <span className="rounded-lg px-3 py-2"> About </span>
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <span className="rounded-lg px-3 py-2 "> Projects </span>
          </Link>
        </li>
        <li>
          <a
            className="rounded-lg px-3 py-2 grow"
            href="https://dev.to/jaredm"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <div className="flex">
            <a
              className="flex items-center rounded-lg px-3 py-2 "
              href="https://www.linkedin.com/in/jared-mumaw-9395a6243/"
              target="_blank"
              rel="noreferrer"
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
