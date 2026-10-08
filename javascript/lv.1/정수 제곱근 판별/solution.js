function solution(n) {
    var answer = 0;
    var sqrt = Math.sqrt(n);
    
    if (sqrt % 1 === 0) answer = (sqrt + 1) ** 2;
    else answer = -1;
    
    return answer;
}

console.log(solution(121));