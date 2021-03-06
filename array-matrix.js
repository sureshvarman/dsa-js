process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

process.stdin.on("SIGINT", function () {
    main(stdin_input);
 });

function main(input) {
    const splits = input.split("\n");
    const size = splits[0].split(" ");
    const m = size[0];
    const n = size[1];

    let resultArr = []

    let mData = splits.splice(1, m);

    for (let i = 0; i < mData.length; i++) {
        const nData = mData[i].split(" ");
        for (let j = 0; j < n; j++) {
            if (!resultArr[j]) resultArr[j] = []
            resultArr[j][i] = nData[j];
        }
    }

    for (let i = 0; i < resultArr.length; i++) {
        console.log(resultArr[i].join(" "));
    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
