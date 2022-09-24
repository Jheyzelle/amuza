import logo from './logo.svg';
import './App.css';
import TasksPage from './components/taskspage.js';
import LandingPage from './components/landingpage';

function App() {
  return (
    <div className="App">
      <span id='page-top'></span>
      <LandingPage></LandingPage>
      <TasksPage></TasksPage>
    </div>
  );
}

export default App;
