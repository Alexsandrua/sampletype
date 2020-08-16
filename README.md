# sampletype
Described simple method work with a type of data in JS.

*[EN]*
The little simple module that describe how to work with a strong type of data in JS. But it is not the types in a complete understanding. The rules for the small developers' team and small a project.

*[UA]*
Невеликий простий модуль, який описує, як працювати зі строгими типами даних у JS. Але це не кє типи в повному розумінні. Це правила для невеликої команди розробників та малого проекту.

## List types: int, string, boolean, array, object.

below example:

Each method have *setter* and *getter*

```
const {int, string, boolean, array, object} = require('sampletype')

let va = array([])
let vb = object({})
let str = string('g')
va.set = [1, 2, 3, 4, 5, 6, 7]
//let i_val = int('2').get
va.get.push(int(111).get) //push number value
console.log(va.get)

vb.set = {test: 1}
console.log(vb.get)
```
