function grade(score) {
	if (score > 100 || score < 0) {
		return "잘못된 점수입니다."
	} else if (score >= 90 && score <= 100) {
		return "A"
	}

}
