import Header from "./Header/Header";
import MyServices from "./Services/Services";
import AboutMe from "./About/About";
import ContactMe from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";
import "./App.css";

function App() {
  const allProjects = [
    {
      img: "./images/proj1.png",
      address: "https://paria-rajaby.github.io/glassess-shop/",
      link: "GLASSES SHOP",
      desc: "A simple frontend e-commerce project for browsing and buying glasses Build with HTML, CSS and Vanilla JavaScript.Product data comes from a JSON file and app state (cart) is stored in LocalStorage.No backend required.",
    },
    {
      img: "./images/proj2.png",
      address: "https://paria-rajaby.github.io/todolist/",
      link: "TODO LIST",
      desc: "This web app is a modern todolist that helps you organize your tasks efficiently. It allows you add , delete and mark tasks as completed. All your tasks are saved in the browser using local storage , so you wont lose any data.",
    },
    {
      img: "./images/proj3.png",
      address: "https://paria-rajaby.github.io/weather-app/",
      link: "WEATHER APP",
      desc: "A simple and responsive weather application built with HTML , TAILWIND and JAVASCRIPT.This app allows users to search for any and get real-time weather data such as temperature, humidity, wind speed and weather condition.",
    },
    {
      img: "./images/proj4.png",
      address: "https://paria-rajaby.github.io/CMS/",
      link: "CMS",
      desc: "A clean and simple project management system build with HTML,TAILWIND,JAVASCRIPT",
    },
    {
      img: "./images/proj5.png",
      address: "https://paria-rajaby.github.io/quiz-app",
      link: "QUIZ APP",
      desc: "A simple and interactive quiz application build with HTML , CSS(TAILWIND) and JAVASCRIPT. Users can answer questions and see their final score.",
    },
    {
      img: "./images/proj6.png",
      address: "https://paria-rajaby.github.io/glassess-shop/",
      link: "GLASSES SHOP",
      desc: "A simple frontend e-commerce project for browsing and buying glasses Build with HTML, CSS and Vanilla JavaScript.Product data comes from a JSON file and app state (cart) is stored in LocalStorage.No backend required.",
    },
  ];
  const allServices = [
    {
      icon: "#web",
      title: "Web Development",
      desc: " Building responsive websites using HTML and CSS with clean and structured code",
    },
    {
      icon: "#project",
      title: "JavaScript Projects",
      desc: "Developing dynamic projects such as online stores, CMS, and small interactive apps with JavaScript",
    },
    {
      icon: "#api",
      title: "API Integration",
      desc: "Working with APIs to fetch and display real-time data, like weather",
    },
    {
      icon: "#uiux",
      title: "UI/UX Implementation",
      desc: "Converting Figma or graphic designs into functional websites, focusing on smooth user experience",
    },
    {
      icon: "#git",
      title: "Version Control (Git & GitHub)",
      desc: "Managing and documenting projects with Git, creating repositories on GitHub, and collaborating on code",
    },
    {
      icon: "#learn",
      title: "Learning & Growth",
      desc: "Currently learning React and always eager to expand my knowledge in web development",
    },
  ];
  return (
    <div>
      <Header></Header>
      <span className="line"></span>
      <main className="container">
        <section id="My Services" className="myservices_section section">
          <h2 className="titles">My Services</h2>
          <div className="grid-display">
            <MyServices {...allServices[0]}></MyServices>
            <MyServices {...allServices[1]}></MyServices>
            <MyServices {...allServices[2]}></MyServices>
            <MyServices {...allServices[3]}></MyServices>
            <MyServices {...allServices[4]}></MyServices>
            <MyServices {...allServices[5]}></MyServices>
          </div>
        </section>
        <section id="About Me">
          <AboutMe></AboutMe>
        </section>
        <section id="My Projects" className="myprojects_section section">
          <h2 className="titles">My Projects</h2>
          <div className="grid-display">
            <Projects {...allProjects[0]}></Projects>
            <Projects {...allProjects[1]}></Projects>
            <Projects {...allProjects[2]}></Projects>
            <Projects {...allProjects[3]}></Projects>
            <Projects {...allProjects[4]}></Projects>
            <Projects {...allProjects[5]}></Projects>
          </div>
        </section>
        <section id="Contact Me">
          <ContactMe></ContactMe>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
