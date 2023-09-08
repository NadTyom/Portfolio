import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projectList } from "../helpers/projectList";

export default function Project() {
  const { id } = useParams();
  const project = projectList[id];
  console.log(project);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img
            src={require("../" + project.photoBig)}
            alt={project.title}
            className="project-details__cover"
          />
          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          {project.gitHubLink && <BtnGitHub link="https://github.com" />}
        </div>
      </div>
    </main>
  );
}
