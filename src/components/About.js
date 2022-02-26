import React from "react";

const About = () => {
  const currYear = new Date().getFullYear();
  return (
    <section className="main-pad" id="about">
      <div className="lrg-text" id="heading-about">
        About Me<span className="span-dot">.</span>
      </div>
      <div id="flex" className="about-myself">
        <div>
          <div className="med-text" id="subheading-about">
            <q>
              The important thing is not to stop questioning.{" "}
              <span className="span-font">Curiosity</span> has its own reason
              for existing.
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
          <div style={{ display: "inline-block" }}>
            <div>Name :</div>

            <div>Age :</div>

            <div>Gender :</div>
            <div>Email Address :</div>
            <div>GitHub :</div>
            <div>LinkedIn :</div>
          </div>
          <div style={{ display: "inline-block", marginLeft: "2em" }}>
            <div>Ashutosh Kumar Singh</div>

            <div>{currYear - 2000}</div>

            <div>Male</div>

            <div>
              <a className="link" href="mailto:ashutosh44ks@gmail.com">
                ashutosh44ks@gmail.com
              </a>
            </div>

            <div>
              <a
                className="link"
                href="https://github.com/ashutosh44ks"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ashutosh44ks
              </a>
            </div>

            <div>
              <a
                className="link"
                href="https://www.linkedin.com/in/ashutosh44ks/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/ashutosh44ks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
