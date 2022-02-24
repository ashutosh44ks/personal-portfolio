import { useState, useEffect } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState("Menu");
  useEffect(() => {
    const sideBtn = document.querySelector("#navbar-toggle");
    const sideBar = document.querySelector("#sidebar-container");
    const sideMenu = document.querySelector("#navbar-menu");
    const introContainer = document.querySelector('#intro-container');
    sideBtn.addEventListener("click", () => {
      if (toggle === "Menu") {
        sideBar.style.width = "80vw";
        sideMenu.classList.remove("hide");
        introContainer.classList.add("theme-1");
        setToggle("X");
      } else if (toggle === "X") {
        sideBar.style.width = "2em";
        sideMenu.classList.add("hide");
        introContainer.classList.remove("theme-1");
        setToggle("Menu");
      }
    });
  });
  return (
    <div id="sidebar-container">
      <div id="navbar-toggle">{toggle}</div>
      <div id="navbar-menu" className="hide">
        <ul id="navbar-list">
          <li className="med-text">
            <a className="link side-menu-links" href="#about">About Me</a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#skills">Technical Skills</a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#projects">Projects</a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
