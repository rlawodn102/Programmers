function solution(s) {
    var answer = 0;

    for (const x of s)
        x === '(' ? answer++ : answer--;

    if (answer < 0) return false;

    return answer === 0;
}

console.log(solution("()()"));