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
        }, 1000)
        setTimeout(() => {
            setGameStatus(true)
        }, 1001);
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
    // edit here
    // function test2(){
    //     var square = document.getElementsByClassName('writeHere')
    //     var amount = (square.length - 1)
    //             var randomSquareNo = (Math.round(( amount* Math.random())))
    //       setTimeout(() => {
    //             console.log(randomSquareNo)
    //           console.log(amount)
    //             square[randomSquareNo].click()
            
    //         }, 2000)
               
    //   } 
    // for( let i=0;i < document.getElementsByClassName('writeHere').length;i++){
    //     document.getElementsByClassName('writeHere')[i].addEventListener('mousedown',test2)
    
    // }
    //stop edit here
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