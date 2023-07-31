import React from 'react'
import DeclearWin from '../components/declearWin/DeclearWin';
import './XandO.css'
import {useState,  useEffect, useRef} from 'react';
import AIPlayer from '../components/aiPlayer/AIPlayer';

function XandO(props) {

  const [tstate,setTState] = useState(false)
  var writings = 
  [
    ['X','O','X','O','X','O','X','O','X',''],
    ['O','X','O','X','O','X','O','X','O','']
  ]  
  const {current: Props} =  useRef(props)
  const [count,setCount] = useState(0) 
  const choice = props.choice
  const addChoice = Props.addChoice
  if(count === 9 && tstate === false){
    setTimeout(() => {
      Props.refresh()
    }, 300);
  }
  useEffect(() => {
    if (count >= 4 ){
      DeclearWin(Props,setTState)
      console.log(tstate)
    } 
    if (count === 9 && tstate === false) {
      addChoice()
    }
    const turn = document.getElementById('turn')
    if(turn.innerText === 'X'){
      turn.style.color = 'Red'
    } 
    else{turn.style.color ="Blue"}
},[count,Props,addChoice,tstate,choice])  


useEffect(() => {
    for(let i=0;i < document.getElementsByClassName('writeHere').length;i++){
      document.getElementsByClassName('writeHere')[i].addEventListener('click',(e)=>{
          if (e.isTrusted === true) {
              AIPlayer(tstate)
              // problem
              // console.log(count)
          }
          else{e.preventDefault()}
      })

  }
  
  },[])


  
  function add(e){
        setCount(count + 1); 
        e.target.className='changeNode'
        //writing code
          e.target.parentNode.append(writings[choice][count])
        for (let i = 0; i < 9; i++) {
          var squares = document.getElementsByClassName('tableData')[i]
                if (squares.innerText === 'X'){
                    squares.style.color= "red"
                }
                else{squares.style.color="blue"}
        }
       }
  //   for(let i=0;i < document.getElementsByClassName('writeHere').length;i++){
  //     document.getElementsByClassName('writeHere')[i].addEventListener('click',AIPlayer)
  // }
  //  function simulateClick(divElement) {
  //       // Create a custom event that is not recognizable as a regular click event
  //       const customEvent = new Event('simulatedClick', {
  //         bubbles: true,
  //         cancelable: true,
  //       }) }
  return (
    <div className='table'>
        <div className='tableCont'>
        <div><span id='turn' >{writings[choice][count]}</span>'s turn</div>
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
                  <section className='writeHere' onClick={add}></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
              </tr>
            <hr id='line3' />
              <tr className='tableRow'>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
              </tr>
              <hr id='line6' />
              <tr className='tableRow'>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={add}></section>
                </td>
              </tr>
            </tbody>
            </table>
            <div>
              {/* <button onClick={console.log('Choice :' + choice + ' \n Count: ' + count)}> Do something</button> */}
            </div>
        </div>
    </div>
  )
}

export default XandO
