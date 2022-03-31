function solution(numbers) {
    var answer = [];
    
    for( let i = 0; i < numbers.length; i++ ) {
        if( answer[ answer.length - 1 ] !== numbers[i] ) {
            answer.push( numbers[i] )
        }
    }
    for ( let w = 0; w < answer.length; w ++;)
}