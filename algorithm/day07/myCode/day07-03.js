function solution(s) {
    var answer = s;
    if (answer.length % 2 == 0){
        const even = answer.length / 2;
        return (answer[even-1]+answer[even] )
    } else {
        const odd =  parseInt(answer.length / 2);
        return (answer[odd])
    }
}