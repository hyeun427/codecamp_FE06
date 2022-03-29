// reduce

function solution(n) {
  return new Array(n).fill(1).reduce((el, cu, i) => {
    return n % (cu + i) === 0 ? el + (cu + i) : el;
  }, 0);
}

// reference

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}
