function solution(s){
    var answer = true;
    var p_cnt = 0;
    var y_cnt = 0;
    
    [...s].forEach(v => {
        if (v === "p" || v === "P") p_cnt++;
        if (v === "y" || v === "Y") y_cnt++;
    })

    return p_cnt === y_cnt;
}

console.log(solution("pPoooyY"));