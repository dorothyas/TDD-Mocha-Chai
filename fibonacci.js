// DOROTHY & MICHAEL

// Fibonacci- return nth element of fibonacci sequence

function Fibonacci (n){
    let sequence = [0,1]
    let i
    if (typeof n == "number"){
        for (i = 2; i<=n; i++){
            sequence[i]= sequence[i-1] + sequence[i-2]
        }
        return sequence[n]
    }else{
        error = new Error('input should be number')
        return error.message
    }
}
module.exports = Fibonacci
