const {assert} = require("chai")
const Factorial = require("../factorial")

describe('test for factorial of a number', function() {
   let factorial = Factorial    

   it('check that function returns the factorial of given num', function() {
      const result = factorial(5)
      assert.equal(result, 120)
   })
   it('check that function returns error for non-numeric input ', function() {
      const result = factorial("hi")
      assert.equal(result, "input should be number")
   })
})
