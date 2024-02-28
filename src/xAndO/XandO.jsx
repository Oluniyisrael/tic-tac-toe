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
 function handleClick(index) {
  // for nodes
  const exit = "changeNode";
  const newNode = [...node]
  newNode[index] = exit
  changeNode(newNode)
  setCount(count + 1)
  // for x and o additioning
  const newTallyInsertion = [...tableCntnt];
  newTallyInsertion[index] = writings[0][count]
  setTableCntnt(newTallyInsertion)
}
console.log(`Count: ${count}`)

  return (
    <div className='table'>
        <div className='tableCont'>
        {/* <div><span id='turn' >{writings[choice][count]}</span>'s turn <button onClick={()=>{}}>refres</button></div> */}
          <table className='table'>
            <tbody>
            <tr className='tableRow'>
            <td className='tableData'>{tableCntnt[0]}<span className={node[0]} onClick={ ()=>handleClick(0)}> </span></td>
            <td className='tableData'>{tableCntnt[1]}<span className={node[1]} onClick={ ()=>handleClick(1)}> </span></td>
            <td className='tableData'>{tableCntnt[2]}<span className={node[2]} onClick={ ()=>handleClick(2)}> </span></td>
            </tr>
            <tr className='tableRow'>
            <td className='tableData'>{tableCntnt[3]}<span className={node[3]} onClick={ ()=>handleClick(3)}> </span></td>
            <td className='tableData'>{tableCntnt[4]}<span className={node[4]} onClick={ ()=>handleClick(4)}> </span></td>
            <td className='tableData'>{tableCntnt[5]}<span className={node[5]} onClick={ ()=>handleClick(5)}> </span></td>
            </tr>
            <tr className='tableRow'>
            <td className='tableData'>{tableCntnt[6]}<span className={node[6]} onClick={ ()=>handleClick(6)}> </span></td>
            <td className='tableData'>{tableCntnt[7]}<span className={node[7]} onClick={ ()=>handleClick(7)}> </span></td>
            <td className='tableData'>{tableCntnt[8]}<span className={node[8]} onClick={ ()=>handleClick(8)}> </span></td>
            </tr>
            </tbody>
          </table>
            {/* </div> */}
        </div>
    </div>
  )
}

export default XandO
