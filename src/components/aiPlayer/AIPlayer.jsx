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
    