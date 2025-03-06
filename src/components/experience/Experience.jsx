import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { name: "HTML", level: "Experience" },
  { name: "CSS", level: "Experience" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Bootstrap", level: "Basic" },
  { name: "Tailwind", level: "Basic" },
  { name: "React", level: "Intermediate" }
];

const backendSkills = [
  { name: "MongoDB", level: "Experience" },
  { name: "Node JS", level: "Experience" },
  { name: "PHP", level: "Intermediate" },
  { name: "Python", level: "Basic" },
  { name: "MySQL", level: "Basic" }
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* Frontend */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__deatls-icons"/>
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* Backend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__deatls-icons"/>
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
