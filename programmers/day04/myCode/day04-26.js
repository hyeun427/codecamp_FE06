function makeOdd(num) {
	
	for (let i = 1; i <= num; i++) {
		if (i % num !== 0) {
			answer += i;
		}
	}
	return answer;
}