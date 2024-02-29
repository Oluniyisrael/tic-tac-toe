import React,{useState}from 'react'
import './GamePage.css'
import logo from '../../assets/Israel Tic Tac Toe.png'
import XandO from '../../xAndO/XandO.jsx'
import TipsPage from '../tipsPage/TipsPage'

function GamePage() {
    var showScore = true
    const [tstate,setTState] = useState(false)
    const [gameStatus, setGameStatus]= useState(true)
    const [tipsStatus, setTipsStatus]= useState(true)
    const [xScore, setXScore]= useState(0)
    const [oScore, setOScore]= useState(0)
    const [choice,setChoice]= useState(0)
    const [firstPlayerTally,setFirstPlayerTally]=useState('')
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
    <XandO
    addX= {()=>addXScore()}
    addO = {()=>addOScore()}
    choice = {choice}
    addChoice = {()=>addChoice()}
    firstPlayerTally= {firstPlayerTally}
         />
            {tipsStatus && <TipsPage
            addChoice = {addChoice}
            close ={closeTipsPage}
            setFirstPlayerTally = {setFirstPlayerTally}
            />
        }
    </div>
    ) 
   
}
export default GamePage