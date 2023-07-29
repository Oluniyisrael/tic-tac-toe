function AIPlayer(){
    for(i=0;i < document.getElementsByClassName('writeHere').length;i++){
        document.getElementsByClassName('writeHere')[i].addEventListener('click',test2)
    
    }
     function test2(){
        var square = document.getElementsByClassName('writeHere')
        var amount = (square.length)
        var randomSquareNo = (Math.round( Math.random() *  (amount - 2)))
        if(randomSquareNo < 0 || randomSquareNo === -0 ){randomSquareNo = 0}
          setTimeout(() => {
                console.log(randomSquareNo)
              console.log(amount)
                square[randomSquareNo].click()
            
             }, 1000)
               
      } 
      // key
    // for( let i=0;i < document.getElementsByClassName('writeHere').length -1 ;i++){
    //     document.getElementsByClassName('writeHere')[i].addEventListener('mousedown',AIPlayer)
    
    // }// almost correct
    //

    // var square = document.getElementsByClassName('writeHere')
    // var amount = square.length
    //         var randomSquareNo = (Math.round(( amount* Math.random())) -1)
    //         square[randomSquareNo].click()
    //         // correct!!
  }  
  export default AIPlayer