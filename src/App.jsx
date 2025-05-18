import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar.jsx";
import github from "./assets/github.svg";
import HelloWold from "./components/HelloWold.jsx";

const App = () => {
  return (
    <div>
      <NavBar github={github} />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <HelloWold />
      </div>
    </div>
  );
};

export default App;
