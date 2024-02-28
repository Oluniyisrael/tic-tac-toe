import React from 'react'
import { useState } from 'react'
import './XandO.css'


function XandO(props) {

  const writings = 
  [
    ['X','O','X','O','X','O','X','O','X',''],
    ['O','X','O','X','O','X','O','X','O','']
  ]  

 const [tableCntnt, setTableCntnt] = useState(["","","","","","","","",""])
 const [count,setCount] = useState(0)
 const [node , changeNode] = useState(["writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere","writeHere"])

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
function awardWin(a,kase,tally){
if (a === 'X') {
  addXScore()
}
else {addXScore()}
if (kase == 0) {
  
}
}
function checkwin() {
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6]  // Diagonal from top-right
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
          break;
        case 1:
          actualcase = "Middle horizontal row"
          break;
        case 2:
          actualcase = "Bottom row"
          break;
        case 3:
          actualcase = "Left column"
          break;
        case 4:
          actualcase = "Middle column"
          break;
        case 5:
          actualcase = "Right column"
          break;
        case 6:
          actualcase = "Diagonal from top-left"
          break;
        case 7:
        actualcase = "Diagonal from top-right"
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
            <hr id='line' />
            <hr id='line2' />
            <hr id='line4' />
            <hr id='line5' />
            <tbody>
              <span id='line7Dec'><hr id='line7' /></span>
              <span id='line8Dec'><hr id='line8' /></span>
            <tr className='tableRow'>
            <td className='tableData'>{tableCntnt[0]}<span className={node[0]} onClick={ (e)=>handleClick(0,e)} > </span></td>
            <td className='tableData'>{tableCntnt[1]}<span className={node[1]} onClick={ (e)=>handleClick(1,e)}> </span></td>
            <td className='tableData'>{tableCntnt[2]}<span className={node[2]} onClick={ (e)=>handleClick(2,e)}> </span></td>
            </tr>
            <hr id='line3' />
            <tr className='tableRow'>
            <td className='tableData'>{tableCntnt[3]}<span className={node[3]} onClick={ (e)=>handleClick(3,e)}> </span></td>
            <td className='tableData'>{tableCntnt[4]}<span className={node[4]} onClick={ (e)=>handleClick(4,e)}> </span></td>
            <td className='tableData'>{tableCntnt[5]}<span className={node[5]} onClick={ (e)=>handleClick(5,e)}> </span></td>
            </tr>
            <hr id='line6' />
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
