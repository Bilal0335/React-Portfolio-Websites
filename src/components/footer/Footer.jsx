import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        BilalCode
      </a>
      <ul className="permlinks">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonials">testimonials</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FiInstagram />
        </a>
        <a href="">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copywrite">
        <small>&copy; BilalCode, All right reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
