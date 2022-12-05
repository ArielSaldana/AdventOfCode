const fs = require('fs');

const playBook = {
    X : {
        winningPlay: "C",
        tiePlay: "A",
        points: 1
    },
    Y : {
        winningPlay: "A",
        tiePlay: "B",
        points: 2
    },
    Z : {
        winningPlay: "B",
        tiePlay: "C",
        points: 3
    }
}

function solveProblem(input) {
    let playerScore = 0;

    for (const round of input) {
        const plays = round.split(" ");
        const opponentPlay = plays[0];
        const playerPlay = plays[1];

        const play = playBook[playerPlay];

        // tie
        if (play.tiePlay == opponentPlay) {
            playerScore+=3;
        } else if (play.winningPlay == opponentPlay) {
            playerScore+=6;
        }
        playerScore+=play.points
    }

    return playerScore
}

fs.readFile('./2022/day2/challenge1/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const input = data.split("\n")
    console.log(
        solveProblem(input)
    );
});
