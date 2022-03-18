const number = "01012345678"


const arr = []
arr[0] = number.slice(0,3)
'010'
arr[1] = number.slice(3,7)
'1234'
arr[2] = number.slice(7,11)
'5678'

console.log(arr) // ["010", "1234", "5678"]