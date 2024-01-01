import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
const Nav = () => {
  const url = useLocation();
  return (
    <nav>
      <span className="title">Jared's personal page</span>

      <div className="flex items-center space-x-5">
        <Link to="/">
          <span
            className={
              "rounded-lg px-3 text-sm font-medium py-2" +
              (url.pathname === "/" ? " font-bold bg-purple-500" : "")
            }
          >
            About
          </span>
        </Link>
        <Link to="/projects">
          <span
            className={
              "rounded-lg px-3 text-sm font-medium py-2" +
              (url.pathname === "/projects" ? " font-bold bg-purple-500" : "")
            }
          >
            Projects
          </span>
        </Link>
      </div>

      <ul className="gap-2 text-sm font-medium text-black">
        <li>
          <a
            className="rounded-lg px-3 py-2 grow"
            href="https://www.github.com/professorjrod"
            target="_blank"
            rel="noreferrer"
          >
            Github👋
          </a>
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
