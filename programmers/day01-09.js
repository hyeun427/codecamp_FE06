const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}


student.school = school

console.log(student)

//예상결과
console.log(student)
	{
    name: '철수',
    age: 8,
    school: {
      name: '다람쥐초등학교',
      teacher: '다람이'
    }
  }
