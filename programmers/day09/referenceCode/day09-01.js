// reference

function solution(n) {
  n = String(n);
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }
  return answer;
}

// reduce

function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((cu, el) => {
      return cu + Number(el);
    }, 0);
  return answer;
}
