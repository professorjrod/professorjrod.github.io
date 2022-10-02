import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-3xl items-center justify-between p-4 bg-slate-50 rounded-xl">
      <a className="rounded-lg px-3 py-2">Jared's personal page</a>

      <a
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:animation-wiggle"
        href="/"
      >
        👋
      </a>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <a className="rounded-lg px-3 py-2"> Home </a>
        </li>

        <li>
          <a className="rounded-lg px-3 py-2"> Projects </a>
        </li>

        <li>
          <a
            className="inline-flex items-center rounded-lg px-3 py-2"
            href=""
            target="_blank"
          >
            LinkedIn <FaExternalLinkAlt className="ml-1" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
