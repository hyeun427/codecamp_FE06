function boolean(input1, input2) {
	if( input1 || input2 == true) {
    console.log(true)
  }else {
    console.log(false)
  }
}



//예상결과
boolean(true, false) // true
boolean(false, true) // true
boolean(false, false) // false