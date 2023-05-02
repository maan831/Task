import './App.scss';
import Home from './components/issues/Home';
import Issuecom from "./components/issues/issuecom"
import Issueevents from "./components/issues/issueevents";
import IssuesAs from "./components/issues/issuesAs";
import Issues from './components/issues/issues'
import Label from "./components/issues/label";
import Milestone from "./components/issues/milestone";
import Timelineevents from "./components/issues/timelineevents";
import { Route,Link,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
                  <Home/>

      <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route exact path="/issues" element={<Issues/>} />
                <Route exact path="/issuesAs" element={<IssuesAs/>} />
                <Route exact path="/issuecom" element={<Issuecom/>} />
                <Route exact path="/issueevents" element={<Issueevents/>} />
                <Route exact path="/label" element={<Label/>} />
                <Route exact path="/milestone" element={<Milestone/>} />
                <Route exact path="/timelineevents" element={<Timelineevents/>} />


            </Routes>
     <li className='mainlist'>
      
     {/* <Link className='list' to="/">1 </Link> */}
      <Link className='list' to="/issues"> 1</Link>
      <Link className='list' to="/issuesAs">2</Link>
      <Link className='list' to="/issuecom">3</Link>
      <Link className='list' to="/issueevents">4</Link>
      <Link className='list' to="/label">5</Link>
      <Link className='list' to="/milestone">6</Link>
      <Link className='list' to="/timelineevents">7</Link>
     </li>
    </div>
  );
}

export default App;
