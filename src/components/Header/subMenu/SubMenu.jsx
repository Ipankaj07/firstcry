import React from "react";
import "./subMenu.css";
import{Link} from "react-router-dom";
import {MdKeyboardArrowDown} from "react-icons/md";

function SubMenu() {
  return (
    <div className="subMenu">
      <div className="submenu__container dis-flex">
        <div className="submenu__item"> <Link to="/products"> ALL CATEGORIES </Link> <MdKeyboardArrowDown/> </div>
        <div className="submenu__item"> <Link to="/"> Boy fashion </Link> </div>
        <div className="submenu__item"> <Link to="/"> Girl fashion </Link> </div>
        <div className="submenu__item"> <Link to="/"> Footwear </Link> </div>
        <div className="submenu__item"> <Link to="/"> Toys </Link> </div>
        <div className="submenu__item"> <Link to="/"> Diapering </Link> </div>
        <div className="submenu__item"> <Link to="/"> Gear </Link> </div>
        <div className="submenu__item"> <Link to="/"> Feeding </Link> </div>
        <div className="submenu__item"> <Link to="/"> Bath </Link> </div>
        <div className="submenu__item"> <Link to="/"> Nursery </Link> </div>
        <div className="submenu__item"> <Link to="/"> Moms </Link> </div>
        <div className="submenu__item"> <Link to="/"> Health </Link> </div>
        <div className="submenu__item"> <Link to="/"> Boutiques </Link> </div>
        <div className="submenu__item submenu__club ">
            <img src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" alt="carter" />
          </div>
        <div className="submenu__item carter_s "> <Link to="/"> carter's </Link> </div>

       </div>
     </div>
  );
}

export default SubMenu;
