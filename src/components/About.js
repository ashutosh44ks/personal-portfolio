import React from "react";

const About = () => {
  const currYear = new Date().getFullYear();
  return (
    <section className="main-pad" id="about">
      <div className="lrg-text" id="heading-about">
        About Me.
      </div>
      <div id="flex">
        <div>
          <div className="med-text" id="subheading-about">
            <q>
              The important thing is not to stop questioning. Curiosity has its
              own reason for existing.
            </q>
            <address>- Albert Einstein</address>
          </div>
          <div className="sml-text" id="text-about">
            I am a passionate web developer looking for an internship that helps
            me improve on my current skills and provide me an environment from
            where I can develop both as a person and a professional.
          </div>
        </div>
        <div id="sidetext-about">
          <div style={{ float: "left" }}>
            Name :
            <br />
            Age :
            <br />
            Gender :
            <br /> Email Address :
            <br /> GitHub :
            <br /> LinkedIn :
          </div>
          <div style={{ float: "right", marginLeft: "2em" }}>
            Ashutosh Kumar Singh
            <br />
            {currYear - 2000}
            <br />
            Male
            <br />
            <a className="link" href="mailto:ashutosh44ks@gmail.com">
              ashutosh44ks@gmail.com
            </a>
            <br />
            <a className="link" href="https://github.com/ashutosh44ks">
              github.com/ashutosh44ks
            </a>
            <br />
            <a
              className="link"
              href="https://www.linkedin.com/in/ashutosh44ks/"
            >
              linkedin.com/ashutosh44ks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
