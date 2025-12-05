import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper_texts">
        <span className="footer-wrapper_texts__title">Thank You</span>
        <div className="footer-wrapper_texts__section">
          <div>
            <span>Email</span>
            <a href="mailto: Pariarajaby2004@gmail.com">EMAIL ADDRESS</a>
          </div>
          <span className="footer-line"></span>
          <div>
            <span>Github</span>
            <a href="https://www.linkedin.com/in/paria-rajaby-315626384">
              GITHUB ADDRESS
            </a>
          </div>
          <span className="footer-line"></span>
          <div>
            <span>Linkedin</span>
            <a href="https://github.com/paria-rajaby">LINKEDIN ADDRESS</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
