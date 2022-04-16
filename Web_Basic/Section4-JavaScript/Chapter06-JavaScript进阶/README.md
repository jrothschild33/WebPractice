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
   
   * 展开对象：`let newObj = {...obj1, ...obj2, ...obj3}`
   
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

1. 定义：遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。

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
   // 使用 for...of 遍历数组
   for (let v of xiyou) {
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

