import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LangReducer from "../Redux/Reducers/LangReducer";
import Logo2 from "../logo2.svg";

function Navbar() {
  const language = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const toggleLanguage = () => {
    dispatch(LangReducer(language === "العربية" ? "English" : "العربية"));
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark pt-3">
        <div className="container-fluid">
          <NavLink class="navbar-brand ms-4" to="/">
            <img
              src={Logo2}
              alt="Netflix"
              width="125"
              height="50"
              class="d-inline-block align-text-top"
            />
          </NavLink>
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favorite">
                  Favorites{" "}
                  <span class="badge" style={{ backgroundColor: "#e50914" }}>
                    4
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="mybutton mt-2" type="button">
                  <NavLink className="" to="/register">
                    Register
                  </NavLink>
                </button>
              </li>
              <li className="nav-item">
                <button className="mybutton2 mt-2" type="button">
                  <NavLink className="" to="/sign">
                    Sign in
                  </NavLink>
                </button>
              </li>
              <li className="nav-item lang">
                <button
                  type="button"
                  className="mybutton3"
                  onClick={() => {
                    toggleLanguage();
                  }}
                >
                  {language}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
