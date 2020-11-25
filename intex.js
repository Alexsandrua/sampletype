'use strict'
//Sample type mode.

function typeTypeof(value, typeName, shortTypeName) {
  if (typeof value === typeName)
    return {
      value: value,
      set [shortTypeName](value) {
        if (typeof value === typeName)
          this.value = value
        else throw Error(`The type value ${this.value} is not a ${typeName}`)
      },
      get [shortTypeName]() {
        if (typeof this.value === typeName)
          return this.value
        else throw new Error(`The type value ${this.value} is not a ${typeName}`)
      }
    }
  else throw new Error(`The type value ${value} is not a ${typeName}`)
}

function typeInstanceof(value, typeName, shortTypeName) {
  let condition
  if (Array.isArray(value)) {
    condition = 'Array'
  } else if(value instanceof Object && value !== null && typeName === 'Object') {
    condition = 'Object'
  }
  if (condition === typeName)
    return {
      value: value,
      set [shortTypeName](value) {
        if (Array.isArray(value) && typeName === 'Array') {
          this.value = value;
        } else if(value instanceof Object && value !== null && typeName === 'Object') {
          this.value = value;
        } else throw new Error(`The type value ${value} is not a ${typeName}`)
      },
      get [shortTypeName]() {
        if (Array.isArray(value) && typeName === 'Array') {
          return this.value
        } else if(this.value instanceof Object && this.value !== null && typeName === 'Object') {
          return this.value
        } else throw new Error(`The type value ${this.value} is not a ${typeName}`)
      }
    }
  else throw new Error(`The type value ${value} is not a ${typeName}`)
}


exports.number = function(value) {
  return typeTypeof(value, 'number', 'numb')
}

exports.string = function(value) {
  return typeTypeof(value, 'string', 'str')
}

exports.boolean = function(value) {
  return typeTypeof(value, 'boolean', 'bool')
}

exports.array = function(value) {
  return typeInstanceof(value, 'Array', 'arr')
}

exports.object = function(value) {
  return typeInstanceof(value, 'Object', 'obj')
}
