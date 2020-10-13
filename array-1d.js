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
    const size = splits[0];
    const arrayData = splits.splice(1, size);

    for (let i = arrayData.length - 1; i >= 0; --i) {
        console.log(arrayData[i]);
    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
