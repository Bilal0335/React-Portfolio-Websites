import React from "react";
import CV from "../../assets/cv.pdf"
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's a talk</a>

    </div>
  );
};

export default CTA;
