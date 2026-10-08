function solution(x) {
    var answer = true;
    var num = 0;
    
    [...String(x)].forEach(v => num += parseInt(v));
    
    return x % num ? false : true;
}

console.log(solution(10));