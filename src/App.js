import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Projects/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
