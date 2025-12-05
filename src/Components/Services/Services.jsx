import "./Services.css";
const MyServices = (props) => {
  return (
    <div className="servic-wrapper_boxs__details">
      <svg>
        <use href={props.icon}></use>
      </svg>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default MyServices;