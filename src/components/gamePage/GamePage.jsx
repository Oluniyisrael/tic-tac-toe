import React
,{useState}
 from 'react'
import './GamePage.css'
import logo from '../../assets/Israel Tic Tac Toe.png'
import XandO from '../../xAndO/XandO.jsx'

function GamePage() {
    var showScore = true
    const [gameStatus, setGameStatus]= useState(true)
    const [xScore, setXScore]= useState(0)
    const [oScore, setOScore]= useState(0)
    function addXScore(){
        setXScore(xScore + 1)
    }
    function addOScore(){
        setOScore(oScore + 1)
    }
    function refreshGame (){
        setTimeout(()=>{
            setGameStatus(false)
        }, 2030)
        setTimeout(() => {
            setGameStatus(true)
        }, 2050);
    }

  return (
    <div>
       <nav id='gameNav'>
        <div>
            <img src={logo} alt="logo" id='logo'/>
        </div>
        {showScore && <div id='scoreBoard'> <span id='x'>X</span> : {xScore}   <span id='o'>O</span>: {oScore} </div>}
    </nav>
    {gameStatus && <XandO 
        addX = {addXScore} 
        addO ={addOScore}
        refresh = {refreshGame}
        /> }
        
    </div>
    ) 
   
}
export default GamePage