import React from "react";
import { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q8kmobs", "template_93w5vxh", form.current, {
        publicKey: "Kw5yQgqhyYcSwB4f6"
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>abc@gmail.com</h5>
            <a
              href="mailto:bil2023aljutt@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>egatortutorial</h5>
            <a
              href="https://m.me/BilalCode01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=923352009245"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
