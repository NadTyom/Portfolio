import { NavLink } from "react-router-dom";

import "./style.css";

export default function Project({ title, photo, index }) {
  return (
    <NavLink to={`/project/` + index}>
      <li className="project">
        <img
          src={require("../../" + photo)}
          alt={title}
          className="project__img"
        />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
}
