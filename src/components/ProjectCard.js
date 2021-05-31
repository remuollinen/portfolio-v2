import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project__card">
      <h3>{project.title}</h3>
      <img src={project.thumb} alt="" />
      <div className="project__links">
        <a href={project.url} target="_blank" rel="noreferrer">
          Website
        </a>
        <a href={project.code} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
