import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";

function Projects() {
  return (
    <section>
      <h2 className="projects__header">Projects</h2>
      <div className="projects__container">
        {ProjectData.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
