const {assert} = require("chai")
const Fibonacci = require("../fibonacci")

describe('test for fibonacci', function() {
    let fibonacci = Fibonacci  

    it('check that function returns 0 from sequence at position 0 ', function() {
        assert.equal(fibonacci(0), 0)
    })

    it('check that function returns 1 from sequence at position 1 ', function() {
        assert.equal(fibonacci(1), 1)
    })

    it('check that function returns 34 from sequence at position 9 ', function() {
        assert.equal(fibonacci(9), 34)
    })
    it('check that function returns error message for non-numeric input', function() {
    assert.equal(fibonacci("hello"), "input should be number")
    })
})
