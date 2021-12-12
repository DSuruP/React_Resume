import './App.css';
import { Details } from "./Components/Details";
import { Education } from './Components/Education';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
} from "react-router-dom";
import { IC } from './Components/IC';
import { Project } from './Components/Project';
import { Skills } from './Components/Skills';
import { Activities } from './Components/Activities';

function App() {
  return (
    <Router>
      <Details />
      <Education />
      <br />
      <IC />
      <br />
      <Project />
      <Skills />
      <Activities />
    </Router>
  );
}

export default App;
