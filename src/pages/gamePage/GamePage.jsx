import React,{useState}
 from 'react'
import './GamePage.css'
// import Footer from 'https://github.com/Oluniyisrael/reactportfolio/tree/master/src/assets/components/portfolioFooter/Footer.jsx'
import logo from '../../assets/Israel Tic Tac Toe.png'
import XandO from '../../xAndO/XandO.jsx'

function GamePage() {
    
    var showScore = true
    const [gameStatus, setGameStatus]= useState(true)
    const [xScore, setXScore]= useState(0)
    const [oScore, setOScore]= useState(0)
    const [choice,setChoice]= useState(0)
    function addXScore(){
        setXScore(xScore + 1)
    }
    function addOScore(){
        setOScore(oScore + 1)
    }
    function resetGame() {
        setGameStatus(false)
        setGameStatus(true)
    }
    function refreshGame (){
        setTimeout(()=>{
            setGameStatus(false)
        }, 2000)
        setTimeout(() => {
            setGameStatus(true)
        }, 2100);
    }
    if(xScore > 0 ){
        document.getElementById('xScore').style.color = 'white'
    }
    if(oScore > 0 ){
        document.getElementById('oScore').style.color = 'white'
    }
    function addChoice(){
        setChoice(choice + 1) 
    }
    function subChoice(){
        // if(choice === 1) {
            setChoice(choice=> choice -1)
        // }
        // else(setChoice(0)
        // )
    }
    if (choice === 2) {
        setChoice(0)
    }
  return (
    <div>
       <nav id='gameNav'>
        <div>
            <img src={logo} alt="logo" id='logo'/>
        </div>
        {showScore && <div id='scoreBoard'> <span id='x'>X</span> : <span id='xScore'>{xScore}</span>   <span id='o'>O</span>: <span id='oScore'>{oScore}</span>   </div>}
        
    </nav>
    {gameStatus && <XandO 
        addX = {addXScore} 
        addO ={addOScore}
        refresh = {refreshGame}
        reset = {resetGame}
        choice = {choice}
        addChoice ={addChoice} 
        subChoice ={subChoice}
        /> }
        {/* <Footer/> */}
    </div>
    ) 
   
}
export default GamePage