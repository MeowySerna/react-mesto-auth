import logo from "../images/logo.svg";
import { Link, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

function Header(props) {
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMobile? (
        <MobileMenu isOpen={isMenuOpen} email={props.email} onClick={props.onClick} setIsOpen={setIsMenuOpen}></MobileMenu>
      ) : (
        ""
      )}
      <header className="header">
        <img src={logo} alt="логотип mesto" className="header__logo" />
        <Routes>
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            }
          />

          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="header__link">
                Вход
              </Link>
            }
          />

          <Route
            path="/"
            element={
              isMobile ? (
                <button
                  className={`header__menu-button ${
                    isMenuOpen ? "header__menu-button_openned" : ""
                  } `} onClick={handleMenuOpen}
                ></button>
              ) : (
                <div className="header__container">
                  <p className="header__email">{props.email}</p>
                  <Link
                    to="sign-in"
                    onClick={props.onClick}
                    className="header__link header__link_signout"
                  >
                    Выйти
                  </Link>
                </div>
              )
            }
          />
        </Routes>
      </header>
    </>
  );
}

export default Header;
