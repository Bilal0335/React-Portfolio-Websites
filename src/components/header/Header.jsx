import CTA from './CTA';
import './header.css'
import ME from "../../assets/me.png"
const Header = () => {
  return (
  <header>
    <div className="container header-container">
      <h5>Hello's I'm</h5>
      <h1>Bilal</h1>
      <h5 className='text-light'>
        FullStack Developer
      </h5>
      <CTA/>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contact" className='scrool_down'>Scroll Down</a>
    </div>
  </header>
  );
};

export default Header;
