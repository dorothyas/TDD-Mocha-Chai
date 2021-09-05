// Fibonacci- return nth element of fibonacci sequence

function Fibonacci (n){
    let sequence = [0,1]
    let i

    for (i = 2; i<=n;){
        sequence[i]= sequence[i-1] + sequence[i-2]
        i+=1
    }
    return sequence[n]  
}
module.exports = Fibonacci
