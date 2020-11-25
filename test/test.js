const { string, number, boolean, array, object } = require('./../')

test('test string type', () => {
  let name = string('test');
  expect(typeof name.str).toBe('string');
  expect(name.str).toEqual('test');
  name.str = 'test1'
  expect(name.str).toEqual('test1');
  expect(() => string(15)).toThrow(Error);
  expect(() => name.str = 15).toThrow(Error);
  name.value = 15;
  expect(() => name.str).toThrow(Error);
});

test('test boolean type', () => {
  let b = boolean(true);
  expect(typeof b.bool).toBe('boolean');
  expect(b.bool).toEqual(true);
  b.bool = false
  expect(b.bool).toEqual(false);
  expect(() => boolean('false')).toThrow(Error);
  expect(() => b.bool = 'true').toThrow(Error);
  b.value = 'true';
  expect(() => b.bool).toThrow(Error);
});

test('test number type', () => {
  let n = number(10);
  expect(typeof n.numb).toBe('number');
  expect(n.numb).toEqual(10);
  n.numb = 17
  expect(n.numb).toEqual(17);
  expect(() => number('15')).toThrow(Error);
  expect(() => n.numb = '15').toThrow(Error);
  n.value = '15';
  expect(() => n.numb).toThrow(Error);
});

test('test array type', () => {
  let test = array([1,2,3]);
  expect(test.arr instanceof Array).toBe(true);
  expect(test.arr).toEqual([1,2,3]);
  test.arr = [1,2,3,4]
  expect(test.arr).toEqual([1,2,3,4]);
  expect(() => array({a:'a'})).toThrow(Error);
  expect(() => test.arr = '[1,2,3,4]').toThrow(Error);
  test.value = '[1,2,3,4]';
  expect(() => test.arr).toThrow(Error);
});

test('test object type', () => {
  let test = object({a: 'a'});
  expect(test.obj instanceof Object).toBe(true);
  expect(test.obj).toEqual({a: 'a'});
  test.obj = {a: 'a', b: 'b'};
  expect(test.obj).toEqual({a: 'a', b: 'b'});
  expect(() => object([1,2,3,4])).toThrow(Error);
  expect(() => test.obj = [1]).toThrow(Error);
  test.value = [1,2,3,4];
  expect(() => test.obj).toThrow(Error);
});
