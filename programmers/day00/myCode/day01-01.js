let str = "this is the MOMENT, THIS IS THE day";

// 모든 문자열 소문자로 바꾸기
let lowercase = str.toLowerCase();
// , 로 split하기
let split1 = lowercase.split(",");
// 위 결과를 이어붙여서 하나의 문자열로 만들기
let concat = split1[0].concat(split1[1]);
console.log(concat);
// 하나의 문자열을 공백으로 나누어주면 단어만 추출 가능
let split2 = concat.split(" ");
console.log(split2);
// 깊은복사해서 중복 값 제거해주기, 이 값은 최종 결과의 키값이 된다.
let key = [...new Set(split2)];
console.log(key);
// 이제 key와 split2를 비교해서 각 단어가 몇개씩 있는지 카운팅해줘야함.
for (let i = 0; i < split2.length; i++) {
  let count = 0;
  for (let j = 0; j < split2.length; j++) {
    if (key[i] === split2[j]) {
      count += 1;
    } else if (key[i] !== split2[j]) {
      count = count;
    }
  }

  let value = count;
  console.log(value);
}
