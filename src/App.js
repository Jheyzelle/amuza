import logo from './logo.svg';
import './App.css';

import { HashRouter, BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
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

      {/* use hashrouter when building and deploying to github */}
 
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/projectinfo" element={<ProjectNavigation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>

      <p id='cr'>&copy; 2022 Amuza</p>
    </div>
  );
}

export default App;
