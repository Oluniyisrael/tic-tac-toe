import React, { useEffect} from 'react'
import { useState } from 'react'
import './EasyAI.css'
import easyAI from './assets/AI'


function EasyAI(props) {
  // localStorage.clear()
  // const {current: Props} =  useRef(props)
  const choice = props.choice
  const addChoice = props.addChoice

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
 const [count,setCount] = useState(0)
 const [node , changeNode] = useState(["writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere"])
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
}
function hinderClick() {
  changeNode(Array(9).fill("changeNode"))
}
 function handleClick(index,e) {
  // for nodes
  const exit = "changeNode";
  const newNode = [...node]
  newNode[index] = exit
  changeNode(newNode)
  setCount(count + 1)
  // for x and o additioning
  const square = e.target.parentElement
  const newTallyInsertion = [...tableCntnt];
  newTallyInsertion[index] = writings[choice][count]
  setTableCntnt(newTallyInsertion)

  
          if ( writings[choice][count]=== 'X'){
              square.style.color= "red"
              setTallyColor("red")
          }
          else{square.style.color="blue"
        setTallyColor("blue")}    
        // console.log(newTallyInsertion)
        // console.log(firstPlayerTally)
        
        
        // console.log(emptyIndexes);
      }
      // useEffect(()=>{
        // console.log(tableCntnt)
        useEffect(() => {
          
          const newTallyInsertion = [...tableCntnt];
          const newNode = [...node]
          const firstPlayerTally = props.firstPlayerTally
          const winDet = localStorage.getItem("winDetails")

          if ((choice + count) % 2 && !winDet) {  //AI's turn, assuming odd turns are AI's turns
            if (winDet) {
              
            }
            easyAI(newTallyInsertion,newNode,firstPlayerTally,count,setTableCntnt,changeNode,setCount) 
            // refreshGame()

          }
          // console.log((choice + count) % 2)
      }, [count]);

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
      switch (winCase) {
        case 0:
          // actualcase = "Top row"
          markWinDets(a,winCase)
          break;
        case 1:
          // actualcase = "Middle horizontal row"
          markWinDets(a,winCase)
          break;
        case 2:
          // actualcase = "Bottom row"
          markWinDets(a,winCase)
          break;
        case 3:
          // actualcase = "Left column"
          markWinDets(a,winCase)
          break;
        case 4:
          // actualcase = "Middle column"
          markWinDets(a,winCase)
          break;
        case 5:
          // actualcase = "Right column"
          markWinDets(a,winCase)
          break;
        case 6:
          // actualcase = "Diagonal from top-left"
          markWinDets(a,winCase)
          break;
        case 7:
        // actualcase = "Diagonal from top-right"
        markWinDets(a,winCase)
        break;
        default:
        break;
      }
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
            <td className='tableData'>{tableCntnt[0]}<span className={node[0]} onClick={ (e)=>handleClick(0,e)} > </span></td>
            <td className='tableData'>{tableCntnt[1]}<span className={node[1]} onClick={ (e)=>handleClick(1,e)}> </span></td>
            <td className='tableData'>{tableCntnt[2]}<span className={node[2]} onClick={ (e)=>handleClick(2,e)}> </span></td>
            </tr>
            <hr id='line3'  style={{display: line[6] }}/>
            <tr className='tableRow'>
            <td className='tableData'>{tableCntnt[3]}<span className={node[3]} onClick={ (e)=>handleClick(3,e)}> </span></td>
            <td className='tableData'>{tableCntnt[4]}<span className={node[4]} onClick={ (e)=>handleClick(4,e)}> </span></td>
            <td className='tableData'>{tableCntnt[5]}<span className={node[5]} onClick={ (e)=>handleClick(5,e)}> </span></td>
            </tr>
            <hr id='line6'  style={{display: line[7] }}/>
            <tr className='tableRow'>
            <td className='tableData'>{tableCntnt[6]}<span className={node[6]} onClick={ (e)=>handleClick(6,e)}> </span></td>
            <td className='tableData'>{tableCntnt[7]}<span className={node[7]} onClick={ (e)=>handleClick(7,e)}> </span></td>
            <td className='tableData'>{tableCntnt[8]}<span className={node[8]} onClick={ (e)=>handleClick(8,e)}> </span></td>
            </tr>
            </tbody>
          </table>
            {/* </div> */}
        </div>
    </div>
  )
}

export default EasyAI