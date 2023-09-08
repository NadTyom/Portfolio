import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";


export default function Navbar() {
  const normalLink = "nav-list__link";
  const activeLink = "nav-list__link nav-list__link--active";

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Իմ</strong> Պորտֆոլիոն
            </NavLink>

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Գլխավոր
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Պրոեկտներ
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Կոնտակտներ
                </NavLink>
              </li>
            </ul>
            <BtnDarkMode />

          </div>
        </div>
      </nav>
    </div>
  );
}
