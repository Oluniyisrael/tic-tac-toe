function AIPlayer(){
      var square = document.getElementsByClassName('writeHere')
      var amount = (square.length -1)
      let randomIndex = Math.floor(Math.random() * amount);
        if(randomIndex < 0){randomIndex = 0}
          // setTimeout(() => {

                square[randomIndex].click()
   
              // }, timeout)
              //timeout function longer than refresh button, but when it is the player's turn clear timeout
  }  
  export default AIPlayer