import './about.css'
import profile from '../assets/profile.webp'
import { CodeXml, Download, GraduationCap, LandmarkIcon, LocateIcon, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

function About(){
  return(
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Julius Menor"/>
        </div>
        <div className="about-content">
          <p className="about-title">001 / About Me</p>
          <h1 className="about-heading">Get to Know Me</h1>
          <p className="about-description">I'm <span>Julius Menor</span>, a Computer Engineering student at <span>Cagayan State University</span>, passionate about technology, problem-solving, and creating meaningful digital solutions.</p>
          <p className="about-description">I enjoy exploring web and software development, turning ideas into functional applications, and continuously improving my skills through hands-on projects. I believe that every challenge is an opportunity to learn, grow, and become a better developer.</p>
        </div>
      </div>
      <div className="about-information">
        <div className="about-education">
          <GraduationCap className="information-icon"/>
          <p className="information-heading">Education</p>
          <p className="information-title">BS Computer Engineering</p>
        </div>
        <div className="about-location">
          <MapPin className="information-icon"/>
          <p className="information-heading">Location</p>
          <p className="information-title">Tupang, Alcala, Cagayan</p>
        </div>
        <div className="about-interest">
          <CodeXml className="information-icon"/>
          <p className="information-heading">Interest</p>
          <p className="information-title">Web & Software Development</p>
        </div>
      </div>
      <div className="about-download">
        <Link to="/cv" className="btn-download-cv">
          <Download width="15px"/>
          Download CV
        </Link>
      </div>
    </section>
  )
}

export default About;