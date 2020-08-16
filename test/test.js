const {int, string, boolean, array, object} = require('./../')
let va = array([])
let vb = object({})
let str = string('g')
va.set = [1, 2, 3, 4, 5, 6, 7]
//let i_val = int('2').get
va.get.push(int(111).get) //push number value
console.log(va.get)

vb.set = {test: 1}
console.log(vb.get)
