import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectList = projects.map(project=>{
export default ProjectList;
return(
  <ProjectItem {...project} key={project.id}/>
  )
})
return (
  <div id="projects"></div>
