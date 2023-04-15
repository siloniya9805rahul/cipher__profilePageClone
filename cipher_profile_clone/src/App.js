import "./App.css";
import AboutMe from "./components/aboutme/AboutMe";
import CipherMap from "./components/map/CipherMap";
import Navbar from "./components/navbar/Navbar";
import WebLInks from "./components/ontheweb/WebLInks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <AboutMe />
        <CipherMap />
        <WebLInks />
      </div>
    </div>
  );
}

export default App;
