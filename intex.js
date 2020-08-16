'use strict'
//Sample type mode.

function type(value, type, mes) {
  if (typeof value === typeof type)
    return {
      value: value,
      mes: mes,
      set set(value) {
        if (typeof value === typeof type)
          this.value = value
        else return console.error(Error(`The type value ${this.value} is not a ${this.mes}`))
      },
      get get() {
        return this.value
      }
    }
  else return console.error(Error(`The type value ${this.value} is not a ${mes}`))
}

function typeInstanceof(value, type, mes) {
  let tmp = Object
  if (value instanceof Array) tmp = Array
  if (value instanceof type && [] instanceof tmp)
    return {
      type: type,
      value: value,
      tmp: Object,
      mes: mes,
      set set(value) {
        if (value instanceof Array) this.tmp = Array
        if (value instanceof type && [] instanceof this.tmp)
          this.value = value
        else return console.error(Error(`The type value ${this.value} is not a ${this.mes}`))
      },
      get get() {
        return this.value
      }
    }
  else return console.error(Error(`The type value ${this.value} is not a ${mes}`))
}

exports.int = function(value) {
  return type(value, 0, 'int')
}

exports.string = function(value) {
  return type(value, 's', 'String')
}

exports.boolean = function(value) {
  return type(value, true, 'boolean')
}

exports.array = function(value) {
  return typeInstanceof(value, Array, 'Array')
}

exports.object = function(value) {
  return typeInstanceof(value, Object, 'Object')
}
