const fs = require('fs');

function solveProblem(input) {
    // let highestNumberOfCalories = 0;
    let currentCaloriesSum = 0
    // we default to 0 for the first 3
    const calorieInventory = [0,0,0]

    // we create a string array of each line in the input file
    const calories = data.split('\n');

    // we know each item in the array is either an int represented as a string
    // or  an empty string.
    for (const calorieString of calories) {

        // we try to parse the value to an int, we know if it's an empty string it'll return NaN
        const calorie = parseInt(calorieString);

        // if it's a NaN, aka an empty space in the input file we know the sum ends and
        // we should now do a comparison to see if it's the highest count
        if (isNaN(calorie)) {
            // add current calories to inventory array
            calorieInventory.push(currentCaloriesSum)
            // reset our counter to 0, so we don't have old input values being counted.
            currentCaloriesSum = 0;
        } else {
            // add the current value to the current sum
            currentCaloriesSum += calorie;
        }
    }

    // js sort unfortunately sorts by string value, so we create a new lambda function to sort properly.
    calorieInventory.sort((a, b) => {
        return a - b;
    });

    // the last 3 items of the array's sum is the answer
    return (
        calorieInventory[calorieInventory.length -1] +
        calorieInventory[calorieInventory.length -2] +
        calorieInventory[calorieInventory.length -3]
    );
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
