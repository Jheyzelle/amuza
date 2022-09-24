import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch,  Routes, Route, Link } from 'react-router-dom';

import { HashRouter } from "react-router-dom";


// ========== Webpage imports ==========
import LandingPage from './components/landingpage';
import Dashboard from './components/dashboard';
import TasksPage from './components/taskspage';
import Timer from './components/timer';
import ProjectNavigation from './components/projnavigation';
import HeaderNav from './components/navbar';
// ========== ^^^ Webpage imports ^^^ ==========
function App() {

  
  return (
    <div className="App">
      
      <span id='page-top'></span>
      
      
      {/* use router in dev */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/projectinfo" element={<ProjectNavigation/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>

      {/* use hashrouter when building and deploying to github */}
      {/* <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route exact path="/projmgmapp/projectinfo" element={<ProjectNavigation/>} />
          <Route exact path="/projmgmapp/dashboard" element={<Dashboard/>} />
          <Route exact path="/projmgmapp/tasks" element={<TasksPage />} />
        </Routes>
      </HashRouter> */}

      <p id='cr'>&copy; 2022 Meep</p>
    </div>
  );
}

export default App;
