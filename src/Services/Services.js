import "./Services.css";
// const MyServices = () => {
//   return (
//     <div className="servic-wrapper">
//       <h2 className="servic-wrapper_title">My Services</h2>
//       <div className="servic-wrapper_boxs">
//         <div className="servic-wrapper_boxs__details">
//           <svg>
//             <use href="#web"></use>
//           </svg>
//           <h3>Web Development</h3>
//           <p>
//             Building responsive websites using HTML and CSS with clean and
//             structured code
//           </p>
//         </div>
//         <div className="servic-wrapper_boxs__details">
//           <svg>
//             <use href="#project"></use>
//           </svg>
//           <h3>JavaScript Projects</h3>
//           <p>
//             Developing dynamic projects such as online stores, CMS, and small
//             interactive apps with JavaScript
//           </p>
//         </div>
//         <div className="servic-wrapper_boxs__details">
//           <svg>
//             <use href="#api"></use>
//           </svg>
//           <h3>API Integration</h3>
//           <p>
//             Working with APIs to fetch and display real-time data, like weather
//             applications
//           </p>
//         </div>
//         <div className="servic-wrapper_boxs__details">
//           <svg>
//             <use href="#uiux"></use>
//           </svg>
//           <h3>UI/UX Implementation</h3>
//           <p>
//             Converting Figma or graphic designs into functional websites,
//             focusing on smooth user experience
//           </p>
//         </div>
//         <div className="servic-wrapper_boxs__details">
//           <svg>
//             <use href="#git"></use>
//           </svg>
//           <h3>Version Control (Git & GitHub)</h3>
//           <p>
//             Managing and documenting projects with Git, creating repositories on
//             GitHub, and collaborating on code
//           </p>
//         </div>
//         <div className="servic-wrapper_boxs__details">
//           <svg>
//             <use href="#learn"></use>
//           </svg>
//           <h3>Learning & Growth</h3>
//           <p>
//             Currently learning React and always eager to expand my knowledge in
//             web development
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
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
