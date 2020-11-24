const { string, number, boolean, array, object } = require('./../')
let va = array([])
let vb = object({})

va.arr = [1, 2, 3, 4, 5, 6, 7]
let n = number('15')
va.array.push(n.numb) //push number value
let name = string('geen')
console.log(name.str)
name.str = '11'
//name.value = 10
console.log(name.str)

test('test string type', () => {
  expect(typeof name.str).toBe('string')
})
