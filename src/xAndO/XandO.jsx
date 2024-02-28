import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import './XandO.css'


function XandO(props) {
  localStorage.clear()
  // const {current: Props} =  useRef(props)

  const addX = props.addX
  const addO = props.addO
  const writings = 
  [
    ['X','O','X','O','X','O','X','O','X',''],
    ['O','X','O','X','O','X','O','X','O','']
  ]  

 const [tableCntnt, setTableCntnt] = useState(["","","","","","","","",""])
 const [line, setLine] = useState(["none","none","none","none","none","none","none","none","none"])
 const [count,setCount] = useState(0)
 const [node , changeNode] = useState(["writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere"])
 useEffect(()=>{
  const winDet = JSON.parse(localStorage.getItem("winDetails"))
  if (winDet) {
    awardWin(winDet)

  }
  console.log(winDet)
},[count])
function refreshGame() {
  setTableCntnt(["","","","","","","","",""]);
  setLine(["none","none","none","none","none","none","none","none","none"]);
  changeNode(["writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere"]);
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
  newTallyInsertion[index] = writings[0][count]
  setTableCntnt(newTallyInsertion)

  
          if ( writings[0][count]=== 'X'){
              square.style.color= "red"
          }
          else{square.style.color="blue"} 
        
        }
        // console.log(tableCntnt)

console.log(`Count: ${count}`)
if (count > 2) {
  checkwin()
}
function awardWin(winDet){
  console.log(winDet)
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

}


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
    [3, 4, 5], // Middle row    2
    [6, 7, 8], // Bottom row    3
    [0, 4, 8], // Diagonal from top-left  7
    [2, 4, 6]  // Diagonal from top-right 8
  ];
  for (let combination of winningCombinations) {
    const [a, b, c] = combination
    // console.log(`A: ${a}, B: ${b}, C: ${c}`)
    if (tableCntnt[a] !== '' && tableCntnt[a] === tableCntnt[b] && tableCntnt[a] === tableCntnt[c]) {
      const winCase = winningCombinations.findIndex(combi=> combi[0] === a && combi[1] === b && combi[2]===c)
      var actualcase;
      switch (winCase) {
        case 0:
          actualcase = "Top row"
          markWinDets(a,winCase)
          break;
        case 1:
          actualcase = "Middle horizontal row"
          markWinDets(a,winCase)
          break;
        case 2:
          actualcase = "Bottom row"
          markWinDets(a,winCase)
          break;
        case 3:
          actualcase = "Left column"
          markWinDets(a,winCase)
          break;
        case 4:
          actualcase = "Middle column"
          markWinDets(a,winCase)
          break;
        case 5:
          actualcase = "Right column"
          markWinDets(a,winCase)
          break;
        case 6:
          actualcase = "Diagonal from top-left"
          markWinDets(a,winCase)
          break;
        case 7:
        actualcase = "Diagonal from top-right"
        markWinDets(a,winCase)
        break;
        default:
        break;
      }
       console.log(tableCntnt[a] + ` wins! with case ${winCase} which is ${actualcase}`)
    }
  }
}

  return (
    <div className='table'>
        <div className='tableCont'>
        {/* <div><span id='turn' >{writings[choice][count]}</span>'s turn <button onClick={()=>{}}>refres</button></div> */}
          <table className='XO'>
            <hr id='line' style={{display: line[0] }} />
            <hr id='line2'  style={{display: line[1] }} />
            <hr id='line4'  style={{display: line[2] }}/>
            <hr id='line5'  style={{display: line[3] }}/>
            <tbody>
              <span id='line7Dec'><hr id='line7'  style={{display: line[4] }}/></span>
              <span id='line8Dec'><hr id='line8'  style={{display: line[5] }}/></span>
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

export default XandO
