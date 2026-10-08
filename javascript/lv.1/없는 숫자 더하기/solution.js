function solution(numbers) {
    var answer = 0;
    for (var i=0;i<10;i++) numbers.indexOf(i) === -1 && (answer += i)
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]));