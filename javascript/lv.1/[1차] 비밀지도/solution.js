function solution(n, arr1, arr2) {
    var answer = [];

    let arr10to2_1 = arr1.map(v => v.toString(2).padStart(n, 0));        
    let arr10to2_2 = arr2.map(v => v.toString(2).padStart(n, 0));

    for(var i=0;i<n;i++) {
        let num1 = arr10to2_1[i].split('');
        let num2 = arr10to2_2[i].split('');
        let num = '';

        for(var j=0;j<n;j++) {
            num += num1[j] === "1" || num2[j] === "1" ? "#" : " ";
        }

        answer.push(num);
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));