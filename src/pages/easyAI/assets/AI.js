function easyAI(newTallyInsertion,AITally,AIPlay) {
    setTimeout(() => {
        
        const emptyIndexes = newTallyInsertion.map((node, index) => node === "" ? index : -1) // Map empty strings to their indexes and non-empty strings to -1
        .filter(index => index !== -1); 
        if (emptyIndexes.length > 0) {
            const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
            newTallyInsertion[randomIndex] = AITally
            AIPlay(newTallyInsertion)
        } else {
            console.log("There are no empty indexes.");
        }
    }, 1000);
}
export default easyAI