function solution(num) {
  // 1이 될 때까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break;
    }

    answer++;

    //num이 짝수일 때: 해당 수에 2를 곱한다.
    if (num % 2 === 0) {
      num = num / 2; // num = num / 2;
      // num이 홀수일 때: 해당 수에 3을 곱한 값에 1을 더한다.
    } else {
      num = num * 3 + 1;
    }
  }
  return num !== 1 ? -1 : answer;
}
