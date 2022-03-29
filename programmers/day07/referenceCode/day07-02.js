// reference

function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // 총합에서 배열의 길이 만큼 나눠주면 평균값
  return sum / arr.length;
}

// reduce

function solution(arr) {
  const sum = arr.reduce((cu, el) => {
    return cu + el;
  }, 0);
  return sum / arr.length;
}
