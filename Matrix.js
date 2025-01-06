function Matrix(N, M, arr) {
    let result = [];
    
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
          for (let j = M - 1; j >= 0; j--) 
          {
           result.push(arr[i][j]);
          }
        } 
        else {
          for (let j = 0; j < M; j++) 
          {
            result.push(arr[i][j]);
          }
        }
    }
    console.log(result.join(" "));
}


let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2]
];


let N = arr.length;
let M = arr[0].length;


Matrix(N, M, arr);
