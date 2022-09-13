import React from 'react'
import ProjectCard from './ProjectCard'
import "../styles/Project.css"
import zomato from "../Assets/projects/zomato.png"
import netflix from "../Assets/projects/netflix.png"
import tmv from "../Assets/projects/tmv.png"
import weather from "../Assets/projects/weather.png"
export default function Projects() {
  return (
    <div className='container mx-auto max-width pt-5 pb-5 mt-5' id="projects">
      <div className="techHead mb-3">Projects</div>
      <br/>
      <div className='row d-flex justify-content-around'>
      <ProjectCard className='col mb-2 ms-2 me-2 mt-2' title="Zomato-clone " img={zomato}
         detail="A clone of Zomato website made using MERN stack" website="https://zomato-sai.herokuapp.com/" code="dd"/>
      <ProjectCard className='col mb-2 ms-2 me-2 mt-2' title="TMV-The MovieVerse"  img={tmv}
         detail="A movie info app made by HTML, CSS and Javascript using api." website="https://saikiranpb.github.io/TMV/" code="dd"/>
      <ProjectCard className='col mb-2 ms-2 me-2 mt-2' title="Weather App" img={weather}
         detail="Weather app using HTML ,CSS, Bootstrap and JS using api" website="https://saikiranpb.github.io/weather-app/" code="dd"/>
      <ProjectCard className='col mb-2 ms-2 me-2 mt-2' title="Netflix-clone" img={netflix}
      detail="A Netflix homepage-clone created using HTML,CSS and Bootstrap" website=" https://saikiranpb.github.io/netflix-homepage/" code="dd"/>
      {/* <ProjectCard className='col mb-2 ms-2 me-2 mt-2' title="ff" detail="ff" website="dd" code="dd"/>
      <ProjectCard className='col mb-2 ms-2 me-2 mt-2' title="ff" detail="ff" website="dd" code="dd"/> */}
      </div>
      <hr/>
    </div>
  )
}
