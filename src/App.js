import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import GamePage from './pages/gamePage/GamePage';
// import EasyAI from './pages/easyAI/EasyAI'
// import TipsPage from './pages/tipsPage/TipsPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element= {<LandingPage/>}/>
          <Route path='/game' element={<GamePage/>}/>
          {/* <Route path='/easyAI' element= {<EasyAI/>}/> */}
        </Routes>
      </Router>
      {/* <LandingPage/> responsive done */}
      {/* <TipsPage/> */}
    </div>
  );
}

export default App;
