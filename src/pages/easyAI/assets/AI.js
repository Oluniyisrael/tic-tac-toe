function easyAI(newTallyInsertion,newNode,playerTally,count,AIPlay,setNewNode,setCount) {
    const AITally = playerTally === "O" ? "X" : "O"
    setTimeout(() => {
        
        const emptyIndexes = newTallyInsertion.map((node, index) => node === "" ? index : -1) // Map empty strings to their indexes and non-empty strings to -1
        .filter(index => index !== -1); 
        if (emptyIndexes.length > 0 ) {
            const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
            console.log(randomIndex)
            newTallyInsertion[randomIndex] = AITally
            newNode[randomIndex] = "changeNode"
            setNewNode(newNode)
            console.log(AITally)
            AIPlay(newTallyInsertion)
            console.log(newTallyInsertion)
            setCount(count+1)
        } else {
            console.log("There are no empty indexes.");
        }
    }, 1000);
    localStorage.clear()
}
export default easyAI