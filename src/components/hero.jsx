import { Rocket, ArrowDown } from "lucide-react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot"></span>
          <span className="badge-text">
            OPEN TO WORK, LEARNING & COLLABORATION
          </span>
        </div>

        <p className="hero-greeting">Hello World, I'm</p>

        <h1 className="hero-title">
          Julius Menor<span>.</span>
        </h1>

        <h2 className="hero-role">Computer Engineering Student</h2>

        <p className="hero-description">
          Passionate about technology, driven by curiosity, and always ready to
          learn, create, and take on new challenges.
        </p>

        <div className="hero-actions">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Explore My Work <Rocket width="15px" />
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        SCROLL TO EXPLORE
        <span>
          <ArrowDown width="18px" />
        </span>
      </a>
    </section>
  );
}

export default Hero;
