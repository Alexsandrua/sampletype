# sampletype
Described simple method work with a type of data in JS.

*[EN]*
The little simple module that describe how to work with a strong type of data in JS. But it is not the types in a complete understanding. The rules for the small developers' team and small a project.

*[UA]*
Невеликий простий модуль, який описує, як працювати зі строгими типами даних у JS. Але це не є типи в повному розумінні. Це правила для невеликої команди розробників та малого проекту.

## List types: int, string, boolean, array, object.

below example:

Each method have *setter* and *getter*

```
const {number, string, boolean, array, object} = require('sampletype')

let name = string('test')
name.str = 'test1'
console.log(name.str)

let n = number(10)
n.numb = 'test1'
console.log(n.numb)

let b = boolean('test')
b.bool = 'test1'
console.log(b.bool)

let b = array([1,2])
b.arr = [1,2,3]
console.log(b.arr)

let o = object({})
o.obj = {'a':'b'}
console.log(o.obj)
```
