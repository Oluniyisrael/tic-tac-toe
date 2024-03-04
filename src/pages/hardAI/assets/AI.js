function give2ways(tallys,AITally) {
    const possible2Ways = [
        [0, 2, 6],
        [0, 1, 3],
        [1, 2, 4],
        [4, 5, 7],

    ];
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

function mediumAI(tallys, AIPlay, setSquareColor, winDet, firstPlayerTally) {
    if (!winDet) {
        const emptyIndexes = tallys.map((node, index) => node === "" ? index : -1)
            .filter(index => index !== -1);

        setTimeout(() => {
            if (emptyIndexes.length > 0) {
                let  indexToPlay = winPlayer(tallys,firstPlayerTally)
                if (indexToPlay === -1) { // If no blocking move is found, check for winning mode
                    indexToPlay = blockPlayer(tallys);
                    if (indexToPlay === -1) {
                        indexToPlay = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
                    }
                }
                AIPlay(indexToPlay, setSquareColor);
            } else {
                console.log("There are no empty indexes.");
            }
        }, 1000);
    } else {
        console.log("Winner: " + winDet);
    }
}

export default mediumAI;
