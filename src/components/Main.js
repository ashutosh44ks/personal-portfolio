import Parallax from "./Parallax";

const Main = () => {
  return (
    <div id="main">
      <section id="sec-A">
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
            Name : Ashutosh Kumar Singh
            <br />
            Contact No. : +918171019296, +917906188911
            <br /> Email Address : ashutosh44ks@gmail.com
            <br /> GitHub : ashutosh44ks
          </div>
        </div>
      </section>
      <section id="sec-B">
        <div className="lrg-text" id="heading-2">
          Educational Qualification.
        </div>
        <div id="flex">
          <Parallax type="parallax-img" tag="pic-2" />
          <div>
            <div className="med-text" id="subheading-2">
              School
            </div>
            <div className="sml-text" id="text-2">
              Insert Details Here
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
