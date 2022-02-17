import { useState, useEffect } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState("Menu");
  useEffect(() => {
    const sideBtn = document.querySelector("#navbar-toggle");
    const sideBar = document.querySelector("#sidebar-container");
    const sideMenu = document.querySelector("#navbar-menu");
    sideBtn.addEventListener("click", () => {
      if (toggle === "Menu") {
        sideBar.style.width = "60em";
        sideMenu.classList.remove("hide");
        setToggle("X");
      } else if (toggle === "X") {
        sideBar.style.width = "2em";
        sideMenu.classList.add("hide");
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
            <a className="link" href="#sec-A">Career Objective</a>
          </li>
          <li className="med-text">
            <a className="link" href="#sec-B">Educational Qualifications</a>
          </li>
          <li className="med-text">
            <a className="link" href="#sec-C">Technical Skills</a>
          </li>
          <li className="med-text">
            <a className="link" href="#sec-D">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
