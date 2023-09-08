import React from "react";

import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Բարև, իմ անունը <em>Արտյոմ</em> է
          </strong>
          <br />ես frontend developer եմ
        </h1>
        <div className="header__text">
          <p>սովորել և ստեղծագործել կիրքով:</p>
        </div>
        <a href="/" className="btn" download>
          Ներբեռնել CV
        </a>
      </div>
    </header>
  );
}
