import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import { useEffect } from "react";

const Layout = () => {
  // useEffect(() => {
  //   const toggle = document.querySelector("#navbar-toggle");
  //   const body = document.querySelector("body");
  //   toggle.addEventListener("mouseover", () => {
  //     body.style.transition = "transform 5s ease-in-out";
  //     body.style.transform = "transformX(5px)";
  //   });
  //   toggle.addEventListener("mouseleave", ()=>{
  //     body.style.paddingLeft = "2em";
  //   })
  // });

  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
};

export default Layout;
