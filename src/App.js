import Intro from "./components/Intro"
import Parallax from './components/Parallax'
import Main from './components/Main'
function App() {
  return (
    <div className="App">
      <div id="navbar-brand">ASHUTOSH44KS</div>
      <div id="navbar-toggle">Menu</div>
      <Intro/>
      <Parallax tag="pic-1"/>
      <Main/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore provident nam. Velit quae temporibus libero rerum odio in a, accusantium ex illum, ducimus debitis sunt quia ipsa harum nostrum.
    </div>
  );
}

export default App;
