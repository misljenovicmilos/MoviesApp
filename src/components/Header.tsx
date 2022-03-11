import React, { useState } from "react";
import logo from "assets/images/logo.png";
import { authSelector, LogOut, TmdbSession } from "modules/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Header: React.FC = () => {
  const { authData } = useSelector(authSelector.getState);
  const [check, setCheck] = useState(false);
  return (
    <header className="flex header">
      <nav className="flex nav">
        <div className="flex logo__item">
          <Link to="/" className="flex logo__link">
            <img src={logo} className="logo__item--img" alt="logo__item--img" />
            <h1 className="logo__item--title">The best movies</h1>
          </Link>
        </div>
        <div className="nav__item">
          {!authData.username ? (
            <div className="drop-menu">
              <TmdbSession />
            </div>
          ) : (
            <div className="drop-menu">
              <button
                className="btn btn--account"
                onClick={() => setCheck(!check)}
              >
                Hello, {authData.username}
                <span className={check ? "bullet--rotate" : "bullet"}></span>
              </button>
              <ul
                className={check ? "drop-menu__col" : "none"}
                onMouseLeave={() => setCheck(false)}
                onClick={() => setCheck(false)}
              >
                <li className="drop-menu__list">
                  <a className="drop-menu__link" href="/rated">
                    Rated movies
                  </a>
                </li>
                <li className="drop-menu__list">
                  <LogOut />
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
