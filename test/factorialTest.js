const {assert} = require("chai")
const Factorial = require("../factorial")

describe('test for factorial of a number', function() {
   let factorial = Factorial    

   it('check that function returns the factorial of given num', function() {
      const result = factorial(5)
      assert.equal(result, 120)
   })

})
