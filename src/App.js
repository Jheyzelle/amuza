import logo from './logo.svg';
import './App.css';
import TasksPage from './components/taskspage';
import LandingPage from './components/landingpage';
import { BrowserRouter as Router, Switch,  Routes, Route, Link } from 'react-router-dom';



function App() {

  
  return (
    <div className="App">
      <span id='page-top'></span>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/taskspage" element={<TasksPage />} />
        </Routes>
      </Router>


      {/* <LandingPage></LandingPage>
      <TasksPage></TasksPage> */}

    </div>
  );
}

export default App;
