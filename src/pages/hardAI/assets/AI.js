function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function give2ways(tallys, firstPlayerTally) {
    console.log("Give 2 ways");
    const AITally = firstPlayerTally === "X" ? "O" : "X";
    const possible2Ways = [
        [0, 2, 6,[1, 3, 4]],
        [0, 2, 4,[1, 6, 8]],
        [0, 4, 6,[2, 3, 8]],
        [0, 6, 8,[3, 4, 7]],
        [1, 2, 4,[0, 6, 7]],
        [4, 8, 6,[0, 2, 7]],
        [6, 0, 4,[2, 3, 8]],
        [0, 1, 3,[2, 3]],
        [1, 5, 2,[0, 8]],
        [3, 1, 0,[6, 2]],
        [1, 3, 0,[6, 2]],
        [5, 7, 4,[2, 4]],
        [5, 6, 8,[2, 7]],
        [3, 7, 6,[0, 8]],
        [5, 7, 8,[2, 6]],


    ];

    shuffleArray(possible2Ways);

    if (tallys.every(mark => mark === '')) {
        const random2wayNo = Math.floor(Math.random() * possible2Ways.length);
        return possible2Ways[random2wayNo][0]; 
    }

    for (const combo of possible2Ways) {
        const [a, b, c] = combo;

        // Check if the player's tally blocks a potential two-way win
        if (tallys[a] !== AITally && tallys[b] === AITally && tallys[c] === AITally) {
            if (tallys[a] === '') return a;
        } else if (tallys[b] !== AITally && tallys[a] === AITally && tallys[c] === AITally) {
            if (tallys[b] === '') return b;
        } else if (tallys[c] !== AITally && tallys[a] === AITally && tallys[b] === AITally) {
            if (tallys[c] === '') return c;
        }
    }

    // If the player's tally does not block a two-way win, continue with the normal logic
    for (const combo of possible2Ways) {
        const [a, b, c] = combo;
        if (tallys[a] === AITally) {
            if (tallys[b] === '' && tallys[c] === '') return Math.random() < 0.5 ? b : c;
        } else if (tallys[b] === AITally) {
            if (tallys[a] === '' && tallys[c] === '') return Math.random() < 0.5 ? a : c;
        } else if (tallys[c] === AITally) {
            if (tallys[a] === '' && tallys[b] === '') return Math.random() < 0.5 ? a : b;
        }
    }

    // If AI cannot play in the pattern, return null
    return -1;
}


function block2ways(tallys, firstPlayerTally) {
    console.log("block 2 ways");
    const edges = [1, 3, 5, 7];
    const corners = [0, 2, 6, 8];
    const possible2Ways = [
        [0, 2, 6],
        [0, 2, 4],
        [0, 1, 3],
        [0, 3, 4],
        [0, 4, 6],
        [0, 6, 8],
        [1, 2, 4],
        [1, 5, 2], // !6
        [1, 3, 0], // !8
        [3, 7, 6], // !2
        [4, 5, 7],
        [4, 8, 6],
        [5, 6, 8],
        [5, 7, 8], // !0
        [6, 0, 4],
        [8, 5, 7],
    ];
    for (let combination of possible2Ways) {
        const [a, b, c] = combination;
        if (tallys[a] === firstPlayerTally && tallys[a] === tallys[b] && tallys[c] === '') {
            if (corners.some(corner => corner === a) && corners.some(corner => corner === b)) {
                const randomEdgeIndex = Math.floor(Math.random() * edges.length);
                const indexToPlay = edges[randomEdgeIndex];
                if (tallys[indexToPlay] === '') {
                    return indexToPlay;
                }
            } else if (edges.some(edge => edge === a) && edges.some(edge => edge === b)) {
                let indexToAvoid = -1;
                if (a === 1 && b === 5) {
                    indexToAvoid = 6;
                } else if (a === 1 && b === 3) {
                    indexToAvoid = 8;
                } else if (a === 3 && b === 7) {
                    indexToAvoid = 2;
                } else if (a === 5 && b === 7) {
                    indexToAvoid = 0;
                }
                const availableCorners = corners.filter(corner => corner !== indexToAvoid);
                const randomCornerIndex = Math.floor(Math.random() * availableCorners.length);
                const indexToPlay = availableCorners[randomCornerIndex];
                if (tallys[indexToPlay] === '') {
                    return indexToPlay;
                }
            }
        } else if (tallys[b] === firstPlayerTally && tallys[b] === tallys[c] && tallys[a] === '') {
            if (corners.some(corner => corner === b) && corners.some(corner => corner === c)) {
                const randomEdgeIndex = Math.floor(Math.random() * edges.length);
                const indexToPlay = edges[randomEdgeIndex];
                if (tallys[indexToPlay] === '') {
                    return indexToPlay;
                }
            }
        } else if (tallys[a] === firstPlayerTally && tallys[a] === tallys[c] && tallys[b] === '') {
            if (corners.some(corner => corner === a) && corners.some(corner => corner === c)) {
                const randomEdgeIndex = Math.floor(Math.random() * edges.length);
                const indexToPlay = edges[randomEdgeIndex];
                if (tallys[indexToPlay] === '') {
                    return indexToPlay;
                }
            }
        }
    }
    return -1;
}

function playCasual(tallys,firstPlayerTally){
    // const emptyIndexes = tallys.map((node, index) => node === "" ? index : -1).filter(index => index !== -1)
    console.log("playcasual")
    const edges = [1,3,5,7]
    const corners =[0,2,6,8] 
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
        // const randomIndex = Math.floor(Math.random() * corners.length);
        // indexToPlay =  corners[randomIndex]
        indexToPlay = 4

    }
    else {
        const emptyIndexes = tallys.map((tally,index) => tally === "" ? index : -1).filter(tally=> tally !== -1)
        indexToPlay= emptyIndexes[(Math.floor(Math.random() * emptyIndexes.length))]
    }
    return indexToPlay
}

function blockPlayer(tallys) {
    console.log( "Block player")
    const possibleWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
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
    return -1;

}
function winPlayer(tallys,firstPlayerTally) {
    console.log("Win player")

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
                if (indexToPlay === -1) { 
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
//bug between !play casual and ! block 2 ways
//possible bug in block 2 ways

export default hardAI;
