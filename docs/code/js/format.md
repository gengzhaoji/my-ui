# 编码规范
统一团队的编码规范，有助于代码的维护

## 单行代码块

在单行代码块中使用空格

```javascript
// 不推荐
function foo () {return true}
if (foo) {bar = 0}

// 推荐
function foo () { return true }
if (foo) { bar = 0 }
```

## 变量命名

当命名变量时，主流分为驼峰式命名（constiableName）和下划线命名（constiable_name）两大阵营。
* 团队约定使用驼峰式命名

## 逗号风格

逗号分隔列表时，在 JavaScript 中主要有两种逗号风格：

* 标准风格，逗号放置在当前行的末尾
* 逗号前置风格，逗号放置在下一行的开始位置

团队使用标准风格

```javascript
// 不推荐
const foo = 1
,
bar = 2

const foo = 1
, bar = 2

const foo = ['name'
          , 'age']

// 推荐
const foo = 1,
    bar = 2

const foo = ['name',
            'age']
```

## 构造函数首字母大写

在 JavaScript 中 new 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 new 来调用。所以我们团队约定构造函数的首字母要大小，以此来区分构造函数和普通函数。

```javascript
// 不推荐
const fooItem = new foo()
// 推荐
const fooItem = new Foo()
```

## 链式赋值

链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值

```javascript
// 不推荐
const a = b = c = 1
// 推荐
const a = 1
const b = 1
const c = 1
```

## 操作符的空格
团队约定操作符前后都需要添加空格

```javascript
// 不推荐
const sum = 1+2
// 推荐
const sum = 1 + 2
```