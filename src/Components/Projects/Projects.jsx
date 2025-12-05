import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projects-wrapper_boxs__details">
      <img
        className="projects-wrapper_boxs__details-img"
        src={props.img}
        alt="project"
      />
      <a className="projects-wrapper_boxs__details-link" href={props.address}>
        {props.link}
      </a>
      <p className="projects-wrapper_boxs__details-desc">{props.desc}</p>
    </div>
  );
};

export default Projects;