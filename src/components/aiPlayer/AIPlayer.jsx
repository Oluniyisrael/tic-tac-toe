function AIPlayer(){
    var amount =document.getElementsByClassName('writeHere').length
    for (let i = 0; i < amount; i++) {
        var randomSquareNo = Math.round(( amount* Math.random()))
        square[i].addEventListener(
            'click',
            square[randomSquareNo].click()   

        )
    }
    var square = document.getElementsByClassName('writeHere')
    //very buggy
}
function  test () {
    var square = document.getElementsByClassName('writeHere')
    var amount = document.getElementsByClassName('writeHere').length
            var randomSquareNo = Math.round(( amount* Math.random()))
                square[randomSquareNo].click()     
                // buggy  
}
function testing (){
    var square = document.querySelectorAll('section')
    var amount = square.length
            var randomSquareNo = Math.round(( amount * Math.random()))
                square[randomSquareNo].click()   
}
  function test2(){
    var square = document.getElementsByClassName('writeHere')
    var amount = square.length
            var randomSquareNo = (Math.round(( amount* Math.random())) -1)
            square[randomSquareNo].click()
            // correct!!
  }  