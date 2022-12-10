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
    for (const inventory of input) {
        const inventoryLength = inventory.length;
        const firstCompartment = inventory.substring(0, (inventoryLength/2));
        const secondCompartment = inventory.substring(inventoryLength/2, inventoryLength);

        let containerInventory = { }
        for (let i = 0; i < firstCompartment.length; i++) {
            const item = firstCompartment[i];
            if (!containerInventory[item]) {
                containerInventory[item] = true
            }
        }

        for (let i = 0; i < secondCompartment.length; i++) {
            const item = secondCompartment[i];
            if (containerInventory[item] == true) {
                sumOfPriorities += charMap[item]
                containerInventory[item] = false // don't count it again
            }
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
