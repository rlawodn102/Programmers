function solution(left, right) {
    var answer = 0;
    
    for (var i=left;i<=right;i++) {
        var divisor = 0;
        
        for (j=1;j<=i;j++) i % j === 0 && divisor++;
                
        divisor % 2 === 0 ? answer += i : answer -= i;
    }
    
    return answer;
}

console.log(solution(3, 5));