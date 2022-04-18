# [JavaScript高阶教程](https://www.bilibili.com/video/BV1uK411H7on)

## 第一章 ES介绍

1. ECMA（European Computer Manufacturers Association）：欧洲计算机制造商协会
2. ECMAScript ：由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言
3. [ES历史版本](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)：
   * ES1：1997年，制定了语言的基本语法
   * ES2：1998年，较小改动
   * ES3：1999年，引入正则、异常处理、格式化输出等。IE 开始支持
   * ES4：2007年，过于激进，未发布
   * ES5：2009年，引入严格模式、JSON，扩展对象、数组、原型、字符串、日期方法
   * ES6：2015年，模块化、面向对象语法、Promise、箭头函数、let、const、数组解构赋值等
   * ES7：2016年，幂运算符、数组扩展、Async/await 关键字
   * ES8：2017年，Async/await、字符串扩展
   * ES9：2018年，对象解构赋值、正则扩展
   * ES10：2019年，扩展对象、数组方法
   * ES11：2020年

## 第二章 ES6新特性

### let 关键字

1. 作用：声明非对象类型

2. 特点：

   * 不允许重复声明

   * 块级作用域：块级作用域包括：if else、while、for、花括号{}等

   * 不存在变量提升：不允许在声明变量之前调用它，直接报错，但如果是var会返回undefinded

   ```js
   console.log(song);
   let song = '恋爱达人';
   
   // 对比
   console.log(song);
   var song = '恋爱达人';
   ```

   * 不影响作用域链

   ```js
   {
     let school = '尚硅谷'
     function fn() {
       console.log(school)
     }
     fn()
   }
   ```

3. 可以同时声明多个变量

   ```js
   let b, c, d
   let f = 521, g = 'iloveyou', h = []
   ```

4. 经典案例：for循环中的i

   * 使用var，i会成为全局变量，直接跳到最终遍历结果

   ```js
     <body>
       <div class="container">
         <h2 class="page-header">点击切换颜色</h2>
         <div class="item"></div>
         <div class="item"></div>
         <div class="item"></div>
       </div>
       <script>
         //获取div元素对象
         let items = document.getElementsByClassName('item')
   
         //遍历并绑定事件
         for (let i = 0; i < items.length; i++) {
           items[i].onclick = function () {
             //修改当前元素的背景颜色
             // var只能用这一种方法：this
             this.style.background = 'pink';
           }
         }
       </script>
     </body>
   ```

   * 使用let，i会成为函数变量，可以跟随遍历动态变化

   ```js
     <body>
       <div class="container">
         <h2 class="page-header">点击切换颜色</h2>
         <div class="item"></div>
         <div class="item"></div>
         <div class="item"></div>
       </div>
       <script>
         //获取div元素对象
         let items = document.getElementsByClassName('item')
   
         //遍历并绑定事件
         for (let i = 0; i < items.length; i++) {
           items[i].onclick = function () {
             //修改当前元素的背景颜色
             //let可以用这两种方法：this、items[i]
             items[i].style.background = 'pink'
           }
         }
       </script>
     </body>
   ```

------

### const 关键字

1. 作用：声明常量、对象

2. 特点：

   * 声明必须赋初始值

     ```js
     // 正确方法
     const SCHOOL = '尚硅谷'
     
     // 错误方法
     const A;
     ```

   * 一般常量使用大写(潜规则)，不用也不会报错

     ```js
     const a = 100;
     ```

   * 常量的值不能修改

     ```js
     SCHOOL = 'ATGUIGU'; // 报错
     ```

   * 块级作用域

     ```js
     {
       const PLAYER = 'UZI';
     }
     console.log(PLAYER);
     ```

   * 对于数组和对象的元素修改, 不算做对常量的修改, 不会报错

     ```js
     const TEAM = ['UZI', 'MXLG', 'Ming', 'Letme']
     TEAM.push('Meiko');
     ```

------

### 解构赋值

1. 定义：从数组和对象中提取值，对变量进行赋值

2. 数组的解构

   ```js
   const F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
   let [xiao, liu, zhao, song] = F4
   ```

3. 对象的解构

   ```js
   const zhao = {
     name: '赵本山',
     age: '不详',
     xiaopin: function () {
       console.log('我可以演小品')
     },
   }
   let { name, age, xiaopin } = zhao
   console.log(name)
   console.log(age)
   console.log(xiaopin)
   xiaopin()
   ```

------

### 模板字符串

1. 定义：是增强版的字符串，用反引号（`）标识

2. 特点：

   * 字符串中可以出现换行符

     ```js
     let str = `<ul>
                   <li>沈腾</li>
                   <li>玛丽</li>
                   <li>魏翔</li>
                   <li>艾伦</li>
               </ul>`
     ```
     
   * 可以使用 ${xxx} 形式输出变量
   
     ```js
     let lovest = '魏翔'
     let out = `${lovest}是我心目中最搞笑的演员!!`
     console.log(out)
     ```
3. 注意：当遇到字符串与变量拼接的情况使用模板字符串

------

### 简化对象写法

定义：在大括号里面直接写入变量和函数，作为对象的属性和方法

```js
let name = '尚硅谷'
let change = function () {
  console.log('我们可以改变你!!')
}
const school = {
  name,
  change,
  improve() {
    console.log('我们可以提高你的技能')
  },
}
```

------

### 箭头函数

1. 定义：使用「箭头」（=>）定义函数

2. 语法：

   ```js
   let fn = (arg1, arg2, arg3) => { return arg1 + arg2 + arg3;}
   ```

3. 特点：

   * this是静态的：this始终指向函数声明时所在作用域下的this的值

     ```js
     function getName() {
       console.log(this.name)
     }
     let getName2 = () => {
       console.log(this.name)
     }
     //设置 window 对象的 name 属性
     window.name = '尚硅谷'
     const school = {
       name: 'ATGUIGU',
     }
     // 直接调用：window.name '尚硅谷'
     getName()
     getName2()
     
     // call 方法调用：school.name 'ATGUIGU'
     getName.call(school)
     getName2.call(school)
     ```

   * 不能作为构造函数实例化

     ```js
     let Person = (name, age) => {
       this.name = name
       this.age = age
     }
     let me = new Person('xiao', 30)
     console.log(me)
     
     // 提示：会报错，Person is not a constructor
     ```

   * 不能使用 arguments变量：在普通函数中，arguments变量是用来储存实参的

     ```js
     let fn = () => {
       console.log(arguments)
     }
     fn(1, 2, 3)
     
     // 对比
     let fn = function () {
       console.log(arguments)
     }
     fn(1, 2, 3)
     ```

   * 箭头函数的简写

     ```js
     // 省略小括号：当形参有且只有一个的时候
     let add = n => {
       return n + n
     }
     console.log(add(9))
     
     // 省略花括号：函数体只有一条语句，函数的返回值为该条语句的执行结果
     let pow = n => n * n
     console.log(pow(8))
     ```

4. 应用场景：

   * 箭头函数适合 this无关的回调：定时器、数组的方法回调
   * 箭头函数不适合与 this 有关的回调：事件回调、对象的方法

5. 案例1：事件回调函数中的定时器：setTimeout

   * 普通函数：绑定事件后，回调函数内必须先保存this，否则定时器内的回调函数this指向的是windows

   ```js
   ad.addEventListener('click', function () {
     //保存 this 的值
     let _this = this
     //定时器
     setTimeout(function () {
       //修改背景颜色 this
       _this.style.background = 'pink'
     }, 2000)
   })
   ```

   * 箭头函数：定时器内的回调函数使用箭头函数，this依然指向事件函数中的this

   ```js
   // 因为this始终指向函数声明时所在作用域下的this的值
   // setTimeout函数是在事件函数内部定义的
   ad.addEventListener('click', function () {
     //定时器
     setTimeout(() => {
       this.style.background = 'pink'
     }, 2000)
   ```

6. 案例2：数组筛选：arr.filter(function(){...})

   * 普通函数

   ```js
   const arr = [1, 6, 9, 10, 100, 25]
   const result = arr.filter(function (item) {
     if (item % 2 === 0) {
       return true
     } else {
       return false
     }
   })
   console.log(result)
   ```

   * 箭头函数

   ```js
   // 一般写法
   const arr = [1, 6, 9, 10, 100, 25]
   const result = arr.filter((item) => {
     if (item % 2 === 0) {
       return true
     } else {
       return false
     }
   })
   console.log(result)
   
   // 精简写法
   const arr = [1, 6, 9, 10, 100, 25]
   const result = arr.filter((item) => item % 2 === 0)
   ```


------

### 函数参数默认值

1. 定义：ES6允许给函数参数赋值初始值

2. 形参初始值：具有默认值的参数，一般位置要靠后(潜规则)

   ```js
   function add(a, b, c = 10) {
     return a + b + c
   }
   let result = add(1, 2)
   console.log(result)
   ```

3. 与解构赋值结合

   ```js
   function connect({ host = '127.0.0.1', username, password, port }) {
     console.log(host)
     console.log(username)
     console.log(password)
     console.log(port)
   }
   connect({
     host: 'atguigu.com',
     username: 'root',
     password: 'root',
     port: 3306,
   })
   ```

------

### rest参数

1. 形式：`...args`

2. 作用：用于获取函数的实参，用来代替 arguments

   ```js
   function date(...args) {console.log(args)}
   ```

3. 注意：rest 参数必须要放到参数最后

   ```js
   function fn(a,b,...args){...}
   ```

4. 返回：数组Array

------

### spread 扩展运算符

1. 形式：三个点（`...`）

2. 作用：好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包

   ```js
   const tfboys = ['易烊千玺', '王源', '王俊凯']
   // 声明一个函数
   function chunwan() {
     console.log(arguments)
   }
   chunwan(...tfboys) // chunwan('易烊千玺','王源','王俊凯')
   ```

3. 应用：

   * 数组的合并

     ```js
     // 传统方法
     arr1.concat(arr2)
     
     // 扩展运算符
     [...arr1, ...arr2]
     ```

   * 数组的克隆
   
     ```js
     // 将arr2克隆成arr1
     const arr2 = [...arr1]
     ```
   
   * 将伪数组转为真正的数组
   
     ```js
     const divs = document.querySelectorAll('div')
     const divArr = [...divs]
     ```
   
   * 展开对象（ES9新特性）：`let newObj = {...obj1, ...obj2, ...obj3}`
   
     ```js
     let skillOne = {
      q: '致命打击',
     };
     let skillTwo = {
      w: '勇气'
     };
     let skillThree = {
      e: '审判'
     };
     let skillFour = {
      r: '德玛西亚正义'
     };
     let gailun = {...skillOne, ...skillTwo,...skillThree,...skillFour}
     ```

------

### 数据类型：Symbol

1. 定义：ES6中新的原始数据类型，是JS中第7种数据类型，表示独一无二的值，类似于字符串的数据类型

2. JS中的7种数据类型（USONB）:
   * u：undefined
   * s：string 、symbol
   * o：object
   * n：null、number
   * b：boolean

3. 特点：

   * Symbol 的值是唯一的，用来解决命名冲突的问题

     ```js
     // Symbol创建：即便symbol里面值相同，这两个变量也不相等
     let s = Symbol()
     onsole.log(s, typeof s)
     
     let s2 = Symbol('尚硅谷')
     let s3 = Symbol('尚硅谷')
     console.log(s2 === s3)
     ```

     ```js
     // Symbol.for创建：如果symbol里面值相同，这两个变量相等
     let s4 = Symbol.for('尚硅谷')
     let s5 = Symbol.for('尚硅谷')
     console.log(s4 === s5)
     ```

   * Symbol 值不能与其他数据进行运算

     ```js
     // 以下运算会报错
     let result = s + 100;
     let result = s > 100;
     let result = s + s;
     ```

   * Symbol 定义的对象属性不能使用for…in循环遍历，但是可以使用`Reflect.ownKeys`来获取对象的所有键名

4. 作用：给对象添加/创建属性（用中括号`[ ]`添加）

   * 如果想给对象添加属性，传统方法需要查看对象中是否已经有某种属性名，以防重名覆盖

   * 外部添加法

     ```js
     // 向对象中添加方法 up down
     let game = {
       name: '俄罗斯方块',
       up: function () {},
       down: function () {},
     }
     // 声明一个对象
     let methods = {
       up: Symbol(),
       down: Symbol(),
     }
     game[methods.up] = function () {
       console.log('我可以改变形状')
     }
     game[methods.down] = function () {
       console.log('我可以快速下降!!')
     }
     console.log(game)
     ```

   * 内部添加法

     ```js
     let youxi = {
       name: '狼人杀',
       [Symbol('say')]: function () {
         console.log('我可以发言')
       },
       [Symbol('zibao')]: function () {
         console.log('我可以自爆')
       },
     }
     console.log(youxi)
     ```

5. 内置值：除了定义自己使用的 Symbol 值以外，ES6 还提供了11个内置的 Symbol 值指向语言内部使用的方法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

   * `Symbol.hasInstance`：当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法

     ```js
     class Person {
       static [Symbol.hasInstance](param) {
         console.log(param)
         console.log('我被用来检测类型了')
         return false
       }
     }
     let o = {}
     console.log(o instanceof Person)
     ```
     
   * `Symbol.isConcatSpreadable`：布尔值，表示该对象用于 Array.prototype.concat()时，是否可以展开
   
     ```js
     const arr = [1, 2, 3]
     const arr2 = [4, 5, 6]
     console.log(arr.concat(arr2))
     arr2[Symbol.isConcatSpreadable] = false
     console.log(arr.concat(arr2))
     ```
   
   * `Symbol.species`：创建衍生对象时，会使用该属性
   
   * `Symbol.match`：当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值
   
   * `Symbol.replace`：当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值
   
   * `Symbol.search`：当该对象被 str.search (myObject)方法调用时，会返回该方法的返回值
   
   * `Symbol.split`：当该对象被 str.split(myObject)方法调用时，会返回该方法的返回值
   
   * `Symbol.iterator`：对象进行 for...of 循环时，会调用该方法，返回该对象的默认遍历器
   
   * `Symbol.toPrimitive`：该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值
   
   * `Symbol.toStringTag`：在该对象上面调用 toString 方法时，返回该方法的返回值
   
   * `Symbol.unscopables`：该对象指定了使用 with 关键字时，哪些属性会被 with环境排除

------

### 迭代器

1. 定义：遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口（可以理解为对象中的属性），就可以完成遍历操作。

2. ES6 创造了一种新的遍历命令`for...of`循环，Iterator 接口主要供`for...of`消费

3. 原生具备 iterator 接口的数据(可用`for of`遍历)

   * Array
   * Arguments
   * Set
   * Map
   * String
   * TypedArray
   * NodeList

   ```js
   //声明一个数组
   const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']
   
   // 使用 for...of 遍历数组：键值
   for (let v of xiyou) {
     console.log(v)
   }
   
   // 【对比】使用 for...of 遍历数组：键名：0、1、2、3
   for (let v in xiyou) {
     console.log(v)
   }
   ```

4. 工作原理:

   * 创建一个指针对象，指向当前数据结构的起始位置
   * 第一次调用对象的 `next` 方法，指针自动指向数据结构的第一个成员
   * 接下来不断调用 `next` 方法，指针一直往后移动，直到指向最后一个成员
   * 每调用 `next` 方法返回一个包含 `value` 和 `done` 属性的对象

   ```js
   //声明一个数组
   const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']
   
   // 创建迭代器
   let iterator = xiyou[Symbol.iterator]()
   
   //调用对象的next方法
   console.log(iterator.next()) //{value: '唐僧', done: false}
   console.log(iterator.next()) //{value: '孙悟空', done: false}
   console.log(iterator.next()) //{value: '猪八戒', done: false}
   console.log(iterator.next()) //{value: '沙僧', done: false}
   console.log(iterator.next()) //{value: undefined, done: true}
   ```

5. 需要自定义遍历数据的时候，要想到迭代器

   ```js
   //声明一个对象
   const banji = {
     name: '终极一班',
     stus: ['xiaoming', 'xiaoning', 'xiaotian', 'knight'],
     [Symbol.iterator]() {
       //索引变量
       let index = 0
       //保存this，指向banji对象
       let _this = this
       return {
         next: function () {
           if (index < _this.stus.length) {
             const result = { value: _this.stus[index], done: false }
             //下标自增
             index++
             //返回结果
             return result
           } else {
             return { value: undefined, done: true }
           }
         },
       }
     },
   }
   
   //遍历对象：如果不用迭代器，会报错：is not iterable
   //遍历这个对象中的stus：
   for (let v of banji) {
     console.log(v)
   }
   ```

------

### 生成器

1. 定义：生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

2. 常见的异步编程：文件操作（`fs`）、网络操作（`ajax`、`request`）、数据库操作（`mongodb`）等

3. 特点：

   * *的位置没有限制
   * 生成器函数返回的结果是迭代器对象，调用迭代器对象的`next`方法可以得到`yield`语句后的值
   * `yield`相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次`next`方法，执行一段代码
   * `next`方法可以传递实参，作为`yield`语句的返回值

   ```js
   function* gen() {
     console.log(111)
     yield '一只没有耳朵'
     console.log(222)
     yield '一只没有尾部'
     console.log(333)
     yield '真奇怪'
     console.log(444)
   }
   
   let iterator = gen()
   console.log(iterator.next())
   console.log(iterator.next())
   console.log(iterator.next())
   console.log(iterator.next())
   
   //遍历
   for (let v of gen()) {
     console.log(v)
   }
   ```

4. 参数：

   * 在实例化迭代器时，可以传递参数：`let iterator = gen('args')`
   * next方法可以传入实参，作为上一个yield语句的返回结果

   ```js
   function* gen(arg) {
     console.log(arg) 	  // AAA
     let one = yield 111 // {value: 111, done: false}，这里的one，承接next中传入的参数 BBB
     
     console.log(one) 	  // BBB
     let two = yield 222 // {value: 222, done: false}，这里的two，承接next中传入的参数 CCC
     
     console.log(two) 		// CCC
     let three = yield 333 // {value: 333, done: false}，这里的three，承接next中传入的参数 DDD
     
     console.log(three) // DDD
     					 // {value: undefined, done: true}
   }
   //执行获取迭代器对象
   let iterator = gen('AAA')
   console.log(iterator.next())
   
   //next方法可以传入实参
   console.log(iterator.next('BBB'))
   console.log(iterator.next('CCC'))
   console.log(iterator.next('DDD'))
   ```

5. 案例1：定时器——1s后控制台输出111、2s后输出222、3s后输出333

   * 普通做法：层级嵌套太多，非常麻烦（回调地狱）

   ```js
   setTimeout(() => {
     console.log(111)
     setTimeout(() => {
       console.log(222)
       setTimeout(() => {
         console.log(333)
       }, 3000)
     }, 2000)
   }, 1000)
   ```

   * 生成器函数

   ```js
   function one() {
     setTimeout(() => {
       console.log(111)
       // 内部直接调用next，自动执行下一个函数
       iterator.next()
     }, 1000)
   }
   function two() {
     setTimeout(() => {
       console.log(222)
       iterator.next()
     }, 2000)
   }
   function three() {
     setTimeout(() => {
       console.log(333)
       iterator.next()
     }, 3000)
   }
   function* gen() {
     yield one()
     yield two()
     yield three()
   }
   //调用生成器函数
   let iterator = gen()
   iterator.next()
   ```

6. 案例2：模拟获取——用户数据、订单数据、商品数据（逻辑：必须先调用用户数据，才有订单数据，然后才有商品数据）

   ```js
   function getUsers() {
     setTimeout(() => {
       let data = '用户数据'
       //调用 next 方法，传入实参【作为上一个yield语句的返回结果】
       iterator.next(data)
     }, 1000)
   }
   function getOrders() {
     setTimeout(() => {
       let data = '订单数据'
       iterator.next(data)
     }, 1000)
   }
   function getGoods() {
     setTimeout(() => {
       let data = '商品数据'
       iterator.next(data)
     }, 1000)
   }
   function* gen() {
     let users = yield getUsers()
     let orders = yield getOrders()
     let goods = yield getGoods()
   }
   //调用生成器函数
   let iterator = gen()
   iterator.next()
   ```

------

### Promise

* 定义：Promise是 ES6 引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

#### Promise构造函数

1. 语法：`Promise(function (resolve, reject)){...}`

```js
//实例化 Promise 对象
const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // 调用成功
    // let data = '数据库中的用户数据'
    // resolve(data)
    
    // 调用失败
    let err = '数据读取失败'
    reject(err)
  }, 1000)
})
//调用 promise 对象的 then 方法
p.then(
  // 调用成功
  function (value) {
    console.log(value)
  },
  // 调用失败
  function (reason) {
    console.error(reason)
  }
)
```

2. 实例：node fs读取文件

* 普通方法

```js
//引入 fs 模块
const fs = require('fs')

//调用方法读取文件
fs.readFile('./resources/为学.md', (err, data) => {
  //如果失败, 则抛出错误
  if (err) throw err
  //如果没有出错, 则输出内容
  console.log(data.toString())
})
```
* Promise方法

```js
//引入 fs 模块
const fs = require('fs')

//使用 Promise 封装
const p = new Promise(function (resolve, reject) {
  fs.readFile('./resources/为学.md', (err, data) => {
    //判断如果失败
    if (err) reject(err)
    //如果成功
    resolve(data)
  })
})

p.then(
  function (value) {
    console.log(value.toString())
  },
  function (reason) {
    console.log('读取失败!!')
  }
)
```

3. 案例：Promise 使用 XMLHttpRequest 封装 Ajax

```js
// 接口地址: https://api.apiopen.top/getJoke
const p = new Promise((resolve, reject) => {
  //1. 创建对象
  const xhr = new XMLHttpRequest()
  //2. 初始化
  xhr.open('GET', 'https://api.apiopen.top/getJ')
  //3. 发送
  xhr.send()
  //4. 绑定事件, 处理响应结果
  xhr.onreadystatechange = function () {
    //判断
    if (xhr.readyState === 4) {
      //判断响应状态码 200-299
      if (xhr.status >= 200 && xhr.status < 300) {
        //表示成功
        resolve(xhr.response)
      } else {
        //如果失败
        reject(xhr.status)
      }
    }
  }
})
//指定回调
p.then(
  function (value) {
    console.log(value)
  },
  function (reason) {
    console.error(reason)
  }
)
```

#### Promise.prototype.then方法

* 原则：then方法的返回结果是Promise对象, 对象状态由回调函数的执行结果决定

1. 非promise类型：状态`PromiseState`为成功`fulfilled`, 返回值`PromiseResult`为对象的成功的值

```js
//创建 promise 对象
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('用户数据')
    //reject('出错啦')
  }, 1000)
})

// 实例化then方法
const result = p.then(
  (value) => {
    console.log(value)
    // 非promise类型：状态为成功（fulfilled）, 返回值为对象的成功的值（'iloveyou'）
    return 'iloveyou'
  },
  (reason) => {
    console.warn(reason)
  }
)
console.log(result)
```

2. promise对象：状态`PromiseState`与promise对象相同, 返回值`PromiseResult`为对象的promise对象的值

```js
//【返回值成功的情况】
//创建 promise 对象
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('用户数据')
    //reject('出错啦')
  }, 1000)
})

const result = p.then(
  (value) => {
    console.log(value)
    // promise对象：状态与promise对象相同, 返回值为对象的promise对象的值
    return new Promise((resolve, reject) => {
      // 状态PromiseState：fulfilled，返回值PromiseResult：ok
      resolve('ok')
      // 状态PromiseState：rejected，返回值PromiseResult：error
      // reject('error')
    })
  },
  (reason) => {
    console.warn(reason)
  }
)
console.log(result)
```

```js
//【返回值失败的情况】
//创建 promise 对象
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('用户数据')
    reject('出错啦')
  }, 1000)
})

const result = p.then(
  (value) => {
    console.log(value)
  },
  (reason) => {
    console.warn(reason)
      return new Promise((resolve, reject) => {
       // 状态PromiseState：fulfilled，返回值PromiseResult：ok
  	   resolve('ok')
       // 状态PromiseState：rejected，返回值PromiseResult：error
       // reject('error')
})
  }
)
console.log(result)
```

3. 抛出错误：状态`PromiseState`为失败`rejected`, 返回值`PromiseResult`为失败抛出的值

```js
//创建 promise 对象
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('用户数据')
    //reject('出错啦')
  }, 1000)
})

const result = p.then(
  (value) => {
    console.log(value)
    // 抛出错误
    // 状态PromiseState：rejected，返回值PromiseResult：Error: 出错啦! ...
    throw new Error('出错啦!')
    // 状态PromiseState：rejected，返回值PromiseResult：'出错啦!'
    // throw '出错啦!'
  },
  (reason) => {
    console.warn(reason)
  }
)
console.log(result)
```

4. 可以进行链式调用：`p.then((value) => {}).then((value) => {})`

```js
// 案例：读取多个文件
//引入 fs 模块
const fs = require('fs')

// 传统方法
fs.readFile('./resources/为学.md', (err, data1) => {
  fs.readFile('./resources/插秧诗.md', (err, data2) => {
    fs.readFile('./resources/观书有感.md', (err, data3) => {
      let result = data1 + '\r\n' + data2 + '\r\n' + data3
      console.log(result)
    })
  })
})
```

```js
// 案例：读取多个文件
//引入 fs 模块
const fs = require('fs')

//使用 promise 实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./resources/为学.md', (err, data) => {
    resolve(data)
  })
})

p.then((value) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/插秧诗.md', (err, data) => {
      // 把这两次的结果变成数组
      resolve([value, data])
    })
  })
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      fs.readFile('./resources/观书有感.md', (err, data) => {
        // 向数组中推送结果
        value.push(data)
        resolve(value)
      })
    })
  })
  .then((value) => {
    console.log(value.join('\r\n'))
  })
```

#### Promise.prototype.catch方法

1. 作用：指定Promise失败的回调

2. 使用then方法，需要写value、reason两个回调

   ```js
   const p = new Promise((resolve, reject) => {
     setTimeout(() => {
       reject('出错啦!')
     }, 1000)
   })
   
   p.then(
     function (value) {
       console.log(value)
     },
     function (reason) {
       console.error(reason)
     }
   )
   ```

3. 使用catch方法，直接写reason一个回调即可

   ```js
   const p = new Promise((resolve, reject) => {
     setTimeout(() => {
       reject('出错啦!')
     }, 1000)
   })
   
   p.catch(function (reason) {
     console.warn(reason)
   })
   ```

------

### Set：集合

1. 定义：ES6 提供了新的数据结构Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用扩展运算符`...`展开、`for...of...`进行遍历。

2. 属性与方法：

   * size：返回集合的元素个数
   * add：增加一个新元素，返回当前集合
   * delete：删除元素，返回 boolean 值
   * has：检测集合中是否包含某个元素，返回 boolean 值
   * clear：清空集合，返回 undefined

   ```js
   //声明一个 set
   let s = new Set()
   let s2 = new Set(['大事儿', '小事儿', '好事儿', '坏事儿', '小事儿'])
   //元素个数
   console.log(s2.size)
   //添加新的元素
   s2.add('喜事儿')
   //删除元素
   s2.delete('坏事儿')
   //检测
   console.log(s2.has('糟心事'))
   //清空
   s2.clear()
   console.log(s2)
   // for of遍历
   for (let v of s2) {
     console.log(v)
   }
   ```

3. 应用：

   * 数组去重

   ```js
   let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
   let result = [...new Set(arr)];
   console.log(result);
   ```

   * 求交集

   ```js
   let arr2 = [4, 5, 6, 5, 6]
   // 方法1：详细写法
   let result = [...new Set(arr)].filter((item) => {
     let s2 = new Set(arr2) // 4 5 6
     if (s2.has(item)) {
       return true
     } else {
       return false
     }
   })
   
   // 方法2：简便写法
   let result = [...new Set(arr)].filter((item) => new Set(arr2).has(item))
   console.log(result)
   ```

   * 求并集

   ```js
   let union = [...new Set([...arr, ...arr2])];
   console.log(union);
   ```

   * 求差集

   ```js
   let diff = [...new Set(arr)].filter((item) => !new Set(arr2).has(item))
   console.log(diff)
   ```

------

### Map：升级版Obj对象

1. 定义：ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了iterator接口，所以可以使用扩展运算符`...`展开、`for...of...`进行遍历。

2. 属性与方法：

   * size：返回 Map 的元素个数
   * set：增加一个新元素，返回当前 Map
   * get：返回键名对象的键值
   * has：检测 Map 中是否包含某个元素，返回 boolean 值
   * delete：删除元素，指定键名
   * clear：清空集合，返回 undefine
   
   ```js
   //声明 Map
   let m = new Map()
   
   //set：增加一个新元素，返回当前 Map
   m.set('name', '尚硅谷')
   m.set('change', function () {
     console.log('我们可以改变你!!')
   })
   let key = {
     school: 'ATGUIGU',
   }
   m.set(key, ['北京', '上海', '深圳'])
   
   //size：返回 Map 的元素个数
   console.log(m.size)
   
   //delete：删除元素，指定键名
   m.delete('name')
   
   //get：返回键名对象的键值
   console.log(m.get('change'))
   console.log(m.get(key))
   
   //clear：清空集合，返回 undefine
   m.clear()
   
   //for of：遍历，返回数组，第一个元素为键，第二个元素为值
   for (let v of m) {
     console.log(v)
   }
   console.log(m);
   ```
   

------

### class 类

1. 定义：ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
2. 特点：
   * class：声明类
   * constructor：定义构造函数初始化
   * static：定义静态方法和属性
   * extends：继承父类
   * super：调用父级构造方法
   * 父类方法可以重写

#### class声明类

* 传统ES5方法

```js
function Phone(brand, price) {
  this.brand = brand
  this.price = price
}
//添加方法
Phone.prototype.call = function () {
  console.log('我可以打电话!!')
}
//实例化对象
let Huawei = new Phone('华为', 5999)
Huawei.call()
console.log(Huawei)
```

* ES6方法：class声明类

```js
class Shouji {
  // 构造函数：constructor
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
  // 方法：必须使用该语法, 不能使用 ES5 的对象完整形式（call():function{...})
  // 语法：方法名() {回调函数}
  call() {
    console.log('我可以打电话!!')
  }
}
let onePlus = new Shouji('1+', 1999)
console.log(onePlus)
```

#### static静态属性和方法

* 属于类的属性和方法，但不属于实例对象的属性和方法

* ES5方法：给实例对象添加属性和方法，使用 `Obj.prototype`，直接在类上添加的属性和方法，属于静态方法

```js
// ES5方法
function Phone() {}
Phone.name = '手机'
Phone.change = function () {
    console.log('我可以改变世界')
}
Phone.prototype.size = '5.5inch'

let nokia = new Phone()
// 直接在函数对象上添加属性，实例对象无法读取，必须用prototype添加，否则属于静态属性和方法
console.log(nokia.name)    // undefined
console.log(Phone.name)	   // '手机'
nokia.change()            // 报错nokia.change is not a function
Phone.change()			   // '我可以改变世界'
console.log(nokia.size)   // '5.5inch'
```

* ES6方法：使用static定义静态方法

```js
// ES6方法
class Phone {
  //静态属性：属于类的属性和方法，但不属于实例对象的属性和方法
  static name = '手机'
  static change() {
    console.log('我可以改变世界')
  }
}
let nokia = new Phone()
console.log(nokia.name)	// undefined
console.log(Phone.name)	// '手机'
nokia.change() // 报错nokia.change is not a function
Phone.change() //'我可以改变世界' */
```

#### extends、super继承父类

* extends继承父类、supe调用父级构造方法

* ES5继承父类

```js
//手机（父级）
function Phone(brand, price) {
  this.brand = brand
  this.price = price
}
Phone.prototype.call = function () {
  console.log('我可以打电话')
}

//智能手机（子级）
function SmartPhone(brand, price, color, size) {
  Phone.call(this, brand, price)
  this.color = color
  this.size = size
}

//设置子级构造函数的原型
SmartPhone.prototype = new Phone()
SmartPhone.prototype.constructor = SmartPhone

//声明子类的方法
SmartPhone.prototype.photo = function () {
  console.log('我可以拍照')
}
SmartPhone.prototype.playGame = function () {
  console.log('我可以玩游戏')
}

//实例化
const chuizi = new SmartPhone('锤子', 2499, '黑色', '5.5inch')
console.log(chuizi)
```

* ES6继承父类

```js
class Phone {
  //构造方法
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
  //父类的成员属性
  call() {
    console.log('我可以打电话!!')
  }
}
// extends关键字继承父类
class SmartPhone extends Phone {
  //构造方法
  constructor(brand, price, color, size) {
    // super调用父级构造方法
    super(brand, price) // 等价于Phone.call(this, brand, price)
    this.color = color
    this.size = size
  }
  photo() {
    console.log('拍照')
  }
  playGame() {
    console.log('玩游戏')
  }
  // 可以重写父类中的属性和方法
  call() {
    console.log('我可以进行视频通话')
  }
}
const xiaomi = new SmartPhone('小米', 799, '黑色', '4.7inch')
console.log(xiaomi)
xiaomi.call()
xiaomi.photo()
xiaomi.playGame()
```

#### get和set

* get：获取属性
* set：对某属性进行设置

```js
class Phone {
  get price() {
    console.log('价格属性被读取了')
    return 'iloveyou'
  }
  // 注意：set至少要有一个参数
  set price(newVal) {
    console.log('价格属性被修改了')
  }
}

//实例化对象
let s = new Phone()

console.log(s.price)
s.price = 'free'
```

------

### 数值扩展

1. Number.EPSILON：是 JavaScript 表示的最小精度，EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16

```js
function equal(a, b) {
  if (Math.abs(a - b) < Number.EPSILON) {
    return true
  } else {
    return false
  }
}
console.log(0.1 + 0.2 === 0.3)      // false
console.log(equal(0.1 + 0.2, 0.3))  // true
```

2. 二进制和八进制：ES6 提供了二进制和八进制数值的新的写法，分别用前缀`0b`和`0o`表示。

```js
let b = 0b1010
let o = 0o777
let d = 100
let x = 0xff
console.log(x)  // 255
```

3. `Number.isFinite`：检测一个数值是否为有限数

```js
console.log(Number.isFinite(100))      // true
console.log(Number.isFinite(100 / 0))  // false
console.log(Number.isFinite(Infinity)) // false
```

4. `Number.isNaN`：检测一个数值是否为NaN

```js
console.log(Number.isNaN(123))	// false
```

5. `Number.parseInt`、`Number.parseFloat`：字符串转整数、小数

```js
console.log(Number.parseInt('5211314love'))		// 5211314
console.log(Number.parseFloat('3.1415926神奇'))  // 3.1415926
```

6. `Number.isInteger`：判断一个数是否为整数

```js
console.log(Number.isInteger(5))	// true
console.log(Number.isInteger(2.5))  // false
```

7. `Math.trunc`：将数字的小数部分抹掉

```js
console.log(Math.trunc(3.5))	// 3
```

8. `Math.sign`：判断一个数到底为正数、负数、还是零

```js
console.log(Math.sign(100))		// 1
console.log(Math.sign(0))		// 0
console.log(Math.sign(-20000))	// -1
```

------

### 对象扩展

1. `Object.is`：比较两个值是否严格相等，与`===`行为基本一致（+0 与 NaN）

```js
console.log(Object.is(120, 120)) // true
console.log(Object.is(NaN, NaN)) // true
console.log(NaN === NaN)         // false
```

2. `Object.assign`：对象的合并，将源对象的所有可枚举属性，复制到目标对象，如果属性重名则会覆盖掉

```js
const config1 = {
  host: 'localhost',
  port: 3306,
  name: 'root',
  pass: 'root',
  test: 'test',
}

const config2 = {
  host: 'http://atguigu.com',
  port: 33060,
  name: 'atguigu.com',
  pass: 'iloveyou',
  test2: 'test2',
}

console.log(Object.assign(config1, config2))
```

3. `__proto__`、`setPrototypeOf`、`setPrototypeOf`：可以直接设置对象的原型

```js
const school = {
  name: '尚硅谷',
}
const cities = {
  xiaoqu: ['北京', '上海', '深圳'],
}
// 将cities设置为school的原型对象
Object.setPrototypeOf(school, cities)
console.log(Object.getPrototypeOf(school))	// 结果：xiaoqu: ['北京', '上海', '深圳']
console.log(school)	// 结果：{name: '尚硅谷'}，进一步展开后里面有Prototype：xiaoqu: ['北京', '上海', '深圳']
```

------

### Module模块化

#### 模块化定义

1. 定义：模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。
2. 优点：防止命名冲突、代码复用、高维护性。
3. ES6 之前的模块化规范产品：
   * CommonJS => NodeJS、Browserify
   * AMD => requireJS
   * CMD => seaJS

#### 模块化语法

1. `export`：用于规定模块的对外接口

* 分别暴露

```js
// 分别暴露
// m1.js
export let school = '尚硅谷'
export function teach() {
  console.log('我们可以教给你开发技能')
}
```

* 统一暴露

```js
// 统一暴露
// m2.js
let school = '尚硅谷'
function findJob() {
  console.log('我们可以帮助你找工作!!')
}
export { school, findJob }
```

* 默认暴露

```js
// 默认暴露
// m3.js
export default {
  school: 'ATGUIGU',
  change: function () {
    console.log('我们可以改变你!!')
  },
}
```

2. `import`：用于输入其他模块提供的功能（需要用 `<script type="module"> </script> `包裹）

* 通用导入：调用属性和方法时，需要用 m1.xxx、m2.xxx、m3.default.xxx

```js
<script type="module">
    import * as m1 from './src/js/m1.js'
    import * as m2 from './src/js/m2.js'
    import * as m3 from './src/js/m3.js'  // 注意：由于是默认暴露，调用m3的方法和属性时，需要用m3.default.xxx
</script>
```

* 解构赋值导入：可以直接调用导入的属性和方法

```js
<script type="module">
    import { school, teach } from './src/js/m1.js'
    import { school as guigu, findJob } from './src/js/m2.js'
    import { default as m3 } from './src/js/m3.js'
</script>
```

* 简便形式：针对默认暴露，可以直接用 m3.xxx 调用default默认暴露的属性和方法

```js
<script type="module">
    import m3 from './src/js/m3.js'
    console.log(m3)
</script>
```

3. 整体导入模块：`<script src="..." type="module"></script>`

* 如果把需要导入的模块全部写在html下的script中，会显得很长，可以把需要导入的部分单独写成独立js入口文件，统一导入
* 缺点：兼容性问题，目前只有chrome等浏览器支持，并非所有浏览器都支持此方法

```js
// index.html
<script src="./src/js/app.js" type="module"></script>
```

```js
// app.js（入口文件）
//模块引入
import * as m1 from './m1.js'
import * as m2 from './m2.js'
import * as m3 from './m3.js'

console.log(m1);
console.log(m2);
console.log(m3);

m1.teach()
m2.findJob()
m3.default.change()
```

#### Babel模块化转换

1. 作用：解决其他浏览器无法整体导入模块，以及ES6无法直接导入npm模块的问题

2. 官网：[www.babeljs.cn](https://www.babeljs.cn/)

3. 步骤：

   * 配置环境：一次即可

   ```js
   // 安装工具：真正项目开发会使用 webpack 代替 browserify
   npm init --yes
   npm i babel-cli babel-preset-env browserify -D
   ```

   * 编译+打包：如果代码改动，需要重新编译打包

   ```js
   // 编译（如果是全局安装，省略npx，直接babel...
   // 语法：npx babel 需要编译的代码目录 编译后代码存放目录 --presets=babel-preset-env
   npx babel src/js -d dist/js --presets=babel-preset-env
   
   // 打包
   // 语法：npx browserify 入口文件目录app.js -o 打包文件目录bundle.js
   npx browserify dist/js/app.js -o dist/bundle.js
   ```

4. 整体导入模块：`<script src="...bundle.js" type="module"></script>`

#### 引入npm包

1. 安装所需的npm包：`npm i jquery`

2. 使用包：

   ```js
   // app.js（入口文件）
   
   //修改背景颜色为粉色
   import $ from 'jquery' // 等价于const $ = require('jquery')
   $('body').css('background', 'pink')
   ```

3. 编译+打包：如果代码改动，需要重新编译打包（代码见上）

4. 整体导入模块：`<script src="...bundle.js" type="module"></script>`

------

## 第三章 ES7新特性

### Array.prototype.includes

> 作用：includes 方法用来检测数组中是否包含某个元素，返回布尔类型值（对比 indexOf，返回的是索引数值，不存在返回-1）

```js
// includes
const mingzhu = ['西游记', '红楼梦', '三国演义', '水浒传']

//判断
console.log(mingzhu.includes('西游记'))
console.log(mingzhu.includes('金瓶梅'))

//对比indexOf
console.log(mingzhu.indexOf('三国演义'))
console.log(mingzhu.indexOf('葫芦娃'))
```

### 指数操作符

> 作用：两个星号（`**`），用来实现幂运算，功能与 `Math.pow` 结果相同。

```js
console.log(2 ** 10) //
console.log(Math.pow(2, 10))
```

------

## 第四章 ES8新特性

### async与await

1. 作用：async 和 await 两种语法结合可以让异步代码像同步代码一样

2. async函数：返回值为 promise 对象，其结果由 async 函数执行的返回值决定

   ```js
   // return一个字符串
   // 返回结果：promise 对象，PromiseState:'fulfilled'，PromiseResult:'尚硅谷'
   async function fn() {
     return '尚硅谷'
   }
   const result = fn()
   console.log(result)
   ```

   ```js
   // 只要函数return的结果不是一个 Promise 类型的对象, 返回的结果就是成功 Promise 对象
   // 返回结果：promise 对象，PromiseState:'fulfilled'，PromiseResult:undefined
   async function fn() {
     return
   }
   const result = fn()
   console.log(result)
   ```

   ```js
   // 抛出错误, 返回的结果是一个失败的 Promise
   // 返回结果：promise 对象，PromiseState:'rejected'，PromiseResult:Error: 出错啦!...
   async function fn() {
     throw new Error('出错啦!')
   }
   const result = fn()
   console.log(result)
   ```

   ```js
   // return的结果如果是一个Promise对象，返回对象与该Promise对象保持一致
   // resolve返回：promise 对象，PromiseState:'fulfilled'，PromiseResult:"成功的数据"
   // reject返回：promise 对象，PromiseState:'rejected'，PromiseResult:"失败的错误"
   async function fn() {
     return new Promise((resolve, reject) => {
       resolve('成功的数据')
       // reject("失败的错误");
     })
   }
   const result = fn()
   
   // 如果想直接返回promise值（value或reason），可以用then
   result.then(
     (value) => {
       console.log(value)
     },
     (reason) => {
       console.warn(reason)
     }
   )
   ```

3. await：必须写在 async 函数中

* 右侧的表达式一般为 promise 对象，返回的是 promise 成功的值 value

* 如果 promise 失败了, 就会抛出异常, 需要通过 `try...catch` 捕获处理

  ```js
  // 创建 promise 对象
  const p = new Promise((resolve, reject) => {
    // resolve("用户数据");
    reject('失败啦!')
  })
  // await 要放在 async 函数中
  async function main() {
    try {
      let result = await p
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }
  // 调用函数
  main()
  ```

4. 案例：`async`与`await`结合读取文件

   ```js
   // 引入 fs 模块
   const fs = require('fs')
   
   // 读取『为学』
   function readWeiXue() {
     return new Promise((resolve, reject) => {
       fs.readFile('./resources/为学.md', (err, data) => {
         //如果失败
         if (err) reject(err)
         //如果成功
         resolve(data)
       })
     })
   }
   // 读取『插秧诗』
   function readChaYangShi() {
     return new Promise((resolve, reject) => {
       fs.readFile('./resources/插秧诗.md', (err, data) => {
         //如果失败
         if (err) reject(err)
         //如果成功
         resolve(data)
       })
     })
   }
   // 读取『观书有感』
   function readGuanShu() {
     return new Promise((resolve, reject) => {
       fs.readFile('./resources/观书有感.md', (err, data) => {
         //如果失败
         if (err) reject(err)
         //如果成功
         resolve(data)
       })
     })
   }
   
   // 声明一个 async 函数
   async function main() {
     //获取为学内容
     let weixue = await readWeiXue()
     //获取插秧诗内容
     let chayang = await readChaYangShi()
     // 获取观书有感
     let guanshu = await readGuanShu()
   
     console.log(weixue.toString())
     console.log(chayang.toString())
     console.log(guanshu.toString())
   }
   
   // 调用函数
   main()
   ```

5. 案例：`async`和`await`封装Ajax请求

   ```js
   // 发送 AJAX 请求, 返回的结果是 Promise 对象
   function sendAJAX(url) {
     return new Promise((resolve, reject) => {
       // 1. 创建对象
       const x = new XMLHttpRequest()
       // 2. 初始化
       x.open('GET', url)
       // 3. 发送
       x.send()
       // 4. 事件绑定
       x.onreadystatechange = function () {
         if (x.readyState === 4) {
           if (x.status >= 200 && x.status < 300) {
             // 如果成功
             resolve(x.response)
           } else {
             // 如果失败
             reject(x.status)
           }
         }
       }
     })
   }
   ```

   ```js
   // 方法1：使用Promise then方法
   sendAJAX('https://api.apiopen.top/getJoke').then(
     (value) => {
       console.log(value)
     },
     (reason) => {}
   )
   ```

   ```js
   // 方法2：使用async 与 await
   async function main() {
     // 发送 AJAX 请求
     let result = await sendAJAX('https://api.apiopen.top/getJoke')
     console.log(result)
     // 再次测试
     let news = await sendAJAX('https://api.apiopen.top/getWangYiNews')
     console.log(news)
   }
   // 调用函数
   main()
   ```

### 对象方法扩展

1. `Object.keys()`：返回一个给定对象的所有可枚举属性键的数组

   `Object.values()`：返回一个给定对象的所有可枚举属性值的数组

   ```js
   const school = {
     name: '尚硅谷',
     cities: ['北京', '上海', '深圳'],
     xueke: ['前端', 'Java', '大数据', '运维'],
   }
   //获取对象所有的键
   console.log(Object.keys(school))
   //获取对象所有的值
   console.log(Object.values(school))
   ```

2. `Object.entries()`：返回一个给定对象自身可遍历属性`[key,value]`的数组

   ```js
   const school = {
     name: '尚硅谷',
     cities: ['北京', '上海', '深圳'],
     xueke: ['前端', 'Java', '大数据', '运维'],
   }
   //entries
   console.log(Object.entries(school))
   //可以利用entries创建 Map
   const m = new Map(Object.entries(school))
   console.log(m.get('cities'))
   ```

3. `Object.getOwnPropertyDescriptors()`：返回指定对象所有自身属性的描述对象（writable、configurable、enumerable）

   ```js
   const obj = Object.create(null, {
     name: {
       //设置值
       value: '尚硅谷',
       //属性特性
       writable: true,
       configurable: true,
       enumerable: true,
     },
   })
   // 对象属性的描述对象
   console.log(Object.getOwnPropertyDescriptors(school))
   ```

------

## 第五章 ES9新特性

### spread 扩展运算符

> Rest参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组，在ES9中为对象提供了像数组一样的rest参数和扩展运算符。

```js
// rest参数
function connect({ host, port, ...user }) {
  console.log(host)
  console.log(port)
  console.log(user)
}
// username、password、type都会存到user对象中
connect({
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  type: 'master',
})
```

```js
// spread扩展运算符：对象合并
const skillOne = {
  q: '天音波',
}
const skillTwo = {
  w: '金钟罩',
}
const skillThree = {
  e: '天雷破',
}
const skillFour = {
  r: '猛龙摆尾',
}
const mangseng = { ...skillOne, ...skillTwo, ...skillThree, ...skillFour }
console.log(mangseng)
```

------

### 正则表达式扩展

#### 命名捕获组

> ES9允许命名捕获组使用符号`?<name>`,这样获取捕获结果可读性更强，无需通过改变index来获取结果。

```js
// 传统方法
// 声明一个字符串
let str = '<a href="http://www.atguigu.com">尚硅谷</a>'
// 提取 url 与 『标签文本』
const reg = /<a href="(.*)">(.*)<\/a>/
// 执行
const result = reg.exec(str)
// 返回结果：数组：[整个正则匹配结果,第一个小括号匹配结果,第二个小括号匹配结果,...]
console.log(result)
console.log(result[1])
console.log(result[2])
```

```js
// ES9新特性：分组命名
// 声明一个字符串
let str = '<a href="http://www.atguigu.com">尚硅谷</a>'
//分组命名
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
// 返回结果，与传统方法相同，但多了一个groups属性，里面有url、text属性
// 优势：如果正则发生变化，也无需通过改变小括号内index来获取结果
const result = reg.exec(str)
console.log(result.groups.url)
console.log(result.groups.text)
```

#### 反向断言

> ES9支持反向断言，通过对匹配结果前面的内容进行判断，对匹配进行筛选。

```js
//需求：提取“你知道么”和“啦啦啦”之间的数字
let str = 'JS5211314你知道么555啦啦啦'

//正向断言
const reg = /\d+(?=啦)/
const result = reg.exec(str)

//反向断言
const reg2 = /(?<=么)\d+/
const result2 = reg2.exec(str)
console.log(result2)
```

#### dotAll模式

> 正则表达式中 dot（`.`）匹配除回车外的任意单个字符，标记`s`改变这种行为，允许行终止符出现。

```js
// 传统方法
// 需求：分别把电影名和日期提取出来，存入数组
let str = `
  <ul>
      <li>
          <a>肖生克的救赎</a>
          <p>上映日期: 1994-09-10</p>
      </li>
      <li>
          <a>阿甘正传</a>
          <p>上映日期: 1994-07-06</p>
      </li>
  </ul>`
// 声明正则
const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/
//执行匹配
const result = reg.exec(str)
console.log(result)
```

```js
// ES9新方法：dotAll模式
// 声明正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs
// 执行匹配
let result
let data = []
while ((result = reg.exec(str))) {
  data.push({ title: result[1], time: result[2] })
}
//输出结果
console.log(data)
```

------

## 第六章 ES10新特性

