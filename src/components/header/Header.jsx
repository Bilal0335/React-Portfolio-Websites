import CTA from "./CTA";
import "./header.css";
// import ME from "../../assets/me.png";
import ME from "../../assets/bilal.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello's I'm</h5>
        <h1>Mr.Bilal Hussain</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" width={70} />
        </div>
        <a href="#contact" className="scrool_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
