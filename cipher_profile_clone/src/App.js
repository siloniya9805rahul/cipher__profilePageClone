import "./App.css";
import AboutMe from "./components/aboutme/AboutMe";
import CipherMap from "./components/map/CipherMap";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <AboutMe />
        <CipherMap />
      </div>
    </div>
  );
}

export default App;
