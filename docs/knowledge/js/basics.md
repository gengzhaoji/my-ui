# 基础知识点

`JavaScript` 是轻量级解释型语言。浏览器接受到 `JavaScript` 代码，并以代码自身的文本格式运行它。技术上，几乎所有 `JavaScript` 转换器都运用了一种叫做**即时编译（just-in-time compiling）** 的技术；当 `JavaScript` 源代码被执行时，它会被编译成二进制的格式，使代码运行速度更快。尽管如此，`JavaScript` 仍然是一门`解释型`语言，因为`编译过程发生在代码运行中`。

`JavaScript`语言的一大特点就是**单线程**，也就是说，**同一个时间只能做一件事**。作为**浏览器脚本语言**，`JavaScript`的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。

## 数据类型

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7461c9f95b2a436482795e3a149dc092~tplv-k3u1fbpfcp-zoom-1.image">

-   基本数据类型(值类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）。
-   引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)。
-   特殊的对象：正则（RegExp）和日期（Date）。
-   特殊类型：underfined 未定义、Null 空对象、Infinate 无穷、NAN 非数字。

## String

---

### 属性

-   `length`：表示一个字符串的长度。

### 方法

#### at()

从一个字符串中返回指定位置的字符。

> **语法**
>
> `str.at(index)`
>
> | 参数    | 描述                                                                                                                                                        |
> | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `index` | 要返回的字符串字符的索引（位置）。当传递 **负数** 时，支持从字符串 **末端开始的相对索引** ；也就是说， **如果使用负数，返回的字符将从字符串的末端开始倒数** |

**例子：**

```javascript
'myinvoice01'.at(-1); // 1
'myinvoice01'.at(1); // m
// 如果不是一个数值，则会先转换为数字，转换之后当数值为NaN时，默认下标为0。
myinvoice01.charAt('0'); // m
myinvoice01.charAt(null); // m
myinvoice01.charAt(undefined); // m
myinvoice01.charAt({}); // m
```

#### charAt()

从一个字符串中返回指定的字符。

> **语法**
>
> `str.charAt(index)`
>
> | 参数    | 描述                                                                                                                                                                  |
> | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `index` | 一个介于 0 和字符串长度减 1 之间的整数 `0~length-1` , 如果没有 index，则默认为 `0` , `index` 值超出了该范围，则返回一个`空字符串`。如果不是一个数值，则会先转换为数字 |

**例子：**

```javascript
const anyString = 'Brave new world';

console.log(anyString.charAt(0)); // "B"
console.log(anyString.charAt(1)); // "r"
console.log(anyString.charAt(999)); // ""
// 如果不是一个数值，则会先转换为数字，转换之后当数值为NaN时，默认下标为0。
console.log(anyString.charAt('0')); // "B"
console.log(anyString.charAt(null)); // "B"
console.log(anyString.charAt(undefined)); // "B"
console.log(anyString.charAt({})); // "B"
```

#### charCodeAt()

charCodeAt(index) 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元。

> **语法**
>
> `str.charCodeAt(index)`
>
> | 参数    | 描述                                                               |
> | ------- | ------------------------------------------------------------------ |
> | `index` | 一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0 |

> **返回值**
>
> 指定 index 处字符的 UTF-16 代码单元值的一个`数字`；如果 index 超出范围，charCodeAt() 返回 `NaN`。

**例子：**

```javascript
'ABC'.charCodeAt(0); // 65

'ABC'.charCodeAt(1); // 66

'ABC'.charCodeAt(2); // 67

// 如果不是一个数值，则默认为 0
'ABC'.charCodeAt(null); // 67

'ABC'.charCodeAt(3); // NaN
```

#### codePointAt()

codePointAt(index) 方法返回 一个 Unicode 编码点值的非负整数。

> **语法**
>
> `str.codePointAt(index)`
>
> | 参数    | 描述                             |
> | ------- | -------------------------------- |
> | `index` | 这个字符串中需要转码的元素的位置 |

> **返回值**
>
> 返回值是在字符串中的给定索引的编码单元体现的数字，如果在索引处没找到元素则返回 undefined 。

**例子：**

```javascript
'ABC'.codePointAt(1); // 66

'\uD800\uDC00'.codePointAt(0); // 65536

'XYZ'.codePointAt(42); // undefined
```

#### concat()

concat(str2, ...strN) 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

> **语法**
>
> `str.concat(str2, ...strN)`
>
> | 参数            | 描述                    |
> | --------------- | ----------------------- |
> | `str2, ...strN` | 需要连接到 str 的字符串 |
>
> **返回值**
>
> 一个新的字符串，包含参数所提供的连接字符串。

**例子：**

```javascript
let hello = 'Hello, ';
console.log(hello.concat('Kevin', '. Have a nice day.'));
// Hello, Kevin. Have a nice day.

''.concat({}); // [object Object]
''.concat([]); // ""
''.concat(null); // "null"
''.concat(true); // "true"
''.concat(4, 5); // "45"
```

#### endsWith()

`endsWith()`方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

> **语法**
>
> `str.endsWith(searchString[, length])`
>
> | 参数           | 描述                                          |
> | -------------- | --------------------------------------------- |
> | `searchString` | 要搜索的子字符串                              |
> | `length`       | **可选** 作为 str 的长度。默认值为 str.length |

> **返回值**
>
> 如果传入的子字符串在搜索字符串的末尾则返回**true**；否则将返回 false。

**例子：**

```javascript
let str = 'To be, or not to be, that is the question.';

str.endsWith('question.'); // true
str.endsWith('to be'); // false
// 参数length的例子（相当于下标19为字符串的末尾）
str.endsWith('to be', 19); // true
```

#### fromCharCode()

静态 `String.fromCharCode()` 方法返回由指定的 UTF-16 代码单元序列创建的字符串。

> **语法**
>
> `String.fromCharCode(num1[, ...[, numN]])`
>
> | 参数       | 描述                                                                                                              |
> | ---------- | ----------------------------------------------------------------------------------------------------------------- |
> | `num1,...` | 一系列 UTF-16 代码单元的`数字`。范围介于 0 到 65535（0xFFFF）之间。大于 0xFFFF 的数字将被截断。不进行有效性检查。 |

> **返回值**
>
> 一个长度为 N 的字符串，由 N 个指定的 UTF-16 代码单元组成。

> **描述**
>
> -   该方法返回一个`字符串`，而不是一个 String 对象。
>
> -   由于 `fromCharCode()` 是 `String` 的静态方法，所以应该像这样使用：`String.fromCharCode()`，而不是作为你创建的 `String` 对象的方法。

**例子：**

```javascript
String.fromCharCode(65, 66, 67); // 返回 "ABC"
String.fromCharCode(0x2014); // 返回 "—"
String.fromCharCode(0x12014); // 也是返回 "—"; 数字 1 被剔除并忽略
String.fromCharCode(8212); // 也是返回 "—"; 8212 是 0x2014 的十进制表示
```

#### fromCodePoint()

`String.fromCodePoint()` 静态方法返回使用指定的代码点序列创建的字符串。

> **语法**
>
> `String.fromCharCode(num1[, ...[, numN]])`
>
> | 参数              | 描述                                |
> | ----------------- | ----------------------------------- |
> | `num1, ..., numN` | 一串 Unicode 编码位置，即`代码点`。 |

> **返回值**
>
> 使用指定的 Unicode 编码位置创建的字符串。

> **描述**
>
> -   该方法返回一个`字符串`，而不是一个 `String` 对象。
>
> -   因为 `fromCodePoint()` 是 `String` 的一个静态方法，所以只能通过 `String.fromCodePoint()` 这样的方式来使用，不能在你创建的 `String` 对象实例上直接调用。

> **异常**
>
> -   如果传入无效的 `Unicode` 编码，将会抛出一个`RangeError`。

**例子：**

```javascript
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint('_'); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

#### includes()

`includes()` 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

> **语法**
>
> `str.includes(searchString[, position])`
>
> | 参数           | 描述                                                                |
> | -------------- | ------------------------------------------------------------------- |
> | `searchString` | 要在此字符串中搜索的字符串                                          |
> | `position`     | **可选** 从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 `0`。 |

> **返回值**
>
> 如果当前字符串包含被搜寻的字符串，就返回 `true`；否则返回 `false`。

> **总结**
>
> 1. 在没有传参时，查询字符串会被设置成 `undefined`；
> 2. `includes()` 区分大小写；
> 3. 当有第二个参数时，则会从第二个参数作为索引的位置开始查找，并包含当前位置的字符；
> 4. 当第二个参数是`负数`时，只要查找的字符串在目标字符串里，无论是多少，都会返回 `true`；
> 5. 判断数字时，需要把数字转换成字符串类型才能查询。

**例子：**

```javascript
'undefined'.includes(''); // 返回 true
// 在没有传参时，查询字符串会被设置成 `undefined`；
'undefined'.includes(); // 返回 true
'undefine'.includes(); // 返回 false

let numStr = '2020';
numStr.includes('2'); // true
// 判断数字时，需要把数字转换成字符串类型才能查询。
numStr.includes(2); // true

const str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false
// 当第二个参数是`负数`时，只要查找的字符串在目标字符串里，无论是多少，都会返回 true；
console.log(str.includes('To be', -1)); // true
console.log(str.includes('TO BE')); // false
```

#### indexOf()

`indexOf()` 方法返回调用它的 `String` 对象中第一次出现的指定值的索引，从 `fromIndex` 处进行搜索。如果未找到该值，则返回 `-1`。

> **语法**
>
> `str.indexOf(searchValue [, fromIndex])`
>
> | 参数          | 描述                                                                                                                                                          |
> | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `searchValue` | 要被查找的字符串值。默认为 `undefined`， 然后在当前字符串中查找这个值                                                                                         |
> | `fromIndex`   | **可选** 数字表示开始查找的位置。可以是任意整数，默认值为 `0`。如果 `fromIndex` 的值小于 `0`，或者大于 `str.length` ，那么查找分别从 `0` 和 `str.length` 开始 |

> **返回值**
>
> 查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 `-1`。

> **总结**
>
> 1. `searchValue`没有传参时，查询字符串会被设置成 `undefined`；
> 2. `fromIndex` 的值小于 `0`，等同于 `0`；
> 3. `fromIndex` 的值 大于 或 等于 `str.length` ，那么结果会直接返回 `-1`；
> 4. `indexOf()` 方法是区分大小写的.

**例子：**

```javascript
'Blue Whale'.indexOf('Blue'); // 返回 0
'Blue Whale'.indexOf('Blute'); // 返回 -1
'Blue Whale'.indexOf('Whale', 0); // 返回 5
'Blue Whale'.indexOf('Whale', 5); // 返回 5
'Blue Whale'.indexOf('', -1); // 返回 0
'Blue Whale'.indexOf('', 9); // 返回 9
'Blue Whale'.indexOf('', 10); // 返回 10
'Blue Whale'.indexOf('', 11); // 返回 10
```

#### lastIndexOf()

`lastIndexOf()` 方法返回调用 `String` 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 `fromIndex`处 **从后向前** 搜索。如果没找到这个特定值则返回`-1`

> **语法**
>
> `str.lastIndexOf(searchValue [, fromIndex])`
>
> | 参数          | 描述                                                                                                                                                          |
> | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `searchValue` | 要被查找的字符串值。默认为 `undefined`， 然后在当前字符串中查找这个值                                                                                         |
> | `fromIndex`   | **可选** 数字表示开始查找的位置。可以是任意整数，默认值为 `0`。如果 `fromIndex` 的值小于 `0`，或者大于 `str.length` ，那么查找分别从 `0` 和 `str.length` 开始 |

> **返回值**
>
> 查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 `-1`。

> **总结**
>
> 1. `searchValue`没有传参时，查询字符串会被设置成 `undefined`；
> 2. `fromIndex` 的值小于 `0`，等同于 `0`；
> 3. `fromIndex` 的值 大于 或 等于 `str.length` ，那么结果会直接返回 `-1`；
> 4. `indexOf()` 方法是区分大小写的.

**例子：**

```javascript
'canal'.lastIndexOf('a'); // returns 3（没有指明 fromIndex 则从末尾 l 处开始反向检索到的第一个 a 出现在 l 的后面，即 index 为 3 的位置）
'canal'.lastIndexOf('a', 2); // returns 1（指明 fromIndex 为 2 则从 n 处反向向回检索到其后面就是 a，即 index 为 1 的位置）
'canal'.lastIndexOf('a', 0); // returns -1(指明 fromIndex 为 0 则从 c 处向左回向检索 a 发现没有，故返回-1)
'canal'.lastIndexOf('x'); // returns -1
'canal'.lastIndexOf('c', -5); // returns 0（指明 fromIndex 为-5 则视同 0，从 c 处向左回向查找发现自己就是，故返回 0）
'canal'.lastIndexOf('c', 0); // returns 0（指明 fromIndex 为 0 则从 c 处向左回向查找 c 发现自己就是，故返回自己的索引 0）
'canal'.lastIndexOf(''); // returns 5
'canal'.lastIndexOf('', 2); // returns 2
```

#### match()

`match()` 方法检索返回一个字符串匹配`正则表达式`的结果。

> **语法**
>
> `str.match(regexp)`
>
> | 参数     | 描述                                                                                                                                                                                                        |
> | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `regexp` | 一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 `RegExp` 。如果你没有给出任何参数并直接使用 `match()` 方法 ，你将会得到一 个包含空字符串的 `Array ：[""]` |
>
> **返回值**
>
> 1. 如果使用 `g` 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
> 2. 如果未使用 `g` 标志，则仅返回第一个完整匹配及其相关的捕获组（`Array`）。

> **总结**
>
> 1. 如果正则表达式不包含 `g` 标志，`str.match()` 将返回与 `RegExp.exec()` 相同的结果。
> 2. `fromIndex` 的值小于 `0`，等同于 `0`；
> 3. `fromIndex` 的值 大于 或 等于 `str.length` ，那么结果会直接返回 `-1`；
> 4. `indexOf()` 方法是区分大小写的.

**例子：**

```javascript
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// i 不区分大小写
console.log(str.match(/[A-E]/gi));
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// g 匹配的所有结果
console.log(str.match(/[A-E]/g));
// ['A', 'B', 'C', 'D', 'E']

console.log(str.match(/[A-E]/));
// 0: "A"
// groups: undefined
// index: 0
// input: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// length: 1
```

#### matchAll()

`matchAll()` 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

> **语法**
>
> `str.matchAll(regexp)`
>
> | 参数     | 描述                                                                                                                                                                               |
> | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `regexp` | 正则表达式对象。如果所传参数不是一个正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 `RegExp`。`RegExp`必须是设置了全局模式 `g` 的形式，否则会抛出异常`TypeError`。 |

> **返回值**
>
> 一个迭代器（不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器）。

**例子：**

```javascript
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

#### padEnd()

`padEnd()` 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的**末尾（右侧）**开始填充。

> **语法**
>
> `str.padEnd(targetLength [, padString])`
>
> | 参数           | 描述                                                                                                                                  |
> | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
> | `targetLength` | 当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身                                                |
> | `padString `   | **可选** 填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 " " |

> **返回值**
>
> 在原字符串末尾填充指定的填充字符串直到目标长度所形成的**新字符串**。

**例子：**

```javascript
'abc'.padEnd(10); // "abc       "
'abc'.padEnd(10, 'foo'); // "abcfoofoof"
'abc'.padEnd(6, '123456'); // "abc123"

// targetLength小于当前字符串的长度，则返回当前字符串本身。
'abc'.padEnd(1); // "abc"
```

#### padStart()

`padStart()` 方法用另一个字符串填充当前字符串 (如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的 **左侧** 开始填充。

> **语法**
>
> `str.padStart(targetLength [, padString])`
>
> | 参数           | 描述                                                                                                                                  |
> | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
> | `targetLength` | 当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身                                                |
> | `padString `   | **可选** 填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 " " |
>
> **返回值**
>
> 在原字符串末尾填充指定的填充字符串直到目标长度所形成的**新字符串**。

**例子：**

```javascript
'abc'.padStart(10); // "       abc"
'abc'.padStart(10, 'foo'); // "foofoofabc"
'abc'.padStart(6, '123465'); // "123abc"
'abc'.padStart(8, '0'); // "00000abc"

// targetLength小于当前字符串的长度，则返回当前字符串本身。
'abc'.padStart(1); // "abc"
```

#### repeat()

`repeat()` 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。

> **语法**
>
> `str.repeat(count)`
>
> | 参数    | 描述                                                                             |
> | ------- | -------------------------------------------------------------------------------- |
> | `count` | 介于 `0` 和 `+Infinity` 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。 |

> **返回值**
>
> 包含指定字符串的指定数量副本的新字符串。

**例子：**

```javascript
'abc'.repeat(-1); // RangeError: repeat count must be positive and less than inifinity
'abc'.repeat(0); // ""
'abc'.repeat(1); // "abc"
'abc'.repeat(2); // "abcabc"
'abc'.repeat(3.5); // "abcabcabc" 参数 count 将会被自动转换成整数。
'abc'
    .repeat(1 / 0)(
        // RangeError: repeat count must be positive and less than inifinity

        { toString: () => 'abc', repeat: String.prototype.repeat }
    )
    .repeat(2);
//"abcabc",repeat 是一个通用方法，也就是它的调用者可以不是一个字符串对象。
```

#### replace()

[`replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 方法返回一个由替换值（`replacement`）替换部分或所有的模式（`pattern`）匹配项后的新字符串。模式可以是`一个字符串`或者`一个正则表达式`，替换值可以是`一个字符串`或者`一个每次匹配都要调用的回调函数`。**如果 pattern 是字符串，则仅替换第一个匹配项**。

> **语法**
>
> `str.replace(regexp|substr, newSubStr|function)`
>
> | 参数                     | 描述                                                                                                       |
> | ------------------------ | ---------------------------------------------------------------------------------------------------------- |
> | `regexp`(pattern)        | 一个`RegExp` 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。                            |
> | `substr`(pattern)        | 一个将被 `newSubStr` 替换的 `字符串`。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。 |
> | `newSubStr`(replacement) | 用于替换掉第一个参数在原字符串中的匹配部分的`字符串`。该字符串中可以内插一些特殊的变量名。                 |
> | `function`(replacement)  | 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。                               |

> **返回值**
>
> 一个部分或全部匹配由替代模式所取代的新的字符串。

> **`替换字符串`可以插入下面的`特殊变量名`**
>
> | 变量名    | 代表的值                                                                                                                                                                                                                      |
> | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `$$`      | 插入一个 "$"。                                                                                                                                                                                                                |
> | `$&`      | 插入匹配的子串。                                                                                                                                                                                                              |
> | `` $` ``  | 插入当前匹配的子串左边的内容。                                                                                                                                                                                                |
> | `$'`      | 插入当前匹配的子串右边的内容。                                                                                                                                                                                                |
> | `$n`      | 第一个参数是 `RegExp`对象，并且 n 是个小于 100 的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从 1 开始。如果不存在第 `n` 个分组，则用`“$n”`替换匹配到的内容。如果不存在第 3 个分组，就会用`“$3”`替换匹配到的内容。 |
> | `$<Name>` | 这里`*Name*`是一个分组名称。如果在正则表达式中并不存在分组（或者没有匹配），这个变量将被处理为空字符串。只有在支持命名分组捕获的浏览器中才能使用。                                                                            |

**例子：**

```javascript
// 第一参数正则表达式
const str = 'Twas the night before Xmas...';
// 忽略大小写 (i)
console.log(str.replace(/xmas/i, 'Christmas')); // Twas the night before Christmas...
// 全局替换 (g)
console.log(str.replace(/as/gi, 'BS')); // 'TwBS the night before XmBS...'
// 交换字符串中的两个单词
console.log(str.replace(/(\w+)\s(\w+)/, '$2 $1')); // 'the Twas night before Xmas...'
```

#### replaceAll()

[`replaceAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) 方法**返回一个新字符串**，新字符串所有满足 `pattern` 的部分都已被`replacement` 替换。`pattern`可以是一个字符串或一个 `RegExp`， `replacement`可以是一个字符串或一个在每次匹配被调用的函数。

> **语法**
>
> `str.replaceAll(regexp|substr, newSubStr|function)`
>
> | 参数                     | 描述                                                                                                       |
> | ------------------------ | ---------------------------------------------------------------------------------------------------------- |
> | `regexp`(pattern)        | 必须设置全局（“ g”，一个`RegExp` 对象或者其字面量。正则所匹配的内容会被第二个参数的返回值替换。            |
> | `substr`(pattern)        | 一个将被 `newSubStr` 替换的 `字符串`。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。 |
> | `newSubStr`(replacement) | 用于替换掉第一个参数在原字符串中的匹配部分的`字符串`。该字符串中可以内插一些特殊的变量名。                 |
> | `function`(replacement)  | 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。                               |

> **返回值**
>
> 一个部分或全部匹配由替代模式所取代的新的字符串。

> **`替换字符串`可以插入下面的`特殊变量名`**
>
> | 变量名    | 代表的值                                                                                                                                                                                                                      |
> | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `$$`      | 插入一个 "$"。                                                                                                                                                                                                                |
> | `$&`      | 插入匹配的子串。                                                                                                                                                                                                              |
> | `` $` ``  | 插入当前匹配的子串左边的内容。                                                                                                                                                                                                |
> | `$'`      | 插入当前匹配的子串右边的内容。                                                                                                                                                                                                |
> | `$n`      | 第一个参数是 `RegExp`对象，并且 n 是个小于 100 的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从 1 开始。如果不存在第 `n` 个分组，则用`“$n”`替换匹配到的内容。如果不存在第 3 个分组，就会用`“$3”`替换匹配到的内容。 |
> | `$<Name>` | 这里`*Name*`是一个分组名称。如果在正则表达式中并不存在分组（或者没有匹配），这个变量将被处理为空字符串。只有在支持命名分组捕获的浏览器中才能使用。                                                                            |

**例子：**

```javascript
'aabbcc'.replaceAll('b', '.'); // 'aa..cc'

// 使用正则表达式搜索值时，它必须是全局的
'aabbcc'.replaceAll(/b/, '.'); // TypeError: replaceAll must be called with a global RegExp

'aabbcc'.replaceAll(/b/g, '.'); // "aa..cc"
```

#### search()

`search()`方法执行正则表达式和 `String` 对象之间的一个搜索匹配。

> **语法**
>
> `str.search(regexp)`
>
> | 参数              | 描述                                                                                                                  |
> | ----------------- | --------------------------------------------------------------------------------------------------------------------- |
> | `regexp`(pattern) | 正则表达式对象。如果传入一个非正则表达式对象 `regexp`，则会使用 `new RegExp(regexp)` 隐式地将其转换为正则表达式对象。 |

> **返回值**
>
> 匹配成功，则 `search()` 返回正则表达式在字符串中**首次匹配项的索引**;否则，返回 **-1**。

**例子：**

```javascript
const str = 'hey JudE';
console.log(str.search(/[A-Z]/g)); //  4
console.log(str.search(/[.]/g)); //  -1
```

#### slice()

`slice()`方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

> **语法**
>
> `str.slice(beginIndex[, endIndex])`
>
> | 参数         | 描述                                                                                                                                                                                                                                      |
> | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `beginIndex` | 从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为**负数**，会被当做 strLength + beginIndex 看待，这里的 strLength 是字符串的长度（例如， 如果 beginIndex 是 -3 则看作是：strLength - 3）                                        |
> | `endIndex`   | **可选** 在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度 (例如，如果 endIndex 是 -3，则是，strLength - 3)。 |

> **返回值**
>
> 返回一个从原字符串中提取出来的新字符串，`slice()` 提取的新字符串包括`beginIndex`但不包括 `endIndex`。

**例子：**

```javascript
const str1 = 'The morning is upon us.'; // str1 的长度 length 是 23。

console.log(str1.slice(1, 8)); // 输出：he morn
console.log(str1.slice(4, -2)); // 输出：morning is upon u
console.log(str1.slice(12)); // 输出：is upon us.
console.log(str1.slice(30)); // 输出：""
```

#### split()

`split()`方法使用指定的分隔符字符串将一个字符串分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

> **语法**
>
> `str.split([separator[, limit]])`
>
> | 参数        | 描述                                                                           |
> | ----------- | ------------------------------------------------------------------------------ |
> | `separator` | 指定表示每个拆分应发生的点的字符串。`separator` 可以是一个字符串或正则表达式。 |
> | `limit`     | **可选** 一个整数，限定返回的分割片段数量。                                    |

> **返回值**
>
> 返回源字符串以分隔符出现位置分隔而成的一个 `Array`。

**例子：**

```javascript
const myString = "Hello World. How are you doing?";

myString.split(" "); // ['Hello', 'World.', 'How', 'are', 'you', 'doing?']
// 设置limit限定返回的分割片段数量。
myString.split(" ", 3); // ["Hello", "World.", "How"]
// 如果 separator 包含捕获括号（capturing parentheses），则其匹配结果将会包含在返回的数组中。
myString.split(/([A-Z])/); // ['', 'H', 'ello ', 'W', 'orld. ', 'H', 'ow are you doing?']
myString.split(/[A-Z]/); // ['', 'ello ', 'orld. ', 'ow are you doing?']

//使用一个数组来作为分隔符 String(['W','a']) = 'W,a'
myString.split(['W','a']) = myString.split(String(['W','a'])); // ['Hello World. How are you doing?']

// 颠倒字符串顺序
const str = 'résumé';
const strReverse = str.split(/(?:)/u).reverse().join(''); // "́emuśer"
```

#### startsWith()

`startsWith()`方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 `true` 或 `false`。

> **语法**
>
> `str.startsWith(searchString[, position])`
>
> | 参数           | 描述                                                             |
> | -------------- | ---------------------------------------------------------------- |
> | `searchString` | 要搜索的子字符串。                                               |
> | `position`     | **可选** 在 `str` 中搜索 `searchString` 的开始位置，默认值为 0。 |

> **返回值**
>
> 如果在字符串的开头找到了给定的字符则返回**true；否则返回 false**。

**例子：**

```javascript
const str = 'To be, or not to be, that is the question.';

alert(str.startsWith('To be')); // true
alert(str.startsWith('not to be')); // false
alert(str.startsWith('not to be', 10)); // true
```

#### substr()

`substr()`方法返回一个字符串中从指定位置开始到指定字符数的字符。

> **语法**
>
> `str.substr(start[, length])`
>
> | 参数     | 描述                                                                                                                                                       |
> | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `start`  | 开始提取字符的位置。如果为`负值`，则被看作 `strLength + start`，其中 `strLength` 为字符串的长度（例如，如果 `start` 为 `-3`，则被看作 `strLength + (-3)`） |
> | `length` | **可选** 提取的字符数,为 `0` 或 `负值`，则 substr 返回一个**空字符串**                                                                                     |

**例子：**

```javascript
const str = "abcdefghij";

str.substr(1, 2)); // bc
str.substr(-3, 2)); // hi
str.substr(-3)); // hij
str.substr(1)); // bcdefghij
str.substr(-20, 2)); // ab
str.substr(20, 2)); //
```

#### substring()

`substring()`方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。**返回新字符串**

> **语法**
>
> `str.substring(indexStart[, indexEnd])`
>
> | 参数         | 描述                                                                                 |
> | ------------ | ------------------------------------------------------------------------------------ |
> | `indexStart` | 需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。               |
> | `indexEnd`   | **可选** 一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。 |

> **总结**
>
> -   如果 `indexStart` 等于 `indexEnd`，`substring` 返回一个空字符串。
> -   如果省略 `indexEnd`，`substring` 提取字符一直到字符串末尾。
> -   如果任一参数小于 `0` 或为 `NaN`，则被当作 `0`。
> -   如果任一参数大于 `stringName.length`，则被当作 `stringName.length`。
> -   如果 `indexStart` 大于 `indexEnd`，则 `substring` 的执行效果就像两个参数**调换**了一样。

**例子：**

```javascript
const anyString = 'Mozilla';

// 输出 "Moz"
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));
console.log(anyString.substring(3, -3));
console.log(anyString.substring(3, NaN));
console.log(anyString.substring(-2, 3));
console.log(anyString.substring(NaN, 3));

// 输出 "lla"
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// 输出 ""
console.log(anyString.substring(4, 4));

// 输出 "Mozill"
console.log(anyString.substring(0, 6));

// 输出 "Mozilla"
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

#### toLowerCase()

`toLowerCase()`会将调用该方法的字符串值转为小写形式，**返回新字符串**

> **语法**
>
> `str.toLowerCase()`

**例子：**

```javascript
'中文简体 zh-CN || zh-Hans'.toLowerCase(); // 中文简体 zh-cn || zh-hans
'ALPHABET'.toLowerCase(); // "alphabet"
```

#### toString()

`toString()`**返回一个字符串**，表示指定的字符串。和 `valueOf()` 方法的返回值相同。

> **语法**
>
> `str.toString()`

**例子：**

```javascript
const x = new String('Hello world');

console.log(x.toString()); // 输出 'Hello world'
```

#### toUpperCase()

`toUpperCase()`方法将调用该方法的字符串转为大写形式，**返回新字符串**，（如果调用该方法的值不是字符串类型会被强制转换）

> **语法**
>
> `str.toUpperCase()`

**例子：**

```javascript
'alphabet'.toUpperCase(); // 'ALPHABET'
```

#### trim()

`trim()`方法从一个字符串的两端删除空白字符，返回**一个代表调用字符串两端去掉空白的新字符串**。

> **语法**
>
> `str.trim()`

**例子：**

```javascript
'  alphabet  '.trim(); // 'alphabet'
```

#### trimEnd()

`trimEnd()`从一个字符串的**末端移除空白字符**。`trimRight()` 是这个方法的别名。，返回**一个代表调用字符串两端去掉空白的新字符串**。

> **语法**
>
> `str.trimEnd()` `str.trimRight()`

**例子：**

```javascript
'  alphabet  '.trim(); // '  alphabet'
```

#### trimStart()

`trimStart()`从一个字符串的**开头移除空白字符**。`trimLeft()` 是这个方法的别名，返回**一个代表调用字符串两端去掉空白的新字符串**。

> **语法**
>
> `str.trimStart()` `str.trimLeft()`

**例子：**

```javascript
'  alphabet  '.trim(); // 'alphabet  '
```

#### valueOf()

`valueOf()`方法返回 `String` 对象的原始值。

> **语法**
>
> `str.valueOf()`

**例子：**

```javascript
const x = new String('Hello world');
console.log(x.valueOf()); // Displays 'Hello world'
```

## Array

### 属性

-   `length`：是 Array 的实例属性。返回或设置一个数组中的元素**个数**。

### 方法

#### at()

`at()`方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。

> **语法**
>
> `at(index)`
>
> | 参数    | 描述                                                                         |
> | ------- | ---------------------------------------------------------------------------- |
> | `index` | 要返回的数组元素的索引。当传递**负数**时，支持从数组**末端开始**的相对索引； |

> **返回值**
> 匹配给定索引的数组中的元素。如果找不到指定的索引，则返回`undefined`。

**例子：**

```javascript
const cart = ['apple', 'banana', 'pear'];

cart.at(-1); // 'pear'
```

#### concat()

`concat()`方法用于合并两个或多个数组。此方法**不会更改现有数组，而是返回一个新数组**。

> **语法**
>
> `let new_array = old_array.concat(value1[, value2[, ...[, valueN]]])`
>
> | 参数     | 描述                                                                                                                          |
> | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
> | `valueN` | 数组和/或值，将被合并到一个新的数组中。如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法的现存数组的**一个浅拷贝**。 |

> **总结**
>
> -   对象引用（而不是实际对象）：`concat` 将**对象引用**复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。
> -   数据类型如字符串，数字和布尔（不是`String`，`Number` 和 `Boolean` 对象）：`concat` 将字符串和数字的值复制到新数组中。

**例子：**

```javascript
let num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

console.log(num1.concat(num2, num3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(num1.concat(4, num3)); // [1, 2, 3, 4, 7, 8, 9]

console.log(num1.concat(4, [2, [3]])); // [1, 2, 3, 2, [3]]
```

#### copyWithin()

`copyWithin()`方法浅复制数组的一部分到同一数组中的另一个位置，不会改变原数组的长度，返回**改变后的数组**。

> **语法**
>
> `arr.copyWithin(target[, start[, end]])`
>
> | 参数     | 描述                                                                                                                                                                                                 |
> | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `target` | 0 为基底的索引，复制序列到该位置。如果是负数，`target` 将从末尾开始计算。如果 `target` 大于等于 `arr.length`，将不会发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。 |
> | `start`  | 0 为基底的索引，开始复制元素的**起始位置**。如果是**负数**，`start` 将从**末尾**开始计算。如果 `start` 被省略，默认为 0                                                                              |
> | `end`    | 0 为基底的索引，开始复制元素的**结束位置**。`copyWithin` 将会拷贝到该位置，但**不包括** `end` 这个位置的元素。如果是**负数**， `end` 将从**末尾**开始计算。如果 `end` 被省略，默认为 `arr.length`。  |

**例子：**

```javascript
// 将12345从4的位置开始覆盖
[1, 2, 3, 4, 5].copyWithin(-2) // [1, 2, 3, 1, 2]
// 将45从0的位置开始覆盖
[1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]
// 将4从0的位置开始覆盖
[1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]
// 将34从4的位置开始覆盖
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)// [1, 2, 3, 3, 4]

// 将3号位复制到0号位
[].copyWithin.call({length: 5, 3: 1}, 0, 3) // {0: 1, 3: 1, length: 5}
// 对象转数组(建议用es6的Array.from(Obj)转换比较直观)
Array.from({length: 5, 3: 1})
// [undefined, undefined, undefined, 1, undefined]
// 转换完毕，进行处理
[undefined, undefined, undefined, 1, undefined].copyWithin(0,3);
// [1, undefined, undefined, 1, undefined]
// 恢复回类对象(忽略undefined,补上length)
{0:1,3:1,length:5}
```

#### every()

`every()`测试一个数组内的所有元素是否都能通过某个指定函数的测试。返回**一个布尔值**。

> **语法**
>
> `arr.every(callback(element[, index[, array]]){})`
>
> | 参数       | 描述                                                              |
> | ---------- | ----------------------------------------------------------------- |
> | `callback` | 用来测试每个元素的函数，接收三个参数 `element`、`index`、 `array` |
> | `element`  | 用于测试的当前值                                                  |
> | `index`    | **可选** 用于测试的当前值的索引。                                 |
> | `array`    | **可选** 调用 `every` 的当前数组。                                |

> **总结**
>
> -   `every` 不会改变原数组。
> -   `every` 遍历的元素范围在第一次调用 `callback` 之前就已确定了。在调用 `every` 之后添加到数组中的元素不会被 `callback` 访问到。如果数组中存在的元素被更改，则他们传入 `callback` 的值是 `every` **访问到他们那一刻的值**。那些被删除的元素或从来未被赋值的元素将不会被访问到。

**例子：**

```javascript
[12, 5, 8, 130, 44].every((x) => x >= 10); // false
[12, 54, 18, 130, 44].every((x) => x >= 10); // true

// 在调用 `every` 之后添加到数组中的元素不会被 `callback` 访问到。
[12, 54, 18, 130, 44].every((x, i, arr) => {
    if (i == 0) arr.push(8);
    return x >= 10;
}); // true

// 如果数组中存在的元素被更改，则他们传入 `callback` 的值是 `every` **访问到他们那一刻的值**
[12, 54, 18, 130, 44].every((x, i, arr) => {
    if (i == 0) arr[2] = 8;
    return x >= 10;
}); // false

// 那些被删除的元素或从来未被赋值的元素将不会被访问到。
[12, 8, 18, 130, 44, , ,].every((x, i, arr) => {
    if (i == 0) arr.splice(1, 1);
    return x >= 10;
}); // true
```

#### fill()

`fill()`方法用一个固定值**填充**一个数组中从起始索引到终止索引内的全部元素。**不包括终止索引**，返回**修改后的数组**。

> **语法**
>
> `arr.fill(value[, start[, end]])`
>
> | 参数    | 描述                                      |
> | ------- | ----------------------------------------- |
> | `value` | 用来填充数组元素的值                      |
> | `start` | **可选** 起始索引，默认值为 `0`           |
> | `end`   | **可选** 终止索引，默认值为 `this.length` |

> **总结**
>
> -   如果 `start` 是个**负数**，则开始索引会被自动计算成为 `length + start`，其中 `length` 是 `this` 对象的 `length` 属性值。如果 `end` 是个负数，则结束索引会被自动计算成为 `length + end`。

**例子：**

```javascript
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
let arr = Array(3).fill({}); // [{}, {}, {}];
// 需要注意如果 fill 的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为 true
arr[0].hi = 'hi'; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

#### filter()

`filter()`方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素，返回**新数组**。

> **语法**
>
> `let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])`
>
> | 参数       | 描述                                                                                                                                   |
> | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
> | `callback` | 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。接受三个参数：`element`、`index`、 `array` |
> | `element`  | 数组中当前正在处理的元素                                                                                                               |
> | `index`    | **可选** 正在处理的元素在数组中的索引                                                                                                  |
> | `array`    | **可选** 调用了 filter 的数组本身                                                                                                      |

> **总结**
>
> -   `filter` 不会改变原数组，它返回过滤后的新数组。
> -   `filter` 遍历的元素范围在第一次调用 `callback` 之前就已经确定了。在调用 `filter` 之后被添加到数组中的元素不会被 `filter` 遍历到。如果已经存在的元素被改变了，则他们传入 `callback` 的值是 `filter` 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

**例子：**

```javascript
[12, 5, 8, 130, 44].filter((item) => item >= 10); // [12, 130, 44]
```

#### find()

`find()`方法返回数组中满足提供的测试函数的**第一个元素**的值。否则返回 `undefined`。

> **语法**
>
> `let data = arr.find(callback(element[, index[, array]])[, thisArg])`
>
> | 参数       | 描述                                                                                                                                   |
> | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
> | `callback` | 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。接受三个参数：`element`、`index`、 `array` |
> | `element`  | 数组中当前正在处理的元素                                                                                                               |
> | `index`    | **可选** 正在处理的元素在数组中的索引                                                                                                  |
> | `array`    | **可选** 调用了 filter 的数组本身                                                                                                      |

> **总结**
>
> -   `filter` 不会改变原数组，返回满足条件的第一个元素。
> -   `filter` 在第一次调用 `callback` 函数时会确定元素的索引范围，因此在 `find` 方法开始执行之后添加到数组的新元素将不会被 `callback` 函数访问到。如果数组中一个尚未被 `callback` 函数访问到的元素的值被 `callback` 函数所改变，那么当 `callback` 函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍旧会被访问到，但是其值已经是 `undefined` 了。

**例子：**

```javascript
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];

inventory.find((item) => item.name === 'cherries'); // { name: 'cherries', quantity: 5 }
inventory.findIndex((item) => item.name === 'cherriesfdsfdff'); // undefined
```

#### findIndex()

`findIndex()`方法返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回 **-1**。

> **语法**
>
> `let data = arr.findIndex(callback(element[, index[, array]])[, thisArg])`
>
> | 参数       | 描述                                                                                                                                   |
> | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
> | `callback` | 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。接受三个参数：`element`、`index`、 `array` |
> | `element`  | 数组中当前正在处理的元素                                                                                                               |
> | `index`    | **可选** 正在处理的元素在数组中的索引                                                                                                  |
> | `array`    | **可选** 调用了 filter 的数组本身                                                                                                      |

**例子：**

```javascript
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];

inventory.findIndex((item) => item.name === 'cherries'); // 2

inventory.findIndex((item) => item.name === 'cherriesfdsfdff'); // -1
```

#### findLast()

`findLast()`方法返回数组中满足提供的测试函数条件的**最后一个元素的值**。如果没有找到对应元素，则返回 `undefined`。

> **语法**
>
> `let data = arr.findLast(callback(element[, index[, array]])[, thisArg])`
>
> | 参数       | 描述                                                                                                                                   |
> | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
> | `callback` | 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。接受三个参数：`element`、`index`、 `array` |
> | `element`  | 数组中当前正在处理的元素                                                                                                               |
> | `index`    | **可选** 正在处理的元素在数组中的索引                                                                                                  |
> | `array`    | **可选** 调用了 filter 的数组本身                                                                                                      |

**例子：**

```javascript
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'fish', quantity: 1 },
    { name: 'cherries', quantity: 5 },
];

inventory.findLast(({ quantity }) => quantity < 2); // { name: "fish", quantity: 1 }
```

#### findLastIndex()

`findLastIndex()`方法返回数组中满足提供的测试函数条件的**最后一个元素的索引**。如果没有找到对应元素，则返回 `-1`。

> **语法**
>
> `let data = arr.findLastIndex(callback(element[, index[, array]])[, thisArg])`
>
> | 参数       | 描述                                                                                                                                   |
> | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
> | `callback` | 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。接受三个参数：`element`、`index`、 `array` |
> | `element`  | 数组中当前正在处理的元素                                                                                                               |
> | `index`    | **可选** 正在处理的元素在数组中的索引                                                                                                  |
> | `array`    | **可选** 调用了 filter 的数组本身                                                                                                      |

**例子：**

```javascript
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'fish', quantity: 1 },
    { name: 'cherries', quantity: 5 },
];

inventory.findLastIndex(({ quantity }) => quantity < 2); // 2

inventory.findLastIndex(({ quantity }) => quantity > 10); // -1
```

#### flat()

`flat()`将嵌套的数组**拉平**，变成一维数组。**返回一个新的数组，对原数组没有影响**。

> **语法**
>
> `let newArray = arr.flat(depth)`
>
> | 参数    | 描述                                           |
> | ------- | ---------------------------------------------- |
> | `depth` | 指定要**拉平**套数组的结构深度，默认值为 **1** |

> **总结**
>
> -   `flat()` 方法会移除数组中的空项

**例子：**

```javascript
let arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

let arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// `flat()` 方法会移除数组中的空项
var arr4 = [1, 2, , 4, 5];
arr4.flat(); // [1, 2, 4, 5]
```

#### flatMap()

`flatMap()`方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 连着深度值为 `1` 的 `flat` 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。返回**新的数组**

> **语法**
>
> ```javascript
> var new_array = arr.flatMap(function callback(element[, index[, array]]) {}[, thisArg])
> ```
>
> | 参数       | 描述                                                                         |
> | ---------- | ---------------------------------------------------------------------------- |
> | `callback` | 可以生成一个新数组中的元素的函数。接受三个参数：`element`、`index`、 `array` |
> | `element`  | 数组中当前正在处理的元素                                                     |
> | `index`    | **可选** 正在处理的元素在数组中的索引                                        |
> | `array`    | **可选** 调用了 filter 的数组本身                                            |

**例子：**

```javascript
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]); // [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]); // [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]); // [[2], [4], [6], [8]]
```

#### forEach()

`forEach()`方法对数组的每个元素执行一次给定的函数。返回`undefined`，**不会改变原数组**。

> **语法**
>
> ```javascript
> var new_array = arr.forEach(function callback(element[, index[, array]]) {}[, thisArg])
> ```
>
> | 参数       | 描述                                                                         |
> | ---------- | ---------------------------------------------------------------------------- |
> | `callback` | 可以生成一个新数组中的元素的函数。接受三个参数：`element`、`index`、 `array` |
> | `element`  | 数组中当前正在处理的元素                                                     |
> | `index`    | **可选** 正在处理的元素在数组中的索引                                        |
> | `array`    | **可选** 调用了 filter 的数组本身                                            |

> **备注**
>
> -   除了**抛出异常**以外，没有办法中止或跳出 `forEach()` 循环。
> -   `forEach()` 会跳过空值

**例子**

```javascript
const items = ['item1', 'item2', 'item3'];
const copy = [];
// after
items.forEach(function (item) {
    copy.push(item);
});

// 注意索引 2 被跳过了，因为在数组的这个位置没有项
[2, 5, , 9].forEach((element, index, array) => {
    console.log('a[' + index + '] = ' + element);
});
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

#### from()

`Array.from()` 方法对一个类似数组或可迭代对象创建一个新的，**浅拷贝的数组**实例。

> **语法**
>
> `Array.from(arrayLike[, mapFn[, thisArg]])r new_array = arr.forEach(function callback(element[, index[, array]]) {}[, thisArg])`
>
> | 参数        | 描述                                                          |
> | ----------- | ------------------------------------------------------------- |
> | `arrayLike` | 想要转换成数组的伪数组对象或可迭代对象                        |
> | `mapFn`     | **可选** 如果指定了该参数，新数组中的每个元素会执行该回调函数 |
> | `thisArg `  | **可选** 执行回调函数 `mapFn` 时 `this` 对象                  |

**例子：**

```javascript
// String 生成数组
Array.from('foo'); // [ "f", "o", "o" ]

// Set 生成数组
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // [ "foo", "bar", "baz" ]

// Map 生成数组
Array.from(
    new Map([
        [1, 2],
        [2, 4],
        [4, 8],
    ])
); // [[1, 2], [2, 4], [4, 8]]
Array.from(
    new Map(
        [
            ['1', 'a'],
            ['2', 'b'],
        ].values()
    )
); // ['a', 'b'];
Array.from(
    new Map(
        [
            ['1', 'a'],
            ['2', 'b'],
        ].keys()
    )
); // ['1', '2'];

// Array.from 中使用函数
Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6]
```

#### includes()

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

> **语法**
>
> `arr.includes(valueToFind[, fromIndex])`
>
> | 参数          | 描述                                                                                                                             |
> | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
> | `valueToFind` | 需要查找的元素值                                                                                                                 |
> | `fromIndex`   | **可选** 从 `fromIndex` 索引处开始查找 `valueToFind`。如果为**负值**，则从 `array.length + fromIndex` 的索引开始搜。默认为 **0** |

> **备注**
>
> -   使用 `includes()` 比较字符串和字符时是**区分大小写**的。
> -   技术上来讲，`includes()` 使用 [零值相等](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#%E9%9B%B6%E5%80%BC%E7%9B%B8%E7%AD%89) 算法来确定是否找到给定的元素，与`Object.is`类似，不过会认为 `+0` 与 `-0` 相等。
> -   如果 `fromIndex` **大于等于数组的长度**，则将直接返回 `false`，且不搜索该数组。
> -   如果 `fromIndex` 为**负值**，计算出的索引将作为开始搜索`searchElement`的位置。**如果计算出的索引小于 0，则整个数组都会被搜索**。

**例子：**

```javascript
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

// 与`Object.is`类似，不过会认为 `+0` 与 `-0` 相等
[1, 2, +0].includes(-0); // true

// 如果 fromIndex 大于等于数组的长度，则将直接返回 false，且不搜索该数组。
['a', 'b', 'c'].includes('c', 3); // false
['a', 'b', 'c'].includes('c', 100); // false

// 如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。如果计算出的索引小于 0，则整个数组都会被搜索。
['a', 'b', 'c'].includes('a', -100); // true
['a', 'b', 'c'].includes('b', -100); // true
['a', 'b', 'c'].includes('c', -100); // true
['a', 'b', 'c'].includes('a', -2); // false
```

#### indexOf()

`indexOf()` 方法返回在数组中可以找到一个给定元素的**第一个索引**，如果不存在，则返回 **-1**。

> **语法**
>
> `arr.indexOf(searchElement[, fromIndex])`
>
> | 参数            | 描述                                                                                                                               |
> | --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
> | `searchElement` | 需要查找的元素值                                                                                                                   |
> | `fromIndex`     | **可选** 从 `fromIndex` 索引处开始查找 `searchElement`。如果为**负值**，则从 `array.length + fromIndex` 的索引开始搜。默认为 **0** |

> **备注**
>
> -   使用 `indexOf()` 比较字符串和字符时是**区分大小写**的。
> -   技术上来讲，`indexOf()` 使用`===`算法来确定是否找到给定的元素,`-0 === +0` `NaN != NaN`。
> -   如果 `fromIndex` **大于等于数组的长度**，则将直接返回 `-1`，且不搜索该数组。
> -   如果 `fromIndex` 为**负值**，计算出的索引将作为开始搜索`searchElement`的位置。**如果计算出的索引小于 0，则整个数组都会被搜索**。

**例子：**

```javascript
var array = [2, 5, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

#### isArray()

`Array.isArray()` 用于确定传递的值是否是一个 `Array`,如果值是 `Array`，返回 `true`，否则返回 `false`。

> **语法**
>
> `Array.isArray(obj)`
>
> | 参数  | 描述         |
> | ----- | ------------ |
> | `obj` | 需要检测的值 |

**例子：**

```javascript
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

#### join()

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并**返回这个字符串**。

> **语法**
>
> `arr.join([separator])`
>
> | 参数        | 描述                                                                                                                                                    |
> | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `separator` | 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。默认值为 `,` 分隔。如果 `separator` 是空字符串 ("")，则所有元素之间都没有任何字符。 |

> **返回值**
>
> -   所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来的**字符串**。如果 `arr.length` 为 `0`，则**返回空字符串**。

> **警告**
>
> -   如果一个元素为 `undefined` 或 `null`，它会被转换为空字符串。

**例子：**

```javascript
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join(); // myVar1 的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', '); // myVar2 的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3 的值变为"Wind + Rain + Fire"
var myVar4 = a.join(''); // myVar4 的值变为"WindRainFire"
```

#### keys()

`keys()`方法返回一个包含数组中每个索引键的**Array Iterator**对象。

> **语法**
>
> `arr.keys()`

**例子：**

```javascript
var arr = ['a', , 'c'];
Object.keys(arr); // ['0', '2']
// 索引迭代器会包含那些没有对应元素的索引  （Array Iterator {}）
[...arr.keys()]; // [0, 1, 2]

// Iterator 迭代器
arr.keys(); // Array Iterator {}
```

#### lastIndexOf()

`lastIndexOf()`方法返回指定元素（也即有效的 `JavaScript` 值或变量）在数组中的**最后一个的索引**，如果不存在则返回 **-1**。从数组的**后面向前**查找，从 `fromIndex` 处开始。

> **语法**
>
> `arr.lastIndexOf(searchElement[, fromIndex])`
>
> | 参数            | 描述                                                                                                                                                                                                                                                                                                       |
> | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `searchElement` | 被查找的元素                                                                                                                                                                                                                                                                                               |
> | `fromIndex `    | **可选** 从此位置开始**逆向查找**。默认为数组的长度减 `1(arr.length - 1)`，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。 |

> **总结**
>
> -   `lastIndexOf` 使用严格相等（===）比较 `searchElement` 和数组中的元素。

**例子：**

```javascript
var array = [2, 5, 9, 2];

array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); //  0
array.lastIndexOf(2, -2); //  0
array.lastIndexOf(2, -1); //  3
```

#### map()

`map()`方法创建一个**新数组**，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

> **语法**
>
> `var new_array = arr.map(function callback(currentValue[, index[, array]]) {}[, thisArg])`
>
> | 参数            | 描述                                                               |
> | --------------- | ------------------------------------------------------------------ |
> | `callback`      | 生成新数组元素的函数，使用三个参数`currentValue`、`index`、`array` |
> | `currentValue ` | 数组中正在处理的当前元素                                           |
> | `index `        | **可选** 数组中正在处理的当前元素的索引                            |
> | `array `        | **可选** `map()`方法调用的数组                                     |

> **总结**
>
> -   `callback` 函数只会在**有值的索引上**被调用；那些从来**没赋值**或者使用`delete` 删除的索引则**不会**被调用。
> -   不修改调用它的原数组本身（当然可以在 `callback` 执行时改变原数组）。

**例子：**

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt); // roots 的值为 [1, 2, 3], numbers 的值仍为 [1, 4, 9]

// parseInt(val,radix) radix表示val字符串的基数（进制）
['1', '2', '3'].map(parseInt); // [1, NaN, NaN]
```

#### pop()

`pop()` 方法从数组中**删除最后一个元素**，并**返回该元素的值**。此方法会**更改数组的长度**。

> **语法**
>
> `arr.pop()`

> **总结**
>
> -   `pop()` 方法从一个数组中**删除并返回最后一个元素**。
> -   数组为空时返回`undefined`。

**例子：**

```javascript
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin']

console.log(popped); // 'sturgeon'
```

#### push()

`push()` 方法将一个或多个元素**添加到数组的末尾**，并**返回该数组的新长度**。

> **语法**
>
> `arr.push(element1, ..., elementN)`
>
> | 参数       | 描述                   |
> | ---------- | ---------------------- |
> | `elementN` | 被添加到数组末尾的元素 |

> **总结**
>
> -   `push()`返回添加完元素之后，**数组的长度**。
> -   数组为空时返回`undefined`。

**例子：**

```javascript
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ["soccer", "baseball", "football", "swimming"]

console.log(total); // 4
```

#### reduce()

[`reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 方法对数组中的每个元素按序执行一个由您提供的 `reducer` 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。

> **语法**
>
> `arr.reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)`
>
> | 参数            | 描述                                                                                                                                |
> | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | `callbackFn`    | 回调函数包含四个参数：`previousValue`、`currentValue`、`currentIndex`、`array`、                                                    |
> | `previousValue` | 上一次调用 `callbackFn` 时的**返回值**。在第一次调用时，若指定了初始值 `initialValue`，其值则为 `initialValue`，否则为 `array[0]`。 |
> | `currentValue`  | 数组中**正在处理的元素**。在第一次调用时，若指定了初始值 `initialValue`，其值为`array[0]`，否则为 `array[1]`。                      |
> | `currentIndex`  | 数组中**正在处理的元素的索引**。若指定了初始值 `initialValue`，则起始索引号为 `0`，否则从索引 `1` 起始                              |
> | `array`         | 用于遍历的数组                                                                                                                      |
> | `initialValue`  | **可选**作为第一次调用 callback 函数时参数 previousValue 的值。组                                                                   |

**例子：**

```javascript
// 数组求和
[0, 1, 2, 3].reduce((previousValue, currentValue) => previousValue + currentValue, 0); // 6
// 数组求乘积
[1, 2, 3, 4].reduce((x, y) => x * y); // 24

// 计算数组中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let nameNum = names.reduce((pre, cur) => {
    if (cur in pre) return pre[cur]++;
    return (pre[cur] = 1);
}, {});
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

// 数组去重
let arr = [1, 2, 3, 4, 4, 1];
let newArr = arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) return pre.push(cur);
    return pre;
}, []);
console.log(newArr); // [1, 2, 3, 4]
```

#### reverse()

`reverse()` 方法将数组中元素的位置**颠倒**，并**返回该数组**。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。**该方法会改变原数组**。

> **语法**
>
> `arr.reverse()`

**例子：**

```javascript
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]
a.reverse();
console.log(a); // [3, 2, 1]
```

#### shift()

`shift()` 方法从数组中**删除第一个元素**，并**返回该元素的值**。此方法更改数组的长度。

> **语法**
>
> `arr.shift()`

**例子：**

```javascript
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish); // "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('调用 shift 之后: ' + myFish); // "调用 shift 之后: clown,mandarin,surgeon"

console.log('被删除的元素: ' + shifted); // "被删除的元素: angel"
```

#### slice()

`slice()` 方法返回一个**新的数组**对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，**不包括** `end`）。**原始数组不会被改变**。

> **语法**
>
> `arr.slice([begin[, end]])`
>
> | 参数    | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
> | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `begin` | **可选** 提取起始处的索引（从 `0` 开始），从该索引开始提取原数组元素。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，`slice(-2)` 表示提取原数组中的**倒数第二个元素**到最后一个元素（包含最后一个元素）。如果省略 `begin`，则 `slice` 从索引 `0` 开始。如果 `begin` 超出原数组的索引范围，则会返回空数组。                                                                                                                                                                                                                                                |
> | `end`   | **可选** 提取终止处的索引（从 `0` 开始），在该索引处结束提取原数组元素。`slice` 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但不包含 `end`）。`slice(1,4)` 会提取原数组中从第二个元素开始一直到第四个元素的所有元素（索引为 1, 2, 3 的元素）。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。如果 `end` 大于数组的长度，`slice` 也会一直提取到原数组末尾。 |

**例子：**

```javascript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

#### some()

`some()` 判断数组中是否存在满足条件的项，只要有**一项满足条件**，就会返回`true`，负责返回`false`。**可以终止循环**。

> **语法**
>
> `arr.some(callback(element[, index[, array]])[, thisArg])`
>
> | 参数       | 说明                                                 |
> | ---------- | ---------------------------------------------------- |
> | `callback` | 回调函数，接受三个参数：`element`、`index `、`index` |
> | `element`  | 正在处理的元素                                       |
> | `index`    | **可选** 正在处理的元素的**索引值**                  |
> | `array`    | **可选** `some()`被调用的数组。                      |

> **总结**
>
> -   `callback `会跳过**空值**（被删除或从来未被赋值的）
> -   `some()` 被调用时**不会改变数组**

**例子：**

```javascript
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

#### sort()

`sort()` 对数组的元素进行排序，**并返回数组**。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的。

> **语法**
>
> `arr.sort([compareFunction])`
>
> | 参数              | 说明                                                                                                         |
> | ----------------- | ------------------------------------------------------------------------------------------------------------ |
> | `compareFunction` | **可选** 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序 |
> | `firstEl`         | 第一个用于比较的元素                                                                                         |
> | `secondEl`        | 第二个用于比较的元素                                                                                         |

> **总结**
>
> -   返回**排序后的数组**。请注意，_数组已原地排序，并且不进行复制_。
> -   如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
> -   如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
> -   如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。

**例子：**

```javascript
[4, 2, 5, 1, 3].sort((a, b) => a - b); // [1, 2, 3, 4, 5]

[4, 2, 5, 1, 3].sort((a, b) => b - a); // [5, 4, 3, 2, 1]

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 },
];

// 对象可以按照某个属性排序
items.sort((a, b) => a.value - b.value);
```

#### splice()

`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式**返回被修改的内容**。此方法**会改变原数组**。

> **语法**
>
> `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
>
> | 参数                | 说明                                                                                                                                                                                                                                                                                                                                                                                              |
> | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `start`             | 指定修改的开始位置（从 0 计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从 -1 计数，这意味着 -n 是倒数第 n 个元素并且等价于 array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第 0 位。                                                                                                                                        |
> | `deleteCount`       | **可选** 整数，表示要移除的数组元素的个数。如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。如果 deleteCount 被省略了，或者它的值大于等于 array.length - start(也就是说，如果它大于或者等于 start 之后的所有元素的数量)，那么 start 之后数组的所有元素都会被删除。如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。 |
> | `item1, item2, ...` | **可选** 要添加进数组的元素，从 start 位置开始。如果不指定，则 splice() 将只删除数组元素。                                                                                                                                                                                                                                                                                                        |

> **总结**
>
> -   返回\*由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的**数组**。如果没有删除元素，则返回**空数组\***。

**例子：**

1. 从索引 2 的位置开始删除 0 个元素，插入“drum” 和 "guitar"

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');
// myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed: [], 没有元素被删除
```

2. 从索引 3 的位置开始删除 1 个元素

```javascript
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]
```

3. 从索引 2 的位置开始删除 1 个元素，插入“trumpet”

```javascript
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');

// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素: ["drum"]
```

4. 从索引 0 的位置开始删除 2 个元素，插入"parrot"、"anemone"和"blue"

```javascript
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// 运算后的 myFish: ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// 被删除的元素: ["angel", "clown"]
```

5. 从索引 2 的位置开始删除 2 个元素

```javascript
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(2, 2);

// 运算后的 myFish: ["parrot", "anemone", "sturgeon"]
// 被删除的元素: ["blue", "trumpet"]
```

6. 从索引 -2 的位置开始删除 1 个元素

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]
```

7. 从索引 2 的位置开始删除所有元素

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]
```

#### toString()

`toString()` 方法**返回一个字符串**，表示指定的数组及其元素。

> **语法**
>
> `array.toString()`

> **总结**
>
> -   数组对象，`toString` 方法在内部调用 `join()` 方法拼接数组中的元素并返回一个字符串，其中包含用**逗号分隔**的每个数组元素。如果 `join` 方法不可用，或者它不是一个函数，将使用 `Object.prototype.toString` 代替，返回 `[object Array]`。

**例子**

```javascript
// 如果 `join` 方法不可用，或者它不是一个函数，将使用 `Object.prototype.toString` 代替，返回 `[object Array]`。
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1

const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

#### unshift()

`unshift()`方法将一个或多个元素添加到数组的**开头**，**并返回该数组的新长度**。

> **语法**
>
> `arr.unshift(element0, element1, /* … ,*/ elementN)`
>
> | 参数     | 说明                   |
> | -------- | ---------------------- |
> | elementN | 要添加到数组开头的元素 |

**例子**

```javascript
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // 重置数组

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr); // [3, 2, 1, 4, 5, 6]

let arr2 = [1, 2];

arr2.unshift(0); // 调用的结果是3，这是新的数组长度
// arr is [0, 1, 2]

arr2.unshift(-2, -1); // 新的数组长度为5
// arr is [-2, -1, 0, 1, 2]

arr2.unshift([-4, -3]); // 新的数组长度为 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr2.unshift([-7, -6], [-5]); // 新的数组长度为 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

#### values()

`values()`方法返回一个新的 `Array Iterator` 对象，该对象包含数组每个**索引的值**。

> **语法**
>
> `arr.values()`

> **总结**
>
> -   数组迭代器中存储的是**原数组的地址**，而不是数组元素值，如果数组中元素改变，那么迭代器的值也会改变。
> -   数组迭代器是一次性的，或者说临时对象。

**例子**

1. 使用 for...of 循环进行迭代

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();

for (const letter of iterator) {
    console.log(letter);
} //"a" "b" "c" "d" "e"
```

2. 使用 .next() 迭代

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
iterator.next(); // Object { value: "a", done: false }
iterator.next().value; // "b"
iterator.next()['value']; // "c"
iterator.next(); // Object { value: "d", done: false }
iterator.next(); // Object { value: "e", done: false }
iterator.next(); // Object { value: undefined, done: true }
iterator.next().value; // undefined
```

3. **警告：** 数组迭代器是一次性的，或者说临时对象

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
for (const letter of iterator) {
    console.log(letter);
} //"a" "b" "c" "d" "e"
for (const letter of iterator) {
    console.log(letter);
} // undefined
```

4. **值：** 数组迭代器中存储的是原数组的地址，而不是数组元素值。

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
console.log(iterator); // Array Iterator {  }
iterator.next().value; // "a"
arr[1] = 'n';
iterator.next().value; // "n"
```

## Function

每个 `JavaScript` 函数实际上都是一个 `Function` 对象。运行 `(function(){}).constructor === Function // true` 便可以得到这个结论。

### 属性

-   `length`：属性指明函数的**形参个数**。

```javascript
(function(...args)).length // 0

// 设置默认值之后，停止统计
(function(a=0,b,c)).length // 0

(function(a,b = 1,c)).length // 1

(function(a,b,c)).length // 3
```

-   `name`：属性返回函数实例的名称。

```javascript
function doSomething() {}
doSomething.name; // "doSomething"

var o = {
    foo() {},
};
o.foo.name; // "foo";
```

### 方法

#### apply()

`apply()` 方法调用一个具有给定 `this` 值的函数，以及以**一个数组（或一个类数组对象）的形式提供参数**。

> **语法**
>
> `function.apply(thisArg, argsArray)`
>
> | 参数        | 说明                                                                                                                                              |
> | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `thisArg`   | 在 `func` 函数运行时使用的 `this` 值                                                                                                              |
> | `argsArray` | **可选** 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 `func` 函数。如果该参数的值为 `null` 或 `undefined`，则表示不需要传入任何参数 |

**例子**

```javascript
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

// 找出数组中最大/小的数字
const numbers = [5, 6, 2, 3, 7];

// 使用 Math.min/Math.max 以及 apply 函数时的代码
let max = Math.max.apply(null, numbers); // 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..)
let min = Math.min.apply(null, numbers);
```

**简单手写 apply()**

```javascript
Function.prototype.myapply = function (ctx = window, args = []) {
  // 给ctx新增一个独一无二的属性一面覆盖原有属性
  const key = Symbol();
  ctx[key] = this; // this = myapply调用者
  // 通过隐式绑定的方式调用函数
  const res = ctx[key](...args);
  // 删除添加的属性
  delete ctx.[key];
  // 返回函数调用的返回值
  return res;
};
```

#### call()

`call()` 方法调用一个具有给定 `this` 值的函数，以及单独给出的一个或多个参数来调用一个函数。

> **语法**
>
> `function.call(thisArg, arg1, arg2, ...)`
>
> | 参数              | 说明                                     |
> | ----------------- | ---------------------------------------- |
> | `thisArg`         | 在 `function` 函数运行时使用的 `this` 值 |
> | `arg1, arg2, ...` | **可选** 指定的参数列表                  |

**例子**

```javascript
function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

var obj = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours',
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

**简单手写 call()**

```javascript
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数。
Function.prototype.mycall = function (ctx = window, ...args) {
  const key = Symbol()
  ctx.[key] = this; // this = mycall 调用者
 // 通过隐式绑定的方式调用函数
  const res = ctx.[key](...args);
  // 删除添加的属性
  delete ctx.[key];
  // 返回函数调用的返回值
  return res;
};
```

#### bind()

`bind()` 方法创建一个**新的函数**，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的**第一个参数**，而其余参数将作为新函数的参数，供调用时使用。**返回**一个*原函数的拷贝，并拥有指定的 `this` 值和初始参数*。

> **语法**
>
> `function.bind(thisArg, arg1, arg2, ...)`
>
> | 参数              | 说明                                                            |
> | ----------------- | --------------------------------------------------------------- |
> | `thisArg`         | 调用绑定函数时作为 `this` 参数传递给目标函数的值                |
> | `arg1, arg2, ...` | **可选** 当目标函数被调用时，被预置入绑定函数的参数列表中的参数 |

**例子**

```javascript
this.x = 9; // 在浏览器中，this 指向全局的 "window" 对象
var module = {
    x: 81,
    getX: function () {
        return this.x;
    },
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

**简单手写 bind()**

```javascript
Function.prototype.mybind = function (ctx = window) {
    ctx._fn = this; // this = mybind 调用者
    // 取参数
    let arg = [...arguments].slice(1);
    return function () {
        const args = arg.concat([...arguments]);
        const res = args.length > 0 ? ctx._fn(...args) : ctx._fn();
        delete ctx._fn;
        return res;
    };
};
```

## Number

### 属性

-   `MAX_SAFE_INTEGER`：表示在 `JavaScript` 中最大的安全整数`(2^53 - 1)`,`Number.MAX_SAFE_INTEGER // 9007199254740991`。
-   `MAX_VALUE`：表示在 `JavaScript` 里所能表示的最大数值,属性值接近于 `1.79E+308`。
-   `MIN_SAFE_INTEGER`：表示在 `JavaScript` 中最小的安全整数`-(2^53 - 1)`,`Number.MIN_SAFE_INTEGER // -9007199254740991`。
-   `MIN_VALUE`：表示在 `JavaScript` 中所能表示的**最接近 0 的正值，而不是最小的负值**，

### 方法

#### isInteger()

`isInteger()` 方法用来判断给定的参数是**否为整数**,返回`true` OR `false`。

> **语法**
>
> `Number.isInteger(value)`
>
> | 参数    | 说明         |
> | ------- | ------------ |
> | `value` | 要判断的参数 |

**例子**

```javascript
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger('10'); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false
Number.isInteger(NaN); // false
```

#### isNaN()

`isNaN()` 方法确定传递的值是否为 `NaN`，返回`true` OR `false`。

> **语法**
>
> `Number.isNaN(value)`
>
> | 参数    | 说明         |
> | ------- | ------------ |
> | `value` | 要判断的参数 |

> **总结**
>
> -   `NaN == NaN` 和 `NaN === NaN`都会返回 `false`。
> -   和全局函数 [isNaN()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 相比，`Number.isNaN()` 不会自行将参数转换成数字，只有在参数是值为 `NaN` 的数字时，才会返回 `true`。

**例子**

```javascript
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。
Number.isNaN('NaN'); // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN('blabla'); // false

// 下面的都返回 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');

/**
 * isNaN函数会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是NaN进行判断
 */
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN('37'); // false: 可以被转换成数值 37
isNaN('37.37'); // false: 可以被转换成数值 37.37
isNaN('37,5'); // true
isNaN('123ABC'); // true:  parseInt("123ABC") 的结果是 123，但是 Number("123ABC") 结果是 NaN
isNaN(''); // false: 空字符串被转换成 0
isNaN(' '); // false: 包含空格的字符串被转换成 0

// dates
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

isNaN('blabla'); // true: "blabla"不能转换成数值
// 转换成数值失败， 返回 NaN
```

#### parseFloat()

`parseFloat()`函数解析一个参数（必要时先转换为字符串）并返回一个浮点数，_给定值被解析成浮点数。如果给定值**不能被转换成数值**，则会返回 `NaN`。_

> **语法**
>
> `Number.parseFloat(string) 或者 parseFloat(string)`
>
> | 参数     | 说明                                                                                                |
> | -------- | --------------------------------------------------------------------------------------------------- |
> | `string` | 如果参数不是一个字符串，则将其转换为字符串 (使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。 |

> **总结**
>
> -   如果 `parseFloat` 在解析过程中遇到了正号`（+）、负号（- U+002D HYPHEN-MINUS）、数字（0-9）、小数点（.）`、或者科学记数法中的指数（e 或 E）以外的字符，则它会忽略该字符以及之后的所有字符，返回当前已经解析到的浮点数。
> -   参数首位和末位的空白符会被忽略。
> -   如果参数字符串的第一个字符不能被解析成为数字，则 `parseFloat` 返回 `NaN`。

**例子**

```javascript
// 都返回3.14
parseFloat(3.14);
parseFloat('3.14');
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({
    toString: function () {
        return '3.14';
    },
});

// 如果参数字符串的第一个字符不能被解析成为数字，则 `parseFloat` 返回 `NaN`。
parseFloat('FF2'); // NaN
```

#### parseInt()

`parseInt(string, radix)` 解析一个字符串并返回指定基数的十进制整数，`radix` 是 `2-36` 之间的整数，表示被解析字符串的基数。

> **语法**
>
> `Number.parseInt(string, radix) 或者 parseInt(string, radix)`
>
> | 参数     | 说明                                                                                                |
> | -------- | --------------------------------------------------------------------------------------------------- |
> | `string` | 如果参数不是一个字符串，则将其转换为字符串 (使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。 |
> | `radix`  | **可选**表示进制的基数(进制数)，`2-36` 之间的整数。                                                 |

> **总结**
>
> -   参数首位和末位的空白符会被忽略。
> -   如果参数字符串的第一个字符不能被解析成为数字，则 `parseInt` 返回 `NaN`。

**例子**

```javascript
// 都返回15
parseInt('0xF', 16);
parseInt('F', 16);
parseInt('17', 8);
parseInt(021, 8); // 021 = 17
parseInt('015', 10); // parseInt(015, 8); 返回 13
parseInt(15.99, 10);
parseInt('15,123', 10);
parseInt('FXX123', 16);
parseInt('1111', 2);
parseInt('15 * 3', 10);
parseInt('15e2', 10);
parseInt('15px', 10);
parseInt('12', 13);

// 返回 `NaN`。
parseInt('Hello', 8); // 根本就不是数值
parseInt('546', 2); // 除了 “0、1” 外，其它数字都不是有效二进制数字
```

#### toExponential()

`toExponential(fractionDigits)` 方法以指数表示法返回该数值字符串表示形式。

> **语法**
>
> `numObj.toExponential(fractionDigits)`
>
> | 参数             | 说明                                                                                  |
> | ---------------- | ------------------------------------------------------------------------------------- |
> | `fractionDigits` | **可选** 一个整数，用来指定小数点后有几位数字。默认情况下用尽可能多的位数来显示数字。 |

**例子**

```javascript
var numObj = 77.1234;

alert('numObj.toExponential() is ' + numObj.toExponential()); //输出 7.71234e+1

alert('numObj.toExponential(4) is ' + numObj.toExponential(4)); //输出 7.7123e+1

alert('numObj.toExponential(2) is ' + numObj.toExponential(2)); //输出 7.71e+1

alert('77.1234.toExponential() is ' + (77.1234).toExponential()); //输出 7.71234e+1

alert('77 .toExponential() is ' + (77).toExponential()); //输出 7.7e+1
```

#### toFixed()

`toFixed(digits)` 把数字转换为**字符串**，结果的小数点后有指定位数的数字。

> **语法**
>
> `numObj.toFixed(digits)`
>
> | 参数     | 说明                                                                                                                |
> | -------- | ------------------------------------------------------------------------------------------------------------------- |
> | `digits` | **可选** 小数点后数字的个数；介于 `0` 到 `20`（包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 `0`。 |

**例子**

```javascript
var numObj = 12345.6789;

numObj.toFixed(); // 返回 "12346"：进行四舍六入五看情况，不包括小数部分
numObj.toFixed(1); // 返回 "12345.7"：进行四舍六入五看情况

numObj.toFixed(6); // 返回 "12345.678900"：用 0 填充

(1.23e20).toFixed(2); // 返回 "123000000000000000000.00"

(1.23e-10).toFixed(2); // 返回 "0.00"

(2.34).toFixed(1); // 返回 "2.3"

(2.35).toFixed(1); // 返回 '2.4'. Note it rounds up

(2.55).toFixed(1) - // 返回 '2.5'. Note it rounds down - see warning above
    (2.34).toFixed(1); // 返回 -2.3（由于操作符优先级，负数不会返回字符串）

(-2.34).toFixed(1); // 返回 "-2.3"（若用括号提高优先级，则返回字符串）
```

#### toPrecision()

`toPrecision(precision)` 把数字转换为**字符串**，结果的小数点后有指定位数的数字。

> **语法**
>
> `numObj.toFixed(digits)`
>
> | 参数        | 说明                                                                                          |
> | ----------- | --------------------------------------------------------------------------------------------- |
> | `precision` | **可选** 一个用来指定有效数个数的整数。如果该参数是一个非整数值，将会向下舍入到最接近的整数。 |

**例子**

```javascript
let numObj = 5.123456;

console.log(numObj.toPrecision()); // 输出 '5.123456'
console.log(numObj.toPrecision(5)); // 输出 '5.1235'
console.log(numObj.toPrecision(2)); // 输出 '5.1'
console.log(numObj.toPrecision(1)); // 输出 '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // 输出 '0.000123'
console.log(numObj.toPrecision(5)); // 输出 '0.00012300'
console.log(numObj.toPrecision(2)); // 输出 '0.00012'
console.log(numObj.toPrecision(1)); // 输出 '0.0001'

// 请注意，在某些情况下可能会返回科学计数法字符串
console.log((1234.5).toPrecision(2)); // 输出 '1.2e+3'
```

#### toString()

`toString(radix)` 把数字转换为**字符串**，使用 `radix` 指定的基数。

> **语法**
>
> `numObj.toString(radix)`
>
> | 参数    | 说明                                                                                                     |
> | ------- | -------------------------------------------------------------------------------------------------------- |
> | `radix` | **可选** 指定要用于数字到字符串的转换的基数 (从 `2` 到 `36`)。如果未指定 `radix` 参数，则默认值为 `10`。 |

**例子**

```javascript
var count = 10;

console.log(count.toString()); // 输出 '10'
console.log((17).toString()); // 输出 '17'
console.log((17.2).toString()); // 输出 '17.2'

var x = 6;

console.log(x.toString(2)); // 输出 '110'
console.log((254).toString(16)); // 输出 'fe'

console.log((-10).toString(2)); // 输出 '-1010'
console.log((-0xff).toString(2)); // 输出 '-11111111'
```

#### valueOf()

`valueOf()` 方法返回一个被 `Number` 对象包装的**原始值数字**。

> **语法**
>
> `numObj.valueOf()`

**例子**

```javascript
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Map

`new Map()` 创建一个 `Map` 对象，`Map` 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。

### 属性

-   `size` 返回 `Map` 对象的成员数量。

### 方法

#### clear()

`clear()` 方法会**移除** `Map` 对象中的**所有**元素。

> **语法**
>
> `myMap.clear()`

> **返回值**
>
> `undefined`

**例子**

```javascript
const myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

console.log(myMap.size); // 2
console.log(myMap.has('bar')); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has('bar')); // false
```

#### delete()

`delete()` 方法用于**移除** `Map` 对象中**指定**的元素

> **语法**
>
> `myMap.delete(key)`
>
> | 参数  | 说明                                              |
> | ----- | ------------------------------------------------- |
> | `key` | **必须** 从 `Map` 对象中**移除**的元素的**键** 。 |

> **返回值**
>
> `Boolean`: 如果 `Map` 对象中**存在**该元素，则移除它并返回 `true`；否则直接返回 `false`。

**例子**

```javascript
const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.delete('bar')); // 返回 true。成功地移除元素
console.log(myMap.has('bar')); // 返回 false。"bar" 元素将不再存在于 Map 实例中
```

#### entries()

`entries()` 方法返回一个新的包含 `[key, value]` 对的 `Iterator` 对象，返回的迭代器的迭代顺序与 `Map` 对象的插入**顺序相同**。

> **语法**
>
> `myMap.entries()`

> **返回值**
>
> 一个新的 `Map` 迭代器对象。

**例子**

```javascript
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

#### forEach()

`forEach()` 方法按照插入顺序依次对 `Map` 中每个`键/值`对执行一次给定的函数。

> **语法**
>
> `myMap.forEach((value, key, map) => { /* … */ } )`

> **返回值**
>
> `undefined`

**例子**

```javascript
function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`);
}
new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
]).forEach(logMapElements);
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

#### get()

`get()` 方法返回某个 `Map` 对象中的一个**指定元素**。

> **语法**
>
> `myMap.get(key)`
>
> | 参数  | 说明                                              |
> | ----- | ------------------------------------------------- |
> | `key` | **必须** 从 `Map` 对象中**获取**的元素的**键** 。 |

> **返回值**
>
> `Map` 对象中与指定键的**值**，如果找不到这个键则返回 `undefined`。

**例子**

```javascript
const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.get('bar')); // 返回 "foo"
console.log(myMap.get('baz')); // 返回 undefined
```

#### has()

`has()` 方法 Map 中是否存在指定元素, 返回`true` or `false`。

> **语法**
>
> `myMap.has(key)`
>
> | 参数  | 说明                                                      |
> | ----- | --------------------------------------------------------- |
> | `key` | **必填** 从 `Map` 对象中**是否存在**指定的元素的**键** 。 |

> **返回值**
>
> `Boolean`，如果指定元素**存在**于 `Map` 中，则返回 `true`；其他情况返回 `false`。

**例子**

```javascript
const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.has('bar')); // 返回 true
console.log(myMap.has('baz')); // 返回 false
```

#### keys()

`keys()` 返回一个引用的 `Iterator` 对象。它包含按照顺序插入 `Map` 对象中每个元素的 `key` 值。

> **语法**
>
> `myMap.keys()`

> **返回值**
>
> 一个存在引用关系的 `Map iterator` 对象。

**例子**

```javascript
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```

#### set()

`set()` 方法为 `Map` 对象**添加或更新**一个指定了键（`key`）和值（`value`）的（`新`）键值对。

> **语法**
>
> `myMap.set(key, value)`
>
> | 参数       | 说明                                             |
> | ---------- | ------------------------------------------------ |
> | `key`      | **必填** 要添加至相应 `Map` 对象的元素的**键**。 |
> | `valuekey` | **必填** 要添加至相应 `Map` 对象的元素的**值**。 |

> **返回值**
>
> `Map` 对象

**例子**

```javascript
const myMap = new Map();

// 将一个新元素添加到 Map 对象
myMap.set('bar', 'foo');
myMap.set(1, 'foobar');

// 在 Map 对象中更新某个元素的值
myMap.set('bar', 'baz');

/**
 * 链式使用 set()
 * 因为 set() 方法返回 Map 对象本身
 */
myMap.set('bar', 'foo').set(1, 'foobar').set(2, 'baz');
```

#### values()

`values()` 方法返回一个新的 `Iterator` 对象。它包含按顺序插入 `Map` 对象中每个元素的 `value` 值。

> **语法**
>
> `myMap.values()`

> **返回值**
>
> 一个存在引用关系的 `Map iterator` 对象。

**例子**

```javascript
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## Set

`new Set()` 创建一个 `Set` 对象，`Set` 对象允许你存储任何类型的**唯一值**，无论是原始值或者是对象引用。

### 属性

-   `size` 返回 `Set` 对象的元素个数。

### 方法

#### add()

`add()`方法用来向一个 `Set` 对象的**末尾添加**一个指定的值。

> **语法**
>
> `mySet.add(value)`
>
> | 参数    | 说明                                           |
> | ------- | ---------------------------------------------- |
> | `value` | **必填** 需要添加到 `Set` 对象的元素的**值**。 |

> **返回值**
>
> `Set` 对象

**例子**

```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(5).add('some text'); // 可以链式调用

console.log(mySet);
// Set [1, 5, "some text"]

mySet.add(5).add(1);
console.log(mySet);
// Set [1, 5, "some text"]  // 重复的值没有被添加进去
```

#### clear()

`clear()` 方法会**移除** `Set` 对象中的**所有**元素。

> **语法**
>
> `mySet.clear()`

> **返回值**
>
> `undefined`

**例子**

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add('foo');

console.log(mySet.size); // 2
console.log(mySet.has('foo')); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has('foo')); // false
```

#### delete()

`delete()` 方法用于**移除** `Set` 对象中**指定**的元素

> **语法**
>
> `mySet.delete(value)`
>
> | 参数    | 说明                    |
> | ------- | ----------------------- |
> | `value` | **必须** 将要删除的元素 |

> **返回值**
>
> `Boolean`: 移除成功返回 `true`；否则返回 `false`。

**例子**

```javascript
const mySet = new Set();
mySet.add('foo');

console.log(mySet.delete('bar')); // 返回 false，不包含 "bar" 这个元素
console.log(mySet.delete('foo')); // 返回 true，删除成功

console.log(mySet.has('foo')); // 返回 false，"foo" 已经成功删除
```

#### entries()

`entries()` 方法返回一个新的包含 `[value, value]` 对的 `Iterator` 对象，返回的迭代器的迭代顺序与 `Set` 对象的插入**顺序相同**。

> **语法**
>
> `mySet.entries()`

> **返回值**
>
> 一个新的包含 `[value, value]` 形式的数组迭代器对象，value 是给定集合中的每个元素，迭代器 对象元素的顺序即集合对象中元素插入的顺序。

**例子**

```javascript
var mySet = new Set();
mySet.add('foobar');
mySet.add(1);
mySet.add('baz');

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

#### forEach()

`forEach()` 方法按照插入顺序依次对 `Set` 中每个`值`对执行一次给定的函数。

> **语法**
>
> `mySet.forEach(callback[, thisArg])`

> **返回值**
>
> `undefined`

**例子**

```javascript
function logSetElements(value1, value2, set) {
    console.log('s[' + value1 + '] = ' + value2);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);

// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

#### has()

`has()` 方法 `Set` 中是否存在指定元素, 返回`true` or `false`。

> **语法**
>
> `mySet.has(value)`
>
> | 参数    | 说明                                       |
> | ------- | ------------------------------------------ |
> | `value` | **必填** 从 `Set` 对象中**是否存在**该值。 |

> **返回值**
>
> `Boolean`，如果指定元素**存在**于 `Set` 中，则返回 `true`；其他情况返回 `false`。

**例子**

```javascript
var mySet = new Set();
mySet.add('foo');

mySet.has('foo'); // 返回 true
mySet.has('bar'); // 返回 false

var set1 = new Set();
var obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // 返回 true
set1.has({ key1: 1 }); // 会返回 false，因为其是另一个对象的引用
set1.add({ key1: 1 }); // 现在 set1 中有 2 条（不同引用的）对象了
```

#### keys()

`keys()`是`values()`的别名。

#### values()

`values()` 方法返回一个新的 `Iterator` 对象。它包含按顺序插入 `Set` 对象中每个元素的 `value` 值。

> **语法**
>
> `mySet.values()`

> **返回值**
>
> 按照元素插入顺序返回一个包含给定的 `Set` 对象中每个元素值的全新 `Iterator` 对象。

**例子**

```javascript
var mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```
