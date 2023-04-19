import React from 'react'
import './GamePage.css'

function GamePage() {
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
// square[0].addEventListener('click',()=>{
//   square[0].classList.toggle('changeNode')
// })

  return (
    <div className='table'>
        <div className='tableCont'>
            <table className='XO'>
              <tr className='tableRow'>
                <td className='tableData'
                //  onClick={changeClick}
                 ></td>

                <td className='tableData'></td>
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