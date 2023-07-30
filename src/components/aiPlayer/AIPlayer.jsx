function AIPlayer(){
    // for(let i=0;i < document.getElementsByClassName('writeHere').length;i++){
    //     document.getElementsByClassName('writeHere')[i].addEventListener('click',test2)
    // }
    //  function test2(){
      var square = document.getElementsByClassName('writeHere')
      var amount = (square.length -1)
      let randomIndex = Math.floor(Math.random() * amount);
      console.log(randomIndex)
      console.log(amount)
        if(randomIndex < 0){randomIndex = 0}
          setTimeout(() => {
                console.log(randomIndex)
              console.log(amount)
                square[randomIndex].click()
              }, 1000)
               
      // } 
      //experiment
      // function simulateClick(divElement) {
      //   // Create a custom event that is not recognizable as a regular click event
      //   const customEvent = new Event('simulatedClick', {
      //     bubbles: true,
      //     cancelable: true,
      //   });
  }  
  export default AIPlayer