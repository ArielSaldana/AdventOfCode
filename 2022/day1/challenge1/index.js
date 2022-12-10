const fs = require('fs');

let highestNumberOfCalories = 0;
let currentCaloriesSum = 0

fs.readFile(`${__dirname}/input.txt`, 'utf8', (err, data) => {
   if (err) {
       console.log(err);
       return;
   }

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
    console.log(highestNumberOfCalories);
});
