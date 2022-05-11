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
          <Route path = '/' element = {<Projects/>} />
          <Route path = '/experience' element = {<Experience/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
