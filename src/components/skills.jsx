import './skills.css'
import profile from '../assets/profile.webp'
import { ArrowLeftIcon, ArrowRightIcon, CodeXml, Database, Download, GraduationCap, Headset, LandmarkIcon, LocateIcon, MapPin, Paintbrush, Palette, Smartphone, SquareChartGantt } from 'lucide-react';
function Skills(){
  return(
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-content">
          <p className="skills-title">010 / Skills</p>
          <h1 className="skills-heading">Skills & <span>Technologies</span></h1>
          <p className="skills-description">I enjoy exploring different areas of technology, from web and software development to graphic design, multimedia production, and technical support. Through hands-on projects and real-world experiences, I've developed skills in building functional applications, creating digital content, and solving technical challenges.</p>   
          <p className="skills-description">As a Computer Engineering student, I'm continuously learning new tools, improving my abilities, and expanding my knowledge. I believe that every project is an opportunity to turn ideas into meaningful solutions while growing as a developer and creative individual.</p>         
        </div>
        <div className="skills-card">
          <div className="web">
            <p className="card-heading">
              <CodeXml className="card-icon"/>
              Web Development</p>
            <p className="card-content">HTML • CSS • Javascript • React</p>
          </div>
          <div className="mobile">
            <p className="card-heading">
              <Smartphone className="card-icon"/>
              Mobile & Desktop</p>
            <p className="card-content">React Native • Expo • Javascript • WinUI 3 </p>
          </div>
          <div className="database">
            <p className="card-heading">
              <Database className="card-icon"/>
              Database & Tools</p>
            <p className="card-content">Firebase • SQLite • Git • VS Code</p>
          </div>
          <div className="ui">
            <p className="card-heading">
              <Palette className="card-icon"/>
              Graphic & UI Design</p>
            <p className="card-content">Canva • Figma • UI Layouts </p>
          </div>
          <div className="multimedia">
            <p className="card-heading">
              <Headset className="card-icon"/>
              Multimedia & Technical</p>
            <p className="card-content">OBS Studio • Livestreaming • LED Visuals • Presentations • Freeshow</p>
          </div>
          <div className="productivity">
            <p className="card-heading">
              <SquareChartGantt className="card-icon"/>
              Productivity</p>
            <p className="card-content">Excel • Word • Powerpoint • etc...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;