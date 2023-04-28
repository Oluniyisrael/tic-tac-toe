import React from 'react'
import './XandO.css'
import {useState,useEffect } from 'react';


function XandO(props) {
  const [choice,setChoice]= useState(0)
  const [count,setCount] = useState(0)
  var writings = 
[
['X','O','X','O','X','O','X','O','X'],
['O','X','O','X','O','X','O','X','O']

] 
function addX() {
  props.addX()
} 
       useEffect(() => {

  function declearWin() {

    var squares = document.getElementsByClassName('tableData');

    if(squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[2].innerText !== '' 
        ){
      console.log(' Case1 win');
      document.getElementById('line').style.display = 'block';
      if (squares[2].innerText === 'X') {
        console.log('Xwins')
        addX()
      }
      else{console.log('O wins')}

      // so what i am to do now is to create a score board, find which winning cases bring out the possible variables and set scores coressponing to the variable outcome
    }
    else if(squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[6].innerText !== ''){
      console.log(' Case2 win')
      document.getElementById('line2').style.display = 'block'

    }
    else if(squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[8].innerText !== ''){
      console.log(' Case3 win')
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
    else{console.log('No one won')
  }
  } 
  if (count >= 5 ){
    declearWin()
  } 

})
function add(e){
      setCount(count + 1);
      if(count === 8){
        setChoice(choice + 1)
        if(choice === 2){
          setChoice(choice - 2)
        }
      }

      e.target.className='changeNode'
      e.target.parentNode.innerText = writings[choice][count]
      for (let i = 0; i < 9; i++) {
        var squares =document.getElementsByClassName('tableData')[i]
              if (squares.innerText === 'X'){
                  squares.style.color= "red"
              }
              else{squares.style.color="blue"}
      }
      console.log(count)
    }
       
  
  return (
    <div className='table'>
      <button onClick={props.addX}>dswewew</button>
        <div className='tableCont'>
            <table className='XO'>
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
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere' onClick={add}></span>
                </td>
              </tr>
            <hr id='line3' />
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

export default XandO
