import Parallax from "./Parallax";

const Main = () => {
  const currYear = new Date().getFullYear();
  return (
    <div id="main">
      <section className="main-pad" id="sec-A">
        <div className="lrg-text" id="heading-1">
          Career Objective.
        </div>
        <div id="flex">
          <div>
            <div className="med-text" id="subheading-1">
              To constantly improve myself both personally and professionally.
            </div>
            <div className="sml-text" id="text-1">
              As a beginner in the field of Information Technology, I strive to
              associate myself with an organization where I can utilize my
              skills in the best possible manner, which further gives me an
              opportunity to grow in my career journey while contributing to the
              development of the organization.
            </div>
          </div>
          <div id="sidetext-1">
            <div style={{ float: "left" }}>
              Name :
              <br />
              Age:
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
              <br /> ashutosh44ks@gmail.com
              <br />{" "}
              <a className="link" href="https://github.com/ashutosh44ks">
                github.com/ashutosh44ks
              </a>
              <br />{" "}
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
      <section className="main-pad" id="sec-B">
        <div className="lrg-text" id="heading-2">
          Educational Qualification.
        </div>
        <div id="flex">
          <Parallax type="parallax-img" tag="pic-2" />
          <div>
            <div className="med-text" id="subheading-2">
              College of Technology, GBPUAT
            </div>
            <div className="sml-text" id="text-2">
              <ul>
                <li>Pantnagar, India</li>
                <li>Bachelor of Technology: Information Technology</li>
                {currYear < 2023 ? (
                  <li>Expected in 2023 </li>
                ) : (
                  <li>Graduated in 2023 </li>
                )}
              </ul>
            </div>
            <div>
              <div className="med-text" id="subheading-3">
                Kendriya Vidyalaya No.1, HBK
              </div>
              <div className="sml-text" id="text-3">
                <ul>
                  <li>Dehradun, India</li>
                  <li>
                    Intermediate : Science Stream
                    <ul>
                      <li>Graduated in 2018 </li>
                      <li>With 82.5% </li>
                    </ul>
                  </li>
                  <li>
                    Highschool :
                    <ul>
                      <li>Graduated in 2016 </li>
                      <li>With 9.8 CGPA </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sec-C">
        <div className="lrg-text main-pad" id="heading-3">
          Technical Skills.
        </div>
        <Parallax type="parallax-img" tag="pic-3" />
        <div id="Cflex">
          <div className="med-text">Med</div>
          <div className="sml-text">Sml</div>
          <div className="sml-text">Sml</div>
        </div>
      </section>
    </div>
  );
};

export default Main;
