function reverse(matrix) {
    const N = matrix.length; 
    let result = ""; 
    for (let i = N - 1; i >= 0; i--) {
        result += matrix[i][0] + " ";
    }
    for (let j = 1; j < N; j++) {
        result += matrix[0][j] + " ";
    }
    for (let i = 1; i < N; i++) {
        result += matrix[i][N - 1] + " ";
    }
    for (let j = N - 2; j > 0; j--) {
        result += matrix[N - 1][j] + " ";
    }
    console.log(result.trim());
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

reverse(matrix);
