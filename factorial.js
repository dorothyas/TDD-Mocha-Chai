// Factorial of given number

const Factorial = (number) => {
    let result = 1
    let i
    for (i = number; i>=1;){
        result *=i
        i -= 1
    }
    return result
}
module.exports = Factorial
