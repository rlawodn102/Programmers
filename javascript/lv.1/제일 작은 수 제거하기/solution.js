function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }

    var min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1);

    return arr;
}

console.log(solution([4,3,2,1]));