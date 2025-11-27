import "./index.css"; 
import React, { useRef } from "react"; 
import Profile from "./components/Profile"; 
import Skills from "./components/Skills"; 
import Experiences from "./components/Experiences"; 
import data from "../dataMahasiswa.json"; 

export default function App() { 
  const profileRef = useRef(null); 
  const skillsRef = useRef(null); 
  const expRef = useRef(null); 

  const scrollToSection = (ref) => { 
    ref.current?.scrollIntoView({ behavior: "smooth" }); 
  }; 

  return ( 
    <div className="container"> 
      <section ref={profileRef}> 
        <Profile profile={data.profile} contact={data.contact} onNavigate={scrollToSection} refs={{ profileRef, skillsRef, expRef }} /> 
      </section> 
      <section ref={skillsRef}> 
        <Skills skills={data.skills} /> 
      </section> 
      <section ref={expRef}> 
        <Experiences experiences={data.experiences} /> 
      </section> 
      <footer> 
        <small>Built with React • {new Date().getFullYear()}</small> 
      </footer> 
    </div> 
  ); 
}
