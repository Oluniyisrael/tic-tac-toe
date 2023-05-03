// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import GamePage from './components/gamePage/GamePage';
// import NavBar from './components/navBar/GamePage';
// import GamePage from './gamePage/GamePage';

function App() {
//   const [array, setArray] =
//    useState([['X','O','X'],
//               ['O','X','O'],
//               ['X','O','X']
//             ])
// var gameReset = ()=>{
//   setArray(prevValues => prevValues =
//   ['','',''],
//   ['','',''],
//   ['','',''] )
// }
  return (
    <div className="App">
      <div>
        {/* <table>
        <tr>
            <td>{array[0][0]}</td>
            <td>{array[0][1]}</td>
            <td>{array[0][2]}</td>
          </tr><tr>
            <td>{array[1][0]}</td>
            <td>{array[1][1]}</td>
            <td>{array[1][2]}</td>
          </tr><tr>
            <td>{array[2][0]}</td>
            <td>{array[2][1]}</td>
            <td>{array[2][2]}</td>
          </tr>
        </table> */}
        <GamePage/>
        {/* <button onClick={gameReset}> indajsndeojew</button> */}
      </div>
    </div>
  );
}

export default App;
