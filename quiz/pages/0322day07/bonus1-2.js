const classmates = [
    {name: "철수", age: 10, school: "토끼초등학교"},
    {name: "영희", age: 13, school: "다람쥐초등학교"},
    {name: "훈이", age: 11, school: "토끼초등학교"}
  ]
  
  
  const result = classmates.filter((item) => (item.school === "다람쥐초등학교"));
  
  result.map((el)=>({el: el.name + "어린이", age : el.age, school:el.school}))
  