import "./Contact.css";
const ContactMe = () => {
  return (
    <div className="contactme-wrapper">
      <h2 className="contactme-wrapper_title">Contact me</h2>
      <div className="contactme-wrapper_text">
        <p>
          I'd love to hear from you ! Whether you have a question , a project
          idea , or just want to say hi , don't hesitate to contact me .
        </p>
        <div className="contactme-wrapper_conections__wrapper">
          <div>
            <svg>
              <use href="#email"></use>
            </svg>
            <span>
              Email :{" "}
              <a href="mailto: Pariarajaby2004@gmail.com">
                Pariarajaby2004@gmail.com
              </a>
            </span>
          </div>
          <div>
            <svg>
              <use href="#link"></use>
            </svg>
            <span>
              Linkedin :{" "}
              <a href="https://www.linkedin.com/in/paria-rajaby-315626384">
                Paria Rajaby Linkedin
              </a>
            </span>
          </div>
          <div>
            <svg>
              <use href="#project"></use>
            </svg>
            <span>
              {" "}
              Github :{" "}
              <a href="https://github.com/paria-rajaby">Paria Rajaby Gihub</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
