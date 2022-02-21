import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Parallax from "./components/Parallax";
import Main from "./components/Main";
import "./components/stylesheets/Layout.css";
import "./components/stylesheets/Main.css"

function App() {
  return (
    <div className="App">
      <Layout />
      <Intro />
      <Parallax type="parallax-img" tag="pic-1" />
      <Main />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore
      provident nam. Velit quae temporibus libero rerum odio in a, accusantium
      ex illum, ducimus debitis sunt quia ipsa harum nostrum.
    </div>
  );
}

export default App;
