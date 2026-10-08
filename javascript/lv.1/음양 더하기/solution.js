function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((v, i) => {
        answer += signs[i] ? v : -v;
    })
    return answer;
}

console.log(solution([4,7,12], [true,false,true]));