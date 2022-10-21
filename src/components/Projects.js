import Button from "./Button";
import { useState } from "react";

const Projects = () => {
  const [gameToggle, setGameToggle] = useState(false);
  const changeBG = (toggle) => {
    const gameBtn = document.querySelector("#game-of-21");
    toggle
      ? gameBtn.classList.add("game-bg")
      : gameBtn.classList.remove("game-bg");
    setGameToggle((toggle) => !toggle);
  };
  return (
    <section className="main-pad" id="projects">
      <div className="lrg-text" id="heading-projects">
        Projects<span className="span-dot">.</span>
      </div>
      <div className="project">
        <div className="project-text">
          <div className="med-text">Game of <span className="span-font"> 21</span></div>
          <ul className="sml-text">
            <li>
              Description - We've a deck of 21 cards from 1 to 21. You play
              against a computer by selecting a card. Selection of card has to
              be done from the 3 immediate next cards of the last selected card.
              Whoever has to pick card 21 loses the game.
            </li>
            <li>A single player card game that works on pattern recognition</li>
            <li>JavaScript Library used React JS</li>
            <li>UI framework used Material UI</li>
            <li>Responsive Design</li>
          </ul>
          <div className="btn-group">
            <Button
              name="Go To Code"
              site="https://github.com/ashutosh44ks/game-of-21"
            />
            <Button
              name="See Live Project"
              site="https://ashutosh44ks.github.io/game-of-21/"
            />
          </div>
        </div>
        <button id="game-of-21" onClick={() => changeBG(!gameToggle)}>
          <div className="lrg-text">21</div>
        </button>
      </div>
      <div className="project">
        <div id="clone-torrent"></div>
        <div className="project-text">
          <div className="med-text">Website Clone - <span className="span-font"> 1337x Torrents</span></div>
          <ul className="sml-text">
            <li>
              A popular torrent site commonly used for searching and downloading
              files off the internet
            </li>
            <li>
              Technologies used HTML, Bootstrap CSS, and vanilla JavaScript
            </li>
            <li>Integrated search bar with OMDB API</li>
            <li>Responsive Design</li>
          </ul>
          <div className="btn-group">
            <Button
              name="Go To Code"
              site="https://github.com/ashutosh44ks/Recreation-of-1337x-TorrentSite"
            />
            <Button
              name="See Live Project"
              site="https://ashutosh44ks.github.io/Recreation-of-1337x-TorrentSite/"
            />
          </div>
        </div>
      </div>


      <div className="project">
        <div className="project-text">
          <div className="med-text">Website Clone - <span className="span-font"> Google Search Page</span></div>
          <ul className="sml-text">
            <li>
            A searching site used for basic web searching 
            </li>
            <li>
            JavaScript Library used React JS
            </li>
            <li>Integrated search bar with Web-Search API</li>
          </ul>
          <div className="btn-group">
            <Button
              name="Go To Code"
              site="https://github.com/ashutosh44ks/google-clone"
            />
            <Button
              name="See Live Project"
              site="https://ashutosh44ks.github.io/google-clone"
            />
          </div>
        </div>
        <div id="clone-google"></div>
      </div>
    </section>
  );
};

export default Projects;
