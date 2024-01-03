import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Projects from './components/Projects'
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/projects' element = {<Projects/>} />
          <Route path = '/' element = {<Projects/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
