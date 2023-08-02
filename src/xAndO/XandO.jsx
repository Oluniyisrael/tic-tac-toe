import React from 'react'
import DeclearWin from '../components/declearWin/DeclearWin';
import './XandO.css'
import {useState,  useEffect, useRef} from 'react';
import AIPlayer from '../components/aiPlayer/AIPlayer';

function XandO(props) {
  var tstate = props.tstate
  var writings = 
  [
    ['X','O','X','O','X','O','X','O','X',''],
    ['O','X','O','X','O','X','O','X','O','']
  ]  
  const {current: Props} =  useRef(props)
  const [count,setCount] = useState(0) 
  const choice = props.choice
  const addChoice = Props.addChoice
  // console.log(tstate)
  if(count === 9 && tstate === false){
    setTimeout(() => {
      Props.refresh()
    }, 300);
  }
  useEffect(() => {
    if (count === 9 && tstate === false) {
      addChoice()
      // insert code for check
    }
    if (count >= 4 ){
      DeclearWin(Props,Props.setTState)
    } 
    const turn = document.getElementById('turn')
    if(turn.innerText === 'X'){
      turn.style.color = 'Red'
    } 
    else{turn.style.color ="Blue"}
},[count,Props,addChoice,tstate,choice])  

  function checkAI(e){
    if(e.isTrusted === true){
      if(tstate !== true){
        AIPlayer(1200)
      }
      
     }
  }
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
                console.log(tstate)

        }
       }

  // ???????Do here
  const firstTally = writings[choice][count]
  console.log(firstTally)
  // if count === 0 and writings [choice][count] !== firstTally click random div
  // for (let i = 0; i < document.querySelectorAll('hr').length; i++) {
  //   if(document.querySelectorAll('hr')[i].style.display === 'block'){
  //       console.log('we have a winner')
  //   }
  //   else{console.log('no winner')}
// }
// useEffect(()=>{
//   for (let i = 0; i < document.querySelectorAll('hr').length; i++) {
//     if(document.querySelectorAll('hr')[i].style.display === 'block'){
//         Props.setTState(true)
//     }

//   }
// },[Props])
// console.log(tstate)// true
useEffect(()=>{
  Props.setTState(false)
},[Props])

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
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
                </td>
              </tr>
            <hr id='line3' />
              <tr className='tableRow'>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(tstate)
                     if(e.isTrusted === true){
                      if(tstate !== true){

             
                        AIPlayer(1200)
                      }
                      
                     }}}
                      ></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
                </td>
              </tr>
              <hr id='line6' />
              <tr className='tableRow'>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
                </td>
                <td className='tableData'>
                  
                  <section className='writeHere' onClick={(e)=>{
                      add(e)
                      checkAI(e)
                      // console.log(winState)
                     }}
                      ></section>
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
