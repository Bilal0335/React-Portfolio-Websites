import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const servicesData = [
  {
    title: "UI/UX Design",
    points: [
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
    ],
  },
  {
    title: "Web Development",
    points: [
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
    ],
  },
  {
    title: "Content Creation",
    points: [
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
      "Lorem ipsum, dolor sit amet consectetur elit.",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {servicesData.map((service, index) => (
          <article key={index} className="services">
            <div className="service_head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service_list">
              {service.points.map((point, i) => (
                <li key={i}>
                  <BiCheck className="service__list-icons" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
