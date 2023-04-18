import React from 'react'
import './GamePage.css'

function GamePage() {
  // function changeClick{
  //   if()
  // }
  return (
    <div className='table'>
        <div className='tableCont'>
            <table className='XO'>
              <tr className='tableRow'>
                <td className='tableData' onClick={(e)=>{console.log(e.target)}}></td>
                <td className='tableData'></td>
                <td className='tableData'></td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'></td>
                <td className='tableData'></td>
                <td className='tableData'></td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'></td>
                <td className='tableData'></td>
                <td className='tableData'></td>
              </tr>
            </table>
        </div>
    </div>
  )
}

export default GamePage