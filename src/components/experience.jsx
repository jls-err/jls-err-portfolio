import "./experience.css";
import tanim from "../assets/tanim.png";
import { Briefcase, Star, ArrowRightIcon } from "lucide-react";
import certificate from "../assets/ClassOf2025__issued.pdf";

function Experience() {
  return (
    <section>
      <div className="experience" id="experience">
        <div className="experience-container">
          <div className="experience-content">
            <p className="experience-title">100 / Experience</p>
            <h1 className="experience-heading">
              Experiences & <span>Achievements.</span>
            </h1>
            <p className="experience-description">
              A collection of experiences, responsibilities, and achievements
              that have shaped my growth as a Computer Engineering student. From
              software development and technical operations to leadership and
              community involvement, each opportunity has helped me strengthen
              my skills, explore new technologies, and gain valuable real-world
              experience.
            </p>
          </div>
        </div>
        <div className="experience-card">
          <h1 className="experience-subcardtitle">
            <Briefcase className="briefcase" />
            Experiences
          </h1>
          <div className="experience-subcard">
            <p className="experience-subtitle">May 2026 - June 2026</p>
            <h1 className="experience-subheading">PNREO SPES</h1>
            <p className="experience-subtext">
              Provincial Natural Resources and Environment Office (PNREO)
            </p>
            <p className="experience-subdescription">
              Gained hands-on experience in environmental programs, data
              management, and technical support. Assisted in organizing seedling
              production records, developing a QR code identification project
              for plant species, preparing digital documents, and supporting
              daily office operations.
            </p>
            <div className="experience-label">
              <p className="label">Data Management</p>
              <p className="label">Technical Support</p>
              <p className="label">Documentation</p>
              <p className="label">QR Code Project</p>
            </div>
          </div>
          <div className="experience-subcard">
            <p className="experience-subtitle">On going</p>
            <h1 className="experience-subheading">
              Youth Leader & Technical Team Head
            </h1>
            <p className="experience-subtext">
              Lord Jesus Reigns Forever Ministries, Inc. (LJRFM)
            </p>
            <p className="experience-subdescription">
              Contribute to youth activities and church technical operations
              through livestream management, LED presentations, event visuals,
              and multimedia production. Collaborate with fellow volunteers in
              planning activities, preparing presentations, and supporting
              events.
            </p>
            <div className="experience-label">
              <p className="label">Leadership</p>
              <p className="label">Livestreaming</p>
              <p className="label">LED Visuals</p>
              <p className="label">Event Production</p>
            </div>
          </div>
          <div className="experience-subcard">
            <p className="experience-subtitle">Personal & Academic Projects</p>
            <h1 className="experience-subheading">
              Project Manager & Software Developer
            </h1>
            <p className="experience-subtext">TANIM & D'Vine</p>
            <p className="experience-subdescription">
              Served as the Project Manager for TANIM, an academic group project
              focused on seedling inventory and management. Responsible for
              coordinating team activities, organizing project requirements, and
              overseeing development progress. Additionally, independently
              developed my own version of the TANIM application to explore
              different approaches, improve my programming skills, and gain
              hands-on experience in desktop application development. Also
              worked on D'Vine, a youth community management application
              designed to support communication, event organization, and member
              engagement.
            </p>
            <div className="experience-label">
              <p className="label">Project Management</p>
              <p className="label">Team Collaboration</p>
              <p className="label">C#</p>
              <p className="label">WinUI 3</p>
              <p className="label">React Native</p>
              <p className="label">Firebase</p>
            </div>
          </div>
          <hr className="section-divider" />
          <h1 className="experience-subcardtitle">
            <Star className="star" />
            Achievements
          </h1>
          <div className="achievement-subcard">
            <p className="achievement-subtitle">ACH/001</p>
            <h1 className="achievement-subheading">
              SM Foundation Scholarship
            </h1>
            <p className="achievement-subtext">Academic Year 2024 - Present</p>
            <p className="achievement-subdescription">
              Awarded educational scholarship support through the SM Foundation
              scholarship program, providing valuable assistance in pursuing my
              college education and motivating me to continue striving for
              academic excellence, personal growth, and future career success.
            </p>
          </div>
          <div className="achievement-subcard">
            <p className="achievement-subtitle">ACH/010</p>
            <h1 className="achievement-subheading">SPES Beneficiary</h1>
            <p className="achievement-subtext">
              Employment & Professional Development
            </p>
            <p className="achievement-subdescription">
              Selected as a SPES beneficiary, gaining practical work experience
              and developing professional skills through the program.
            </p>
          </div>
          <div className="achievement-subcard">
            <p className="achievement-subtitle">ACH/011</p>
            <h1 className="achievement-subheading">
              Social Media Marketing Certification
            </h1>
            <p className="achievement-subtext">
              Professional Development | March 2026
            </p>
            <p className="achievement-subdescription">
              Successfully completed the SPUP Open University Social Media
              Marketing course through OpenLearning, demonstrating my commitment
              to continuous learning and expanding my knowledge in digital
              marketing and online communication.
            </p>
            <a
              href={certificate}
              rel="noopener noreferer"
              target="_blank"
              className="achievement-subtitle"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
