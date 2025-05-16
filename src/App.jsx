import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar.jsx";
import github from "./assets/github.svg";

const App = () => {
  return (
    <div>
      <NavBar github={github} />
    </div>
  );
};

export default App;
