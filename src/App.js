import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch,  Routes, Route, Link } from 'react-router-dom';

import { HashRouter } from "react-router-dom";

// ========== Webpage imports ==========
import LandingPage from './components/landingpage';
import Dashboard from './components/dashboard';
import TasksPage from './components/taskspage';
import Navbar from './components/navbar';
// ========== ^^^ Webpage imports ^^^ ==========
function App() {

  
  return (
    <div className="App">
      
      <span id='page-top'></span>
      {/* <Navbar></Navbar> */}
      
      {/* use router in dev */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </Router>

      {/* use hashrouter when building and deploying to github */}
      {/* <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </HashRouter> */}

      <p>&copy; 2022 Meep</p>
    </div>
  );
}

export default App;
