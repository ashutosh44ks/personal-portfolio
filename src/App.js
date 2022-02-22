import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Parallax from "./components/Parallax";
import Main from "./components/Main";
import "./components/stylesheets/Layout.css";
import "./components/stylesheets/Main.css";

function App() {
  return (
    <div className="App">
      <Layout />
      <Intro />
      <Parallax type="parallax-img" tag="pic-1" />
      <Main />
    </div>
  );
}

export default App;
