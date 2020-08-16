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
  let condition = (!(value instanceof Array) && value instanceof type)
  if(type === Array)
  condition = (value instanceof Array && value instanceof type)
  if(condition)
    return {
      type: type,
      value: value,
      mes: mes,
      set set(value) {
        let condition = (!(value instanceof Array) && value instanceof this.type)
        if(type === Array)
        condition = (value instanceof Array && value instanceof this.type)
        if(condition)
          this.value = value
        else return console.error(Error(`The type value ${value} is not a ${this.mes}`))
      },
      get get() {
        return this.value
      }
    }
  else return console.error(Error(`The type value ${value} is not a ${mes}`))
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
