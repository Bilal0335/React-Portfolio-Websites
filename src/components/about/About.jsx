import React from "react";
import "./about.css";
import ME from "../../assets/bilal.jpg";
// import ME from "../../assets/me-about.jpg";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" width={500} height={370} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ WordWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>80+ Complete</small>
            </article>
          </div>
          <p>
            I am a dedicated Software Engineering student looking for a
            front-end development internship where I can contribute to a dynamic
            team. With expertise in HTML, CSS, Bootstrap, JavaScript, and
            Next.js, I strive to build responsive and user-friendly web
            applications. I also have a strong understanding of SQL for database
            management and am continuously improving my Python skills.
            Passionate about learning and problem-solving, I am eager to apply
            my knowledge to real-world projects, ensuring high-quality results
            and a great user experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
