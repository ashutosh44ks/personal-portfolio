import React from "react";

const Header = () => {
  const brandName="<ASHUTOSH44KS/>";
  const d = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function getDate () {
    return days[d.getMonth()];
  }
  return (
    <div id="navbar-container">
      <div id="navbar-brand">{brandName}</div>
      <div id="navbar-date">{getDate()}</div>
    </div>
  );
};

export default Header;
