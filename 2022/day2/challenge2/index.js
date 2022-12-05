const fs = require('fs');

const rock = {
    name: "rock",
    beats: null,
    loses: null,
    points: 1
}

const paper = {
    name: "paper",
    beats: null,
    loses: null,
    points: 2
}

const scissor = {
    name: "scissor",
    beats: null,
    loses: null,
    points: 3
}

rock.beats = scissor
paper.beats = rock
scissor.beats = paper;

rock.loses = paper;
paper.loses = scissor;
scissor.loses = rock;

const playMap = {
    "A": rock,
    "B": paper,
    "C": scissor
}

function solveProblem(input) {
    let playerScore = 0;

    for (const round of input) {
        const plays = round.split(" ");
        const opponentHand = playMap[plays[0]];
        const playResult = plays[1];

        if (playResult == "X") {
            playerScore += opponentHand.beats.points
        } else if (playResult == "Y") {
            playerScore += 3;
            playerScore += opponentHand.points
        } else {
            playerScore += opponentHand.loses.points
            playerScore += 6;
        }
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
