function solution(num) {
    const answer = 0;
    
    for ( num !== 1 ) {
        if(num % 2 === 0){
            num = num / 2
            answer += 1
        } else if(num % 2 === 1) {
            num = (num * 3)  + 1;
            answer += 1            
        } else if ( answer > 500) {
            return -1;
        }
    }
    return answer;
}