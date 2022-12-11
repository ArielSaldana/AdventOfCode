const fs = require('fs');

function solveProblem(input) {
    let highestNumberOfCalories = 0;
    let currentCaloriesSum = 0

    for (const calorieString of input) {
        // we try to parse the value to an int, we know if it's an empty string it'll return NaN
        const calorie = parseInt(calorieString);
        // if it's a NaN, aka an empty space in the input file we know the sum ends and
        // we should now do a comparison to see if it's the highest count
        if (isNaN(calorie)) {
            if (currentCaloriesSum > highestNumberOfCalories) {
                highestNumberOfCalories = currentCaloriesSum
            }
            // reset our counter to 0, so we don't have old input values being counted.
            currentCaloriesSum = 0;
        } else {
            // add the current value to the current sum
            currentCaloriesSum += calorie;
        }
    }
    return highestNumberOfCalories;
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