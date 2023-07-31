function AIPlayer(count,tstate){
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
              if(count !== 9 || tstate !== true){
                square[randomIndex].click()
              }
              }, 1000)
               
      // } 
      
  //         else{e.preventDefault()}
  //     })
  // }
  }  
  export default AIPlayer