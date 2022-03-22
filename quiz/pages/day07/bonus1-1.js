const classmates = [
    {name: "철수", age: 10, school: "토끼초등학교"},
    {name: "영희", age: 13, school: "다람쥐초등학교"},
    {name: "훈이", age: 11, school: "토끼초등학교"}
]

/* 1. classmates.filter((el) => ({el.school: "토끼초등학교"}));
->오류의 이유를 생각해보자 */


/* classmates.filter((el) => (el.school = "토끼초등학교"))
[
    { name: '철수', age: 10, school: '토끼초등학교' },
    { name: '영희', age: 13, school: '토끼초등학교' },
    { name: '훈이', age: 11, school: '토끼초등학교' }
] 
-> el.school을 모두 바꿔버린 과정을 수행한듯*/

  //////////////////////////////아래가 정답 코드/////////////////////////////////////
const result = classmates.filter((item) => (item.school === "토끼초등학교"));

result.map((el)=>({name : el.name, age : el.age, school:el.school, candy : "10개"}))

// 아래처럼 합쳐서 한번에 가능!
// classmates.filter((item) => (item.school === "토끼초등학교")).map((el)=>({name : el.name, age : el.age, school:el.school, candy : "10개"}))