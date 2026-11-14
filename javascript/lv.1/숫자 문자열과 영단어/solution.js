function solution(s) {
    const num_eng = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

    let answer = "";
    let arr_s = [...s];
    let letter = "";

    for (var i = 0; i < arr_s.length; i++) {
        if (/^[0-9]+$/.test(arr_s[i])) {
            answer += arr_s[i];
            letter = "";
        } else {
            letter += arr_s[i];
            num_eng[letter] !== undefined && (answer += num_eng[letter], letter = "");
        }
    }

    return parseInt(answer);
}

console.log(solution("one4seveneight"));