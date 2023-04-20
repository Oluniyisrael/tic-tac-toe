import React from 'react'
import './GamePage.css'
import {useState } from 'react';

function GamePage() {
  var writings = 
  [
    ['X','O','X','O','X','O','X','O','X'],
    ['O','X','O','X','O','X','O','X','O']
  ]  

  const [count,setCount] = useState(0)
  const [choice,setChoice]= useState(0)
  function declearWin() {
    var squares = document.getElementsByClassName('tableData');
    if(squares[0].innerHTML === squares[1].innerHTML && squares[1].innerHTML === squares[2].innerHTML && squares[2].innerHTML !== null 
        ||
        squares[0].innerHTML === squares[3].innerHTML && squares[3].innerHTML === squares[6].innerHTML && squares[6].innerHTML !== null
        ||
        squares[0].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[8].innerHTML && squares[8].innerHTML !== null
        ||
        squares[3].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[5].innerHTML && squares[5].innerHTML !== null
        ){
      console.log(' we have a winner')
    }
    else{console.log('No one won')}
  } 
  if (count >= 5 ){
    declearWin()
  }      
  function add(e){
        setCount(count + 1);
        if(count === 8){
          // for (let i = 0; i < 8; i++) {
          //   document.querySelectorAll('td')[i].innerText = '';
          //   document.querySelectorAll('span')[i].classList= 'writeHere'
          // }
          setCount(count - 8)
          setChoice(choice + 1)
          if(choice === 2){
            setChoice(choice - 2)
          }
        }
        e.target.className='changeNode'
        e.target.parentNode.innerText = writings[choice][count]

        console.log(count)
      }
  
  return (
    <div className='table'>
        <div className='tableCont'>
            <table className='XO'
           // onClick={add}
           >
            {/* To be continued, Counter divs will be in front of tiles and will dissapear after been clicked to avoid random value bugs */}
            <tbody>
              <tr className='tableRow'>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                {/* //  onClick={changeClick} */}
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
              </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default GamePage
