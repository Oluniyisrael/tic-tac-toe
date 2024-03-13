import React, { useEffect} from 'react'
import { useState } from 'react'
import './EasyAI.css'
import easyAI from './assets/AI'


function EasyAI(props) {
  localStorage.clear()
  // const {current: Props} =  useRef(props)
  const choice = props.choice
  const addChoice = props.addChoice
  const AIChoice = props.AIChoice
  const addAIChoice = props.addAIChoice
  
  const addX = props.addX
  const addO = props.addO
  const writings = 
  [
    ['X','O','X','O','X','O','X','O','X',''], 
    ['O','X','O','X','O','X','O','X','O','']
  ]  

 const [tableCntnt, setTableCntnt] = useState(["","","","","","","","",""])
 const [tallyColor, setTallyColor] = useState("red");
 const [line, setLine] = useState(["none","none","none","none","none","none","none","none","none"])
 const [squareColor, setSquareColor] = useState(["","","","","","","","",""])
 const [count,setCount] = useState(0)
 const [node , changeNode] = useState(["writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere"])
 const emptyNodes = Array(9).fill("changeNode")

 const firstPlayerTally = props.firstPlayerTally

 useEffect(()=>{
  const winDet = JSON.parse(localStorage.getItem("winDetails"))
  if (winDet) {
    awardWin(winDet)
    hinderClick()
    setTimeout( async () => {
      try {
        await refreshGame()
        
      } catch (error) {
        
      }
    }, 1400);

  }
  console.log("Choice ="+choice)

  // console.log(winDet)
  // console.log("Choice ="+choice)
if (count=== 9 ) {
  setTimeout( async () => {
    try {
      await refreshGame()
      
    } catch (error) {
      
    }
  }, 1400);
}
if ( writings[choice][count]=== 'X'){
  setTallyColor("red")
}
else{
setTallyColor("blue")}
 // eslint-disable-next-line 
},[count])
async function refreshGame() {
  setTableCntnt(Array(9).fill(""));
  setLine(Array(9).fill("none"));
  changeNode(Array(9).fill("writeHere"));
  setCount(0)
  addChoice()
  addAIChoice()
}
function hinderClick() {
  changeNode(Array(9).fill("changeNode"))
}
 function handleClick(index,setColor) {
  // for nodes
  const exit = "changeNode";
  const newNode = [...node]
  newNode[index] = exit
  changeNode(newNode)
  setCount(count + 1)
  // for x and o additioning
  const newTallyInsertion = [...tableCntnt];
  newTallyInsertion[index] = writings[choice][count]
  setTableCntnt(newTallyInsertion)

  
  var newColor = squareColor
  if ( writings[choice][count]=== 'X'){
              newColor[index] = "red"
              setColor(newColor)
              setTallyColor("red")
          }
          else{
            newColor[index] = "blue"
            setColor(newColor)
        setTallyColor("blue")}    
        // console.log(newTallyInsertion)
        // console.log(firstPlayerTally)
        
        
        // console.log(emptyIndexes);
      }
        useEffect(() => {
          const winDet = localStorage.getItem("winDetails")
          console.log(AIChoice)
   
          if ((AIChoice+count) % 2 === 1) { 
            easyAI(tableCntnt,handleClick,setSquareColor,winDet)
          }
 // eslint-disable-next-line 
}, [count]);
useEffect(()=>{
  //for waiting for AI
  const AITally = firstPlayerTally === "X" ? "O" : "X";
  if (writings[choice][count]===AITally) {
      console.log("AI's turn!!!")
      const nodes = node
        console.log("Hinder click!");
        console.log(`Node: ${node}`);
        changeNode(emptyNodes);
        console.log(nodes)
        setTimeout(() => {
            changeNode(nodes);
            console.log("Now play!");
            console.log(`Node: ${node}`);
     },990)
  }
// eslint-disable-next-line 
},[count])
console.log(`Count: ${count}`)
if (count > 2) {
  checkwin()
}
function awardWin(winDet){
  // console.log(winDet) 
if (winDet.a === 'X') {
  addX()
}
else {
  addO()
}
var prevLine = [...line]
switch (winDet.winCase){
  case winDet.winCase :
    prevLine[winDet.winCase] = "block"
    setLine(prevLine)
    break;
    default:
      break;

}
addChoice()
addAIChoice()

}
function markWinDets(a,winCase) {
  localStorage.setItem("winDetails",JSON.stringify({a:tableCntnt[a],winCase:winCase}))

}
function checkwin() {
  const winningCombinations = [
    [0, 1, 2], // Top row       1
    [0, 3, 6], // Left column   2
    [1, 4, 7], // Middle column 3
    [2, 5, 8], // Right column  4
    [0, 4, 8], // Diagonal from top-left  5
    [2, 4, 6],  // Diagonal from top-right 6
    [3, 4, 5], // Middle row    7
    [6, 7, 8] // Bottom row    8
  ];
  for (let combination of winningCombinations) {
    const [a, b, c] = combination
    // console.log(`A: ${a}, B: ${b}, C: ${c}`)
    if (tableCntnt[a] !== '' && tableCntnt[a] === tableCntnt[b] && tableCntnt[a] === tableCntnt[c]) {
      const winCase = winningCombinations.findIndex(combi=> combi[0] === a && combi[1] === b && combi[2]===c)
      // var actualcase;
      markWinDets(a,winCase)
      // switch (winCase) {
      //   case 0:
      //     // actualcase = "Top row"
      //     markWinDets(a,winCase)
      //     break;
      //   case 1:
      //     // actualcase = "Middle horizontal row"
      //     markWinDets(a,winCase)
      //     break;
      //   case 2:
      //     // actualcase = "Bottom row"
      //     markWinDets(a,winCase)
      //     break;
      //   case 3:
      //     // actualcase = "Left column"
      //     markWinDets(a,winCase)
      //     break;
      //   case 4:
      //     // actualcase = "Middle column"
      //     markWinDets(a,winCase)
      //     break;
      //   case 5:
      //     // actualcase = "Right column"
      //     markWinDets(a,winCase)
      //     break;
      //   case 6:
      //     // actualcase = "Diagonal from top-left"
      //     markWinDets(a,winCase)
      //     break;
      //   case 7:
      //   // actualcase = "Diagonal from top-right"
      //   markWinDets(a,winCase)
      //   break;
      //   default:
      //   break;
      // }
      //  console.log(tableCntnt[a] + ` wins! with case ${winCase} which is ${actualcase}`)
    }
  }
}

  return (
    <div className='table'>
        <div className='tableCont'>
        <div><span style={{color : tallyColor}} >{writings[choice][count]}</span>'s turn (Easy ai)</div>
          <table className='XO'>
            <hr id='line' style={{display: line[0] }} />
            <hr id='line2'  style={{display: line[1] }} />
            <hr id='line4'  style={{display: line[2] }}/>
            <hr id='line5'  style={{display: line[3] }}/>
            <tbody>
              <span id='line7Dec' style={{display: line[4] }}><hr id='line7'  /></span>
              <span id='line8Dec' style={{display: line[5] }}><hr id='line8'  /></span>
            <tr className='tableRow'>
            <td className='tableData' style={{color : squareColor[0]}}>{tableCntnt[0]}<span className={node[0]} onClick={ ()=>handleClick(0,setSquareColor)} > </span></td>
            <td className='tableData' style={{color : squareColor[1]}}>{tableCntnt[1]}<span className={node[1]} onClick={ ()=>handleClick(1,setSquareColor)}> </span></td>
            <td className='tableData' style={{color : squareColor[2]}}>{tableCntnt[2]}<span className={node[2]} onClick={ ()=>handleClick(2,setSquareColor)}> </span></td>
            </tr>
            <hr id='line3'  style={{display: line[6] }}/>
            <tr className='tableRow'>
            <td className='tableData' style={{color : squareColor[3]}}>{tableCntnt[3]}<span className={node[3]} onClick={ ()=>handleClick(3,setSquareColor)}> </span></td>
            <td className='tableData' style={{color : squareColor[4]}}>{tableCntnt[4]}<span className={node[4]} onClick={ ()=>handleClick(4,setSquareColor)}> </span></td>
            <td className='tableData' style={{color : squareColor[5]}}>{tableCntnt[5]}<span className={node[5]} onClick={ ()=>handleClick(5,setSquareColor)}> </span></td>
            </tr>
            <hr id='line6'  style={{display: line[7] }}/>
            <tr className='tableRow'>
            <td className='tableData' style={{color : squareColor[6]}}>{tableCntnt[6]}<span className={node[6]} onClick={ ()=>handleClick(6,setSquareColor)}> </span></td>
            <td className='tableData' style={{color : squareColor[7]}}>{tableCntnt[7]}<span className={node[7]} onClick={ ()=>handleClick(7,setSquareColor)}> </span></td>
            <td className='tableData' style={{color : squareColor[8]}}>{tableCntnt[8]}<span className={node[8]} onClick={ ()=>handleClick(8,setSquareColor)}> </span></td>
            </tr>
            </tbody>
          </table>
            {/* </div> */}
        </div>
    </div>
  )
}

export default EasyAI