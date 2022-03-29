let sum = 0;

function solution(arr) {
    for(i=0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const answer = sum / arr.length;
    return (answer);
}