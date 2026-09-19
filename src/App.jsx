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

      {/* NAVIGATION */}

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


      {/* HOME */}

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


      {/* ABOUT */}

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


      {/* SKILLS */}

      <section id="skills">

        <h2>My Skills</h2>

        <div>
          <p>SQL</p>
          <p>Microsoft Excel</p>
          <p>Power BI</p>
          <p>Python</p>
          <p>Power Query</p>
          <p>DAX</p>
          <p>Data Cleaning</p>
          <p>Data Analysis</p>
          <p>Data Validation</p>
          <p>Data Visualization</p>
          <p>Data Modeling</p>
          <p>KPI Dashboards</p>
          <p>Interactive Reports</p>
        </div>

      </section>


      {/* PROJECTS */}

      <section id="projects">

        <h2>My Projects</h2>

        <div className="project-grid">


          {/* PROJECT 1 */}

          <article className="project-card">

            <img
              src={hrDashboard}
              alt="HR Analytics Dashboard"
              className="project-image"
            />

            <h3>HR Analytics Dashboard</h3>

            <p>
              Interactive HR analytics dashboard created using Power BI,
              Power Query, and DAX to analyze employee data and workforce
              insights.
            </p>

            <div className="tech-stack">
              <span>Power BI</span>
              <span>DAX</span>
              <span>Power Query</span>
            </div>

            <a
              href="https://github.com/rutuj-ja/HR-Analytics-Dashboard-Power-BI-Project"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </article>


          {/* PROJECT 2 */}

          <article className="project-card">

            <div className="project-icon">💻</div>

            <h3>Human Resources SQL Analytics</h3>

            <p>
              Advanced SQL project focused on employee, department, salary,
              and workforce analytics using SQL queries, Window Functions,
              Views, and CTEs.
            </p>

            <div className="tech-stack">
              <span>SQL Server</span>
              <span>Advanced SQL</span>
              <span>Window Functions</span>
              <span>Views</span>
              <span>CTEs</span>
            </div>

            <a
              href="https://github.com/rutuj-ja/Human-Resources-Analytics-SQL-Project-Advanced-SQL-Window-Functions-"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </article>


          {/* PROJECT 3 */}

          <article className="project-card">

            <div className="project-icon">🏥</div>

            <h3>Hospital Management System</h3>

            <p>
              SQL-based hospital management system for managing patients,
              doctors, and appointments using database concepts and SQL
              programming.
            </p>

            <div className="tech-stack">
              <span>SQL Server</span>
              <span>Database</span>
              <span>Triggers</span>
              <span>Views</span>
            </div>

            <a
              href="https://github.com/rutuj-ja/Hospital-Management-System-SQL"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </article>


          {/* PROJECT 4 */}

          <article className="project-card">

            <div className="project-icon">📈</div>

            <h3>SQL Sales Database Project</h3>

            <p>
              SQL sales database project focused on database design, joins,
              aggregate functions, subqueries, and analytical queries for
              sales data.
            </p>

            <div className="tech-stack">
              <span>SQL Server</span>
              <span>SQL</span>
              <span>Joins</span>
              <span>Analytics</span>
            </div>

            <a
              href="https://github.com/rutuj-ja/SQL-Sales-Database-Project"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </article>


          {/* PROJECT 5 */}

          <article className="project-card">

            <div className="project-icon">📊</div>

            <h3>Sales & Customer Analytics</h3>

            <p>
              SQL-based sales and customer analytics project using Microsoft
              SQL Server to analyze revenue, customer behavior, product
              performance, monthly sales trends, and business KPIs.
            </p>

            <div className="tech-stack">
              <span>SQL Server</span>
              <span>Advanced SQL</span>
              <span>CTEs</span>
              <span>Window Functions</span>
              <span>Business Analytics</span>
            </div>

            <a
              href="https://github.com/rutuj-ja/Sales-Analytics-SQL-Project"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </article>


          {/* PROJECT 6 */}

          <article className="project-card">

            <div className="project-icon">🦠</div>

            <h3>COVID-19 Global Analytics Dashboard</h3>

            <p>
              Interactive Power BI dashboard for analyzing global COVID-19
              cases, deaths, recoveries, and trends using data visualization,
              KPI cards, charts, and interactive filters.
            </p>

            <div className="tech-stack">
              <span>Power BI</span>
              <span>Power Query</span>
              <span>DAX</span>
              <span>Data Visualization</span>
            </div>

            <a
              href="https://github.com/rutuj-ja/COVID-19-Global-Analytics-Dashboard-PowerBI"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </article>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact">

        <h2>Let's Connect</h2>

        <p>
          I am open to entry-level Data Analyst opportunities.
        </p>

        <div className="contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kusalkarrutuja74@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            📧 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/rutujakusalkar/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/rutuj-ja"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <p>
          © 2026 Rutuja Kusalkar | Fresher Data Analyst
        </p>

      </footer>

    </div>
  );
}

export default App;