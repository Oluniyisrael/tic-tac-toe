function mediumAI(tallys,AIPlay,setSquareColor,winDet) {
    if (!winDet) {
    const emptyIndexes = tallys.map((node, index) => node === "" ? index : -1) // Map empty strings to their indexes and non-empty strings to -1
    .filter(index => index !== -1); 
    setTimeout(() => {
        
        if (emptyIndexes.length > 0) {
            const indexToPlay = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
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