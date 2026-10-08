function solution(n) {
    var answer = [];
    [...String(n)].forEach(v => answer.push(parseInt(v)))
    return answer.reverse();
}

console.log(solution(12345));