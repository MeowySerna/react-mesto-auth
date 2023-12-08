import React from "react";
import { Link } from "react-router-dom";

export default function MobileMenu(props) {
    const handleLinkClick=()=>{
        props.onClick();
        props.setIsOpen(false);
    }
  return (
    <div className={`menu ${props.isOpen ? "menu_openned" : ""}`}>
      <p className="menu__email">{props.email}</p>
      <Link
        to="sign-in"
        onClick={handleLinkClick}
        className="menu__link menu__link_signout"
      >
        Выйти
      </Link>
    </div>
  );
}
