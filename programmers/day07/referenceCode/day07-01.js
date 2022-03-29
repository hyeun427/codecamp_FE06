// 삼항연산자

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// if 조건문

function solution(num) {
  if (num % 2 === 0) {
    // 짝수 : 나머지 값이 0일 경우
    return "Even";
  } else {
    // 홀수 : 나머지 값이 1일 경우
    return "Odd";
  }
}
