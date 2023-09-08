import React from "react";

import "./style.css";
import githubicon from "../../img/icons/gitHub-black.svg";

export default function BtnGitHub({ link }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={githubicon} alt="" />
        GitHub repo
      </a>
    </div>
  );
}
