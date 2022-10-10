import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-[80%] items-center justify-between p-4 bg-purple-300 rounded-br-xl rounded-bl-xl">
      <a className="rounded-lg px-3 py-2">Jared's personal page</a>

      <a
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-400 hover:animation-wiggle"
        href="https://www.github.com/professorjrod"
      >
        Github 👋
      </a>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <a className="rounded-lg px-3 py-2"> Home </a>
        </li>

        <li>
          <a className="rounded-lg px-3 py-2"> Projects </a>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2 grow" href="https://dev.to/jaredm">
            {" "}
            Blog{" "}
          </a>
        </li>
        <li>
          <a
            className="inline-flex items-center rounded-lg px-3 py-2"
            href="https://www.linkedin.com/in/jared-mumaw-9395a6243/"
          >
            LinkedIn <FaExternalLinkAlt className="ml-1" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
