function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function give2ways(tallys, firstPlayerTally) {
    const AITally = firstPlayerTally === "X" ? "O" : "X"
    const possible2Ways = [
        [0, 2, 6],
        [0, 1, 3],
        [0, 4, 6],
        [0, 6, 8],
        [1, 2, 4],
        [4, 5, 7],
        [4, 8, 6],
        [5, 6, 8],
        [6, 0, 4],
    ];

    if (tallys.every(mark => mark === '')) {
        const random2wayNo = Math.floor(Math.random() * possible2Ways.length);
        return possible2Ways[random2wayNo][0]; 
    }
    shuffleArray(possible2Ways)
    for (const combo of possible2Ways) {
        const [a, b, c] = combo;
        if (tallys[a] === AITally) {
            if (tallys[b] === '') return b;
            if (tallys[c] === '') return c;
        } else if (tallys[b] === AITally) {
            if (tallys[a] === '') return a;
            if (tallys[c] === '') return c;
        } else if (tallys[c] === AITally) {
            if (tallys[a] === '') return a;
            if (tallys[b] === '') return b;
        }
    }

    // If AI cannot play in the pattern, return null
    return -1;
}

function block2ways(tallys,firstPlayerTally) {
    const edges = [1,3,5,7]
    const corners =[0,2,6,8]
    const possible2Ways = [
        [0, 2, 6 ],
        [0, 1, 3],
        [0, 4, 6],
        [0, 6, 8],
        [1, 2, 4],
        [4, 5, 7],
        [4, 8, 6],
        [5, 6, 8],
        [6, 0, 4],
        [8, 5, 7],

    ];
    for (let combination of possible2Ways) {
        const [a, b, c] = combination;
        if (tallys[a] === firstPlayerTally && tallys[a] === tallys[b] && tallys[c] === '') {
            if (corners.some(corner=> corner === a ) && (corners.some(corner=> corner === b )) ) {
                const randomEdgeIndex = Math.floor(Math.random() * edges.length)
                return  edges[randomEdgeIndex]
            }
            // else if (edges.some(edge=> edge === a ) && (edges.some(edge=> edge === b )) ) {
            //     const
            // }
        } else if (tallys[b] === firstPlayerTally && tallys[b] === tallys[c] && tallys[a] === '') {
            if (corners.some(corner=> corner === b ) && (corners.some(corner=> corner === c )) ) {
                const randomEdgeIndex = Math.floor(Math.random() * edges.length)
                return  edges[randomEdgeIndex]
            }
        } else if (tallys[a] === firstPlayerTally && tallys[a] === tallys[c] && tallys[b] === '') {
            if (corners.some(corner=> corner === a ) && (corners.some(corner=> corner === c )) ) {
                const randomEdgeIndex = Math.floor(Math.random() * edges.length)
                return  edges[randomEdgeIndex]
            }
        }
    }
    console.log("block 2 ways")
    return -1
}
function playCasual(tallys,firstPlayerTally){
    // const emptyIndexes = tallys.map((node, index) => node === "" ? index : -1).filter(index => index !== -1)
    const edges = [1,3,5,7]
    const corners =[0,2,4,6,8]
    var indexToPlay;
    if (tallys.filter(tally => tally === "").length === 8 && tallys.every((tally, index) => index === 4 ? tally === firstPlayerTally : tally === "")) {
         const randomIndex = Math.floor(Math.random() * corners.length);
           indexToPlay =  corners[randomIndex]
    }
    else if (tallys.filter(tally => tally === "").length === 8 && corners.some(corner => tallys[corner] === firstPlayerTally))  {
        // const randomIndex = Math.random() * corners.length 
        indexToPlay = 4
    }
    else if(tallys.filter(tally => tally === "").length === 8 && edges.some(edge => tallys[edge] === firstPlayerTally)){
        const randomIndex = Math.floor(Math.random() * corners.length);
        indexToPlay =  corners[randomIndex]
    }
    console.log("playcasual")
    return indexToPlay
}

function blockPlayer(tallys) {

    const possibleWin = [
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    for (let combination of possibleWin) {
        const [a, b, c] = combination;
        if (tallys[a] !== '' && tallys[a] === tallys[b] && tallys[c] === '') {
            return c;
        } else if (tallys[b] !== '' && tallys[b] === tallys[c] && tallys[a] === '') {
            return a;
        } else if (tallys[a] !== '' && tallys[a] === tallys[c] && tallys[b] === '') {
            return b;
        }
    }
    // console.log( firstPlayerTally)
    return -1;

}
function winPlayer(tallys,firstPlayerTally) {
    const AITally = firstPlayerTally === "X" ? "O" : "X"
    const possibleWin = [
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    for (let combination of possibleWin) {
        const [a, b, c] = combination;
        if (tallys[a] === AITally && tallys[a] === tallys[b] && tallys[c] === '') {
            return c;
        } else if (tallys[b] === AITally && tallys[b] === tallys[c] && tallys[a] === '') {
            return a;
        } else if (tallys[a] === AITally && tallys[a] === tallys[c] && tallys[b] === '') {
            return b;
        }
    }
    console.log( firstPlayerTally)
    return -1;

}

function hardAI(tallys, AIPlay, setSquareColor, winDet, firstPlayerTally) {
    if (!winDet) {
        const emptyIndexes = tallys.map((node, index) => node === "" ? index : -1)
            .filter(index => index !== -1);

        setTimeout(() => {
            let  indexToPlay = 0
            if (emptyIndexes.length > 0) {
                indexToPlay = winPlayer(tallys,firstPlayerTally)
                if (indexToPlay === -1) { // If no blocking move is found, check for winning mode
                    indexToPlay = blockPlayer(tallys);
                    if (indexToPlay === -1) {
                        indexToPlay = block2ways(tallys,firstPlayerTally)
                        if (indexToPlay === -1) {
                            indexToPlay = give2ways(tallys,firstPlayerTally)
                            if (indexToPlay === -1) {
                                indexToPlay = playCasual(tallys,firstPlayerTally)
                            }
                        }
                    }
                }
                AIPlay(indexToPlay, setSquareColor);
                console.log(`Index to play is${indexToPlay}`)
                // console.log(`Tallys are ${tallys}`)
                console.log(tallys)

            } else {
                console.log("There are no empty indexes.");
            }
        }, 1000);
    } else {
        console.log("Winner: " + winDet);
    }
}

export default hardAI;
