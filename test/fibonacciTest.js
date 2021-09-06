const {assert} = require("chai")
const Fibonacci = require("../fibonacci")

describe('test for fibonacci', function() {
   let fibonacci = Fibonacci    

   it('check that function returns right number from fibonacci sequence ', function() {
      const result = fibonacci(9)
      assert.equal(result, 34)
   })
   it('check that fibonnaci for non-numeric input returns error', function() {
    const result = fibonacci("hello")
    assert.equal(result, "input should be number")
 })
})
