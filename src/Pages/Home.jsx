import '../App.css'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Experience from '../components/experience'
import Contact from '../components/contact'

function Home() {

  return (
    <>
    <Navigation/>
    <Hero/>
    <hr className="section-divider"/>
    <About/>
    <hr className="section-divider"/>
    <Skills/>
    <hr className="section-divider"/>
    <Projects/>
    <hr className="section-divider"/>
    <Experience/>
    <hr className="section-divider"/>
    <Contact/>
    </>
  )
}

export default Home;
