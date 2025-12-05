import "./Header.css";
const Header = () => {
  return (
    <header className="container">
      <div className="header-wrapper">
        <div className="navbar-wrapper">
          <div className="navbar-left">PARIA</div>
          <div className="navbar-wrapper_right">
            <ul>
              <li>
                <a href="#My Services">My Services</a>
              </li>
              <li>
                <a href="#About Me">About Me</a>
              </li>
              <li>
                <a href="#My Projects">My Projects</a>
              </li>
              <li>
                <a href="#Contact Me">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-wrapper_introduction">
          <img
            className="header-wrapper_introduction__img"
            src="images/IMG_9432.JPG"
            alt="my image"
          />
          <span className="header-wrapper_introduction_text">
            Hey, I am Paria. Computer engineering student and Frontend
            Developer. Love learning and coding...
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
