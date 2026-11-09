function solution(price, money, count) {
    var increase_price = 0;

    for (var i=0;i<count;i++) {
        increase_price += price;
        money -= increase_price;
    }
    
    money < 0 ? money : money = 0;

    return Math.abs(money);
}

console.log(solution(3,20,4));