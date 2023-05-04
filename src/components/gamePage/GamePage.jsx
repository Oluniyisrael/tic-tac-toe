import React,{useState}
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
        setXScore(xScore => xScore + 1)
    }
    function addOScore(){
        setOScore(oScore + 1)
    }
    function refreshGame (){
        setTimeout(()=>{
            setGameStatus(false)
        }, 2045)
        setTimeout(() => {
            setGameStatus(true)
        }, 2050);
    }
    if(xScore > 0 ){
        document.getElementById('xScore').style.color = 'white'
    }
    if(oScore > 0 ){
        document.getElementById('oScore').style.color = 'white'
    }
  return (
    <div>
       <nav id='gameNav'>
        <div>
            <img src={logo} alt="logo" id='logo'/>
        </div>
        {showScore && <div id='scoreBoard'> <span id='x'>X</span> : <span id='xScore'>{xScore}</span>   <span id='o'>O</span> <span id='oScore'>{oScore}</span>   </div>}

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