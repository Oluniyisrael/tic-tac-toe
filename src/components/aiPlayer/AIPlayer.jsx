function AIPlayer(timeout){
      var square = document.getElementsByClassName('writeHere')
      var amount = (square.length -1)
      let randomIndex = Math.floor(Math.random() * amount);
        if(randomIndex < 0){randomIndex = 0}
          setTimeout(() => {
                // console.log(tstate)
              // if(tstate !== true){
                
                square[randomIndex].click()
              // }
              // else{}
              //to br continued
              }, timeout)
              //timeout function longer than refresh button, but when it is the player's turn clear timeout
  }  
  export default AIPlayer