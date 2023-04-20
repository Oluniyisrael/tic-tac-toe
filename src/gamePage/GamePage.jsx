import React,{useState} from 'react'
import './GamePage.css'
import { useEffect } from 'react';

function GamePage() {
  // for (let i = 0; i < 8; i++) {
  //   document.getElementByClassName('tableData')[i].addEventListener('click',()=>{
  //     document.getElementsByClassName('tableData')[i].classList.toggle('changeNode')
  //  })    
  // }
  // function changeClick(e){
  //   e.target.classlist.toggle("changeNode")
  // .classList.toggle('changeNode')
  // }
//  var target = document.getElementsByClassName('tableData')[i]
// function something (){
//   if( document.getElementsByClassName('tableData')[0].classList.value==='tableData'){
//       return 1;
//   }    
//       else{return 0;}
// }
//
// document.getElementsByClassName('tableData')[0].classList.toggle('changeNode')

// var square =  document.getElementsByClassName('tableData')
// for( var i= 0; i < 8; i++){
//   square[i].addEventListener("click",()=>{
  //       square[i].classlist.toggle('changeNode')
  //   }
  //   )
  // }
  
  const [count,setCount] = useState(0)
  function add(){
    setCount(count + 1);
    if(count === 8){
      setCount(count - 8)
    }
    console.log(count)
  }
  useEffect(() => {
    var writings = 
    [
      ['X','O','X','O','X','O','X','O','X'],
      ['O','X','O','X','O','X','O','X','O']
    ]             
    var clicked = (e)=>{
      // for (let i = 0; i < writings.length; i++) {
        const id = e.target.innerText = writings[0][count]
        // console.log(id)
      // }
      
    }
    for (let i = 0; i < 9; i++) {
      document.getElementsByClassName('writeHere')[i].addEventListener('click', clicked)
    }
  }, [count])
  
  return (
    <div className='table'>
        <div className='tableCont' onClick={add}>
            <table className='XO'
           // onClick={add}
           >
            {/* To be continued, Counter divs will be in front of tiles and will dissapear after been clicked to avoid random value bugs */}
            <tbody>
              <tr className='tableRow'>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
                {/* //  onClick={changeClick} */}
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
              </tr>
              <tr className='tableRow'>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
                <td className='tableData'>
                  <span className='writeHere'></span>
                </td>
              </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default GamePage