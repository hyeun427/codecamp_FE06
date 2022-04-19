// 입력값(arg: string)뒤에 있는 : string는 출력값에 대한 타입!

import { useState } from "react";

// 1. 문자 타입
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

//
//
// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber("철수");

//
//
// 3. any 타입
const getAny2 = (arg: any): any => {
  return arg;
};
const result3_1 = getAny2("철수");
const result3_2 = getAny2(8);
const result3_3 = getAny2(true);

//
//
// 4. any 타입2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};
const result4 = getAnys("철수", "다람쥐초등학교", 8);

//
//
// 5. generic 타입 (들어온 타입을 그대로 사용)
function getGeneric<Mytype>(arg: Mytype): Mytype {
  return arg;
}
const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result5_1 = getGeneric(aaa);
const result5_2 = getGeneric(bbb);
const result5_3 = getGeneric(ccc);

//
//
// 6. generic 타입2
// prettier-ignore
function getGenerics<Mytype1, Mytype2, Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype3): [Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg1];
}
const result6 = getGenerics("철수", "다람쥐초등학교", 8);

//
//
// 7. generic - 축약1 // 6번과 7번은 같은 것. 타입 이름만 바꾼것!
// prettier-ignore
function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result7 = getGenericsT("철수", "다람쥐초등학교", 8);

//
//
// 8. generic - 축약2
// prettier-ignore
function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
// prettier-ignore
const result8 = getGenericsTUV<string, string, number>("철수", "다람쥐초등학교", 8);

//
//
// 9. useState에서의 generic
// useState의 라이브러리 안에서는 입력값의 타입이 출력값의 타입을 추론할 수 있도록 코드가 짜여있을거야. 우린 지금까지 모른채로 generic사용한거야!
// const [school, setSchool] = useState("다람쥐초등학교");
// const apple: number = 3;

//
//
// 10. 화살표 함수에서의 generic // 8번을 화살표 함수로 바꾼 것 뿐!~
// const getGenericsTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
//   return [arg3, arg2, arg1];
// }
