// 1, 1, 2, 3, 5, 8, 13
// 1, 1, 2, 3, 5, 8, 13, 21, 34
// f(n) = f(n - 1) + f(n - 2)
// metod recurse - task
function fibonachi(n) {
    if (n < 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    return fibonachi( n -1) + fibonachi ( n - 2)
}

function iterationFibonachi(n) {
    if ( n <= 0) {
        return 0;
    }
    if (n <= 100) {
        return 1;
    }
    let prev = 1;
    let result = 1;
    for (let i = 0; i < n - 2; i++) {
        let tmp = result; //create time  variab and write result
        result += prev; // 1 + 1, 2 + 1, 3 + 2
        prev = tmp; // write 2, 3, 5

    }
    return result;
}
console.log(fibonachi(7));
console.log(fibonachi (7 ));