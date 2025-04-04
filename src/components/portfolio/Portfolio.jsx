import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com/Bilal0335",
    demo: "https://github.com/Bilal0335"
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com/Bilal0335",
    demo: "https://github.com/Bilal0335"
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    github: "https://github.com/Bilal0335",
    demo: "https://github.com/Bilal0335"
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 4",
    github: "https://github.com/Bilal0335",
    demo: "https://github.com/Bilal0335"
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 5",
    github: "https://github.com/Bilal0335",
    demo: "https://github.com/Bilal0335"
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 6",
    github: "https://github.com/Bilal0335",
    demo: "https://github.com/Bilal0335"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
