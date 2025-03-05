import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/bilalcode01/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="
        https://github.com/Bilal0335"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/BilalCode01"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
