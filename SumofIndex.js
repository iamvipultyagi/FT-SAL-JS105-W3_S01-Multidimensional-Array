
function sumOfIndexes(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let row = "";
        for (let j = 0; j < M; j++) {
            row += (i + j) + " "; 
        }
        console.log(row.trim()); 
    }
}

let N=3,M=2;
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

sumOfIndexes(N, M, arr);
