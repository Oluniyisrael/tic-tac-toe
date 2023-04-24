import React from 'react'
import './GamePage.css'
import {useState } from 'react';


// var Case1 = document.getElementById('line');
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
    if(squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[2].innerText !== '' 
        // ||
        // squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[6].innerText !== ''
        // ||
        // squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[8].innerText !== ''
        // ||
        // squares[1].innerText === squares[4].innerText && squares[4].innerText === squares[7].innerText && squares[7].innerText !== ''
        // ||
        // squares[2].innerText === squares[5].innerText && squares[5].innerText === squares[8].innerText && squares[8].innerText !== ''
        // ||
        // squares[3].innerText === squares[4].innerText && squares[4].innerText === squares[5].innerText && squares[5].innerText !== ''
        // ||
        // squares[6].innerText === squares[7].innerText && squares[7].innerText === squares[8].innerText && squares[8].innerText !== ''
        // ||
        // squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText && squares[6].innerText !== ''
        ){
      // console.log(' we have a winner')
      console.log(' Case1 win');
      document.getElementById('line').style.display = 'block'
      
    }
    else if(squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[6].innerText !== ''){
      console.log(' Case2 win')
      document.getElementById('line2').style.display = 'block'
    }
    else if(squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[8].innerText !== ''){
      console.log(' Case3 win')
      // put a div inside gth eexpected div and say from width to 100%
      document.getElementById('line7Dec').style.display = 'block'
    }
    else if(squares[1].innerText === squares[4].innerText && squares[4].innerText === squares[7].innerText && squares[7].innerText !== ''){
      console.log(' Case4 win')
      document.getElementById('line4').style.display = 'block'
    }
    else if(squares[2].innerText === squares[5].innerText && squares[5].innerText === squares[8].innerText && squares[8].innerText !== ''){
      console.log(' Case5 win')
      document.getElementById('line5').style.display = 'block'

    }
    else if(squares[3].innerText === squares[4].innerText && squares[4].innerText === squares[5].innerText && squares[5].innerText !== ''){
      console.log(' Case6 win')
      document.getElementById('line3').style.display = 'block'
    }
    else if(squares[6].innerText === squares[7].innerText && squares[7].innerText === squares[8].innerText && squares[8].innerText !== ''){
      console.log(' Case7 win')
      document.getElementById('line6').style.display = 'block'

    }
    else if(squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText && squares[6].innerText !== ''){
      console.log(' Case8 win')
      document.getElementById('line8Dec').style.display = 'block'

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
          // setCount(count - 8)
          setChoice(choice + 1)
          if(choice === 2){
            setChoice(choice - 2)
          }
        }
        // function checkWin(){
        //   var squares = document.getElementsByClassName('tableData');
        //   if(squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[2].innerText !== ''){
        //       console.log('yes')
        //   }else{console.log('no')
        //        }
        // }
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
            <hr id='line' />
            <hr id='line2' />
            <hr id='line4' />
            <hr id='line5' />
            <tbody>
              <span id='line7Dec'><hr id='line7' /></span>
              <span id='line8Dec'><hr id='line8' /></span>

                  
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
            <hr id='line3' />
            {/* <hr id='line2' /> */}
              <tr className='tableRow'>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                  {/* <hr id='line6' /> */}

                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
              </tr>
              <hr id='line6' />
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
