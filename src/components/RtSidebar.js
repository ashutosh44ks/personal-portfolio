import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const RtSidebar = () => {
  return (
    <div id="right-sidebar">
      <div id="social-menu">
        <a className="social-link" href="https://github.com/ashutosh44ks">
          <AiFillLinkedin />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/ashutosh44ks/"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default RtSidebar;
