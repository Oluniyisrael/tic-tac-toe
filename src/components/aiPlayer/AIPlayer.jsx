function AIPlayer(tstate){
      var square = document.getElementsByClassName('writeHere')
      var amount = (square.length -1)
      let randomIndex = Math.floor(Math.random() * amount);
        if(randomIndex < 0){randomIndex = 0}
          setTimeout(() => {
              //   console.log(randomIndex)
              // if(tstate !== true){
                square[randomIndex].click()
              // }
              // else{}
              //to br continued
              }, 1000)
  }  
  export default AIPlayer