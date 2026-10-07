function solution(a, b) {
    var answer = 0;
    if (b >= a) for (var i=a;i<=b;i++) answer += i;
    else for (var i=b;i<=a;i++) answer += i;
    return answer;
}

console.log(solution(3, 5));