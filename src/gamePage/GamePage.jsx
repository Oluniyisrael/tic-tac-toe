import React from 'react'
import './GamePage.css'

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

//  var writings = ['X','O']
var clicked = (e)=>{
  const id = e.target.className = 'changeNode'
  console.log(id)
}
  return (
    <div className='table'>
        <div className='tableCont' >
            <table className='XO'>
              <tr className='tableRow'>
                <td className='tableData'
                //  onClick={changeClick}
                 ></td>

                <td className='tableData' onClick={clicked}></td>
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