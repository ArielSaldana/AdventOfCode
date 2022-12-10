const fs = require('fs');

let charMap = {}
let letterRange = "azAZ"

for (
    let i = letterRange.charCodeAt(0), j = letterRange.charCodeAt(2); i <= letterRange.charCodeAt(1); i++) {
    const lowerCaseLetter = String.fromCharCode(i);
    const upperCaseLetter = String.fromCharCode(j);
    charMap[lowerCaseLetter] = i - 96;
    charMap[upperCaseLetter] = i - 70;
}

function solveProblem(input) {
    let sumOfPriorities = 0;
    let existingChars = {};
    for (let i = 0; i < input.length; i++) {
        const inputString = input[i];

        // define a character map for this line, counting each item only once per line
        let thisInputExistingChars = {};
        for (let char of inputString) {
            if (thisInputExistingChars[char] === undefined) {
                thisInputExistingChars[char] = 1
            }
        }

        // take the created character map above, compare it to the overall character map
        // if item doesn't exist add it to the map with value 1
        // if it does exist add one to its current value
        for (const char in thisInputExistingChars) {
            if (existingChars[char] === undefined) {
                existingChars[char] = 1
            } else {
                existingChars[char] += 1;
            }
        }

        // when i+1 is 3, we know that it's the third line in a series of lines, as thus
        // we find which character appeared 3 times and then add the weight value of that char to the sum.
        // we also reset the existingChars map so the next 3 lines if any, don't have old values.
        if ((i+1) % 3 === 0) {
            for (const item in existingChars) {
                if (existingChars[item] === 3) {
                    sumOfPriorities += charMap[item];
                }
            }
            existingChars = {}
        }
    }
    return sumOfPriorities;
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
