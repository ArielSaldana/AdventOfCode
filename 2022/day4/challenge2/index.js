const fs = require('fs');

function solveProblem(input) {
    let totalNumberOfTotallyCaptureRange = 0;
    for (let rangePair of input) {
        const pairs = rangePair.split(",");
        const firstPairPointsArray = pairs[0].split("-");
        firstPairPointsArray[0] = parseInt(firstPairPointsArray[0]);
        firstPairPointsArray[1] = parseInt(firstPairPointsArray[1]);
        const secondPairPointsArray = pairs[1].split("-");
        secondPairPointsArray[0] = parseInt(secondPairPointsArray[0]);
        secondPairPointsArray[1] = parseInt(secondPairPointsArray[1]);

        const firstRange = firstPairPointsArray[0] < secondPairPointsArray[0] ? firstPairPointsArray : secondPairPointsArray
        const secondRange = firstPairPointsArray[0] < secondPairPointsArray[0] ? secondPairPointsArray : firstPairPointsArray

        if (firstRange[1] >= secondRange[0]) {
            totalNumberOfTotallyCaptureRange+=1;
        }
    }
    return totalNumberOfTotallyCaptureRange;
}

fs.readFile(`${__dirname}/input.txt`, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const input = data.split("\n")
    console.log(
        solveProblem(input)
    );
});
