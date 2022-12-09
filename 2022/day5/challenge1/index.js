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
    console.log(index);
}

fs.readFile(`${__dirname}/input_example.txt`, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const input = data.split("\n")
    console.log(
        solveProblem(input)
    );
});
