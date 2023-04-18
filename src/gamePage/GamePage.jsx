import React from 'react'
import './Gamepage.css'

function GamePage() {
  return (
    <div className='table'>
        <div className='tableCont'>
            <table className='XO'>
              <tr className='tableRow'>
                <td className='tableData'></td>
                <td></td>
                <td></td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'></td>
                <td></td>
                <td></td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'></td>
                <td></td>
                <td></td>
              </tr>
            </table>
        </div>
    </div>
  )
}

export default GamePage