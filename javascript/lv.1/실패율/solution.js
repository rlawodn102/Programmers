function solution(N, stages) {
    var answer = [];
    let total = stages.length;

    for (var i = 1; i <= N; i++) {
        var fail_count = stages.filter(v => v === i).length;
        var rate = total !== 0 ? fail_count / total : 0;

        answer.push({
            stage: i,
            rate: rate
        })

        total -= fail_count;
    }

    answer.sort((a, b) => {
        return a.rate === b.rate
            ? a.rate - b.rate
            : b.rate - a.rate;
    })

    return answer.map(v => v.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));