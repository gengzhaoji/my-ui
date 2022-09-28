# 语言规范

JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript 时需要遵守的规则。

## 类型

1.原始类型: 存取原始类型直接作用于值本身

* 布尔类型
* Null 类型
* Undefined 类型
* 数字类型
* BigInt 类型
* 字符串类型
* 符号类型 Symbol

```javascript
const foo = 1
let bar = foo

bar = 9

console.log(foo, bar) // 1, 9
```

2.复杂类型: 访问复杂类型作用于值的引用

* object
* array
* function

```javascript
const foo = [1, 2, 3]
const bar = foo

bar[0] = 9

console.log(foo[0], bar[0]) // 9, 9
```

## 变量声明

* 声明变量时，请使用 const、let 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 const 来声明变量，我们需要避免全局命名空间的污染

```javascript
// bad
demo = new Demo()

// good
const demo = new Demo()
```

* 将所有的 const 和 let 分组

```javascript
// bad
let a
const b
let c
const d
let e

// good
const b
const d
let a
let c
let e
```

* 变量不要进行链式赋值, 变量链式赋值会创建隐藏的全局变量

```javascript
// bad
(function example() {
  let a = b = c = 1
}())

console.log(a) // throws ReferenceError
console.log(b) // 1
console.log(c) // 1

// good
(function example() {
  let a = 1
  let b = a
  let c = a
}())

console.log(a) // throws ReferenceError
console.log(b) // throws ReferenceError
console.log(c) // throws ReferenceError
```

## 引用

* 请记得 const 和 let 都是块级作用域，var 是函数级作用域

```javascript
// const and let only exist in the blocks they are defined in.
{
  let a = 1
  const b = 1
}
console.log(a) // ReferenceError
console.log(b) // ReferenceError
```

* 对所有引用都使用 const，不要使用 var,原因:这样做可以确保你无法重新分配引用，以避免出现错误和难以理解的代码

```javascript
// bad
var a = 1
var b = 2

// good
const a = 1
const b = 2
```

* 如果引用是可变动的，使用 let 代替 var

```javascript
// bad
var count = 1
if (count < 10) {
  count += 1
}

// good
let count = 1
if (count < 10) {
  count += 1
}
```

## 对象

* 请使用字面量值创建对象

```javascript
// bad
const a = new Object{}

// good
const a = {}
```

* 当使用动态属性名创建对象时，请使用对象计算属性名来进行创建,因为这样做就可以让你在一个地方定义所有的对象属性

```javascript
function getKey(k) {
  return `a key named ${k}`
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco'
};
obj[getKey('enabled')] = true

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true
};
```

* 请使用对象方法的简写方式

```javascript
// bad
const item = {
  value: 1,

  addValue: function (val) {
    return item.value + val
  }
}

// good
const item = {
  value: 1,

  addValue (val) {
    return item.value + val
  }
}
```

* 请使用对象属性值的简写方式

```javascript
const job = 'FrontEnd'

// bad
const item = {
  job: job
}

// good
const item = {
  job
}
```

* 将简写的对象属性分组后统一放到对象声明的开头

```javascript
const job = 'FrontEnd'
const department = 'JDC'

// bad
const item = {
  sex: 'male',
  job,
  age: 25,
  department
}

// good
const item = {
  job,
  department,
  sex: 'male',
  age: 25
}
```

* 只对非法标识符的属性使用引号,因为通常来说我们认为这样主观上会更容易阅读，这样会带来代码高亮上的提升，同时也更容易被主流 JS 引擎优化

```javascript
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5
}

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5
}
```

* 不要直接使用 Object.prototype 的方法, 例如 hasOwnProperty, propertyIsEnumerable 和 isPrototypeOf 方法,这些方法可能会被对象自身的同名属性覆盖 - 比如 { hasOwnProperty: false } 或者对象可能是一个 null 对象(Object.create(null))

```javascript
// bad
console.log(object.hasOwnProperty(key))

// good
console.log(Object.prototype.hasOwnProperty.call(object, key))

// best
const has = Object.prototype.hasOwnProperty
console.log(has.call(object, key))
```

* 优先使用对象展开运算符 ... 来做对象浅拷贝而不是使用 Object.assign，使用对象剩余操作符来获得一个包含确定的剩余属性的新对象

```javascript
// very bad
const original = { a: 1, b: 2 }
const copy = Object.assign(original, { c: 3 })
delete copy.a // so does this

// bad
const original = { a: 1, b: 2 }
const copy = Object.assign({}, original, { c: 3 }) // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 }
const copy = { ...original, c: 3 } // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy // noA => { b: 2, c: 3 }
```

## 数组

* 请使用字面量值创建数组

```javascript
// bad
const items = new Array()

// good
const items = []
```

* 向数组中添加元素时，请使用 push 方法

```javascript
const items = []

// bad
items[items.length] = 'test'

// good
items.push('test')
````

* 使用展开运算符 ... 复制数组

```javascript
// bad
const items = []
const itemsCopy = []
const len = items.length
let i

// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i]
}

// good
itemsCopy = [...items]
```

* 把一个可迭代的对象转换为数组时，使用展开运算符 ... 而不是 Array.from

```javascript
const foo = document.querySelectorAll('.foo')

// good
const nodes = Array.from(foo)

// best
const nodes = [...foo]
```

* 使用 Array.from 来将一个类数组对象转换为数组

```javascript
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 }

// bad
const arr = Array.prototype.slice.call(arrLike)

// good
const arr = Array.from(arrLike)
```

## 解构赋值

* 当需要使用对象的多个属性时，请使用解构赋值，解构可以避免创建属性的临时引用

```javascript
// bad
function getFullName (user) {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

// good
function getFullName (user) {
  const { firstName, lastName } = user

  return `${firstName} ${lastName}`
}

// better
function getFullName ({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}
```

* 当需要使用数组的多个值时，请同样使用解构赋值

```javascript
const arr = [1, 2, 3, 4]

// bad
const first = arr[0]
const second = arr[1]

// good
const [first, second] = arr
```

* 函数需要回传多个值时，请使用对象的解构，而不是数组的解构,可以非破坏性地随时增加或者改变属性顺序

```javascript
// bad
function doSomething () {
  return [top, right, bottom, left]
}

// 如果是数组解构，那么在调用时就需要考虑数据的顺序
const [top, xx, xxx, left] = doSomething()

// good
function doSomething () {
  return { top, right, bottom, left }
}

// 此时不需要考虑数据的顺序
const { top, left } = doSomething()
```

## 字符串

* 字符串统一使用单引号的形式 ''

```javascript
// bad
const department = "JDC"

// good
const department = 'JDC'
```

* 字符串太长的时候，请不要使用字符串连接符换行 \，而是使用 +

```javascript
const str = '润道研发部 润道研发部 润道研发部' +
  '润道研发部 润道研发部 润道研发部' +
  '润道研发部 润道研发部'
```

* 程序化生成字符串时，请使用模板字符串

```javascript
const test = 'test'

// bad
const str = ['a', 'b', test].join()

// bad
const str = 'a' + 'b' + test

// good
const str = `ab${test}`
```

* 不要对字符串使用eval()，会导致太多漏洞
* 不要在字符串中使用不必要的转义字符

```javascript
// bad
const foo = '\'this\' \i\s \"quoted\"'

// good
const foo = '\'this\' is "quoted"'
const foo = `my name is '${name}'`
```

## 函数

* 不要使用Function构造函数创建函数，此方式创建函数和对字符串使用 eval() 一样会产生漏洞

```javascript
// bad
const add = new Function('a', 'b', 'return a + b')

// still bad
const subtract = Function('a', 'b', 'return a - b')
```

* 不要在非函数代码块（if , while 等）中声明函数

```javascript
// bad
if (isUse) {
  function test () {
    // do something
  }
}

// good
let test
if (isUse) {
  test = () => {
    // do something
  }
}
```

* 不要将参数命名为 arguments，会导致该参数的优先级高于每个函数作用域内原先存在的 arguments 对象

```javascript
// bad
function foo (name, options, arguments) {
  // ...
}

// good
function foo (name, options, args) {
  // ...
}
```

* 不要使用 arguments，使用 剩余运算符 ..., arguments 只是一个类数组，而 ... 是一个真正的数组

```javascript
// bad
function test () {
  const args = Array.prototype.slice.call(arguments)
  return args.join('')
}

// good
function test (...args) {
  return args.join('')
}
```

* 使用参数默认值语法而不是修改函数参数

```javascript
// really bad
function handleThings (opts) {
  opts = opts || {}
  // ...
}

// still bad
function handleThings (opts) {
  if (opts === void 0) {
    opts = {}
  }
  // ...
}

// good
function handleThings (opts = { }) {
  // ...
}
```

* 将参数默认值放在最后

```javascript
// bad
function handleThings (opts = {}, name) {
  // ...
}

// good
function handleThings (name, opts = {}) {
  // ...
}
```

* 不要给参数重新赋值

```javascript
// bad
function f1 (a) {
  a = 1
}

function f2 (a) {
  if (!a) { a = 1 }
}

// good
function f3 (a) {
  const b = a || 1
}

function f4 (a = 1) {
}
```

## 箭头函数

当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记，它将创建在 this 上下文中执行的函数版本，通常是您想要的，并且语法更简洁

```javascript
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1
  return x * y
})

// good
[1, 2, 3].map((x) => {
  const y = x + 1
  return x * y
})
```

* 如果函数体只包含一条没有副作用的返回表达式的语句，可以省略花括号并使用隐式的 return， 否则保留花括号并使用 return 语句

```javascript
// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1
  `A string containing the ${nextNumber}.`
})

// good
[1, 2, 3].map(number => `A string containing the ${number}.`)

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1
  return `A string containing the ${nextNumber}.`
})

// good
[1, 2, 3].map((number, index) => ({
  index: number
}))

function foo(callback) {
  const val = callback()
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false

// bad
foo(() => bool = true)

// good
foo(() => {
  bool = true
})
```

* 一旦表达式跨多行，使用圆括号包裹以便更好阅读

```javascript
// bad
['get', 'post', 'put'].map(item => Object.prototype.hasOwnProperty.call(
    obj,
    item
  )
)

// good
['get', 'post', 'put'].map(item => (
  Object.prototype.hasOwnProperty.call(
    obj,
    item
  )
))
```

## 模块

* 使用标准的 ES6 模块语法 import 和 export

```javascript
// bad
const util = require('./util')
module.exports = util

// good
import Util from './util'
export default Util

// better
import { Util } from './util'
export default Util
```

* 同个文件每个模块只允许 import 一次，有多个 import 请书写在一起

```javascript
// bad
import foo from 'foo'
// … some other imports … //
import { named1, named2 } from 'foo'

// good
import foo, { named1, named2 } from 'foo'

// good
import foo, {
  named1,
  named2
} from 'foo'
```

* 将所有 import 语句放在文件最前方

```javascript
// bad
import foo from 'foo'
foo.init()

import bar from 'bar'

// good
import foo from 'foo'
import bar from 'bar'

foo.init()
```

## 比较运算符&相等

* 使用 === 和 !== 而非 == 和 !=
条件声明例如 if 会用 ToBoolean 这个抽象方法将表达式转成布尔值并遵循如下规则

* Objects 等于 true
* Undefined 等于 false
* Null 等于 false
* Booleans 等于 布尔值
* Numbers 在 +0, -0, 或者 NaN 的情况下等于 false, 其他情况是 true
* Strings 为 '' 时等于 false, 否则是 true
