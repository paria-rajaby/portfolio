import Header from "./Components/Header/Header";
import MyServices from "./Components/Services/Services";
import AboutMe from "./Components/About/About";
import ContactMe from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import "./App.css";

function App() {
  const allProjects = [
    {
      img: "images/proj1.png",
      address: "https://paria-rajaby.github.io/glassess-shop/",
      link: "GLASSES SHOP",
      desc: "A simple frontend e-commerce project for browsing and buying glasses Build with HTML, CSS and Vanilla JavaScript.Product data comes from a JSON file and app state (cart) is stored in LocalStorage.No backend required.",
    },
    {
      img: "images/proj2.png",
      address: "https://paria-rajaby.github.io/todolist/",
      link: "TODO LIST",
      desc: "This web app is a modern todolist that helps you organize your tasks efficiently. It allows you add , delete and mark tasks as completed. All your tasks are saved in the browser using local storage , so you wont lose any data.",
    },
    {
      img: "images/proj3.png",
      address: "https://paria-rajaby.github.io/weather-app/",
      link: "WEATHER APP",
      desc: "A simple and responsive weather application built with HTML , TAILWIND and JAVASCRIPT.This app allows users to search for any and get real-time weather data such as temperature, humidity, wind speed and weather condition.",
    },
    {
      img: "images/proj4.png",
      address: "https://paria-rajaby.github.io/CMS/",
      link: "CMS",
      desc: "A clean and simple project management system build with HTML,TAILWIND,JAVASCRIPT",
    },
    {
      img: "images/proj5.png",
      address: "https://paria-rajaby.github.io/quiz-app",
      link: "QUIZ APP",
      desc: "A simple and interactive quiz application build with HTML , CSS(TAILWIND) and JAVASCRIPT. Users can answer questions and see their final score.",
    },
    {
      img: "images/proj6.png",
      address: "https://paria-rajaby.github.io/coffee-shop/",
      link: "LANDING COFFEE SHOP",
      desc: "A modern and fully responsive coffee landing page built with HTML, CSS, Tailwind, and JavaScript.This project focuses on clean UI, smooth interactions, and an elegant layout designed to showcase a coffee brand.I created the entire page from scratch, including the layout, styling, responsive design, and interactive elements.",
    },
  ];
  const allServices = [
    {
      icon: "#web",
      title: "Front-End Development",
      desc: "Building clean, modern, and responsive web interfaces using HTML, CSS, and JavaScript. Focused on usability and smooth user experience.",
    },
    {
      icon: "#project",
      title: "Responsive Web Design",
      desc: "Creating layouts that look great on all devices—mobile, tablet, and desktop—using modern responsive techniques and Tailwind CSS.",
    },
    {
      icon: "#api",
      title: "Tailwind UI Components",
      desc: "Designing fast, scalable, and consistent UI components with Tailwind CSS to deliver polished and professional interfaces.",
    },
    {
      icon: "#uiux",
      title: "JavaScript Functionality",
      desc: "Implementing interactive features and dynamic behavior to bring websites to life with clean, efficient JavaScript code.",
    },
    {
      icon: "#git",
      title: "React Application Development",
      desc: "Building component-based, scalable, and maintainable web applications using React, hooks, and modern front-end architecture.",
    },
    {
      icon: "#learn",
      title: "Git & Version Control",
      desc: "Managing code efficiently with Git and GitHub, including branching, collaboration, and deployment-ready project organization.",
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
          <h2 className="titles">Some Of My Projects</h2>
          <div className="grid-display">
            <Projects {...allProjects[0]}></Projects>
            <Projects {...allProjects[1]}></Projects>
            <Projects {...allProjects[2]}></Projects>
            <Projects {...allProjects[3]}></Projects>
            <Projects {...allProjects[4]}></Projects>
            <Projects {...allProjects[5]}></Projects>
          </div>
          <button className="more-projects">
            <a href="https://github.com/paria-rajaby">See more...</a>
          </button>
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