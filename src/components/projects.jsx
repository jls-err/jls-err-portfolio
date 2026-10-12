import "./projects.css";
import tanim from "../assets/tanim.png";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section>
      <div className="project" id="projects">
        <div className="project-container">
          <div className="project-content">
            <p className="project-title">011 / Projects</p>
            <h1 className="project-heading">
              Featured <span>Projects.</span>
            </h1>
            <p className="project-description">
              A collection of projects where I've applied my skills, explored
              new technologies, and turned ideas into functional solutions.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-tanim">
            <a href="#projects">
              <div className="project-img">
                <img src={tanim} alt="Tanim Image" />
              </div>
              <div className="project-card-content">
                <p className="tanim-title">Project 01</p>
                <p className="featured-badge">featured</p>
                <h1 className="tanim-heading">TANIM</h1>
                <p className="tanim-description">
                  A desktop management system for seedling inventory, production
                  monitoring, distribution records, and reporting.
                </p>
                <div className="project-tools">
                  <p className="tools">C#</p>
                  <p className="tools">WinUI3</p>
                  <p className="tools">SQLite</p>
                  <p className="tools">.Net 8</p>
                </div>
              </div>
            </a>
          </div>
          <div className="project-dvine">
            <a href="#projects">
              <div className="project-img">
                <img src={tanim} alt="Tanim Image" />
              </div>
              <div className="project-card-content">
                <p className="dvine-title">Project 02</p>
                <p className="featured-badge">featured</p>
                <h1 className="dvine-heading">D`Vine</h1>
                <p className="dvine-description">
                  A youth community application for managing announcements,
                  events, prayer requests, testimonies, and fund goals.
                </p>
                <div className="project-tools">
                  <p className="tools">React Native</p>
                  <p className="tools">Expo</p>
                  <p className="tools">Firebase</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="project-explore">
          <Link to="/projects" className="view-projects">
            View all Projects
            <ArrowRightIcon width="15px" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
