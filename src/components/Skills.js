import Parallax from "./Parallax";

const Skills = () => {
  return (
    <section id="skills">
      <div className="lrg-text main-pad" id="heading-skills">
        Technical Skills.
      </div>
      <Parallax type="parallax-img" tag="pic-skills" />
      <div id="skills-text">
        <div className="med-text">
          Front-End
          <div className="sml-text">
            <ul>
              <li>Good at React JS</li>
              <li>Have exposure with React State Management Library of Redux </li>
              <li>
              Used occasionally React UI frameworks such as Material UI and Grommet
              </li>
              <li>Knowledgeable in HTML, CSS, and JavaScript</li>
              <li>Experienced in Bootstrap and jQuery</li>
            </ul>
          </div>
        </div>
        <div className="med-text">
          Other
          <div className="sml-text">
            <ul>
              <li>
                Familiar in programming languages such as C, C++, Java, and
                Python
              </li>
              <li>Knowledgeable in core subjects of CSE</li>
              <li>Good Communication and Interpersonal Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Skills;
