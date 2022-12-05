import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiReact,
  SiRubyonrails,
  SiGit,
  SiPostgresql,
  SiJest,
} from "react-icons/si";

const Skills = () => {
  // SiJavascript SiTypescript SiRuby SiReact SiRubyonrails SiGit SiPostgresql SiJest
  return (
    <div className="skills my-4">
      <h2 className="text-center">Technologies used</h2>
      <hr className="h-[1.5px] w-[50%] m-auto bg-black" />
      <div className="technology-stack text-slate-500 ">
        <hr />
        <div className="p-2 shadow-md rounded-lg">
          <SiJavascript />
        </div>
        <div className="p-2 shadow-md rounded-lg">
          <SiTypescript />
        </div>
        <div className="p-2 shadow-md rounded-lg">
          <SiRuby />
        </div>
        <div className="p-2 shadow-md rounded-lg">
          <SiReact />
        </div>
        <div className="p-2 shadow-md rounded-lg">
          <SiRubyonrails />
        </div>
        <div className="p-2 shadow-md rounded-lg">
          <SiGit />
        </div>
        <div className="p-2 shadow-md rounded-lg">
          <SiPostgresql />
        </div>
        <div className="p-2 shadow-md rounded-lg">
          <SiJest />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Skills;
