import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import GamePage from './pages/gamePage/GamePage';

function App() {
  
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/' element= {<LandingPage/>}/>
          <Route path='/game' element={<GamePage/>}/>
        </Routes>
      </Router> */}
      {/* <LandingPage/> responsive done */}
    </div>
  );
}

export default App;
