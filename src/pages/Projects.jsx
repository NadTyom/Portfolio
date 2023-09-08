import React from "react";

import { projectList } from "./../helpers/projectList";
import Project from "../components/project/Project";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Պրոեկտներ</h2>
        <ul className="projects">
          {projectList.map((project,index) => {
            return <Project key={index} index={index} title={project.title} photo={project.photo} />;
          })}
        </ul>
      </div>
    </main>
  );
}
