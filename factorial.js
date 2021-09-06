// DOROTHY & MICHAEL

// Factorial of given number

const Factorial = (number) => {
    let result = 1
    let i
    if (typeof number == "number"){
        for (i = number; i>=1; i--){
            result *=i
        }
        return result
    }else{
        error = new Error('input should be number')
        return error.message
    }
}
module.exports = Factorial
