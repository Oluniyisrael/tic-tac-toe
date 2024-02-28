import React from 'react'
import { useState } from 'react'


function XandO(props) {

  const writings = 
  [
    ['X','O','X','O','X','O','X','O','X',''],
    ['O','X','O','X','O','X','O','X','O','']
  ]  

 const [tableCntnt, setTableCntnt] = useState(["","","","","","","","",""])

  return (
    <div className='table'>
        <div className='tableCont'>
        {/* <div><span id='turn' >{writings[choice][count]}</span>'s turn <button onClick={()=>{}}>refres</button></div> */}
          <table>
          <tr>
            <td>{tableCntnt[0]}</td>
            <td>{tableCntnt[1]}</td>
            <td>{tableCntnt[2]}</td>
            </tr>
            <tr>
            <td>{tableCntnt[3]}</td>
            <td>{tableCntnt[4]}</td>
            <td>{tableCntnt[5]}</td>
            </tr>
            <tr>
            <td>{tableCntnt[6]}</td>
            <td>{tableCntnt[7]}</td>
            <td>{tableCntnt[8]}</td>
            </tr>
          </table>
            {/* </div> */}
        </div>
    </div>
  )
}

export default XandO
