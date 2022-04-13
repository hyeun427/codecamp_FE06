function solution(nums) {
  // 우선 고를 수 있는 포켓몬의 수를 구하기
  var pick = nums.length / 2;
  console.log(pick);
  // 포켓몬 번호에서 중복 빼고 몇 종류가 있는지 확인
  var type = [...new Set(nums)];
  console.log(type.length);

  // 종류 갯수에서 고를 포켓몬의 수 조합
  if (type.length >= pick) {
    return pick;
  } else if (type.length < pick) {
    return type.length;
  }
}
