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
        <Skill icon={<SiJavascript />} text="JavaScript" />
        <Skill icon={<SiTypescript />} text="TypeScript" />
        <Skill icon={<SiRuby />} text="Ruby" />
        <Skill icon={<SiReact />} text="React" />
        <Skill icon={<SiRubyonrails />} text="Ruby on Rails" />
        <Skill icon={<SiGit />} text="Git" />
        <Skill icon={<SiPostgresql />} text="PostgreSQL" />
        <Skill icon={<SiJest />} text="Jest" />
        <hr />
      </div>
    </div>
  );
};

const Skill = ({ icon, text }) => {
  return (
    <div className="tech-container group">
      <span className="tech-tooltip group-hover:scale-100">{text}</span>
      {icon}
    </div>
  );
};
export default Skills;
