import { useState, useEffect } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState("Menu");
  useEffect(() => {
    const sideBtn = document.querySelector("#navbar-toggle");
    const sideLinks = document.querySelectorAll(".side-menu-links");
    sideLinks.forEach((sideLink) =>
      sideLink.addEventListener("click", sideToggler)
    );
    sideBtn.addEventListener("click", sideToggler);
  });

  function sideToggler() {
    const sideBar = document.querySelector("#sidebar-container");
    const sideMenu = document.querySelector("#navbar-menu");
    const rightSidebar = document.querySelector("#right-sidebar");
    const navbarBrand = document.querySelector("#navbar-brand");
    if (toggle === "Menu") {
      sideBar.style.width = "80vw";
      navbarBrand.classList.add("with-sidebar");
      sideMenu.classList.remove("hide");
      rightSidebar.classList.add("with-sidebar");
      setToggle("X");
    } else if (toggle === "X") {
      sideBar.style.width = "2em";
      navbarBrand.classList.remove("with-sidebar");
      sideMenu.classList.add("hide");
      rightSidebar.classList.remove("with-sidebar");
      setToggle("Menu");
    }
  }
  return (
    <div id="sidebar-container">
      <div id="navbar-toggle">{toggle}</div>
      <div id="navbar-menu" className="hide">
        <ul id="navbar-list">
          <li className="med-text">
            <a className="link side-menu-links" href="#about">
              About Me.
            </a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#skills">
              Technical Skills.
            </a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#projects">
              Projects.
            </a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#contact">
              Contact.
            </a>
          </li>
          <li className="med-text">
            <a
              className="link side-menu-links"
              href="https://drive.google.com/file/d/1rri8vp3pEZH6qAGvs_THgvqvmk_KMv1L/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
