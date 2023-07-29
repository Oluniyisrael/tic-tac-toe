import React,{useState}from 'react'
import './GamePage.css'
// import Footer from 'https://github.com/Oluniyisrael/reactportfolio/tree/master/src/assets/components/portfolioFooter/Footer.jsx'
import logo from '../../assets/Israel Tic Tac Toe.png'
import XandO from '../../xAndO/XandO.jsx'
import TipsPage from '../tipsPage/TipsPage'

function GamePage() {
    
    var showScore = true
    const [gameStatus, setGameStatus]= useState(true)
    const [tipsStatus, setTipsStatus]= useState(true)
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
        }, 1500)
        setTimeout(() => {
            setGameStatus(true)
        }, 1600);
    }
    function refreshGameForTips (){
        setTimeout(()=>{
            setGameStatus(false)
        }, 50)
        setTimeout(() => {
            setGameStatus(true)
        }, 200);
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
    function closeTipsPage() {
        setTipsStatus(false)
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
        /> }
        {tipsStatus && <TipsPage
            addChoice = {addChoice}
            close ={closeTipsPage}
            refresh = {refreshGameForTips}
            />
        }
        {/*Note to self: Create a dark mode toggle button*/}
        {/* Another note to self : Create a reset board button */}
        {/* <Footer/> */}
    </div>
    ) 
   
}
export default GamePage