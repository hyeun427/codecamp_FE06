function solution(phone_number) {
    let answer = [];
    answer = [phone_number];
    answer.splice( 0, answer.length-5, "*")
    return answer;
}