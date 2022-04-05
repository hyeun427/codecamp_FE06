function solution(arr) {
  var answer = [];
  if (arr.length === 1) {
    return [-1];
  } else {
    answer = arr - Math.min(...arr);
    console.log([Math.min(...arr)]);
    console.log(arr);
    return answer;
  }
}

// 결국 풀지는 못함
