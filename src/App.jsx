import { useEffect, useState } from "react";
import profileImage from "./assets/rutuja-profile.jpeg";
import hrDashboard from "./assets/hr-dashboard.png";
import hospital from "./assets/hospital.png";
import hrSql from "./assets/hr-sql.png";
import certificate from "./assets/web-operations-certificate.png";

import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "certificate",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* =========================
     PROJECTS
  ========================= */

  const projects = [
    {
      title: "HR Analytics Dashboard",
      category: "Power BI",
      icon: "📊",
      description:
        "Interactive HR dashboard designed to analyze employee data, workforce trends, salary insights, departments, and key HR KPIs.",
      tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
      github:
        "https://github.com/rutuj-ja/HR-Analytics-Dashboard-Power-BI-Project",
    },

    {
      title: "Advanced HR Analytics",
      category: "SQL",
      icon: "🗄️",
      description:
        "Advanced SQL analytics project using CTEs, joins, window functions, views, aggregations, and employee-related business analysis.",
      tools: [
        "SQL Server",
        "Advanced SQL",
        "CTEs",
        "Window Functions",
      ],
      github:
        "https://github.com/rutuj-ja/Human-Resources-Analytics-SQL-Project-Advanced-SQL-Window-Functions-",
    },

    {
      title: "Hospital Management System",
      category: "SQL",
      icon: "🏥",
      description:
        "SQL-based hospital management system covering patients, appointments, database relationships, and duplicate appointment prevention.",
      tools: [
        "SQL Server",
        "Database Design",
        "Joins",
        "Triggers",
      ],
      github:
        "https://github.com/rutuj-ja/Hospital-Management-System-SQL",
    },

    {
      title: "Sales Analytics SQL Project",
      category: "SQL",
      icon: "📈",
      description:
        "Sales analytics project focused on customers, products, orders, order details, business queries, and sales insights using SQL.",
      tools: [
        "SQL Server",
        "SQL",
        "Joins",
        "Aggregations",
      ],
      github:
        "https://github.com/rutuj-ja/Sales-Analytics-SQL-Project",
    },

    {
      title: "COVID-19 Global Analytics Dashboard",
      category: "Power BI",
      icon: "🦠",
      description:
        "Interactive COVID-19 dashboard analyzing total cases, deaths, recovered cases, active cases, and COVID-19 trends using Power BI.",
      tools: [
        "Power BI",
        "Power Query",
        "DAX",
        "Data Visualization",
      ],
      github:
        "https://github.com/rutuj-ja/COVID-19-Global-Analytics-Dashboard-PowerBI",
    },

    {
      title: "Flipkart E-Commerce Analytics Dashboard",
      category: "Power BI",
      icon: "🛒",
      description:
        "Interactive e-commerce analytics dashboard analyzing sales, profit, orders, customers, products, payment methods, categories, and state-wise performance.",
      tools: [
        "Power BI",
        "Power Query",
        "DAX",
        "Data Modeling",
      ],
      github:
        "https://github.com/rutuj-ja/Flipkart-Ecommerce-Analytics-Power-BI",
    },
  ];

  /* =========================
     SKILLS
  ========================= */

  const skills = [
    {
      title: "SQL",
      items: [
        "Advanced SQL",
        "Joins",
        "CTEs",
        "Window Functions",
        "Aggregations",
        "Views",
      ],
    },

    {
      title: "Power BI",
      items: [
        "Power Query",
        "DAX",
        "Data Modeling",
        "KPI Dashboards",
        "Interactive Reports",
        "Slicers",
      ],
    },

    {
      title: "Microsoft Excel",
      items: [
        "Data Cleaning",
        "Data Validation",
        "Pivot Tables",
        "Lookup Functions",
        "Charts",
        "Reporting",
      ],
    },

    {
      title: "Python",
      items: [
        "Python Basics",
        "Data Analysis",
        "Data Cleaning",
        "Pandas",
        "Visualization",
        "Problem Solving",
      ],
    },
  ];

  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">
        <div className="nav-container">

          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            Rutuja <span>Kusalkar</span>
          </button>

          <nav className="nav-links">

            {[
              "home",
              "about",
              "skills",
              "projects",
              "certificate",
              "contact",
            ].map((section) => (
              <button
                key={section}
                className={
                  activeSection === section ? "active" : ""
                }
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1)}
              </button>
            ))}

          </nav>

        </div>
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero section">

        <div className="hero-container">

          <div className="hero-content">

            <p className="eyebrow">
              HELLO, I'M
            </p>

            <h1>
              Rutuja <span>Kusalkar</span>
            </h1>

            <h2>
              Data Analyst
            </h2>

            <p className="hero-text">
              B.Sc. Computer Science graduate specializing in Data
              Analytics, with practical experience in SQL, Excel,
              Power BI, Power Query, DAX, and Python.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
                <span>→</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                View Resume
              </a>

            </div>

            {/* SOCIAL ICONS */}

            <div className="social-links">

              {/* EMAIL */}

              <a
                href="mailto:kusalkarrutuja74@gmail.com"
                aria-label="Email"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M3 5h18v14H3V5zm2 2v.5l7 5 7-5V7l-7 5-7-5z" />
                </svg>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/rutujakusalkar/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5zM5 10h3v9H5v-9zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.2c0-1 0-2.3-1.4-2.3s-1.62 1.1-1.62 2.23V19H10v-9z" />
                </svg>
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/rutuj-ja"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 .8A11.2 11.2 0 0 0 8.46 22.6c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.1 1.14A10.8 10.8 0 0 1 12 8.3c.96 0 1.93.13 2.84.38 2.14-1.44 3.09-1.14 3.09-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.03.75 2.08v3.01c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8z" />
                </svg>
              </a>

            </div>

          </div>

          {/* PROFILE IMAGE ONLY */}

          <div className="hero-image-area">

            <div className="image-ring"></div>

            <div className="profile-card">

              <img
                src={profileImage}
                alt="Rutuja Kusalkar"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Turning Data Into <span>Insights</span>
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-text">

              <p>
                I am a B.Sc. Computer Science graduate and an
                entry-level Data Analyst with practical experience
                in data cleaning, data analysis, data validation,
                reporting, KPI tracking, dashboard development,
                and data visualization.
              </p>

              <p>
                I work with{" "}
                <strong>
                  SQL, Microsoft Excel, Power BI, Power Query,
                  DAX, and Python
                </strong>{" "}
                to transform raw data into meaningful insights.
                I enjoy identifying trends and patterns, building
                interactive dashboards, and presenting data in a
                clear and actionable way.
              </p>

              <p>
                I have worked on SQL and Power BI projects
                involving business analysis, HR analytics,
                sales analytics, database management, KPI
                reporting, and interactive visualization.
              </p>

            </div>

            <div className="about-highlights">

              <div className="highlight-card">

                <div className="highlight-number">
                  01
                </div>

                <div>
                  <h3>
                    Data Analysis
                  </h3>

                  <p>
                    Finding trends, patterns and meaningful
                    insights.
                  </p>
                </div>

              </div>

              <div className="highlight-card">

                <div className="highlight-number">
                  02
                </div>

                <div>
                  <h3>
                    Dashboard Development
                  </h3>

                  <p>
                    Creating interactive KPI dashboards
                    and reports.
                  </p>
                </div>

              </div>

              <div className="highlight-card">

                <div className="highlight-number">
                  03
                </div>

                <div>
                  <h3>
                    Business Reporting
                  </h3>

                  <p>
                    Transforming raw data into clear
                    business reports.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-container">

          <div className="section-heading center">

            <p className="eyebrow">
              MY EXPERTISE
            </p>

            <h2>
              Technical <span>Skills</span>
            </h2>

            <p className="section-description">
              Tools and technologies I use to analyze,
              transform and visualize data.
            </p>

          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill-card"
                key={skill.title}
              >

                <div className="skill-top">

                  <span className="skill-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {skill.title}
                  </h3>

                </div>

                <div className="skill-items">

                  {skill.items.map((item) => (

                    <span key={item}>
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <p className="eyebrow">
              MY WORK
            </p>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <p className="section-description">
              Practical data analytics projects built using
              SQL, Power BI, Excel and database technologies.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                {/* PROJECT TOP */}

                <div className="project-top">

                  <div className="project-icon">
                    {project.icon}
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                {/* PROJECT CONTENT */}

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tools">

                    {project.tools.map((tool) => (

                      <span key={tool}>
                        {tool}
                      </span>

                    ))}

                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                    <span>↗</span>
                  </a>

                </div>

              </article>

            ))}

          </div>

          <div className="projects-bottom">

            <a
              href="https://github.com/rutuj-ja"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              View More on GitHub
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          CERTIFICATE
      ========================= */}

      <section
        id="certificate"
        className="section certificate-section"
      >

        <div className="section-container">

          <div className="section-heading center">

            <p className="eyebrow">
              CERTIFICATION
            </p>

            <h2>
              My <span>Certificate</span>
            </h2>

            <p className="section-description">
              Internship certificate demonstrating practical
              technical and web development experience.
            </p>

          </div>

          <div className="certificate-card">

            <div className="certificate-image">

              <img
                src={certificate}
                alt="Web Operations Internship Certificate"
              />

            </div>

            <div className="certificate-content">

              <h3>
                Web Operations Intern
              </h3>

              <p>
                TGCT TechGeekConnect Technologies LLP
              </p>

              <span>
                Internship • June 2025 – August 2025
              </span>

              <a
                href={certificate}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                View Certificate
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="section-container">

          <div className="contact-box">

            <div className="contact-content">

              <p className="eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                Let's Connect &
                <span> Work Together</span>
              </h2>

              <p>
                I am currently looking for entry-level Data
                Analyst opportunities where I can apply my
                analytical skills, work with real-world data,
                and continue learning.
              </p>

              <div className="contact-buttons">

                {/* EMAIL */}

                <a
                  href="mailto:kusalkarrutuja74@gmail.com"
                  className="contact-btn"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5h18v14H3V5zm2 2v.5l7 5 7-5V7l-7 5-7-5z" />
                  </svg>

                  Email Me
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/rutujakusalkar/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5zM5 10h3v9H5v-9zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.2c0-1 0-2.3-1.4-2.3s-1.62 1.1-1.62 2.23V19H10v-9z" />
                  </svg>

                  LinkedIn
                </a>

                {/* GITHUB */}

                <a
                  href="https://github.com/rutuj-ja"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .8A11.2 11.2 0 0 0 8.46 22.6c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.1 1.14A10.8 10.8 0 0 1 12 8.3c.96 0 1.93.13 2.84.38 2.14-1.44 3.09-1.14 3.09-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.03.75 2.08v3.01c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8z" />
                  </svg>

                  GitHub
                </a>

              </div>

            </div>

            <div className="contact-email">

              <span>
                Email
              </span>

              <a href="mailto:kusalkarrutuja74@gmail.com">
                kusalkarrutuja74@gmail.com
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-container">

          <p>
            © {new Date().getFullYear()} Rutuja Kusalkar.
            All rights reserved.
          </p>

          <div className="footer-links">

            <a
              href="https://github.com/rutuj-ja"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rutujakusalkar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:kusalkarrutuja74@gmail.com">
              Email
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;