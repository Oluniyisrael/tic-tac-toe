import React,{useState}from 'react'
import './GamePage.css'
import logo from '../../assets/Israel Tic Tac Toe.png'
import XandO from '../../xAndO/XandO.jsx'
import TipsPage from '../tipsPage/TipsPage'
import EasyAI from '../easyAI/EasyAI.jsx'

function GamePage() {
    var showScore = true
    const [PvP, setPvP]= useState(true)
    const[PvAI, setPvAI]= useState(false)
    const [tipsStatus, setTipsStatus]= useState(true)
    const [xScore, setXScore]= useState(0)
    const [oScore, setOScore]= useState(0)
    const [choice,setChoice]= useState(0)
    const [AIChoice,setAIChoice] = useState(0)
    const [firstPlayerTally,setFirstPlayerTally] = useState('')
    function setFirstPlayerTallyX() {
        setFirstPlayerTally('X')
    }
    function setFirstPlayerTallyO() {
        setFirstPlayerTally('O')
    }
    function addXScore(){
        setXScore(xScore + 1)
    }
    function addOScore(){
        setOScore(oScore + 1)
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
    function addAIChoice(params) {
        setAIChoice(AIChoice+1)
    }
    if (choice === 2) {
        setChoice(0)
    }
    if (AIChoice === 2) {
        setAIChoice(0)
    }


    return (
    <div>
        <nav id='gameNav'>
        <div>
            <img src={logo} alt="logo" id='logo'/>
        </div>
        {showScore && <div id='scoreBoard'> <span id='x'>X</span> : <span id='xScore'>{xScore}</span>   <span id='o'>O</span>: <span id='oScore'>{oScore}</span>   </div>}
        
    </nav> 
    {PvP &&
    <XandO
    addX= {()=>addXScore()}
    addO = {()=>addOScore()}
    choice = {choice}
    addChoice = {()=>addChoice()}
    />

    }
    {PvAI &&
    <EasyAI
    addX= {()=>addXScore()}
    addO = {()=>addOScore()}
    AIChoice = {AIChoice}
    addAIChoice = {addAIChoice}
    choice = {choice}
    addChoice = {()=>addChoice()}
    firstPlayerTally = {firstPlayerTally}
    /> }
            {tipsStatus && <TipsPage
            addChoice = {addChoice}
            close ={closeTipsPage}
            setPvAI = {setPvAI}
            setPvP = {setPvP}
            setX={setFirstPlayerTallyX}
            setO = {setFirstPlayerTallyO}
            />
        }
    </div>
    ) 
   
}
export default GamePage