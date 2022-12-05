const fs = require('fs');

const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let charMap = {}
for (let i = 0; i < chars.length; i++) {
    const letter = chars[i];
    charMap[letter] = i+1;
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

fs.readFile('./2022/day3/challenge1/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const input = data.split("\n")
    console.log(
        solveProblem(input)
    );
});
