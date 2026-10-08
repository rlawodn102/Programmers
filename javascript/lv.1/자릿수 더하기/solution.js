function solution(n) {
    var answer = 0;
    [...String(n)].forEach(v => answer += parseInt(v));
    return answer;
}

console.log(solution(123));