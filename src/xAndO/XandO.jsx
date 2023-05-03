import React from 'react'
import DeclearWin from '../components/declearWin/DeclearWin';
import './XandO.css'
import {useState,  useEffect} from 'react';
// import GameReset from '../components/gameReset/GameReset';

function XandO(props) {
  var writings = 
  [
    ['X','O','X','O','X','O','X','O','X'],
    ['O','X','O','X','O','X','O','X','O']
  ]  
  const [choice,setChoice]= useState(0)
  const [count,setCount] = useState(0) 
  // const [cell, setCell] =
  //  useState([
  //   ['','',''],
  //   ['','',''],
  //   ['','',''] 
  //   ]) 
   
  useEffect(() => {
    if (count >= 5 ){
      DeclearWin(props)
    } 
  }, [count])  
  function add(e){
        setCount(count + 1);
        if(count === 8){
          setChoice(choice + 1)
          if(choice === 2){
            setChoice(choice - 2)
          }
        }
 
        e.target.className='changeNode'
        //writing code
          e.target.parentNode.append(writings[choice][count])
          // console.log(document.getElementsByClassName('tableData')[0])
        for (let i = 0; i < 9; i++) {
          var squares = document.getElementsByClassName('tableData')[i]
                if (squares.innerText === 'X'){
                    squares.style.color= "red"
                }
                else{squares.style.color="blue"}
        }
        // console.log(DeclearWin === true)
        console.log(count) }
        
       

  return (
    <div className='table'>
      {/* <button onClick={props.addX}>dswewew</button> */}
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
