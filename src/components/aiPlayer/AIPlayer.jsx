function AIPlayer(){
//     var amount =document.getElementsByClassName('writeHere').length
//     for (let i = 0; i < amount; i++) {
//         var randomSquareNo = Math.round(( amount* Math.random()))
//         square[i].addEventListener(
//             'click',
//             square[randomSquareNo].click()   

//         )
//     }
//     var square = document.getElementsByClassName('writeHere')
//     //very buggy
// }
// function  test () {
//     var square = document.getElementsByClassName('writeHere')
//     var amount = document.getElementsByClassName('writeHere').length
//             var randomSquareNo = Math.round(( amount* Math.random()))
//                 square[randomSquareNo].click()     
//                 // buggy  
// }
// function testing (){
//     var square = document.querySelectorAll('section')
//     var amount = square.length
//             var randomSquareNo = Math.round(( amount * Math.random()))
//                 square[randomSquareNo].click()   
// }
//   function test2(){
    for(i=0;i < document.getElementsByClassName('writeHere').length;i++){
        document.getElementsByClassName('writeHere')[i].addEventListener('click',test2)
    
    }
    // function test2(){
    //     var square = document.getElementsByClassName('writeHere')
    //     var amount = square.length
    //             var randomSquareNo = (Math.round(( amount* Math.random())) -1)
    //       etTimeout(() => {
    //             square[randomSquareNo].click()
    //         }, 2000)
               
    //   } 
    //
    // function test2(){
    //     var square = document.getElementsByClassName('writeHere')
    //     var amount = square.length
    //             var randomSquareNo = (Math.round(( amount* Math.random())) -1)
    //       setTimeout(() => {
    //             square[randomSquareNo].click()
    //         }, 2000)
               
    //   } 
    // for(i=0;i < document.getElementsByClassName('writeHere').length;i++){
    //     document.getElementsByClassName('writeHere')[i].addEventListener('mousedown',test2)
    
    // }
    //
    //Might be the one :/
    // function test2(){
    //     var square = document.getElementsByClassName('writeHere')
    //     var amount = (square.length)
    //     var randomSquareNo = (Math.round( Math.random() *  (amount - 1)))
    //       setTimeout(() => {
    //             console.log(randomSquareNo)
    //           console.log(amount)
    //             square[randomSquareNo].click()
            
    //          }, 500)
               
    //   } 
    // for( let i=0;i < document.getElementsByClassName('writeHere').length -1 ;i++){
    //     document.getElementsByClassName('writeHere')[i].addEventListener('mousedown',test2)
    
    // }
    //
    //

    var square = document.getElementsByClassName('writeHere')
    var amount = square.length
            var randomSquareNo = (Math.round(( amount* Math.random())) -1)
            square[randomSquareNo].click()
            // correct!!
  }  
  export default AIPlayer