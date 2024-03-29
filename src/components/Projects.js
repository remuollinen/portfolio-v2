import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";

function Projects() {
  return (
    <section data-aos="fade-up">
      <h2 className="projects__header">Projects</h2>
      <div className="projects__container">
        {/* Map through project data file and renders out each project */}
        {ProjectData.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
