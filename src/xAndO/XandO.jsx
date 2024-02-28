import React from 'react'
import DeclearWin from '../components/declearWin/DeclearWin';
import './XandO.css'
import {useState,  useEffect, useRef} from 'react';
import AIPlayer from '../components/aiPlayer/AIPlayer';

function XandO(props) {
  
  var tstate = props.tstate
  const writings = 
  [
    ['X','O','X','O','X','O','X','O','X',''],
    ['O','X','O','X','O','X','O','X','O','']
  ]  
  const {current: Props} =  useRef(props)
  const [count,setCount] = useState(0) 
  const choice = props.choice
  const addChoice = Props.addChoice
  const turni = writings[choice][count]
  useEffect(()=>{
   if(count === 0 &&   turni === Props.firstPlayerTally 
     ){
      function bind(e) {
        e.stopPropagation();
        e.preventDefault()
        
    }
      function hinderClick(){
        for (let i = 0; i <    document.querySelectorAll('section').length; i++) {
          document.querySelectorAll('section')[i].addEventListener("click",bind)}
        setTimeout(()=> {
          for (let i = 0; i <    document.querySelectorAll('section').length; i++) {
            document.querySelectorAll('section')[i].removeEventListener("click", bind)
            }
        },1000)
        
      }
       console.log('Hinder CLick')
       hinderClick()
      
     }},[Props,turni,count,])

  // console.log(tstate)
  if(count === 9 && tstate === false){
    setTimeout(() => {
      Props.refresh()
    }, 300);
  }
  // console.log(DeclearWin === true)
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


const myTimeout = ()=>setTimeout(AIPlayer,1200)
  function checkAI(e){
    if(e.isTrusted === true ){
      // if(count === 0 && writings[choice][count] !== Props.firstPlayerTally ){
        // clearTimeout( myTimeout)
                myTimeout()
       // clear timeout
      // }
      // else {
      //   myTimeout()
      // }
     }
  }
  // from the last match clear the time out if x wins
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


useEffect(()=>{
  Props.setTState(false)
},[Props])


    // console.log(humant)
  //   function bind(e) {
  //     e.stopPropagation();
  //     e.preventDefault()
      
  // }
  //   function hinderClick(){
  //     for (let i = 0; i <    document.querySelectorAll('section').length; i++) {
  //       document.querySelectorAll('section')[i].addEventListener("click",(e)=>{bind(e)})}
  //     setTimeout(()=> {
  //       for (let i = 0; i <    document.querySelectorAll('section').length; i++) {
  //         document.querySelectorAll('section')[i].removeEventListener("click", (e)=>{
  //           bind(e)
  //         })}
  //     },1000)
      
  //   }
    // var divElement = document.getElementsByClassName('writeHere')[0]
// function handleEvent(event) {
//   event.stopPropagation();  // Prevents the event from bubbling up the DOM tree
//   event.preventDefault();   // Prevents the default behavior of the event (e.g., form submission, link navigation)
  
//   setTimeout(() => {
//     // Resume normal propagation and behavior after a timeout
//     // Do something here to continue the event's propagation or default behavior
//     // For example, you can trigger a click event on the element again:
//     // divElement.click();
    
//     // Or you can explicitly trigger the default behavior if it was prevented:
//     // window.location.href = divElement.getAttribute('href');
    
//     // Make sure to handle the event according to your specific use case
//   }, 1000); // Replace 1000 with the desired timeout value in milliseconds
// }

// divElement.addEventListener('click', handleEvent);




// var divElement = document.getElementsByClassName('writeHere')[0]

// let shouldPrevent = false;

// function handleEvent(event) {
//   if (shouldPrevent) {
//     event.preventDefault();
//     event.stopPropagation();
//   } else {
//     shouldPrevent = true;
//     setTimeout(() => {
//       shouldPrevent = false;
//       // Now, when the event is clicked again, it will resume normal behavior
//     }, 1000); // Replace 1000 with the desired timeout value in milliseconds
//   }
// }

// divElement.addEventListener('click', handleEvent);

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
}


  return (
    <div className='table'>
        <div className='tableCont'>
        {/* <div><span id='turn' >{writings[choice][count]}</span>'s turn <button onClick={()=>{}}>refres</button></div> */}
          <table>

          </table>
            {/* </div> */}
        </div>
    </div>
  )
}

export default XandO
