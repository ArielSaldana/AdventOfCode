const fs = require('fs');

function solveProblem(input) {
    // setup our crates structure
    const len = (input[0].length + 1) / 4;
    let crates = new Array();
    let index = 0;
    while (!input[index].includes("1")) {
        for (let i = 0; i < input[index].length +1; i+=4) {
            const val = input[index].substring(i, i+4);
            if (val.trim()) {
                if (crates[i/4] == undefined) {
                    crates[i/4] = new Array()
                }
                crates[i/4].unshift(val);
            }
        }
        index++;
    }

    //get ready to start processing creates movement sequences.
    const start = index + 1;

    for (let i = start; i < input.length; i++) {
        const regex = /move (?<amount>\d+) from (?<from>\d*) to (?<to>\d*)/g

        const instructions = input[i];
        let output;

        while (output = regex.exec(instructions)) {
            const amount = output.groups.amount - 0 // 0 forces int from string
            const from = output.groups.from - 1
            const to = output.groups.to - 1

            for (let j = 0; j < amount; j++) {
                const value = crates[from].pop()
                crates[to].push(value);
            }
        }
    }

    let returnString = "";
    for (let i = 0; i < crates.length; i++) {
        const val = crates[i].pop();
        returnString += val.substring(1, val.length-2);
    }
    return returnString
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
