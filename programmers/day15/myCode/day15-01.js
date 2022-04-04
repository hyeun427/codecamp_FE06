function solution(numbers) {
    var answer = [];
    
    for( let i = 0; i < numbers.length; i++ ) {
        if( answer[ answer.length - 1 ] !== numbers[i] ) {
            answer.push( numbers[i] )
        }
    }
    for ( let w = 0; w < answer.length; w ++;)
}








function solution(arr) {
    var answer = [];
if(arr.length<=1){
return [-1] ; 
}

else if(arr.length>1){
    answer = arr.sort((a,b)=>{
        return b-a;
    });
    return answer.slice(0,answer.length-1);
}
}
console.log(solution([8,4,3]));