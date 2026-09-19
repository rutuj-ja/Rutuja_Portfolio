```jsx
import { useEffect, useState } from "react";
import profileImage from "./assets/rutuja-profile.jpeg";
import hrDashboard from "./assets/hr-dashboard.png";

import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element && scrollPosition >= element.offsetTop) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>

      {/* ================================
          NAVIGATION
      ================================= */}

      <nav>
        <h2>Rutuja Kusalkar</h2>

        <div>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            About
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
        </div>
      </nav>


      {/* ================================
          HOME
      ================================= */}

      <section id="home">

        <img
          src={profileImage}
          alt="Rutuja Kusalkar"
          className="profile-image"
        />

        <p>HELLO, I'M</p>

        <h1>Rutuja Kusalkar</h1>

        <h2>Fresher Data Analyst</h2>

        <p>
          SQL | Excel | Power BI | Python | Data Visualization
        </p>

        <p className="hero-description">
          Turning data into meaningful insights through analysis,
          visualization, and business intelligence.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-btn"
          >
            View My Projects
          </a>

          <a
            href="/resume.pdf"
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/rutujakusalkar/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/rutuj-ja"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            GitHub ↗
          </a>

        </div>

      </section>


      {/* ================================
          ABOUT
      ================================= */}

      <section id="about">

        <h2>About Me</h2>

        <p>
          I am a B.Sc. Computer Science graduate and an entry-level Data Analyst
          with practical experience in data cleaning, data analysis, data
          validation, reporting, KPI tracking, dashboard development, and data
          visualization.
        </p>

        <p>
          I work with SQL, Microsoft Excel, Power BI, Power Query, DAX, and
          Python to transform raw data into meaningful insights. I enjoy
          identifying trends and patterns, building interactive dashboards, and
          presenting data in a clear and actionable way.
        </p>

        <p>
          I have worked on data analytics projects involving SQL analysis,
          Power BI dashboards, Excel reporting, data modeling, KPI dashboards,
          interactive reports, and data visualization.
        </p>

        <p>
          I am seeking an entry-level Data Analyst opportunity where I can apply
          my analytical skills, continue learning, and contribute to
          data-driven decision-making.
        </p>

      </section>


      {/* ================================
          SKILLS
      ================================= */}

      <section id="
```
