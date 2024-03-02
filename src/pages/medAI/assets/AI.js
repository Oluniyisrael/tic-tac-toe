function blockPlayer(tallys) {
    const possibleWin = [
        [0,1,2],
       //   [1, 2],
        [0, 3,6],
       //   [3, 6],
        [1, 4 ,7],
       //   [4, 7],
        [2, 5, 8],
       //   [5, 8],
        [0, 4,8],
       //   [4, 8],
        [2, 4, 6],
       //   [4, 6],
        [3, 4,5],
       //   [4, 5],
        [6, 7,8]
       //   [7, 8],
   ]
   for (let combination of possibleWin) {
       const [a, b, c] = combination
       // console.log(`A: ${a}, B: ${b}, C: ${c}`)
       if (tallys[a] !== '' && tallys[a] === tallys[b] ){
        console.log("C is :" + c)
               return c
   }
   console("Block funtion ran!")
}}
function mediumAI(tallys,AIPlay,setSquareColor,winDet) {

    if (!winDet) {
    const emptyIndexes = tallys.map((node, index) => node === "" ? index : -1) // Map empty strings to their indexes and non-empty strings to -1
    .filter(index => index !== -1); 
    setTimeout(() => {
        
        if (emptyIndexes.length > 0) {
            var indexToPlay = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
            indexToPlay = blockPlayer()
            console.log(indexToPlay)
            
          
            AIPlay(indexToPlay,setSquareColor)
        } else {
            console.log("There are no empty indexes.");
        }
    }, 1000);
}
else{
 console.log("winner:" + winDet)
}
}
export default mediumAI