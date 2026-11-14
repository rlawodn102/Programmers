function solution(array, commands) {
    var answer = [];

    commands.forEach(command => {
        var new_arr = array
            .slice(command[0] - 1, command[1])
            .sort((a, b) => a - b);

        answer.push(new_arr[command[2] - 1]);
    })

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));