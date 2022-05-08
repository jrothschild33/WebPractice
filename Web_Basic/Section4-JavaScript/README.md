# JavaScript

## 第1章 JavaScript介绍

### 1.1 计算机编程基础

1. 编程语言：

   1）汇编语言和机器语言实质是相同的，都是直接对硬件操作，只不过指令采用了英文缩写的标识符，容易识别和记忆。

   2）高级语言主要是相对于低级语言而言，它并不是特指某一种具体的语言，而是包括了很多编程语言，常用的有C语言、C++、Java、C#、Python、PHP、JavaScript、Go语言、Objective-C、Swift等。

2. 翻译器：高级语言所编制的程序不能直接被计算机识别，必须经过转换才能被执行，为此我们需要一个翻译器。翻译器可以将我们所编写的源代码转换为机器语言，这也被称为二进制化。记住1和0。

3. 编程语言和标记语言区别：

   1）编程语言有很强的逻辑和行为能力。在编程语言里, 你会看到很多`if else 、for 、while`等具有逻辑性和行为能力的指令，这是主动的。

   2）标记语言（`html`）不用于向计算机发出指令，常用于格式化和链接。标记语言的存在是用来被读取的, 是被动的。

### 1.2 初识JavaScript

1. 发明者：Brendan Eich，1995年10天完成。最初叫LiveScript由网景公司所有，后来被Sun收购改名为JavaCript。

2. JavaScript 是什么：JavaScript 是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script 是脚本的意思）

   * 脚本语言：不需要编译，运行过程中由 js 解释器(js 引擎）逐行来进行解释并执行
   * 现在也可以基于 Node.js 技术进行服务器端编程

3. JavaScript 的作用：

   * 表单动态校验（密码强度检测）（JS产生最初的目的）
   * 网页特效
   * 服务端开发(Node.js)
   * 桌面程序(Electron)
   * App(Cordova) 
   * 控制硬件-物联网(Ruff)
   * 游戏开发(cocos2d-js)

4. 语言区别：

   1）解释型语言：JavaScript，解释器是在运行时进行及时解释，并立即执行

   2）编译型语言：Java，编译器在代码执行之前进行编译，生成中间代码文件

5. 浏览器执行JS流程：

   1）浏览器分成两部分：渲染引擎、JS引擎

   * 渲染引擎：用来解析HTML与CSS，俗称内核，比如 chrome 浏览器的 blink ，老版本的 webkit
   * JS引擎：也称为 JS 解释器。用来读取网页中的JavaScript代码，对其处理后运行:
     * Chrome：V8（性能最好）
     * Firefox：OdinMonkey 奥丁猴
     * Safari：JSCore
     * IE浏览器：Chakra 查克拉

   2)浏览器本身并不会执行JS代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码

   * V8引擎：负责解析和执行 JavaScript 代码
   * 内置API：由运行环境提供的特殊接口，只能在所属的运行环境中被调用（如DOM、BOM、Canvas、XHR等）

6. JS 的组成：

   1）[`ECMAScript`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)：JavaScript语法：由ECMA国际（原欧洲计算机制造商协会）标准化的语言，分为JavaScript（网景）、JScript（微软）

   2）`DOM`：页面文档对象类型：Document Object Model，标准编程接口，对页面上各种元素进行操作（大小、位置、颜色等）

   3）`BOM`：浏览器对象类型：Browser Object Model，提供独立于内容的、可与浏览器窗口进行互动的对象结构，如弹出框、跳转、获取分辨率等

7. JS的书写位置

   1）行内式：

   ```js
   <input type="button" value="点我试试" onclick="alert('Hello World')" />
   ```

   * 可以将单行或少量 JS 代码写在HTML标签的事件属性中（以 on 开头的属性），如：onclick
   * 注意单双引号的使用：在HTML中我们推荐使用双引号, JS 中我们推荐使用单引号
   * 可读性差， 在html中编写JS大量代码时，不方便阅读；
   * 引号易错，引号多层嵌套匹配时，非常容易弄混；
   * 特殊情况下使用

   2）内嵌式：可以将多行JS代码写到`<script>`标签中，内嵌 JS 是学习时常用的方式

   ```html
   <script>
     alert('Hello World~!');
   </script>
   ```

   3)外部式：

   ```js
   <script src="my.js"></script>
   ```

   * 利于HTML页面代码结构化，把大段 JS代码独立到 HTML 页面之外，既美观，也方便文件级别的复用
   * 引用外部 JS文件的 script 标签中间不可以写代码
   * 适合于JS 代码量比较大的情况

8. JS注释

   1）单行注释：`ctrl + /`

   ```js
   // 我是一行文字，不想被 JS引擎 执行，所以 注释起来
   ```

   2）多行注释：`shift + ctrl + a`

   ```js
   /*
    获取用户年龄和姓名
    并通过提示框显示出来
   */
   ```

9. JS输入输出语句
   * 浏览器弹出警示框：`alert(msg) `
   * 浏览器控制台打印输出信息：`console.log(msg) `
   * 浏览器弹出输入框，用户可以输入：`prompt(info)`

### 1.3 面向对象编程

1. 面向过程编程（POP）

   1）定义：Process-Oriented Progtamming，用函数一步步实现步骤，依次调用

   2）优点：性能比OOP高，合适跟硬件联系紧密的东西，如单片机

   3）缺点：没有面向对象易维护、易复用、易扩展

2. 面向对象编程（OOP）

   1）定义：Object-Oriented Progamming：把事务分解成一个个对象，由对象之间分工与合作

   2）特性：封装性、继承性、多态性

   3）优点：易维护、易复用、易扩展，可以设计出低耦合系统，使系统更加灵活、更易于维护

   4）缺点：性能比POP低

## 第2章 JavaScript基础

### 2.1 JS变量

1. 变量的使用：

   1）方法1：声明变量：var age，计算机自动分配内存空间，给变量赋值：age = 18;

   2）方法2：变量初始化，例：var age=18;

   3）方法3：不声明直接赋值使用，age = 18;

   4）多变量赋值：可以直接赋值多个变量，用逗号隔开

   ```js
   var age = 18,
       address = '火影村',
       gz = 2000;
   ```

2. 变量命名规范：

   1）由字母、数字、下换线`_`、美元符号`$`构成，下划线和美元符号都可以开头

   2）严格区分大小写、不能以数字开头

   3）不能是关键字、保留字，如：var、for、while

   4）驼峰命名法，首字母小写，后面单词首字母大写

3. 变量命名规范的拓展知识：

   1）标识符：开发人员为变量、属性、函数、参数取的名字，不能是关键字、保留字

   2）关键字：JS本身已经使用了的字，不能再用它们充当变量名、方法名

   ```js
   break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with
   ```

   3）保留字：是预留的“关键字”，现在虽然还不是关键字，但是未来可能会成为关键字

   ```js
   boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile
   ```

4. 交换两个变量的值：使用一个临时变量用来做中间存储

   ```js
   // 两个变量
   var a = '青苹果';
   var b = '红苹果';
   // 声明一个临时变量
   var temp
   // 三次交换,可以使得a变为b
   temp = a; a = b; b = temp;
   ```

------

### 2.2 数据类型

> JavaScript是一种弱类型（动态语言）。这意味着不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。使用`typeof`获取变量类型。

#### 2.2.1 简单数据类型

* 基本数据类型，又称值类型，储存的是值本身。栈：由操作系统自动分配释放存放函数的参数值、局部变量的值等，简单数据类型存放到栈中。

##### Number：数字型

* 默认为0

1. 八进制（0-7）：数字前加0，例：010，代表8
2. 十六进制（0-9、a-f）：数字前加0x，例：0x9，代表9；0xa，代表10
3. 数字型最大值：`Number.MAX_VALUE`
4. 数字型最小值：`Number.MIN_VALUE`
5. 无穷大Infinity：`Number.MAX_VALUE * 2`
6. 无穷小-Infinity：`- Number.MAX_VALUE * 2`
7. 非数值：`NaN`，用`isNaN()`判断，如果是数字返回false，否则为true

##### Boolean：布尔值

* 默认为`false`

##### String：字符串

* 默认为`""`

1. 用法：单引号（推荐）、双引号

2. 引号嵌套：单引号内放双引号，反之亦然

3. 转义符：
   * 换行：`\n`
   * 斜杠：`\\`
   * 单引号：`\'`
   * 双引号：`\"`
   * tab缩进：`\t`
   * 空格：`\b`

4. 属性：`length`：长度，例：str.length

5. 拼接：只要有字符串和其他类型相拼接，最终结果都为字符串

     ```js
     "pink"+true // pinkture
     "pink" + 18 // pink18
     "12" + 12   // 1212
     ```

##### Undefined：未赋值

* 声明变量但未赋值，和数字相加结果是：NaN

##### Null：空值

1. JS有个历史遗留问题，如果var x = null;  typeof x 输出的是 Object，而不是 Null
2. 如果有个变量以后打算存储为对象，暂时没想好放啥，这个时候就给 null

------

#### 2.2.2 简单数据类型转换

##### 转为字符串

1. `.toString()`：例：var num=1; num.toString()
2. `String()`：强制转换，例：var num=1; String(num)
3. 加号拼接字符串（隐式转换）：例：var num=1; num + ''

##### 转为数字型

1. `parseInt(string)`：字符串转整数

   1）只截取整数部分，不做四舍五入

   2）简单自动提取数字部分，如输入"120px”，输出为120

   3）如果开头不是数字，则无法提取，如"rem120px"，输出为NaN

2. `parseFloat(string)`：字符串转小数
3. `Number()`：强制转换
4. 减乘除运算（隐式转换)：例："12" - 0、"123"-"120"

##### 转为布尔型

1. Boolean()

   1）代表空、否定的值都会被转为false：`''、0、NaN、null、undefined`

   2）其余值都被转为true

------

#### 2.2.3 复杂数据类型

1. 定义：又称引用类型，使用new关键字创建的对象（系统对象、自定义对象），如`Object、Array、Date`等
2. 堆：一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收，复杂数据类型存放到堆中
3. 过程：首先在栈里面存放地址，十六进制表示，然后这个地址指向堆里面的数据

```js
// 复杂数据类型传参
function Person(name) {
  this.name = name
}
function f1(x) {
  console.log(x.name) // 刘德华
  x.name = '张学友'
  console.log(x.name) // 张学友
}
var p = new Person('刘德华')
console.log(p.name) // 刘德华
f1(p)
console.log(p.name) // 张学友
```

------

### 2.3 运算符

#### 2.3.1 算术运算符

1. 包括：加+、减-、乘*、除/、取模（取余数）%、幂**

2. 注意：

   1）浮点数的运算里面会有问题，尽量避免用小数运算

   2）不能直接用浮点数进行比较是否相等

   ```js
   var num = 0.1 + 0.2;
   console.log(num == 0.3); // false
   ```

#### 2.3.2 递增运算符

1. 前提：必须和变量配合使用

2. 前置递增运算符：`++num`，等价于 num = num + 1

3. 后置递增运算符：`num++`

   1）单独使用：和前置递增效果相同

   2）配合运算：先返回原值，再自加1

   ```js
   var age = 10
   console.log(age++ + 10)  // 20
   console.log(age)		 // 11
   ```

4. 综合案例：

   ```js
   var a = 10
   ++a // 11
   var b = ++a + 2 // 12+2
   console.log(b) // 14
   
   var c = 10
   c++ // 11
   
   var d = c++ + 2 //  先返回原值，再自加1：此时c=12，但是c++返回的是11，故此运算为：11+2
   console.log(d)  // 13
   
   var e = 10
   var f = e++ + ++e // 1. e++ =  10  e = 11  2. e = 12  ++e = 12
   console.log(f) // 22
   ```

#### 2.3.3 递减运算符

* 原理同递增运算符

#### 2.3.4 比较运算符

* 小于:`<`
* 大于:`>`
* 大于等于:`>=`
* 小于等于:`<=`
* 判等号:`==`（注意：判等号会自动转换类型，如：18=='18' --> true）
* 4 不等号:`!=`
* 全等号（值、数据类型全等）：`===`
* 全不等号:`!==`

#### 2.3.5 逻辑运算符

1. 基础符号：与（`&&`）、或（`||`）、非（`!`）

   ```js
   // 编写一个函数，带一个参数n，在页面上输出1～n（n>1）之间所有能同时被3和5整除的偶数，并要求每行只输出6个
   function fn(n) {
     var count = 0
     for (var i = 1; i <= n; i++) {
       if (i % 3 == 0 && i % 5 == 0 && i % 2 == 0) {
         document.write(i + ' ')
         count++
         if (count % 6 == 0) {
           document.write('<br />')
         }
       }
     }
   }
   fn(1000)
   ```

2. 短路运算：当有多个表达式（值）时，左边的表达式可以确定结果时，就不在继续运算右边的表达式的值

   1）与：a && b，若a为真，返回b；若a为假，返回a

   2）或：a || b，若a为真，返回a；若a为假，返回b

   3）注意：如果左侧被短路，右侧前置/后置递增/减运算就不会进行了

   ```js
   console.log(123 && 456) // 456
   console.log(0 && 456) //  0
   console.log(0 && 1 + 2 && 456 * 56789) // 0
   console.log('' && 1 + 2 && 456 * 56789) // ''
   console.log(123 || 456) // 123
   console.log(123 || 456 || 456 + 123) // 123
   console.log(0 || 456 || 456 + 123) // 456
   var num = 0
   console.log(123 || num++)
   console.log(num) // 0
   ```

#### 2.3.6 赋值运算符

1. 直接赋值：`=`
2. 加减一个数后再赋值：`+=`、`-=`
3. 乘除取模后再赋值：`*=`、`/=`、`%=`

#### 2.3.7 运算符优先级

- 1级：小括号（）
- 2级：一元运算符：`++、--、！`
- 3级：算数运算符：先`*、/、%`，后`+、-`
- 4级：关系运算符：`>、>=、<、<=`
- 5级：相等运算符：`==、!=、===、!==`
- 6级：逻辑运算符：先 `&&`、后`||`
- 7级：赋值运算符：`=`
- 8级：逗号运算符：`，`

------

### 2.4 流程控制

#### 2.4.1 顺序结构

> 常规从上到下执行语句。

#### 2.4.2 分支结构

> 从上到下执行代码时，根据不同条件执行不同的路径代码，得到不同的结果。

##### if语句

1. if分支语句：`if（条件表达式）{执行语句}`
2. if else双分支语句：`if（条件表达式）{执行语句1} else {执行语句2}`
3. if else if多分支语句：`if（条件表达式1）{执行语句1} else if（条件表达式2）{执行语句2} else {执行语句3}`

```js
//if分支语句
if (3 < 5) {
    alert('沙漠骆驼');
}

// if else双分支语句
var age = prompt('请输入您的年龄:');
if (age >= 18) {
    alert('我想带你去网吧偷耳机');
} else {
    alert('滚， 回家做作业去');
}

// if else if多分支语句
var score = prompt('请您输入分数:');
if (score >= 90) {
    alert('宝贝，你是我的骄傲');
} else if (score >= 80) {
    alert('宝贝，你已经很出色了');
} else if (score >= 70) {
    alert('你要继续加油喽');
} else if (score >= 60) {
    alert('孩子，你很危险');
} else {
    alert('熊孩子，我不想和你说话，我只想用鞭子和你说话');
}
```

##### 三元表达式

* 语法：`条件表达式 ？表达式1 ：表达式2`

```js
// 数字补0案例
var time = prompt('请您输入一个 0 ~ 59 之间的一个数字')
var result = time < 10 ? '0' + time : time
alert(result)
```

##### switch语句

1. 定义：针对变量设置一系列特定值的选项，若表达式值与case后面的value相匹配，则执行条件语句。

2. 语法：`switch (表达式) {case value1: 执行语句1; break; case value2: 执行语句2; break; ...default: 执行最后的语句; }`

3. 注意：

   1）表达式的值和 case 里面的值相匹配的时候是全等（`===`），值和数据类型全都相同才可以

   2）如果当前的case里面没有break 则不会退出switch，而是继续执行下一个case

```js
var num = prompt('请输入数值：')
switch (parseFloat(num)) {
  case 1:
    console.log('这是1')
    alert('这是1')
    break
  case 2:
    console.log('这是2')
    alert('这是2')
    break
  case 3:
    console.log('这是3')
    alert('这是3')
    break
  default:
    console.log('没有匹配结果')
    alert('没有匹配结果')
}
```

------

#### 2.4.3 循环结构

##### for循环

1. 语法：`for (初始化变量; 条件表达式; 操作表达式) {循环体}`

2. 执行顺序：

   ```js
   for (var i = 1; i <= 100; i++) {
     console.log('你好吗')
   }
   ```

   1）var i=1：初始化执行一次

   2）i <= 100：判断

   3）console.log('你好吗')：打印

   4）i++：自增+1

3. for案例：

   ```js
   // 打印n行n列的星星
   var rows = prompt('请您输入行数:');
   var cols = prompt('请您输入列数:');
   var str = '';
   for (var i = 1; i <= rows; i++) {
       for (var j = 1; j <= cols; j++) {
           str = str + '★';
       }
       str += '\n';
   }
   console.log(str);
   ```

   ```js
   // 打印倒三角形案例
   var str = ''
   for (var i = 1; i <= 10; i++) {
     // 外层循环控制行数
     for (var j = i; j <= 10; j++) {
       // 里层循环打印的个数不一样  j = i
       str = str + '★'
     }
     str += '\n'
   }
   console.log(str)
   ```

   ```js
   // 九九乘法表
   var str = ''
   for (var i = 1; i <= 9; i++) {
     // 外层循环控制行数
     for (var j = 1; j <= i; j++) {
       // 里层循环控制每一行的个数  j <= i
       // 1 × 2 = 2
       // str = str + '★';
       str += j + '×' + i + '=' + i * j + '\t'
     }
     str += '\n'
   }
   console.log(str)
   ```

##### while循环

1. 语法：`while (条件表达式) {循环体}`
2. 区别：相比for循环，可以判断更复杂的条件

```js
// 1. 打印人的一生，从1岁到100岁
var i = 1
while (i <= 100) {
  console.log('这个人今年' + i + '岁了')
  i++
}
// 2. 计算 1 ~ 100 之间所有整数的和
var sum = 0
var j = 1
while (j <= 100) {
  sum += j
  j++
}
console.log(sum)
// 3. 弹出一个提示框，你爱我吗？如果输入我爱你，就提示结束，否则一直询问
var message = prompt('你爱我吗?')
while (message !== '我爱你') {
  message = prompt('你爱我吗?')
}
alert('我也爱你啊！')
```

##### do while循环

1. 语法：`do{循环体} while (条件表达式)`
2. 区别：先执行一次循环体，再判断条件，如果表达式为真则继续执行循环体

```js
// 1. 打印人的一生，从1岁到100岁
var i = 1
do {
  console.log('这个人今年' + i + '岁了')
  i++
} while (i <= 100)
// 2. 计算 1 ~ 100 之间所有整数的和
var sum = 0
var j = 1
do {
  sum += j
  j++
} while (j <= 100)
console.log(sum)
// 3. 弹出一个提示框，你爱我吗？如果输入我爱你，就提示结束，否则一直询问
do {
  var message = prompt('你爱我吗?')
} while (message !== '我爱你')
alert('我也爱你啊')
```

##### continue关键字

* 作用：立即跳出本次循环，继续下一个循环

```js
// continue 关键字：退出本次（当前次的循环），继续执行剩余次数循环
for (var i = 1; i <= 5; i++) {
  if (i == 3) {
    continue // 只要遇见 continue就退出本次循环 直接跳到 i++
  }
  console.log('我正在吃第' + i + '个包子')
}

// 求1~100 之间，除了能被7整除之外的整数和
var sum = 0
for (var i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    continue
  }
  sum += i
}
console.log(sum)
```

##### break关键字

* 作用：退出整个循环

```js
// break 退出整个循环
for (var i = 1; i <= 5; i++) {
  if (i == 3) {
    break
  }
  console.log('我正在吃第' + i + '个包子')
}
```

------

### 2.5 数组 Array

> 数组(Array)：就是一组数据的集合，存储在单个变量下的优雅方式

#### 2.5.1 创建数组

1. new方法创建：`var 数组名 = new Array()`

   1）new Array(2)：表示数组的长度为 2，里面有2个空的数组元素 

   2）new Array(2, 3)：等价于 [2,3]

2. 数组字面量创建：`var 数组名 = [ ]`

3. 获取数组元素：`array[index]`，如果index超出数组长度，返回undefined

#### 2.5.2 检测数组

1. `instanceof`：检测对象 instanceof Array
2. `.isArray`：Array.isArray(检测对象)

#### 2.5.3 数组长度

1. 显示长度：`arr.length`
2. 修改长度：`arr.length=X`，新增的元素未赋值前为undefined

```js
// 数组求和、平均值
var arr = [2, 6, 1, 7, 4]
var sum = 0
var average = 0
for (var i = 0; i < arr.length; i++) {
  sum += arr[i] // 我们加的是数组元素 arr[i] 不是计数器 i
}
average = sum / arr.length
console.log(sum, average) // 想要输出多个变量，用逗号分隔即可

// 数组求最大值
var arr = [2, 6, 1, 77, 52, 25, 7, 99]
var max = arr[0]
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log('该数组里面的最大值是：' + max)
```

#### 2.5.4 新增元素

1. 直接赋值：`arr[i]=X`

2. `arr.push(...)`：在数组末尾添加一个或多个元素

   1）返回结果：新数组长度

   2）直接修改原数组

3. `arr.unshift(...)`：在数组前面添加一个或多个元素

   1）返回结果：新数组长度

   2）直接修改原数组

#### 2.5.5 删除元素

1. `arr.pop()`：删除数组的最后一个元素

   1）返回结果：被删除的元素

   2）直接修改原数组

2. `arr.shift()`：删除数组的第一个元素

   1）返回结果：被删除的元素

   2）直接修改原数组

#### 2.5.6 修改元素

1. 直接修改：`arr[i]=X`

2. `arr.splice(开始位置，删除元素数量，插入元素...)`

   1）返回值：由被删除的元素组成的一个数组；只删除了一个元素，返回只包含一个元素的数组；如果没有删除元素，则返回空数组

   2）直接修改原数组

   ```js
   // 从索引 2 的位置开始删除 0 个元素，插入“drum”
   arr.splice(2, 0, "drum")
   // 从索引 3 的位置开始删除 1 个元素
   arr.splice(3, 1)
   // 从索引 2 的位置开始删除所有元素
   arr.splice(2)
   ```

#### 2.5.7 数组排序

1. `arr.reverse()`：颠倒数组元素顺序

   ```js
   // 普通方法翻转数组
   var arr = ['red', 'green', 'blue', 'pink', 'purple', 'hotpink']
   var newArr = []
   for (var i = arr.length - 1; i >= 0; i--) {
     newArr[newArr.length] = arr[i]
   }
   console.log(newArr)
   
   // reverse方法
   console.log(arr.reverse())
   ```

2. `arr.sort()`：对数组元素排序

   1）直接使用：升序排列，但是遇到位数不同的数字，先看个位数、十位数、...进行排序

   2）升序排列：`arr.sort(function(a, b) {return a - b;}`

   3）降序排列：`arr.sort(function(a, b) {return b - a;}`

   ```js
   // 重新随机排序得到一个新数组
   var arr = ['鹿晗', '王俊凯', '蔡徐坤', '彭于晏', '周杰伦', '刘德华', '赵本山']
   arr.sort(function () {
     // Math.random 结果是：0-1之间的数字，减去0.5，这样的最后的结果是不准确的（丢失精度问题）
     return Math.random() - 0.5
   })
   document.write(arr)
   ```

3. 冒泡排序

   1）原理：一次比较两个元素，如果他们的顺序错误就把他们交换过来，一直循环比较并交换，直到没有元素需要交换为止

   2）外层循环：次数=arr.length -1

   3）内层循环：次数=arr.length - i - 1

   4）内部交换：借助临时变量，交换元素数值

   ```js
   var arr = [4, 1, 2, 3, 5]
   for (var i = 0; i <= arr.length - 1; i++) {
     // 外层循环管趟数
     for (var j = 0; j <= arr.length - i - 1; j++) {
       // 里面的循环管 每一趟的交换次数
       // 内部交换2个变量的值 前一个和后面一个数组元素相比较
       if (arr[j] < arr[j + 1]) {
         var temp = arr[j]
         arr[j] = arr[j + 1]
         arr[j + 1] = temp
       }
     }
   }
   ```

#### 2.5.8 数组索引

1. `arr.indexOf(...)`：从前开始查找，返回第一个满足条件的索引号，如果没有该元素，返回-1
2. `arr.lastIndexOf(...)`：从后开始查找，返回第一个满足条件的索引号，如果没有该元素，返回-1

#### 2.5.9 数组截取

1. `arr.slice(开始位置, 结束位置)`：返回被截取的新数组

#### 2.5.10 转字符串

1. 普通方法：遍历数组+字符串拼接

   ```js
   var arr = ['red', 'green', 'blue', 'pink']
   var str = ''
   var sep = '*'
   for (var i = 0; i < arr.length; i++) {
     str += arr[i] + sep
   }
   console.log(str)
   ```

2. `arr.toString()`：默认用逗号分隔

   ```js
   var arr = [1, 2, 3]
   console.log(arr.toString()) // 1,2,3
   ```

3. `arr.join(分隔符)`：自定义分隔符

   ```js
   var arr1 = ['green', 'blue', 'pink']
   console.log(arr1.join()) // green,blue,pink
   console.log(arr1.join('-')) // green-blue-pink
   console.log(arr1.join('&')) // green&blue&pink
   ```

#### 2.5.11 数组拼接

1. `arr1.concat(arr2,arr3,...)`：返回一个新数组，不影响原数组，

#### 2.5.12 数组遍历

1. 普通索引方法：

   ```js
   var arr = ['red', 'green', 'blue']
   for (var i = 0; i < arr.length; i++) {
     console.log(arr[i])
     document.write(arr[i], ',')
   }
   ```

2. `arr.forEach(function(value[,index][,array]){})`

   ```js
   var arr = [1, 2, 3]
   var sum = 0
   arr.forEach(function (value, index, array) {
     console.log('每个数组元素' + value)
     console.log('每个数组元素的索引号' + index)
     console.log('数组本身' + array)
     sum += value
   })
   ```

   ```js
   // 动态生成表格
   setDate(data)
   function setDate(mydata) {
     // 先清空原来tbody 里面的数据
     tbody.innerHTML = ''
     mydata.forEach(function (value) {
       var tr = document.createElement('tr')
       tr.innerHTML = '<td>' + value.id + '</td><td>' + value.pname + '</td><td>' + value.price + '</td>'
       tbody.appendChild(tr)
     })
   }
   var data = [
     {
       id: 1,
       pname: '小米',
       price: 3999,
     },
     {
       id: 2,
       pname: 'oppo',
       price: 999,
     },
     {
       id: 3,
       pname: '荣耀',
       price: 1299,
     },
     {
       id: 4,
       pname: '华为',
       price: 1999,
     },
   ]
   ```

3. `arr.reduce(function(accumulator,currentValue[,index[,array]])[,initialValue])`

   1）参数：

   * 累计器：accumulator
   * 当前值：currentValue
   * 当前索引：index
   * 源数组：array

   2）案例：

   ```js
   [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
     accumulator + currentValue
   })
   ```

   ![遍历数组-reduce](D:\MyProjects\Website\Tutoring\Web_Basic\Section4-JavaScript\src\遍历数组-reduce.png)

4. 案例：找出两个数组之间的补集（在currentArr但不在arr中的元素）

   ```js
   // 方法一：
   function arrMath(arr, currentArr) {
     var flag = false // 表示在arr数组中去匹配，匹配到就false，没有找到就是true
     var newArr = new Array() //存放筛选出来的元素
     for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < currentArr.length; j++) {
         if (arr[i] === currentArr[j]) {
           flag = false
           break //找到匹配的之后就不必继续匹配了
         } else {
           flag = true
         }
       }
       if (flag === true) {
         newArr[newArr.length] = arr[i]
       }
     }
     return newArr
   }
   
   // 方法二：
   function arrMath(arr, currentArr) {
     for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < currentArr.length; j++) {
         if (arr[i] === currentArr[j]) {
           // 删除i位置的元素
           arr.splice(i, 1)
         }
       }
     }
     return arr
   }
   ```

#### 2.5.13 数组筛选

1. `arr.filter(function(value[,index][,array]){})`

   1）创建一个新数组，元素是通过检查指定数组中符合条件的所有元素，用于筛选数组，返回新数组

   ```js
   var arr = [12, 66, 4, 88, 3, 7]
   var newArr = arr.filter(function (value, index) {
     return value % 2 === 0
   })
   ```

   2）如果数组里面装的是一个个对象，可以按对象属性值筛选，返回数组中装的元素依然是符合条件的对象

   ```js
   var newData = data.filter(function (value) {
     return value.price >= 1000 && value.price <= 1500
   })
   var data = [
     {
       id: 1,
       pname: '小米',
       price: 3999,
     },
     {
       id: 2,
       pname: 'oppo',
       price: 999,
     },
     {
       id: 3,
       pname: '荣耀',
       price: 1299,
     },
     {
       id: 4,
       pname: '华为',
       price: 1999,
     },
   ]
   ```

2. `arr.some(function(value[,index][,array]){})`

   1）检测数组中的元素是否满足指定条件，查找数组中是否有满足条件的元素，返回布尔值，如果找到第一个满足条件的元素则终止循环

   ```js
   var arr = [10, 30, 4]
   var flag = arr.some(function (value) {
     return value < 3	// false
   })
   console.log(flag)
   
   var arr1 = ['red', 'pink', 'blue']
   var flag1 = arr1.some(function (value) {
     return value == 'pink'
   })
   console.log(flag1)	// true
   ```

   2）注意：如果在内部函数中写return，一定要跟true终止迭代，否则一直循环下去

   ```js
   // 查找数组中唯一对象，并返回该完整对象
   var data = [
     {
       id: 1,
       pname: '小米',
       price: 3999,
     },
     {
       id: 2,
       pname: 'oppo',
       price: 999,
     },
     {
       id: 3,
       pname: '荣耀',
       price: 1299,
     },
     {
       id: 4,
       pname: '华为',
       price: 1999,
     },
   ]
   var arr = []
   data.some(function (value) {
     if (value.pname === 'oppo') {
       arr.push(value)
       return true // return 后面必须写true
     }
   })
   console.log(arr)
   ```
   
   3）区别：forEach、filter中的函数如果写return，不会终止迭代，而some会
   
   ```js
   var arr = ['red', 'green', 'blue', 'pink']
   // forEach遍历
   arr.forEach(function (value) {
     if (value == 'green') {
       console.log('找到了该元素')
       return true // forEach里面return true不会终止迭代
     }
     console.log(11)
   })
   // some遍历：适合查询数组中唯一的元素
   arr.some(function (value) {
     if (value == 'green') {
       console.log('找到了该元素')
       return true // some里面return true就是终止遍历，迭代效率更高
     }
     console.log(11)
   })
   // filter筛选
   arr.filter(function (value) {
     if (value == 'green') {
       console.log('找到了该元素')
       return true // filter里面return true不会终止迭代
     }
     console.log(11)
   })
   ```

#### 2.5.14 数组去重

```js
function unique(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
var demo = unique(['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'])
console.log(demo)
```

------

### 2.6 字符串 String

1. 定义：属于基本包装类型，即JS把简单数据类型包装成为了复杂数据类型，使其具有了属性和方法
2. 不可变性：里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开了一个空间，原数据依然存在，所以不要大量拼接字符串

#### 2.6.1 字符串索引

1. 索引位

   1）`str.indexOf('要查找的字符',[起始的位置])`，起始的位置可不填，如果未查找到结果，返回-1

   ```js
   // 统计字符串中某字符出现的次数
   var str = 'oabcoefoxyozzopp'
   var index = str.indexOf('o')
   var num = 0
   while (index !== -1) {
     console.log(index)
     num++
     index = str.indexOf('o', index + 1)
   }
   console.log('o出现的次数是: ' + num)
   ```
   
   ```js
   // 判断一个字符（比如”a”）是否出现在另一个字符（比如”2340sadfj2affa2”）中，如果出现，并求出现了几次
   var str = '2340sadfj2affa2'
   var n = str.indexOf('a')
   if (n == -1) {
     alert('没出现')
   } else {
     alert('出现了')
   }
   var count = 0
   var arr = str.split('')
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] == 'a') {
       count++
     }
   }
   document.write('出现了' + count + '次')
   ```
   
   2）`str.lastIndexOf('要查找的字符',[起始的位置])`，起始的位置可不填，如果未查找到结果，返回-1
   
   ```js
   // 获取一个长文件路径中的文件名及其后缀
   // 注意：字符串中的特殊字符需要使用反斜杠进行转义，比如“\”要写成“\\”，换行要写成“\n”，单引号要写成“ \’ ”，双引号要写成“ \” ”
   var str = 'E:\\itcast\\class\\php\\js\\day2\\abc.html'
   var gang = str.lastIndexOf('\\')
   var dian = str.lastIndexOf('.')
   var ming = str.substring(gang + 1, dian)
   var houzhui = str.substr(dian + 1)
   document.write('文件名' + ming + '后缀' + houzhui)
   ```
   
   3）注意：所有字符串都包含空字符''，且位置在最前面
   
   ```js
   'abc'.indexOf('') // 结果：0
   'abc'.lastIndexOf('') // 结果：3
   ```
   
2. 索引值：

   1）`str.charAt(index)`：返回指定位置的字符

   2）`str.charCodeAt(index)`：返回相应索引号的字符ASCII值，目的是判断用户按下了哪个键（ASCII：American Standard Code for Information Interchange，美国标准信息交换代码）

   3）`str[index]`：获取指定位置处的字符，H5新增
   
   ```js
   // charAt(index)：根据位置返回字符
   var str = 'andy'
   console.log(str.charAt(3))
   // 遍历所有的字符
   for (var i = 0; i < str.length; i++) {
     console.log(str.charAt(i))
   }
   // charCodeAt(index)  返回相应索引号的字符ASCII值，目的：判断用户按下了那个键
   console.log(str.charCodeAt(0)) // 97
   // H5新增：str[index]
   console.log(str[0]) // a
   ```
   
   ```js
   // 统计字符串中出现最多的字符和次数
   var str = 'abcoefoxyozzopp'
   var o = {} // 声明一个空对象，用作字典储存每个字符串对应的出现次数
   for (var i = 0; i < str.length; i++) {
     var chars = str.charAt(i)
     if (o[chars]) {
       o[chars]++
     } else {
       o[chars] = 1
     }
   }
   
   var max = 0
   var ch = ''
   for (var k in o) {
     if (o[k] > max) {
       max = o[k]
       ch = k
     }
   }
   console.log(max)
   console.log(`最多的字符是${ch}，一共出现了${max}次`)
   ```

#### 2.6.2 字符串拼接

1. `str.concat(str2,str3,...)`

#### 2.6.3 截取字符串

1. `str.substr(开始位置, 截取长度)`：如果不写截取长度，默认从开始位置一直截取到最后

   ```js
   var str1 = '改革春风吹满地'
   console.log(str1.substr(2)) // 春风吹满地
   console.log(str1.substr(2, 2)) // 春风
   ```

2. `str.slice(开始位置, 结束位置)`

3. `str.substring(开始位置, 结束位置)`：基本与slice相同，但不接受负数

#### 2.6.4 替换字符串

1. `str.replace('被替换的字符','替换为的字符' )`

   1）只会替换第一个字符

   ```js
   var str = 'andyandy'
   console.log(str.replace('a', 'b'))
   ```
   
   2）若要全部替换，需配合while+indexOf使用，或用正则表达式
   
   ```js
   var str1 = 'abcoefoxyozzopp'
   while (str1.indexOf('o') !== -1) {
     str1 = str1.replace('o', '*')
   }
   console.log(str1)
   ```

#### 2.6.5 字符串转数组

1. `str.split('字符串中的分隔符')`

   ```js
   var str2 = 'red, pink, blue'
   console.log(str2.split(','))
   var str3 = 'red&pink&blue'
   console.log(str3.split('&'))
   ```

#### 2.6.6 大小写转换

1. 转换大写：`str.toUpperCase()`
2. 转为小写：`str.toLowerCase()`

```js
// 将用户输入的字符串翻转，并将首尾转换为大写，其余转为小写
var s1 = prompt('请输入任意字符', '')
var arr = s1.split('') //转成数组
var newArr = arr.reverse() //翻转顺序保存给newArr=['c','b','a']
for (var i = 0; i < newArr.length; i++) {
  if (i == 0 || i == newArr.length - 1) {
    newArr[i] = newArr[i].toUpperCase()
  } else {
    newArr[i] = newArr[i].toLowerCase()
  }
}
var str = newArr.join('')
alert(str)
```

#### 2.6.7 去除空白字符

1. `str.trim()`：去除两端空白字符，不影响字符串本身，返回一个新字符串

   ```js
   <!--案例：输入框自动去除两端空格（无法去除中间空格）-->
   <input type="text" /> <button>点击</button>
   <script>
     var input = document.querySelector('input')
     var btn = document.querySelector('button')
     var div = document.querySelector('div')
     btn.onclick = function () {
       var str = input.value.trim()
       if (str === '') {
         alert('请输入内容')
       } else {
         console.log(str)
         console.log(str.length)
         div.innerHTML = str
       }
     }
   </script>
   ```

   

------

### 2.7 函数 Function

#### 2.7.1 声明函数

1. 函数关键字（命名函数）：`function 函数名(形参1,形参2,...) {函数体 return...}`，函数体换行用分号`；`隔开

2. 函数表达式（匿名函数）：`var 变量名 = function(形参1,形参2,...) {函数体 return...}`，调用时用`变量名()`

3. 利用`Function()构造函数`来定义函数：

   1）语法：`var f = new Function('参数1','参数2', ..., '函数体')`，注意：里面要用字符串的格式写

   2）所有函数都是Function的实例对象

   3）函数也属于对象：`f instanceof Object`

   ![Function构造函数](D:\MyProjects\Website\Tutoring\Web_Basic\Section4-JavaScript\src\Function构造函数.png)

   

#### 2.7.2 函数参数

1. 形参与实参不匹配：

   1）如果实参的个数多于形参的个数，会取到形参的个数 

   2）如果实参的个数小于形参的个数，多余的形参定义为undefined，最终输出的结果是 NaN

   ```js
   function getSum(num1, num2) {
     console.log(num1 + num2)
   }
   // 如果实参的个数和形参的个数一致 则正常输出结果
   getSum(1, 3)	 // 4
   // 如果实参的个数多于形参的个数，会取到形参的个数
   getSum(1, 2, 3)	 // 3
   // 如果实参的个数小于形参的个数，多于的形参定义为undefined，最终的结果就是 NaN
   getSum(1) 		 // NaN
   ```

2. arguments对象：

   1）arguments存储了传递的所有实参

   2）形式：伪数组 Arguments(x)

   * 可用`arguments[i]`调用
   * 有`length`属性
   * 没有`pop()`、`push()`方法

   ```js
   // 只有函数才有 arguments对象，而且是每个函数都内置好了这个arguments
   function fn() {
     console.log(arguments) 		// 里面存储了所有传递过来的实参，arguments = [1,2,3]（伪数组：Arguments(3)）
     console.log(arguments.length)
     console.log(arguments[2])
     // 可以按照数组的方式遍历arguments
     for (var i = 0; i < arguments.length; i++) {
       console.log(arguments[i])
     }
   }
   fn(1, 2, 3)
   fn(1, 2, 3, 4, 5)
   ```

    ```js
	// 求任意个数的最大值
   function getMax() {
     // arguments = [1,2,3]
     var max = arguments[0]
     for (var i = 1; i < arguments.length; i++) {
       if (arguments[i] > max) {
         max = arguments[i]
       }
     }
     return max
   }
   console.log(getMax(1, 2, 3))
   console.log(getMax(1, 2, 3, 4, 5))
   console.log(getMax(11, 2, 34, 444, 5, 100))
    ```

#### 2.7.3 函数返回结果

1. 终止函数：函数中return后面的语句不会被执行

2. return只能返回一个值，想返回多个值用数组存储

3. 如果没有return，函数返回的值是undefined

   ```js
   // return 终止函数
   function getSum(num1, num2) {
     return num1 + num2 // return 后面的代码不会被执行
     alert('我是不会被执行的哦！')
   }
   console.log(getSum(1, 2))
   
   // return 只能返回一个值
   function fn(num1, num2) {
     return num1, num2 // 返回的结果是最后一个值
   }
   console.log(fn(1, 2))
   
   // 想返回多个值用数组存储：求任意两个数的加减乘数结果
   function getResult(num1, num2) {
     return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
   }
   var re = getResult(1, 2) // 返回的是一个数组
   console.log(re)
   
   // 函数如果有return，则返回的是 return 后面的值，如果函数没有 return，则返回 undefined
   function fun1() {
     return 666
   }
   console.log(fun1()) // 返回 666
   function fun2() {}
   console.log(fun2()) // 函数返回的结果是 undefined
   ```

#### 2.7.4 函数的调用

1. 普通函数：`function fn(){}`

   1）直接调用：fn()

   2）call()调用：fn.call()

   3）this指向：window（正常调用的完整写法是：window.fn()）

2. 对象中的方法：`var obj = {fun: function(){}}`

   1）调用：obj.fun()
   2）this指向：obj

3. 构造函数：`function Star(){}`

   1）调用：var ldh = new Star()

   2）this指向：实例对象ldh（原型对象中的this也指向ldh）

4. 绑定事件函数：`btn.onclick = function(){}`

   1）点击按钮调用

   2）this指向：btn

5. 定时器函数：`setInterval(function(){}, 1000)`
   1）自动1秒钟调用一次

   2)this指向：window（正常调用的完整写法是：window.setInterval()）

6. 立即执行函数：`(function(){})()`

   1）自动调用

   2）this指向：window

#### 2.7.5 改变this指向

1. call()：`function.call(thisArg,arg1,arg2 ...)`，thisArg：当前调用函数this的指向对象

   1）用法：调用函数：有函数fun(x,y){...}，正常可以用fun()调用，也可以用fun.call()调用

   2）改变函数指向：`var o = {...}, fun.call (o, x, y)`, 此时fun中的this指向了对象o

2. apply()：`function.apply(thisArg,[argsArray])`

   1）参数：

   * thisArg：当前调用函数this的指向对象
   * argsArray：传递的值，必须包含在【数组】里

   ```js
   var o = {
     name: 'andy',
   }
   function fn(arr) {
     console.log(this)	// 对象o：{name: 'andy'}
     console.log(arr)  // pink
   }
   fn.apply(o, ['pink'])
   ```

   2）应用：数组求最大最小值

   ```js
   var arr = [1, 66, 3, 99, 4]
   var max = Math.max.apply(Math, arr)
   var min = Math.min.apply(Math, arr)
   ```

3. bind()：`function.bind(thisArg,arg1,arg2,...)`，thisArg：当前调用函数this的指向对象

   1）作用：如果有的函数不需要立即调用，但是又想改变这个函数内部的this指向，此时用bind

   2）返回：由指定的this值和初始化参数改造的原函数拷贝（新函数）

   3）注意：不会调用原来的函数，需要手动调用新函数才会执行

   ```js
   var o = {
     name: 'andy',
   }
   function fn(a, b) {
     console.log(this)
     console.log(a + b)
   }
   var f = fn.bind(o, 1, 2)
   f()	// {name: 'andy'}, 3
   ```

   4）案例1：点击按钮后禁用，3秒钟后恢复正常

   ```js
   // 难点：在定时器中如果想用 this.disabled = false 是无法做到的，因为定时器函数中的this指向windows
   
   // 方法1：在btn事件函数中声明 var that = this，再令定时器中的 that.disabled = false
   var btn1 = document.querySelector('button')
   btn1.onclick = function () {
     this.disabled = true // 这个this 指向的是 btn 这个按钮
     var that = this
     setTimeout(function () {
       that.disabled = false
     }, 3000)
   }
   
   // 方法2：在定时器函数后用bind(this)即可改变this指向
   var btn1 = document.querySelector('button')
   btn1.onclick = function () {
     this.disabled = true
     setTimeout(
       function () {
         this.disabled = false // 此时定时器函数里面的this指向的是btn
       }.bind(this), 			// 这个this指向的是btn
       3000
     )
   }
   ```

   5）案例2：Tab栏增删改内容完善（不需要在外部声明that，直接内部修改this指向即可）

   ```html
   <div class="tabsbox" id="tab">
     <!-- tab 标签 -->
     <nav class="fisrstnav">
       <ul>
         <li class="liactive">
           <span>测试1</span>
           <span class="iconfont icon-guanbi"></span>
         </li>
         <li>
           <span>测试2</span>
           <span class="iconfont icon-guanbi"></span>
         </li>
         <li>
           <span>测试3</span>
           <span class="iconfont icon-guanbi"></span>
         </li>
       </ul>
       <div class="tabadd">
         <span>+</span>
       </div>
     </nav>
     <!-- tab 内容 -->
     <div class="tabscon">
       <section class="conactive">测试1</section>
       <section>测试2</section>
       <section>测试3</section>
     </div>
   </div>
   ```
   
   ```js
   class Tab {
     constructor(id) {
       // 获取元素
       this.main = document.querySelector(id)
       this.add = this.main.querySelector('.tabadd')
       // li的父元素
       this.ul = this.main.querySelector('.fisrstnav ul:first-child')
       // section 父元素
       this.fsection = this.main.querySelector('.tabscon')
       this.init()
     }
     init() {
       this.updateNode()
       // init 初始化操作让相关的元素绑定事件
       this.add.onclick = this.addTab.bind(this.add, this)
       for (var i = 0; i < this.lis.length; i++) {
         this.lis[i].index = i
         this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this)
         this.remove[i].onclick = this.removeTab.bind(this.remove[i], this)
         this.spans[i].ondblclick = this.editTab
         this.sections[i].ondblclick = this.editTab
       }
     }
     // 因为我们动态添加元素 需要从新获取对应的元素
     updateNode() {
       this.lis = this.main.querySelectorAll('li')
       this.sections = this.main.querySelectorAll('section')
       this.remove = this.main.querySelectorAll('.icon-guanbi')
       this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
     }
     // 1. 切换功能
     // 这里的that，只是一个形参
     toggleTab(that) {
       that.clearClass()
       this.className = 'liactive'
       that.sections[this.index].className = 'conactive'
     }
     // 清除所有li和section的类
     clearClass() {
       for (var i = 0; i < this.lis.length; i++) {
         this.lis[i].className = ''
         this.sections[i].className = ''
       }
     }
     // 2. 添加功能
     addTab(that) {
       that.clearClass()
       // (1) 创建li元素和section元素
       var random = Math.random()
       var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
       var section = '<section class="conactive">测试 ' + random + '</section>'
       // (2) 把这两个元素追加到对应的父元素里面
       that.ul.insertAdjacentHTML('beforeend', li)
       that.fsection.insertAdjacentHTML('beforeend', section)
       that.init()
     }
     // 3. 删除功能
     removeTab(that, e) {
       e.stopPropagation() // 阻止冒泡 防止触发li 的切换点击事件
       var index = this.parentNode.index
       console.log(index)
       // 根据索引号删除对应的li和section，remove()方法可以直接删除指定的元素
       that.lis[index].remove()
       that.sections[index].remove()
       that.init()
       // 当我们删除的不是选中状态的li的时候，原来的选中状态li保持不变
       if (document.querySelector('.liactive')) return
       // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
       index--
       // 手动调用我们的点击事件  不需要鼠标触发
       that.lis[index] && that.lis[index].click()
     }
     // 4. 修改功能
     editTab() {
       var str = this.innerHTML
       // 双击禁止选定文字
       window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
       this.innerHTML = '<input type="text" />'
       var input = this.children[0]
       input.value = str
       input.select() // 文本框里面的文字处于选定状态
       // 当我们离开文本框就把文本框里面的值给span
       input.onblur = function () {
         this.parentNode.innerHTML = this.value
       }
       // 按下回车也可以把文本框里面的值给span
       input.onkeyup = function (e) {
         if (e.keyCode === 13) {
           // 手动调用表单失去焦点事件  不需要鼠标离开操作
           this.blur()
         }
       }
     }
   }
   new Tab('#tab')
   ```

#### 2.7.6 严格模式

1. 定义：ES5的严格模式(Strict Mode)是采用具有限制性JS变体的一种方式，即在严格的条件下运行JS代码

2. 兼容性：IE10+支持，旧版本浏览器会忽略

3. 作用：

   1）消除了JS语法不合理、不安全之处，提高编译器效率

   2）禁用了ES未来版本可能会定义的一些语法，为未来版本JS做好铺垫，某些保留关键字不能用作变量名

4. 语法：

   1）为整个脚本(script标签)开启严格模式

   ```html
   <!--方法1-->
   <script> 'use strict'; ...</script>
   <!--方法2-->
   <script>(function(){'use strict'; ...})()</script>
   ```

   2）为某个函数开启严格模式

   ```js
   function fn() {'use strict'; ...}
   ```

5. 特性：

   1）变量名必须先声明再使用

   2）不能随意删除已经声明好的变量

   3）全局作用域中函数中的 this 是 undefined

   4）如果构造函数不加new调用, this 指向的是undefined，如果给 this.属性 赋值则会报错

   5）定时器 this 还是指向 window

   6）严格模式下函数里面的参数不允许有重名

#### 2.7.7 高阶函数

1. 定义：对其他函数进行操作的函数，接收函数作为参数，或将函数作为返回值输出

2. 接收函数作为参数：

   ```js
   function fn(callback) {
     callback && callback()
   }
   fn(function () {
     alert('hi')
   })
   ```

3. 将函数作为返回值输出：

   ```js
   function fn() {
     return function () {}
   }
   fn()
   ```

#### 2.7.8 闭包 Closure

1. 定义：指有权访问另一个函数作用域中变量的【函数】（注：本质上是函数）

2. 浏览器检查：F12-来源(source)-代码打断点刷新逐步运行-作用域(scope)，可以看到闭包(fn)

3. 作用：延伸了变量的作用范围

5. 案例：

   1）案例1：点击li输出索引号

   ```js
   // 传统方法
   var lis = document.querySelector('.nav').querySelectorAll('li')
   for (var i = 0; i < lis.length; i++) {
     lis[i].index = i
     lis[i].onclick = function () {
       console.log(this.index)
     }
   }
   ```
   
   ```js
   // 闭包方法
   for (var i = 0; i < lis.length; i++) {
     // 利用for循环创建了4个立即执行函数
     // 立即执行函数也称为小闭包，因为立即执行函数里面的任何一个函数都可以使用它的i这个变量
     (function (i) {
       lis[i].onclick = function () {
         console.log(i)
      }
     })(i)
   }
   ```
   
   2）案例2：定时器中的闭包（外面的for循环是同步任务，里面的定时器是异步任务，会产生冲突，需要立即执行函数包裹进去解决问题）
   
   ```js
   // 3秒钟之后,打印所有li元素的内容
   var lis = document.querySelector('.nav').querySelectorAll('li')
   for (var i = 0; i < lis.length; i++) {
     (function (i) {
       setTimeout(function () {
         console.log(lis[i].innerHTML)
      }, 3000)
     })(i)
   }
   ```
   
   3）案例3：打车价格
   
   ```js
   // 打车起步价13(3公里内)，之后每多一公里增加5块钱，用户输入公里数就可以计算打车价格
   // 如果有拥堵情况，总价格多收取10块钱拥堵费
   var car = (function () {
     var start = 13 // 起步价：局部变量
     var total = 0  // 总价：局部变量
     return {
       // 正常的总价
       price: function (n) {
         if (n <= 3) {
           total = start
         } else {
           total = start + (n - 3) * 5
         }
         return total
       },
       // 拥堵之后的费用
       yd: function (flag) {
         return flag ? total + 10 : total
       },
     }
   })()
   console.log(car.price(5)) // 23
   console.log(car.yd(true)) // 33
   ```

#### 2.7.9 递归函数

1. 定义：如果一个函数在内部可以调用其本身，这个函数为递归函数

2. 注意：递归里面必须加退出条件，但如果是有限循环的话就不用加

3. 案例：

   1）求阶乘

   ```js
   // 利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n
   function fn(n) {
     if (n == 1) {
       return 1
     }
     return n * fn(n - 1)
   }
   console.log(fn(3))
   ```

   2）斐波那契数列

   ```js
   // 利用递归函数求斐波那契数列(兔子序列) 1、1、2、3、5、8、13、21...
   // 用户输入一个数字n就可以求出这个数字对应的兔子序列值
   // 只需要知道用户输入的n的前面两项(n-1 n-2)就可以计算出n对应的序列值
   function fb(n) {
     if (n === 1 || n === 2) {
       return 1
     }
     return fb(n - 1) + fb(n - 2)
   }
   console.log(fb(3))
   ```

   3）深度嵌套数据查找

   ```js
   // 输入id号，就可以返回数据对象
   var data = [
     {
       id: 1,
       name: '家电',
       goods: [
         {
           id: 11,
           gname: '冰箱',
           goods: [
             {
               id: 111,
               gname: '海尔',
             },
             {
               id: 112,
               gname: '美的',
             },
           ],
         },
         {
           id: 12,
           gname: '洗衣机',
         },
       ],
     },
     {
       id: 2,
       name: '服饰',
     },
   ]
   // 1. 用forEach遍历里面的每一个对象
   function getID(json, id) {
     var o = {}
     json.forEach(function (item) {
       if (item.id == id) {
         o = item
         // 2. 里层的数据可以利用递归函数，里面应该有goods这个数组且长度不为0
       } else if (item.goods && item.goods.length > 0) {
         o = getID(item.goods, id)
       }
     })
     return o
   }
   console.log(getID(data, 1))
   console.log(getID(data, 2))
   console.log(getID(data, 11))
   console.log(getID(data, 12))
   console.log(getID(data, 111))
   ```

#### 2.7.10 深浅拷贝

##### 2.7.10.1 浅拷贝

1. 定义：只是拷贝一层，更深层次对象级别的只拷贝引用，修改拷贝对象会影响原对象

2. 方法1：用for循环拷贝对象

   ```js
   var obj = {
     id: 1,
     name: 'andy',
     msg: {
       age: 18,
     },
   }
   var o = {}
   for (var k in obj) {
     o[k] = obj[k]
   }
   console.log(o)			// {id: 1,name: 'andy',msg: {age: 18,},}
   o.msg.age = 20
   console.log(obj)		// 原对象也跟随改变：{id: 1,name: 'andy',msg: {age: 18}}
   ```

3. 方法2：`Object.assign（拷贝对象，原对象）`

   ```js
   var obj = {
     id: 1,
     name: 'andy',
     msg: {
       age: 18,
     },
   }
   var o = {}
   Object.assign(o, obj)
   console.log(o)			// {id: 1,name: 'andy',msg: {age: 18,},}
   o.msg.age = 20
   console.log(obj)		// 原对象也跟随改变：{id: 1,name: 'andy',msg: {age: 18}}
   ```

##### 2.7.10.2 深拷贝

1. 定义：拷贝多层，每一级别的数据都会拷贝

2. 方法：利用递归函数进行深度拷贝，if 判断数据类型（注意：判断数据类型时，要先筛出数组，因为array即是Object也是Array）

   ```js
   function deepCopy(newobj, oldobj) {
     for (var k in oldobj) {
       // 判断属性值属于那种数据类型
       // 1. 获取属性值：oldobj[k]
       var item = oldobj[k]
       // 2. 判断这个值是否是数组
       if (item instanceof Array) {
         newobj[k] = []
         deepCopy(newobj[k], item)
       } else if (item instanceof Object) {
         // 3. 判断这个值是否是对象
         newobj[k] = {}
         deepCopy(newobj[k], item)
       } else {
         // 4. 属于简单数据类型
         newobj[k] = item
       }
     }
   }
   ```

------

### 2.8 作用域

1. 定义：变量在某个范围内起作用和效果，为了提高程序的可靠性，减少命名冲突

2. 分类：

   1）全局作用域：整个script标签，或者是一个单独的js文件

   2）局部作用域：在函数内部就是局部作用域

   3）块级作用域（ES6）：在函数内部用`let`或`const`定义变量

   ```js
   // 外面的是不能调用num的
   if (3 < 5) {
     let num = 10	// 如果是var，外面就可以调用了
   }
   console.log(num)
   ```

3. 变量作用域：

   1）全局变量：全局作用域下的变量，在全局下都可以使用；只有浏览器关闭的时候才会销毁，比较占内存资源

   * 如果在函数内部，没有声明直接赋值的变量也属于全局变量
   * 没有声明即无var，直接令x=a，例：foo() {var a = 1; b = 2;}，b为全局变量

   2）局部变量：在局部作用域下的变量，在函数内部的变量就是局部变量

   * 函数的形参也可以看做是局部变量
   * 当程序执行完毕就会销毁，比较节约内存资源

   ```js
   // 全局变量：在全局作用域下的变量，在全局下都可以使用
   // 注意：如果在函数内部 没有声明直接赋值的变量也属于全局变量
   var num = 10 // num就是一个全局变量
   console.log(num)
   function fn() {
     console.log(num)
   }
   fn()
   
   // 局部变量：在局部作用域下的变量，后者在函数内部的变量就是局部变量
   // 注意：函数的形参也可以看做是局部变量
   function fun(aru) {
     var num1 = 10 	// num1就是局部变量 只能在函数内部使用
     num2 = 20
   }
   fun()
   console.log(num1) 	// Uncaught ReferenceError: num1 is not defined
   console.log(num2) 	// 20
   ```

4. 作用域链：

   1）就近原则：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取那个值

   2）例：全局变量num=10，函数内局部变量num=20，内部函数调用num，取的是20
   
   ```js
   // 案例1：结果是0
   function f1() {
     var num = 123
     function f2() {
       var num = 0
       console.log(num) // 0
     }
     f2()
   }
   var num = 456
   f1()
   
   // 案例2：结果是4、22
   var a = 1
   function fn1() {
     var a = 2
     var b = '22'
     fn2()
     function fn2() {
       var a = 3
       fn3()
       function fn3() {
         var a = 4
         console.log(a) // 4
         console.log(b) // 22
       }
     }
   }
   fn1()
   ```

------

### 2.9 预解析

1. 预解析

   1）原理：把js里面所有的 var 和 function 提升到当前作用域的最前面

   2）变量提升：把所有的变量声明提升到当前的作用域最前面，不提升赋值操作

   3）函数提升：把所有的函数声明提升到当前作用域的最前面 ，不调用函数

2. 代码执行：按书写顺序从上到下执行

3. 案例：

   1）先调用变量但后赋值，输出结果为undefined

   2）先用变量名调用匿名函数后定义函数，提示报错

   3）先调用命名函数但后定义函数，可以成功运行

4. 经典案例：

   1）var a = b = c = 9; 仅有a是局部变量，b、c都是直接赋值，为全局变量

   2）想同时赋值多个变量，要用逗号隔开：var a = 9, b = 9, c =9;

   ```js
   // 原始代码（命名函数）
   f1()
   console.log(c)
   console.log(b)
   console.log(a)
   function f1() {
     var a = (b = c = 9)
     console.log(a)
     console.log(b)
     console.log(c)
   }
   
   // 预解析后
   function f1() {
     var a
     a = b = c = 9
     console.log(a) // 9
     console.log(b) // 9
     console.log(c) // 9
   }
   f1()
   console.log(c) // 9
   console.log(b) // 9
   console.log(a) // undefined
   ```

------

### 2.10 对象 Obejct

> 对象是一组无序的相关属性和方法的集合，所有事物都是对象，如字符串、数值、数组、函数等。

#### 2.10.1 创建对象

##### 2.10.1.1 字面量法

* 语法：`var 对象名 = {key1：value1，key2：value2，key3：function(){}....}`

```js
var obj = {
  uname: '张三疯',
  age: 18,
  sex: '男',
  sayHi: function () {
    console.log('hi~')
  },
}
```

##### 2.10.1.2 new关键字

1. 语法：`var 对象名 = new Object()`

2. 定义属性：`对象名.属性名 = 属性`

3. 定义方法：`对象名.方法名 = function() {...}`

4. new关键字执行过程

   1）new 构造函数可以在内存中创建了一个空的对象

   2）this 就会指向刚才创建的空对象

   3）执行构造函数里面的代码 给这个空对象添加属性和方法

   5）返回这个对象

   ```js
   var obj = new Object()
   obj.uname = '张三疯'
   obj.age = 18
   obj.sex = '男'
   obj.sayHi = function () {
     console.log('hi~')
   }
   ```

##### 2.10.1.3 构造函数

1. 定义：如果需要重复引用同一个对象进行定义，可以利用函数的方法重复相同的代码，称为构造函数

2. 目前大多数浏览器的JS是ES5版本，少部分高版本浏览器支持ES6；ES5中的对象不是基于类创建的，而是基于构造函数创建的

3. 缺点：存在浪费内存的问题，每进行一次实例化，便新开辟一个内存空间

4. 规则：

   1）构造函数名字首字母要大写

   2）构造函数不需要return就可以返回结果

   3）用构造函数必须使用`new`

   4）属性和方法前面必须添加`this`

5. 语法：`function Classname(arg1,arg2,...){this.attr1=arg1 this.attr2=arg2 this.method=function(){...}}`

   ```js
   function Star(uname, age) {
     this.uname = uname
     this.age = age
     this.sing = function () {
       console.log('我会唱歌')
     }
   }
   // 创建新对象
   var ldh = new Star('刘德华',18)
   ```

6. 实例成员：构造函数内部通过this添加的成员，只能通过实例化的对象来访问

   ```js
   // 构造函数Star的age属性，只能通过以下方法访问
   var ldh = new Star('刘德华',48)
   ldh.age
   ```

7. 静态成员：在构造函数本身上添加的成员（在外部后添加的），只能通过构造函数来访问，不能通过实例化对象来访问

   ```js
   // 构造函数Star没有sex属性，只能通过以下方法访问
   Star.sex = '男'
   Star.sex
   ```

------

#### 2.10.2 调用对象

1. 调用属性：

   1）对象名.属性名：`object.attribute`

   2）对象名['属性名']：`object['attribute']`

2. 调用方法：对象名.方法名()：`object.method()`

#### 2.10.3 遍历对象

1. 传统方法：`for (var k in obj) {obj[k]}`

   ```js
   for (var k in obj) {
     console.log(k)	  // k：属性名
     console.log(obj[k]) // obj[k]：属性值
   }
   ```

2. `Object.keys()`：用于获取对象自身所有的属性名

   ```js
   var obj = {
     name: 'pink老师',
     age: 18,
     sex: '男',
     fn: function () {},
   }
   // 先用数组储存对象属性名
   var arr = Object.keys(obj)
   // 用forEach遍历
   arr.forEach(function (value) {
     console.log(value) // 输出的value是属性名：name age sex fn
   })
   ```

#### 2.10.4 新增/修改属性

1. 传统方法：`obj.属性名=属性值`

2. ES5新方法：`Object.defineProperty(obj,prop,descriptor)`

   1）descriptor说明：以对象的形式书写

   * value：设置属性值，默认为undefined
   * writable: 布尔值，值是否可以重写，默认为false
   * enumerable: 布尔值，目标属性是否可以被枚举，默认为 false，即Object.keys()是否可以遍历出该属性
   * configurable：布尔值，目标属性是否可以被删除或是否可以再次修改特性，默认为false，如果已经设置过一次descriptor了，不允许在下面再次修改descriptor中的参数

   2）对于obj初始时内部定义的属性，descriptor中后三项默认都是true

   ```js
   var obj = {
     id: 1,
     pname: '小米',
     price: 1999,
   }
   Object.defineProperty(obj, 'address', {
     value: '中国山东蓝翔技校xx单元',
     // 如果只为false 不允许修改这个属性值 默认值也是false
     writable: false,
     // enumerable 如果值为false 则不允许遍历, 默认的值是 false
     enumerable: false,
     // configurable 如果为false 则不允许删除这个属性 不允许在修改第三个参数里面的特性 默认为false
     configurable: false,
   })
   ```

------

#### 2.10.5 内置对象

> 内置对象：JS已经定义好的，直接拿来使用即可，都是首字母大写的。

###### 2.11.1 Math对象

1. 定义：不是构造函数，不用new实例化

2. 圆周率：`Math.PI`

3. 最大值：`Math.max()`

4. 最小值：`Math.min()`

5. 绝对值：`Math.abs()`，如果输入字符串自动转为数字

6. 向下取整：`Math.floor()`，往小了取值

7. 向上取整：`Math.ceil()`，往大了取值

8. 四舍五入：`Math.round()`，0.5往大取，1.5变成2，-1.5变成-1

9. 随机数：`Math.random()`，取值范围 [0,1)

   ```js
   // 案例：得到一个两数之间的随机数
   function getRandomArbitrary(min, max) {
     return Math.random() * (max - min) + min;
   }
   
   // 案例：得到一个两数之间的随机整数
   function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
   }
   
   // 案例：得到一个两数之间的随机整数，包括两个数在内
   function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
   }
   ```
   
   ```js
   // 案例：从学员名单中不重复地选出4名学员
   //           0       1      2         3        4        5       6
   var arr = ['鹿晗', '王三', '彭于晏', '刘德华', '张学友', '张三丰', '乔峰']
   // 定义函数：得到一个两数之间的随机整数
   function getRandomInt(min, max) {
     min = Math.ceil(min)
     max = Math.floor(max)
     return Math.floor(Math.random() * (max - min)) + min
   }
   var numArray = [] // 存放索引的数组
   var newArray = [] // 存放筛选出来的4个学员
   
   // 如果真的突然出现筛选出重复的人，最多不会出现3次等
   for (var i = 0; i < 11; i++) {
     var num = getRandomInt(0, 6)
     // console.log(num);
     if (numArray.indexOf(num) == -1) {
       // 如果在numArray空数组里面检测不到随机的num，就放到数组里面
       numArray[numArray.length] = num
       newArray[newArray.length] = arr[num]
     }
     if (numArray.length == 4) {
       break
     }
   }
   document.write(newArray)
   document.write(numArray)
   ```

###### 2.11.2 Date对象

1. 定义：是构造函数，需要new实例化

2. 语法：`var date = Date(参数)`，如果没有参数，返回系统当前时间

3. 参数：

   1）数字型：2019,10,01，注意：数字型月份默认+1，即输入10，输出为11月

   2）字符串：'2019-10-1 8:8:8'

4. 格式化：`var date = new Date()`

   1）获取当年：`date.getFullYear()`

   2）获取当月：`date.getMonth()`，注意：返回的数值需要+1才是当前月份

   3）获取当天日期：`date.getDate()`

   4）获取星期几：`date.getDay()`，注意：周日返回的是0，最好用数组自定义一下，然后arr[day]

   ```js
   // 格式化日期
   var date = new Date()
   var year = date.getFullYear()
   var month = date.getMonth() + 1
   var dates = date.getDate()
   var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
   var day = date.getDay()
   console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day])
   ```

   5）获取当前小时：`date.getHours()`，补零：`h = h < 10 ? '0' + h : h`

   6）获取当前分钟：`date.getMinutes()`，补零：`m = m < 10 ? '0' + m : m`

   7）获取当前秒钟：`date.getSeconds()`，补零：`s = s < 10 ? '0' + s : s`

   ```js
   // 格式化时间
   function getTimer() {
     var time = new Date()
     var h = time.getHours()
     h = h < 10 ? '0' + h : h
     var m = time.getMinutes()
     m = m < 10 ? '0' + m : m
     var s = time.getSeconds()
     s = s < 10 ? '0' + s : s
     return h + ':' + m + ':' + s
   }
   console.log(getTimer())
   ```

5. 时间戳：当前距离1970年1月1日的总毫秒数

   ```js
   // 方法1
   var date = new Date()
   date.valueOf()
   date.getTime()
   // 方法2
   var date = +new Date()
   // 方法3
   Date.now()
   ```

6. 案例：倒计时

   1）输入的时间减去现在的时间就是剩余的时间，但是不能拿着时分秒相减，比如05分减去25分，结果会是负数的

   2）用时间戳：用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数

   3）把剩余时间总的毫秒数转换为天、时、分、秒 （时间戳转换为时分秒）

   * 毫秒转为秒：除1000
   * 计算天数：parseInt(总秒数/ 60/60 /24)
   * 计算小时：parseInt(总秒数/ 60/60 %24)
   * 计算分钟：parseInt(总秒数 /60 %60 )
   * 计算秒数：parseInt(总秒数%60)
   
   ```js
   function countDown(time) {
     var nowTime = +new Date() // 返回的是当前时间总的毫秒数
     var inputTime = +new Date(time) // 返回的是用户输入时间总的毫秒数
     var times = (inputTime - nowTime) / 1000 // times是剩余时间总的秒数
     var d = parseInt(times / 60 / 60 / 24) // 天
     d = d < 10 ? '0' + d : d
     var h = parseInt((times / 60 / 60) % 24) //时
     h = h < 10 ? '0' + h : h
     var m = parseInt((times / 60) % 60) // 分
     m = m < 10 ? '0' + m : m
     var s = parseInt(times % 60) // 当前的秒
     s = s < 10 ? '0' + s : s
     return d + '天' + h + '时' + m + '分' + s + '秒'
   }
   console.log(countDown('2023-01-01 18:00:00'))
   ```
   

###### 2.11.3 扩展内置对象

1. 作用：通过原型对象prototype，对JS内置对象进行扩展自定义的方法，如给Array添加求和的功能

2. 正确写法：

   ```js
   Array.prototype.sum = function () {
     var sum = 0
     for (var i = 0; i < this.length; i++) {
       sum += this[i]
     }
     return sum
   }
   ```

3. 错误写法：即使用constructor: Array重新定向也不行，内置对象扩展方法必须用上面的写法

   ```js
   Array.prototype = {
     sum: function () {
       var sum = 0
       for (var i = 0; i < this.length; i++) {
         sum += this[i]
       }
       return sum
     },
   }
   ```

------

#### 2.10.6 原型 Proto

##### 2.10.6.1 原型对象：prototype

1. 定义：

   1）每个构造函数都有一个prototype属性，指向另一个【对象】，这个对象的所有属性和方法，都会被构造函数拥有

   2）把不变的方法直接定义在 prototype 对象上，所有对象实例都可以共享这些方法，可以有效解决浪费内存问题

2. 语法：`Object.prototype.method = function() {...}`

   1）一般来说，公共属性定义到构造函数里面，公共的方法放到原型对象身上

   2）用原型在外部定义的成员，可以通过实例对象访问

   ```js
   // 构造函数创建Star类
   function Star(uname, age) {
     this.uname = uname
     this.age = age
   }
   // 使用原型对象在外部定义sing方法，可以通过实例对象ldh或zxy访问（如果直接用Star.sing定义，实例对象无法调用）
   Star.prototype.sing = function () {
     console.log('我会唱歌')
   }
   
   var ldh = new Star('刘德华', 18)
   var zxy = new Star('张学友', 19)
   
   console.log(ldh.sing === zxy.sing)	// true
   ldh.sing()	// 我会唱歌
   zxy.sing()	// 我会唱歌
   ```

##### 2.10.6.2 对象原型: `__proto__`

1. 定义：每个对象都会有一个属性`__proto__`指向【构造函数】的【原型对象prototype】，之所以对象可以使用【构造函数】的【原型对象prototype】的属性和方法，就是因为对象有`__proto__`原型存在

2. 实例化对象的`__proto__`指向【构造函数】的【原型对象prototype】

   ```js
   var ldh = new Star(...)
   console.log(ldh.__proto__ === Star.prototype)  // ture
   ```

3. 方法的查找规则：

   1）首先先看ldh对象身上是否有sing方法，如果有就执行这个对象上的sing

   2）如果没有sing这个方法，因为有`__proto__`的存在，就去【构造函数Star】的【原型对象prototype】身上去查找sing这个方法

   3)`__proto__`对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线

##### 2.10.6.3 构造函数 Constructor

1. 定义：

   1）【对象原型（`__proto__`）】和【构造函数】的【原型对象（`prototype`）】里都有一个`constructor`属性，指回【构造函数】本身

   2）用于记录该对象引用于哪个构造函数，可以让原型对象prototype重新指向原来的构造函数

   ```js
   function Star(uname, age) {
     this.uname = uname
     this.age = age
   }
   console.log(ldh.__proto__.constructor === Star.prototype.constructor)  // ture
   ```

2. 作用：由于通过【原型对象prototype】定义公共的方法，而方法往往有多个，不可能重复书写，此时需要重新定义【原型对象prototype】

   1）单一公共方法的定义

   ```js
   Star.prototype.sing = function () {
     console.log('我会唱歌')
   }
   ```

   2）多个公共方法的定义：此处修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动的利用constructor指回原来的构造函数

   ```js
   Star.prototype = {
     constructor: Star,
     sing: function () {
       console.log('我会唱歌')
     },
     movie: function () {
       console.log('我会演电影')
     },
   }
   ```

##### 2.10.6.4 原型链

![原型链](D:\MyProjects\Website\Tutoring\Web_Basic\Section4-JavaScript\src\原型链.png)

1. 只要是对象就有`__proto__`原型，指向原型对象【Object.prototype】

   ```js
   // 三者等价
   ldh.__proto__.__proto__
   Star.prototype.__proto__
   Object.prototype
   ```

2. 【Object.prototype】原型对象里面的`__proto__`原型，指向为 null

   ```js
   Object.prototype.__proto__ === null
   ```

3. 成员查找规则（就近原则）

   1）先看 `ldh` 自身是否有该属性/方法

   2）没有的话查找它的原型 `Star.prototype`（即 `ldh.__proto__` 所指向的）

   3）还没有的话查找原型对象的原型 `Object.prototype`（即 `Star.prototype.__proto__` 所指向的）

   4）再没有的话，返回 `Object.prototype.__proto__`，即 `null`

   5）注意：ldh、Star、Object身上可能有相同属性名但不同属性值的情况，此时要就近原则查找

##### 2.10.6.5 this指向

1. 都指向实例对象 ldh：

   1）构造函数 Star(){...} 中的this

   2）原型对象函数 Star.prototype.sing = function() {...} 中的this

------

### 2.11 类 Class

> 类是语法糖：语法糖就是一种便捷写法，如果有2种方法可以实现同样的功能，但其中一种写法更清晰方便，这种方法称为语法糖。

#### 2.11.1 创建类

1. 类必须使用new实例化对象

   ```js
   // 首字母大写，不加小括号
   class Name {...}
   var xx = new Name()
   ```

2. 构造函数：`constructor()`

   1）定义：接受传递过来的参数，同时返回实例对象，只要 new 生成实例时就会自动调用这个函数

   2）语法：`class Name {constructor(arg) {this.xx = arg ... }}`

   ```js
   // 1. 创建类 class
   class Star {
     constructor(uname, age) {
       this.uname = uname
       this.age = age
     }
   }
   // 2. 利用类创建对象 new
   var ldh = new Star('刘德华', 18)
   ```

3. 注意：

   1）ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象

   2）类里面的共有的属性和方法一定要加this使用

   3）在类中调用内部定义的函数，不用加括号

4. 类其实是构造函数的另一种写法而已：

   1）类有原型对象prototype：`Star.prototype`

   2）类原型对象prototype里面有constructor指向类本身：`Star.prototype.constructor`

   3）类可以通过原型对象添加方法：`Star.prototype.sing = function () {...}`

   4）类创建的实例对象有`__proto__`原型指向类的原型对象：`ldh.__proto__ === Star.prototype`

#### 2.11.2 类的方法

1. 语法：直接写到类里面即可，在constructor下面写

2. 注意：不用写function关键字，直接写函数名，如 sing(song) {...}，函数/方法之间不能加逗号分割

   ```js
   class Star {
     // 类的共有属性放到 constructor 里面
     constructor(uname, age) {
       this.uname = uname
       this.age = age
     }
     sing(song) {
       console.log(this.uname + song)
     }
   }
   ```

#### 2.11.3 类的继承

##### 2.11.3.1 ES6之后继承

1. 就近原则：

   1）继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的

   2）如果子类里面没有，就去查找父类有没有这个方法，如果有就执行父类的这个方法

2. extends关键字：`class Son extends Father {...}`

   ```js
   class Father {
     constructor() {}
     money() {
       console.log(100)
     }
   }
   class Son extends Father {}
   var son = new Son()
   son.money()
   ```

3. super关键字：用于访问和调用父类上的函数，可以调用父类的构造函数、普通函数

   1）调用构造函数

   ```js
   class Father {
     constructor(x, y) {
       this.x = x
       this.y = y
     }
     sum() {
       console.log(this.x + this.y)
     }
   }
   class Son extends Father {
     constructor(x, y) {
       super(x, y) //调用了父类中的构造函数
     }
   }
   var son = new Son(1, 2)
   var son1 = new Son(11, 22)
   son.sum()
   son1.sum()
   ```

   2）调用普通函数

   ```js
   class Father {
     say() {
       return '我是爸爸'
     }
   }
   class Son extends Father {
     say() {
       // super.say() 就是调用父类中的普通函数 say()
       console.log(super.say() + '的儿子')  
     }
   }
   var son = new Son()
   son.say()
   ```

4. 继承的同时扩展自己的方法：

   1）利用super调用父类的构造函数（注意：super 必须在子类this之前调用）

   2）然后直接在子类的构造函数下写自己的函数方法

   ```js
   // 父类有加法方法
   class Father {
     constructor(x, y) {
       this.x = x
       this.y = y
     }
     sum() {
       console.log(this.x + this.y)
     }
   }
   // 子类继承父类加法方法，同时扩展减法方法
   class Son extends Father {
     constructor(x, y) {
       // 利用super调用父类的构造函数，super必须在子类this之前调用
       super(x, y)
       this.x = x
       this.y = y
     }
     subtract() {
       console.log(this.x - this.y)
     }
   }
   var son = new Son(5, 3)
   son.subtract()
   son.sum()
   son.say()
   ```

##### 2.11.3.2 ES6之前继承

1. 组合继承：构造函数+原型对象，模拟实现继承

2. `function.call(thisArg,arg1,arg2,...)`：thisArg：当前调用函数this的指向对象

   1）作用：修改函数运行时的this指向

   2）调用函数：有函数fun(x,y){...}，正常可以用fun()调用，也可以用fun.call()调用

   3）改变函数指向：`var o = {...}, fun.call (o, x, y)`, 此时fun中的this指向了对象o

3. 借用父构造函数继承【属性】：在子构造函数中添加 `Father.call(this, arg1,arg2,...)`

   ```js
   function Father(uname, age) {
     this.uname = uname
     this.age = age
   }
   
   function Son(uname, age, score) {
     Father.call(this, uname, age)
     this.score = score
   }
   ```

4. 借用原型对象继承【方法】：子构造函数的原型对象=new 父构造函数，同时用constructor指回子构造函数

   ```js
   Father.prototype.money = function () {
     console.log(100000)
   }
   // 注意：如果用Son.prototype = Father.prototype赋值会有问题，修改Son的同时也会修改Father的方法
   Son.prototype = new Father()
   Son.prototype.constructor = Son
   ```

#### 2.11.4 this指向

1. constructor中的this指向的是创建的实例对象

2. 类的方法函数中的this指向的是调用它的对象，一般就是实例对象

   * 特殊案例：如果在构造函数中调用内部函数，比如点击按钮触发函数，函数中的this指向的是按钮

3. 如果想保留constructor中的this指向，最好用其他变量保存一下，防止命名冲突，如：that = this（先在类的外面声明全局变量 var that）

   ```html
   <button>点击</button>
   <script>
     var that
     var _that
     class Star {
       constructor(uname, age) {
         // constructor 里面的this 指向的是创建的实例对象
         that = this
         console.log(this) // Star{...}，即ldh
         this.uname = uname
         this.age = age
         this.btn = document.querySelector('button')
         this.btn.onclick = this.sing
       }
       sing() {
         // 这个sing方法里面的this指向的是btn这个按钮，因为这个按钮调用了这个函数
         console.log(this) 	  // <button>点击</button>
         console.log(that.uname) // 刘德华，that里面存储的是constructor里面的this
       }
       dance() {
         // 这个dance里面的this指向的是实例对象ldh，因为ldh调用了这个函数
         _that = this
         console.log(this)		// Star{...}，即ldh
       }
     }
     var ldh = new Star('刘德华')
     console.log(that === ldh)		// true
     ldh.dance()
     console.log(_that === ldh)	// true
   </script>
   ```

------

### 2.12 正则表达式

> Regular Expression，用于匹配字符串中字符组合的模式，在JS中正则表达式也是对象。

#### 2.12.1 创建正则表达式

1. 调用RegExp对象的构造函数：`var 变量名 = new RegExp(/表达式/)`
2. 利用字面量创建：`var 变量名 = /表达式/`
3. 注意：正则表达式里面不需要加引号，不管是数字型还是字符串型

#### 2.12.2 测试正则表达式

1. 检测字符串是否符合规则，返回布尔值

2. 语法：`regObj.test（str）`

   ```js
   var rg = /123/
   console.log(rg.test(123))
   ```

3. 正则测试工具：[http://tool.oschina.net/regex](http://tool.oschina.net/regex)

#### 2.12.3 检索正则表达式

1. exec()函数：`regObj.exec(string)`，用于检索字符串中的正则表达式的匹配，如果有匹配的值，返回该匹配值，否则返回null

   ```js
   var str = 'hello'
   var pattern = /o/
   var result = pattern.exec(str)
   console.log(result)
   // 输出结果：['o', index: 4, input: 'hello', groups: undefined]
   ```

#### 2.12.4 元字符

* 在正则表达式中具有特殊意义的专用符号，如：^、$、+ 等

##### 2.12.4.1 边界符

1. `^`：表示匹配行首的文本

2. `$`：表示匹配行尾的文本

3. 如果`^`和`$`在一起，表示必须是精确匹配

   ```js
   // 边界符 ^ $
   var rg = /abc/ // 正则表达式里面不需要加引号 不管是数字型还是字符串型
   // /abc/ 只要包含有abc这个字符串返回的都是true
   console.log(rg.test('abc'))
   console.log(rg.test('abcd'))
   console.log(rg.test('aabcd'))
   console.log('---------------------------')
   var reg = /^abc/
   console.log(reg.test('abc')) // true
   console.log(reg.test('abcd')) // true
   console.log(reg.test('aabcd')) // false
   console.log('---------------------------')
   var reg1 = /^abc$/ // 精确匹配 要求必须是 abc字符串才符合规范
   console.log(reg1.test('abc')) // true
   console.log(reg1.test('abcd')) // false
   console.log(reg1.test('aabcd')) // false
   console.log(reg1.test('abcabc')) // false
   ```

##### 2.12.4.2 字符类

* 定义：表示有一系列字符可供选择，只要匹配其中一个就可以了，所有可供选择的字符都放在方括号内。

1. `[]`：只要包含里面任意一个字符即可

   ```js
   var rg = /[abc]/ // 只要包含有a 或者 包含有b 或者包含有c 都返回为true
   console.log(rg.test('andy'))
   console.log(rg.test('baby'))
   console.log(rg.test('color'))
   console.log(rg.test('red'))
   ```

2. `^[]$`：只能是包含其中任意一个字符的单个字符

   ```js
   var rg1 = /^[abc]$/ // 三选一，只有是a或b或c这三个字母才返回 true
   console.log(rg1.test('aa'))
   console.log(rg1.test('a'))
   console.log(rg1.test('b'))
   console.log(rg1.test('c'))
   console.log(rg1.test('abc'))
   ```

3. `[-]`：表示范围，如`[a-z]`代表包含任意26个字母之一即可

   ```js
   var reg = /^[a-z]$/ // 26个英文字母任何一个字母返回true，- 表示的是a到z的范围
   console.log(reg.test('a'))
   console.log(reg.test('z'))
   console.log(reg.test(1))
   console.log(reg.test('A'))
   ```

4. `^[a-zA-Z0-9_-]$`：26个大小写英文字母+0-9数字+下划线_+短横线-，包含任意其中之一的一个

   ```js
   var reg1 = /^[a-zA-Z0-9_-]$/ // 26个大小写英文字母+0-9数字+下划线_+短横线-，包含任意其中之一的一个，返回true
   console.log(reg1.test('1'))
   console.log(reg1.test('B'))
   console.log(reg1.test(8))
   console.log(reg1.test('-'))
   console.log(reg1.test('_'))
   console.log(reg1.test('!'))
   ```

5. `[^]`：方括号内部取反符^，只要包含其中任意字符，都返回false

   ```js
   var reg2 = /^[^a-zA-Z0-9_-]$/  // 26个大小写英文字母+0-9数字+下划线_+短横线-，包含任意其中之一的一个，返回false
   console.log(reg2.test('a'))
   console.log(reg2.test('B'))
   console.log(reg2.test(8))
   console.log(reg2.test('-'))
   console.log(reg2.test('_'))
   console.log(reg2.test('!'))
   ```

##### 2.12.4.3 量词符

* 定义：设定某个模式出现的次数

1. `*`：可以出现0次或很多次

   ```js
   // * 相当于 >= 0 可以出现0次或者很多次
   var reg = /^a*$/
   console.log(reg.test(''))
   console.log(reg.test('a'))
   console.log(reg.test('aaaa'))
   ```

2. `+`：可以出现1次或者很多次

   ```js
   // + 相当于 >= 1 可以出现1次或者很多次
   var reg1 = /^a+$/
   console.log(reg1.test('')) // false
   console.log(reg1.test('a')) // true
   console.log(reg1.test('aaaa')) // true
   ```

3. `?` ：可以出现0次或1次

   ```js
   //  ?  相当于 1 || 0
   var reg2 = /^a?$/
   console.log(reg2.test('')) // true
   console.log(reg2.test('a')) // true
   console.log(reg2.test('aaaa')) // false
   ```

4. `{n}`：重复n次

   ```js
   // {3} 就是重复3次
   var reg3 = /^a{3}$/
   console.log(reg3.test('')) // false
   console.log(reg3.test('a')) // false
   console.log(reg3.test('aaaa')) // false
   console.log(reg3.test('aaa')) // true
   ```

5. `{n, }`：大于等于n次

   ```js
   //  {3,}  大于等于3
   var reg4 = /^a{3,}$/
   console.log(reg4.test('')) // false
   console.log(reg4.test('a')) // false
   console.log(reg4.test('aaaa')) // true
   console.log(reg4.test('aaa')) // true
   ```

6. `{n,m}`：大于等于n次，并且小于等于m次（注意：n,m之间不要有空格）

   ```js
   //  {3,16}  大于等于3并且小于等于16
   var reg5 = /^a{3,6}$/
   console.log(reg5.test('')) // false
   console.log(reg5.test('a')) // false
   console.log(reg5.test('aaaa')) // true
   console.log(reg5.test('aaa')) // true
   console.log(reg5.test('aaaaaaa')) // false
   ```

7. `var reg = /^[a-zA-Z0-9_-]{6,16}$/`：26个大小写英文字母+0-9数字+下划线_+短横线-，包含任意其中之一，6-16个字符之间

   ```html
   <!--案例：用户名验证-->
   <style>
     span {
       color: #aaa;
       font-size: 14px;
     }
     .right {
       color: green;
     }
     .wrong {
       color: red;
     }
   </style>
   <input type="text" class="uname" /> <span>请输入用户名</span>
   <script>
     // 用户只能输入英文字母、数字、下划线、短横线但是有边界符和[]，包含任意其中之一，6-16个字符之间
     var reg = /^[a-zA-Z0-9_-]{6,16}$/ 
     var uname = document.querySelector('.uname')
     var span = document.querySelector('span')
     uname.onblur = function () {
       if (reg.test(this.value)) {
         console.log('正确的')
         span.className = 'right'
         span.innerHTML = '用户名格式输入正确'
       } else {
         console.log('错误的')
         span.className = 'wrong'
         span.innerHTML = '用户名格式输入不正确'
       }
     }
   </script>
   ```

   

##### 2.12.4.4 或者符

1. 或者符：`|`

##### 2.12.4.5 括号类

1. 小括号`()`：表示优先级，可与模板语法配合：`{{(...)}}`小括号内表示一个分组，提取想要的内容

   ```js
   // 让abc重复三次
   var reg = /^(abc){3}$/
   // 仅让c重复三次
   var reg = /^abc{3}$/
   ```

2. 中括号`[]`：字符集合，匹配方括号中的任意字符

   ```js
   // 匹配a、b、c中的任意一个
   var reg = /^[abc]$/;
   ```

3. 大括号`{}`：量词符，里面表示重复次数

   ```js
   // 匹配连续出现3次的c
   var reg = /^abc{3}$/
   console.log(reg.test('abcabcabc'))	// false
   console.log(reg.test('abccc'))		// true
   ```

##### 2.12.4.6 预定义类

* 定义：某些常见模式的简写方式

1. `\d`：匹配一个数字字符，等价于`[0-9]`

2. `\D`：匹配一个非数字字符，等价于`[^0-9]``

3. `\w`：匹配包括下划线的任何单词字符，等价于`[A-Za-z0-9_]`

4. `\W`：匹配任何非单词字符，等价于`[^A-Za-z0-9_]`

5. `\s`：匹配任何空白字符，包括空格、制表符、换页符等等，等价于`[ \f\n\r\t\v]`

   1）`\f`：匹配一个换页符，等价于`\x0c`和`\cL`

   2）`\n`：匹配一个换行符，等价于`\x0a`和`\cJ`

   3）`\r`：匹配一个回车符，等价于`\x0d`和`\cM`

   4）`\t`：匹配一个制表符，等价于`\x09`和`\cI`

   5）`\v`：匹配一个垂直制表符，等价于`\x0b`和`\cK`

6. `\S`：匹配任何非空白字符，等价于`[^ \f\n\r\t\v]`

##### 2.12.4.7 常用表达式

1. 座机号：

   1）区号（3-4位）：`/^\d{3,4}-\d{7,8}$/`

   2）座机号（7-8位）：`/^\d{3}-\d{8}|\d{4}-\d{7}$/`

2. 表单验证

   1）手机号：`/^1[3|4|5|7|8]\d{9}$/`

   2）QQ号：`/^[1-9]\d{4,}$/`

   3）中文昵称：`/^[\u4e00-\u9fa5]{2,8}$/`

   4）短信验证码：`/^\d{6}$/`

   5）密码：`/^[a-zA-Z0-9_-]{6,16}$/`
   
   ```html
   <!--案例：表单验证-->
   <ul>
     <li>
       <label for="tel">手机号:</label>
       <input type="text" class="inp" id="tel" />
       <span class=""> </span>
     </li>
     <li>
       <label for="">QQ:</label>
       <input type="text" class="inp" id="qq" />
       <span></span>
     </li>
     <li>
       <label for="">昵称:</label>
       <input type="text" class="inp" id="nc" />
       <span></span>
     </li>
     <li>
       <label for="">短信验证码:</label>
       <input type="text" class="inp" id="msg" />
       <span></span>
     </li>
     <li>
       <label for="">登陆密码:</label>
       <input type="text" class="inp" id="pwd" />
       <span> </span>
     </li>
     <li>
       <label for="">确认密码:</label>
       <input type="text" class="inp" id="surepwd" />
       <span></span>
     </li>
   </ul>
   <script>
     window.onload = function () {
       var regtel = /^1[3|4|5|7|8]\d{9}$/ // 手机号码的正则表达式
       var regqq = /^[1-9]\d{4,}$/ // 10000
       var regnc = /^[\u4e00-\u9fa5]{2,8}$/
       var regmsg = /^\d{6}$/
       var regpwd = /^[a-zA-Z0-9_-]{6,16}$/
       var tel = document.querySelector('#tel')
       var qq = document.querySelector('#qq')
       var nc = document.querySelector('#nc')
       var msg = document.querySelector('#msg')
       var pwd = document.querySelector('#pwd')
       var surepwd = document.querySelector('#surepwd')
       
       regexp(tel, regtel) // 手机号码
       regexp(qq, regqq) // qq号码
       regexp(nc, regnc) // 昵称
       regexp(msg, regmsg) // 短信验证
       regexp(pwd, regpwd) // 密码框
       
       // 表单验证的函数
       function regexp(ele, reg) {
         ele.onblur = function () {
           if (reg.test(this.value)) {
             this.nextElementSibling.className = 'success'
             this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
           } else {
             this.nextElementSibling.className = 'error'
             this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 '
           }
         }
       }
       surepwd.onblur = function () {
         if (this.value == pwd.value) {
           this.nextElementSibling.className = 'success'
           this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
         } else {
           this.nextElementSibling.className = 'error'
           this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致'
         }
       }
     }
   </script>
   ```

#### 2.12.5 正则表达式参数

1. 语法：`/表达式/[switch]`，switch又称修饰符，表示按照什么样的模式匹配
2. 全局匹配：g
3. 忽略大小写：i
4. 全局匹配+忽略大小写：gi

#### 2.12.6 正则表达式替换

1. repalce()：`stringObject.replace(regexp/substr,replacement)`

2. 用法：

   ```js
   var str = 'andy和red'
   // 旧方法
   var newStr = str.replace('andy', 'baby')
   // 新方法
   var newStr = str.replace(/andy/, 'baby')
   ```

3. 注意：只能替换第一个满足条件的字符串，后面的不会替换，如果要全部替换令`switch=g`

   ```js
   // 使用星号替换敏感词
   div.innerHTML = text.value.replace(/激情|gay/g, '**');
   ```

#### 2.12.7 正则表达式匹配

1. match()：`stringObject.match(searchvalue/regexp)`

2. 返回：指定的值，而不是字符串的位置

3. 注意：如果使用正则匹配，一定要配合g进行全局匹配

4. 案例：与replace搭配，动态匹配值

   ```js
   function htmlUnEscape(str) {
     return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
       switch (match) {
         case '&lt;':
           return '<'
         case '&gt;':
           return '>'
         case '&quot;':
           return '"'
         case '&amp;':
           return '&'
       }
     })
   }
   ```

   

------

## 第3章 Web API

> API：Application Progamming Interface，应用程序接口，无需关心内部构造，直接调用即可

### 3.0 常用方法集锦

1. `console.dir`：显示元素对象的属性和方法

2. `document.write()`：如果页面文档流加载完毕，再调用这句话会导致页面重绘，例：document.write('<div>123</div>')

3. `window.onload=function(){}`：页面加载完毕再执行JS的函数

4. `window.parent.XXX()`：如果存在页面嵌套（如iframe），子页面可以跳到父页面js中的方法

5. 阻止链接<a>跳转：`href=javascript:void(0)'`或 `href=javascript:;`

6. 立即执行函数：`(function(){})()`、`(function(){}())`

7. flag开关：

   ```html
   <button id="btn">开关灯</button>
   <script>
     var btn = document.getElementById('btn')
     var flag = 0
     btn.onclick = function () {
       if (flag == 0) {
         document.body.style.backgroundColor = 'black'
         flag = 1
       } else {
         document.body.style.backgroundColor = '#fff'
         flag = 0
       }
     }
   </script>
   ```

### 3.1 API基本概念

#### 3.1.1 API简介

1. Web API：浏览器提供的一套操作浏览器功能和页面元素的API，包括DOM、BOM
2. 书写顺序：文档页面从上到下加载，所以先写HTML标签，`<script>`写到标签的最下面

3. 常用命令：`console.dir`：显示元素对象的属性和方法

#### 3.1.2 API重要概念

##### 回调函数

1. 定义：callback，即需要等待时间才去调用函数
2. 定时器：`setTimeout()`、`setInterval()`
3. 注册事件中的函数，如addEventListener('click',fn）中的fn

##### this指向

1. 指向window

   1）全局作用域：`console.log(this)`

   2）普通函数

   ```js
   function fn() {
     console.log(this)
   }
   window.fn()
   ```

    3）计时器

    ```js
    // 注意：定时器里面的函数不能用this代替元素
    window.setTimeout(function () {
      console.log(this)
    }, 1000)
    ```

2. 指向调用它的对象

   1）方法调用

    ```js
    var o = {
      sayHi: function () {
        console.log(this) // this指向的是 o 这个对象
      },
    }
    o.sayHi()
    
    var btn = document.querySelector('button')
	 btn.onclick = function () {
      console.log(this) // this指向的是btn这个按钮对象
    }
    btn.addEventListener('click', function () {
      console.log(this) // this指向的是btn这个按钮对象
    })
    ```
   
   2）构造函数
   
    ```js
    function Fun() {
      console.log(this) // this 指向的是fun 实例对象
    }
    var fun = new Fun()

##### JS执行机制

1. JS是单线程：同一个时间只能做一件事，所有的任务需要排队执行，可能会造成阻塞、渲染不连贯

2. 同步：前一个任务结束后再执行后一个任务，按顺序进行

   同步任务：都在主线程上执行，形成一个执行栈

3. 异步：同时处理多个任务，目前 JS 默认是异步的

   异步任务：通过回调函数实现，放在任务队列（消息队列）中

   1）普通事件：`click`、`resize`

   2）资源加载：`load`、`error`

   3）定时器：`setTimeout`、`setInterval`

   ```js
   // 问题1：结果：1、2、3
   console.log(1)
   setTimeout(function () {
     console.log(3)
   }, 1000)
   console.log(2)
   
   // 问题2：结果：1、2、3
   console.log(1)
   setTimeout(function () {
     console.log(3)
   }, 0)
   console.log(2)
   
   // 问题3：结果：1、2、3、cilck出现位置取决于何时点击
   console.log(1)
   document.onclick = function () {
     console.log('click')
   }
   console.log(2)
   setTimeout(function () {
     console.log(3)
   }, 3000)
   ```

4. 执行机制：先执行执行栈中的同步任务

   1）异步任务（回调函数）放到任务队列中：是先给异步进程处理，判断时间先后顺序，再放入任务队列

   ```js
   // 例：多个异步任务，有点击事件、倒计时等，如果点击先于倒计时，则先执行点击，否则先执行倒计时
   console.log(1)
   document.onclick = function () {
     console.log('click')
   }
   console.log(2)
   setTimeout(function () {
     console.log(3)
   }, 3000)
   ```

   2）一旦执行栈中的所有同步任务执行完毕，系统按次序读取任务队列中的异步任务，被读取的异步任务结束等待状态，进入执行栈执行

   3）事件循环（event loop）：主线程不断重复获得任务、执行任务的机制

##### 立即执行函数

1. 定义：不需要调用，立刻能够自己执行的函数

2. 特点：独立创建了一个作用域，里面所有的变量都是局部变量，不会有命名冲突的情况

3. 语法：第一个括号定义参数，第二个括号既可以传参、也有调用的作用

   1）方法1：`(function(){})()`

   2）方法2：`(function(){}())`
   
   ```js
   ;(function (a, b) {
     console.log(a + b)
     var num = 10
   })(1, 2) // 第二个小括号可以看做是调用函数
   
   ;(function sum(a, b) {
     console.log(a + b)
     var num = 10 // 局部变量
   })(2, 3)
   ```

------

### 3.2 DOM

> 文档对象模型 (Document Object Model) 是HTML和XML文档的编程接口，它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构、样式和内容。

#### 3.2.1 DOM简介

1. 文档：document，一个页面即一个文档
2. 元素：element，页面中所有标签都是元素
3. 节点：node，网页中所有内容都是节点，如标签、属性、文本、注释等
4. 对象：DOM把文档、元素、节点都看做是对象

------

#### 3.2.2 获取元素

1. `document.getElementById（id名）`：根据id获取元素

   1）语法：var element = document.getElementById(id)

   2）参数：id 是大小写敏感的字符串

   3）返回：一个元素对象

   ```html
   // 案例：点击隐藏或显示密码
   <div class="box">
     <label for="">
       <img src="images/close.png" alt="" id="eye" />
     </label>
     <input type="password" name="" id="pwd" />
   </div>
   
   <script>
     // 1. 获取元素
     var eye = document.getElementById('eye')
     var pwd = document.getElementById('pwd')
     // 2. 注册事件
     var flag = 0
     eye.onclick = function () {
       // 点击一次之后， flag 一定要变化
       if (flag == 0) {
         pwd.type = 'text'
         eye.src = 'images/open.png'
         flag = 1 // 赋值操作
       } else {
         pwd.type = 'password'
         eye.src = 'images/close.png'
         flag = 0
       }
     }
   </script>
   ```

2. `document.getElementsByTagName（标签名）`：根据html标签获取元素

   1）语法：var element = document.getElementsByTagName(标签名)

   2）返回：带有指定标签名对象的集合，以伪数组的形式存储（HTMLCollection(n)）

   3）获取父元素中的子元素

   * 方法1：element.getElementsByTagName('标签名')，父元素必须是指定的单个元素

     ```js
     var ol = document.getElementsByTagName('ol')
     console.log(ol[0].getElementsByTagName('li'))
     ```

   * 方法2：给父元素指定id，配合getElementById使用

     ```js
     var ol = document.getElementById('ol')
     console.log(ol.getElementsByTagName('li'))
     ```

3. `document.getElementsByClassName（类名）`：根据class获取元素

   1）语法：var element = document.getElementsByClassName(类名)

   2）返回：带有指定类名对象的集合，以伪数组的形式存储

4. `document.querySelector（选择器名）`：根据选择器名获取元素（仅返回第一个元素）

   1）语法：var element = document.querySelector(选择器名)，选择器要加符号（eg: .box，#nav)

   2）返回：根据指定选择器返回第一个元素对象

   3）注意：如果直接写标签选择器（如：li），前面不用加符号，也是选出第一个标签元素

5. `document.querySelectorAll（选择器名）`：根据选择器名获取元素（返回全部元素）

   1）返回：指定选择器的所有元素对象集合（NodeList(n)）

   2）可以配合使用：选中父元素中所有子元素的集合

   ```js
   document.querySelector('father').querySelectorAll('children')
   ```

   ```html
   // 案例：循环精灵图
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
   </ul>
   
   <script>
       var lis = document.querySelectorAll('li')
       for (var i = 0; i < lis.length; i++) {
         // 让索引号乘以44，就是每个li的背景y坐标，x坐标都为0
         var index = i * 44
         lis[i].style.backgroundPosition = '0 -' + index + 'px'
       }
   </script>
   ```

6. 特殊元素：

   1）body元素：`document.body`

   2）html元素：`document.documentElement`

------

#### 3.2.3 事件

##### 3.2.3.1 事件介绍

###### 事件三要素

1. 事件源：事件被触发的对象，如按钮
2. 事件类型：如何触发事件，如鼠标点击/经过
3. 事件处理程序：通过一个函数赋值的方式完成

###### 事件执行步骤

1. 获取事件源

2. 绑定事件（注册事件）

3. 添加事件处理程序（函数赋值）

```js
<button id="btn">唐伯虎</button>

var btn = document.getElementById('btn')
btn.onclick = function () {
  alert('点秋香')
}
```

###### DOM事件流：捕获与冒泡

1. 定义：事件流描述的是从页面中接收事件的顺序，事件发生时会在元素节点之间按照特定的顺序传播，传播过程称为DOM事件流

2. 三阶段：

   1）捕获阶段：由网景提出，由DOM最顶层节点开始，逐级向下传播到最具体的元素接收的过程

   * 如果 addEventListener 第三个参数是 `true`，那么则处于捕获阶段
   * 从外往里执行：document -> html -> body -> father -> son

   ```html
   <div class="father">
     <div class="son">son盒子</div>
   </div>
   <script>
     // 捕获阶段：addEventListener 第三个参数是 true
     var son = document.querySelector('.son')
     son.addEventListener(
       'click',
       function () {
         alert('son')
       },
       true
     )
     var father = document.querySelector('.father')
     father.addEventListener(
       'click',
       function () {
         alert('father')
       },
       true
     )
   </script>  
   ```

   2）目标阶段

   3）冒泡阶段：由IE提出，事件开始时由最具体的元素接收，逐级向上传播到DOM最顶层节点的过程

   * onclick、attachEvent只能得到冒泡阶段
   * 如果 addEventListener 第三个参数是 `false` 或省略，那么则处于冒泡阶段
   * 从里往外执行：son -> father ->body -> html -> document

   ```html
   <div class="father">
     <div class="son">son盒子</div>
   </div>
   <script>
     // 冒泡阶段：addEventListener 第三个参数是 false 或 省略
     var son = document.querySelector('.son')
     son.addEventListener(
       'click',
       function () {
         alert('son')
       },
       false
     )
     var father = document.querySelector('.father')
     father.addEventListener(
       'click',
       function () {
         alert('father')
       },
       false
     )
     document.addEventListener('click', function () {
       alert('document')
     })
   </script>  
   ```

   

3. JS代码中只能执行捕获、冒泡其中之一的阶段

4. 有些事件没有冒泡：onblur、onfocus、onmouseenter、onmouseleave

------

##### 3.2.3.2 事件对象

###### 基本概念

1. event 就是一个事件对象，写到侦听函数的小括号里面，当形参来看

   ```js
   var div = document.querySelector('div')
   div.onclick = function (event) {
     console.log(window.event)
     console.log(event)
   }
   ```

2. 事件对象只有有了事件才会存在，是系统自动创建的，不需要传递参数

3. 事件对象是事件的一系列相关数据的集合，如鼠标点击包含了鼠标相关信息（坐标），键盘事件包含键盘事件信息（按键）

4. 事件对象可以自己命名，如 event、evt、e

5. 事件对象也有兼容性问题：ie678 通过 window.event 兼容性的写法

   ```js
   var div = document.querySelector('div')
   div.onclick = function (e) {
     e = e || window.event;
     console.log(e)
   }
   ```

###### 属性和方法

1. `e.target`：返回触发事件的对象（标准）

   1）e.target：返回的是触发事件的对象（元素），点击了哪个元素，就返回哪个元素

   2）this：返回的是绑定事件的对象（元素），哪个元素绑定了这个点击事件，那么就返回谁

   3）e.currentTarget：和this效果相同，但是不兼容IE6-8，不如直接用this

   ```js
   <ul>
     <li>abc</li>
     <li>abc</li>
     <li>abc</li>
   </ul>
   <script>
     // e.target：返回的是触发事件的对象（元素）：点击了哪个元素，就返回哪个元素
     // this：返回的是绑定事件的对象（元素）：哪个元素绑定了这个点击事件，那么就返回谁
     var ul = document.querySelector('ul')
     ul.addEventListener('click', function (e) {
       console.log(this)				// ul绑定了点击事件，返回ul
       console.log(e.currentTarget)	// ul绑定了点击事件，返回ul
       console.log(e.target)			// 点击谁，返回谁
     })
   </script>
   ```

2. `e.srcElement`：返回触发事件的对象（非标准，IE6-8使用）

   ```html
   <div>123</div>
   <script>
     div.onclick = function (e) {
       e = e || window.event
       var target = e.target || e.srcElement
       console.log(target)
     }
   </script>
   ```

3. `e.type`：返回事件类型，如：click、mouseover，前面不带on

4. 阻止冒泡：

   1）`e.stopPropagation()`：标准写法

   2）`e.canceBubble=true`：非标准，IE6-8使用

   ```html
   <div class="father">
     <div class="son">son儿子</div>
   </div>
   <script>
     // 常见事件对象的属性和方法
     // 阻止冒泡  dom 推荐的标准 stopPropagation()
     var son = document.querySelector('.son')
     son.addEventListener(
       'click',
       function (e) {
         alert('son')
         e.stopPropagation() // stop 停止 Propagation 传播
         // e.cancelBubble = true // 非标准 cancel 取消 bubble 泡泡
       },
       false
     )
     var father = document.querySelector('.father')
     father.addEventListener(
       'click',
       function () {
         alert('father')
       },
       false
     )
     document.addEventListener('click', function () {
       alert('document')
     })
   </script>
   ```

   

5. 阻止默认事件：如不让链接跳转等

   1）`e.preventDefault()`：标准方法

   ```js
   var a = document.querySelector('a')
   a.onclick = function (e) {
     // 普通浏览器：e.preventDefault()方法
     e.preventDefault()
   }
   ```

   2）`e.returnValue`：非标准方法，IE6-8使用

   ```js
   var a = document.querySelector('a')
   a.onclick = function (e) {
     // 低版本浏览器 ie678：returnValue 属性
     e.returnValue
   }
   ```

   3）`return false`：也能阻止默认行为，没有兼容性问题，但return后面的代码不执行，且只限于传统的注册方式

   ```js
   var a = document.querySelector('a')
   a.onclick = function (e) {
     return false
     alert(11) // 不会执行此行代码了
   }
   ```

6. `e.persisted`：返回true代表页面从是缓存中取出的，返回false代表不是从缓存取出的，常与pageshow事件搭配使用

   ```js
   window.addEventListener('pageshow', function (e) {
     // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
     if (e.persisted) {
       setRemUnit()
     }
   })
   ```

------

##### 3.2.3.3 注册事件

1. 传统方式：

   1）以on开头的事件，如：onclick

   2）特点：唯一性，同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

   ```js
   var btns = document.querySelectorAll('button')
   // 1. 传统方式注册事件
   btns[0].onclick = function () {
     alert('hi')
   }
   ```

2. `addEventListener()`：方法监听注册

   1）语法：`eventTarget.addEventListener(type,listener,[,useCapture])`

   2）参数：

   * type：事件类型字符串，必须加引号，如：click, mouseover，前面无需加on
   * listener：事件处理函数，事件发生时，会调用该监听函数
   * userCapture：DOM事件流方向，可选，布尔值，默认false（冒泡阶段）

   ```js
   var btns = document.querySelectorAll('button')
   // 1. 传统方式注册事件
   btns[1].addEventListener('click', function () {
     alert(22)
   })
   ```

3. `attachEvent()`：方法监听注册，IE9之前的方法

   1）语法：`attachEvent(eventNameWithOn, callback)`

   2）参数：

   * eventNameWithOn：事件类型字符串，必须加引号，如：onclick, onmouseover，前面需要加on
   * callback：事件处理函数，目标出发事件时调用回调函数

4. 兼容性处理函数：

   ```js
   function addEventListener(element, eventName, fn) {
     // 判断当前浏览器是否支持 addEventListener 方法
     if (element.addEventListener) {
       element.addEventListener(eventName, fn) // 第三个参数默认是false
     } else if (element.attachEvent) {
       element.attachEvent('on' + eventName, fn)
     } else {
       // 相当于 element.onclick = fn;
       element['on' + eventName] = fn
     }
   }
   ```

------

##### 3.2.3.4 删除事件

1. `eventTarget.onclick = null`：传统方式，需要写到函数的末尾

   ```js
   divs[0].onclick = function () {
     alert(11)
     // 传统方式删除事件
     divs[0].onclick = null
   }
   ```

2. `removeEventListener()`：方法监听注册

   1）语法：`eventTarget.removeEventListener(type,listener[,useCapture])`

   2）需要移除的事件函数不能是匿名函数，否则无法移除，要把removeEventListener写到需要删除的函数末尾

   ```js
   divs[1].addEventListener('click', fn)
   function fn() {
     alert(22)
     divs[1].removeEventListener('click', fn)
   }
   ```

3. `deachEvent()`：方法监听注册，IE9之前的方法

   1）语法：`deachEvent(eventNameWithOn,callback)`

   2）同样写到需要删除函数事件的末尾

------

##### 3.2.3.5 事件委托

1. 定义：不给每个子节点单独设置事件监听器，而将其设置在父节点上，利用冒泡原理影响设置每个子节点
2. 作用：只操作一次DOM，提高程序性能

```html
<ul>
  <li>知否知否，点我应有弹框在手！</li>
  <li>知否知否，点我应有弹框在手！</li>
  <li>知否知否，点我应有弹框在手！</li>
</ul>
<script>
  // 事件委托的核心原理：给父节点添加侦听器，利用事件冒泡影响每一个子节点
  var ul = document.querySelector('ul')
  ul.addEventListener('click', function (e) {
    alert('知否知否，点我应有弹框在手！')
    for (var i = 0; i < ul.children.length; i++) {
      ul.children[i].style.backgroundColor = null
    }
    e.target.style.backgroundColor = 'pink'	 // e.target 可以得到点击的对象
  })
</script>
```

------

##### 3.2.3.6 鼠标事件

###### 事件动作

1. `click`：点击左键触发

2. `dblclick`：双击左键触发

3. 鼠标经过触发：
   * `mouseover`：经过自身盒子触发，经过子盒子还会触发
   * `mouseenter`：仅经过自身盒子触发，因为它不冒泡

   ```html
   <style>
     .father {
       width: 300px;
       height: 300px;
       background-color: pink;
       margin: 100px auto;
     }
     .son {
       width: 200px;
       height: 200px;
       background-color: purple;
     }
   </style>
   
   <div class="father">
     <div class="son"></div>
   </div>
   
   <script>
     var father = document.querySelector('.father')
     var son = document.querySelector('.son')
     // mouseover：经过自身盒子触发，经过子盒子还会触发
     father.addEventListener('mouseover', function () {
       console.log('mouseover触发')
     })
     // mouseenter：仅经过自身盒子触发，因为它不冒泡
     father.addEventListener('mouseenter', function () {
       console.log('mouseenter触发')
     })
   </script>
   ```
   
4. 鼠标离开触发：

   * `mouseout`：经过自身盒子触发，经过子盒子还会触发
   * `mouseleave`：仅经过自身盒子触发，因为它不冒泡

5. `focus`：获得鼠标焦点触发

6. `blur`：失去鼠标焦点触发

7. `mousemove`：鼠标移动触发

8. `mouseup`：鼠标弹起触发

9. `mousedown`：鼠标按下触发

10. `contextmenu`：右键菜单

    ```js
    // 例：禁用右键菜单
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault()
    })
    ```

11. `selectstart`：选中文字

    ```js
    // 例：禁止选中文字
    document.addEventListener('selectstart', function (e) {
      e.preventDefault()
    })
    ```

12. 双击禁止选中文字

    ```js
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    ```

###### 事件对象：MouseEvent

1. `e.clientX`：鼠标相对浏览器可视区的X坐标
2. `e.clientY`：鼠标相对浏览器可视区的Y坐标
3. `e.pageX`：鼠标相对于文档页面的X坐标（IE9+支持）
4. `e.pageY`：鼠标相对于文档页面的Y坐标（IE9+支持）
5. `e.screenX`：鼠标相对于电脑屏幕的X坐标
6. `e.screenY`：鼠标相对于电脑屏幕的Y坐标

```js
document.addEventListener('click', function (e) {
  // 1. client 鼠标在可视区的x和y坐标
  console.log(e.clientX)
  console.log(e.clientY)
  console.log('---------------------')
  // 2. page 鼠标在页面文档的x和y坐标
  console.log(e.pageX)
  console.log(e.pageY)
  console.log('---------------------')
  // 3. screen 鼠标在电脑屏幕的x和y坐标
  console.log(e.screenX)
  console.log(e.screenY)
})
```

```html
<!--案例：跟随鼠标移动的天使-->
<style>
  img {
    position: absolute;
    top: 2px;
  }
</style>
<img src="images/angel.gif" alt="" />
<script>
  var pic = document.querySelector('img')
  document.addEventListener('mousemove', function (e) {
    // 每次鼠标移动都会获得最新的鼠标坐标，把这个x和y坐标做为图片的top和left值就可以移动图片
    var x = e.pageX
    var y = e.pageY
    console.log('x坐标是' + x, 'y坐标是' + y)
    // 不要忘记给left和top添加px单位
    pic.style.left = x - 40 + 'px'
    pic.style.top = y - 40 + 'px'
  })
</script>
```

###### 手动调用事件

1. `element.click()`：点击事件

------

##### 3.2.3.7 键盘事件

###### 事件动作

* 执行顺序：keydown --> keypress --> keyup

1. `keyup`：某个按键松开时触发，注意：在文本框中的特点：事件触发时，文字还没落入文本框，所以最好用keyup

   ```js
   // 按回车触发
   input.onkeyup = function (e) {
     if (e.keyCode === 13) {
       // 执行触发后的函数
     }
   }
   ```

2. `keydown`：某个按键按下时触发

3. `keypress`：某个按键按下时触发，但不能识别功能键，如ctrl、shift、箭头等

   ```html
   <!--案例：快递单号查询放大效果-->
   <div class="search">
     <div class="con">123</div>
     <input type="text" placeholder="请输入您的快递单号" class="jd" />
   </div>
   <script>
     // 快递单号输入内容时，上面的大号字体盒子（con）显示（里面的字号更大）
     // 表单检测用户输入：给表单添加键盘事件
     // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
     // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
     var con = document.querySelector('.con')
     var jd_input = document.querySelector('.jd')
     jd_input.addEventListener('keyup', function () {
       if (this.value == '') {
         con.style.display = 'none'
       } else {
         con.style.display = 'block'
         con.innerText = this.value
       }
     })
     // 当失去焦点，就隐藏这个con盒子
     jd_input.addEventListener('blur', function () {
       con.style.display = 'none'
     })
     // 当获得焦点，就显示这个con盒子
     jd_input.addEventListener('focus', function () {
       if (this.value !== '') {
         con.style.display = 'block'
       }
     })
   </script>
   ```

###### 事件对象：KeyboardEvent

1. `e.keyCode`：返回按键的ASCII值，其中keyup、keydown不区分大小写，keypress区分大小写

   ```js
   // 案例：按下s键，键盘定位到搜索框中
   <input type="text" />
   <script>
     // 核心思路：检测用户是否按下了s键，如果按下s键，就把光标定位到搜索框里面
     // 使用键盘事件对象里面的keyCode判断用户按下的是否是s键
     // 搜索框获得焦点：使用js里面的focus()方法
     var search = document.querySelector('input')
     document.addEventListener('keyup', function (e) {
       // console.log(e.keyCode);
       if (e.keyCode === 83) {
         search.focus()
       }
     })
   </script>
   ```

##### 3.2.3.8 表单事件

1. checkbox复选框：`change`：状态变化

2. input输入框：

   1）`select()`：文本框里面的文字处于选定状态

   ```js
   this.innerHTML = '<input type="text" />'
   var input = this.children[0]
   input.value = str
   input.select() // 文本框里面的文字处于选定状态
   ```

   2）`onfocus`、`onblur`：获得、失去焦点

   ```js
   <!--案例：显示隐藏文本框内容-->
   <input type="text" value="手机" />
   <script>
     // 1.获取元素
     var text = document.querySelector('input')
     // 2.注册事件 获得焦点事件 onfocus
     text.onfocus = function () {
       if (this.value === '手机') {
         this.value = ''
       }
       // 获得焦点需要把文本框里面的文字颜色变黑
       this.style.color = '#333'
     }
     // 3. 注册事件：失去焦点事件 onblur
     text.onblur = function () {
       if (this.value === '') {
         this.value = '手机'
       }
       // 失去焦点需要把文本框里面的文字颜色变浅色
       this.style.color = '#999'
     }
   </script>
   ```

3. form表单域：`reset()`：重置，清空内容

   ```js
   // JS对象转DOM对象
   $('#formAddCmt')[0].reset()
   ```

4. 文字选择框：

   1）结构：`<input type="file" accept="..." />`，accept代表可以选择的文件类型，如image/png, image/jpeg

   ```html
   <input type="file" id="file" accept="image/png,image/jpeg" />
   ```

   2）`change`：绑定change事件，意味着文件选择框被激活

   3）e.target.files：文件列表

   4）e.target.files[0]：单个文件

   5）URL.createObjectURL(file)：文件转化为路径

   ```js
   $('#file').on('change', function (e) {
       // 获取用户选择的文件
       var filelist = e.target.files
       if (filelist.length === 0) {
           return layer.msg('请选择照片！')
       }
       // 1. 拿到用户选择的文件
       var file = e.target.files[0]
       // 2. 将文件，转化为路径
       var imgURL = URL.createObjectURL(file)
   }
   ```

------

#### 3.2.4 元素操作

##### 3.2.4.1 元素内容

1. `element.innerText`：从起始位置到终止位置的内容，去除html标签、空格、换行

   1）非标准，IE推出的

   2）不识别html标签，如果替换内容有标签会按原型打印出来

   ```js
   // innerText不识别html标签：非标准，去除空格和换行
   var div = document.querySelector('div')
   div.innerText = '<strong>今天是：</strong> 2019'
   ```

2. `element.innerHTML`：从起始位置到终止位置的内容，保留html标签、空格、换行

   1）W3C标准，推荐使用

   2）识别html标签，可用html标签给文字添加效果

   ```js
   // innerHTML：识别html标签，W3C标准，保留空格和换行
   var div = document.querySelector('div')
   div.innerHTML = '<strong>今天是：</strong> 2019'
   ```
   
   3）创建新元素
   
   * 拼接法：大量创建标签效率低下，因为字符串拼接占用内存太多
   
     ```js
     var inner = document.querySelector('.inner')
     for (var i = 0; i <= 100; i++) {
       inner.innerHTML += '<a href="#">百度</a>'
     }
     ```
   
   * 数组法：创建空数组，用push方法添加，可以提升创建效率
   
     ```js
     var inner = document.querySelector('.inner')
     var arr = []
     for (var i = 0; i <= 100; i++) {
       arr.push('<a href="#">百度</a>')
     }
     inner.innerHTML = arr.join('')
     ```

##### 3.2.4.2 元素属性

###### 修改表单属性

1. 表单常用属性：type、value、checked、selected、disabled

2. 内容：`value`，无法用innerHTML获取/修改内容，要通过value修改，例：input.value = XXX

3. 禁用：`disabled`，例btn.disabled = true，点击按钮后无法再次点击，如果是通过btn.onclick定义的事件，可以用this.disabled = ture

   ```html
   <button>按钮</button>
   <input type="text" value="输入内容" />
   <script>
     // 1. 获取元素
     var btn = document.querySelector('button')
     var input = document.querySelector('input')
     // 2. 注册事件
     btn.onclick = function () {
       // input.innerHTML = '点击了' // 不能用这种方法修改，只能修改普通盒子div中的内容
       // 表单里面的值，文字内容是通过 value 来修改的
       input.value = '被点击了'
       // 如果想要某个表单被禁用，不能再点击：disabled
       this.disabled = true
     }
   </script>
   ```

###### 设置元素属性

1. `element.属性`：通过函数/流程控制，直接对元素属性进行设置

   ```html
   <button id="ldh">刘德华</button>
   <button id="zxy">张学友</button> <br />
   <img src="images/ldh.jpg" alt="" title="刘德华" />
   
   <script>
     // 修改元素属性：src
     // 1. 获取元素
     var ldh = document.getElementById('ldh')
     var zxy = document.getElementById('zxy')
     var img = document.querySelector('img')
     // 2. 注册事件  处理程序
     zxy.onclick = function () {
       img.src = 'images/zxy.jpg'
       img.title = '张学友思密达'
     }
     ldh.onclick = function () {
       img.src = 'images/ldh.jpg'
       img.title = '刘德华'
     }
   </script>
   ```

2. `element.setAttribute（属性名，属性值）`：可以自定义元素属性，目的：保存并使用数据，有些数据可以直接保存在页面中，无需从数据库中调用

   ```html
   <div id="demo" index="1" class="nav"></div>
   <script>
     var div = document.querySelector('div')
     div.setAttribute('index', 2)
     div.setAttribute('class', 'footer') // class特殊：这里面写的就是class，不是className
   </script>
   ```

3. H5自定义属性：

   1）格式：`data-属性名=属性值`，例：`<div data-index="1" >`

   2）目的：消除歧义，便于区分内置属性和自定义属性

###### 获取元素属性

1. `element.属性`：只能获取元素内置属性

2. `element.getAttribute（属性名）`：可以获取自定义属性

3. `element.dataset.属性名`、`element.dataset[属性名]`：H5自定义属性

   1）dataset：是一个集合（DOMStringMap），里面存放了所有以data开头的自定义属性，获取时属性名前无需再加'data-'

   2）自定义属性里面有多个" - "链接的单词，获取的时候采取驼峰命名法，例：属性: data-list-name，获取: listName

   3）例：div.dataset.listName、div.dataset['listName']

   ```html
   <div getTime="20" data-index="2" data-list-name="andy"></div>
   <script>
     var div = document.querySelector('div')
     div.setAttribute('data-time', 20)
     // 只能用getAttuibute获取自定义属性
     console.log(div.getAttribute('data-index'))		// 2
     console.log(div.getAttribute('data-list-name'))	// andy
   
     // dataset 是一个集合，里面存放了所有以data开头的自定义属性
     console.log(div.dataset)			// DOMStringMap
     console.log(div.dataset.index)	// 2
     console.log(div.dataset['index'])	// 2
     
     // 如果自定义属性里面有多个-链接的单词，获取的时候采取驼峰命名法
     console.log(div.dataset.listName)		// andy
     console.log(div.dataset['listName'])	// andy
   </script>
   ```

   

###### 移除元素属性

1. `element.removeAttibute（属性名）`

##### 3.2.4.3 元素样式

* 注意：样式属性需要采用驼峰命名法，background-color需要写成backgroundColor

1. `element.style.样式属性`：行内样式操作，产生的是行内样式，权重较高

   ```js
   var div = document.querySelector('div')
   div.onclick = function () {
     // div.style里面的属性：采取驼峰命名法
     this.style.backgroundColor = 'purple'
     this.style.width = '250px'
   }
   ```

2. `element.className = '新类名'`：类名样式操作

   1）适用于需要修改样式较多的情况，先在css中写一个新类名，然后达到修改元素类名的效果

   2）会直接更改元素的类名，覆盖原先的类名

   3）如果希望保留原类名，可以在原类名后加空格，再写新类名

   ```js
   var test = document.querySelector('div')
   test.onclick = function () {
     // this.className = 'change'
     // 如果想要保留原先的类名，可以用多类名选择器
     this.className = 'first change'
   }
   ```

3. `element.classList`：获取元素类名，返回DOMTokenList

   1）增加类名：element.classList.add(类名)，不会覆盖原有类，类名不用加“.”

   2）删除类名：element.classList.remove(类名)

   3）切换类名：element.classList.toggle(类名)，若类名存在则删除，若类名不存在则添加上
   
   ```html
   <div class="one two"></div>
   <button>开关灯</button>
   <script>
     // classList 返回元素的类名
     var div = document.querySelector('div')
     // 1. 添加类名  是在后面追加类名不会覆盖以前的类名 注意前面不需要加.
     div.classList.add('three')
     // 2. 删除类名
     div.classList.remove('one')
     // 3. 切换类
     var btn = document.querySelector('button')
     btn.addEventListener('click', function () {
       document.body.classList.toggle('bg')
     })
   </script>
   ```

##### 3.2.4.4 创建元素

1. `document.write()`：如果页面文档流加载完毕，再调用这句话会导致页面重绘，例：document.write('<div>123</div>')
2. `window.onload=function(){}`：页面加载完毕再执行JS的函数

##### 3.2.4.5 常用方法

###### 排他思想

* 多个按钮点击其中一个时，其余按钮恢复原样（首先先排除其他人，然后才设置自己的样式）

```html
<button>按钮1</button>
<button>按钮2</button>
<button>按钮3</button>
<button>按钮4</button>
<button>按钮5</button>
<script>
  // 获取所有按钮元素
  var btns = document.getElementsByTagName('button')
  // btns得到的是伪数组，里面的每一个元素 btns[i]
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
      // 1. 先把所有的按钮背景颜色去掉：干掉所有人
      for (var i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = ''
      }
      // 2. 然后才让当前的元素背景颜色为pink：留下我自己
      this.style.backgroundColor = 'pink'
    }
  }
</script>
```

###### 换肤效果

* 更改图片的src路径

```html
<ul class="baidu">
  <li><img src="images/1.jpg" /></li>
  <li><img src="images/2.jpg" /></li>
  <li><img src="images/3.jpg" /></li>
  <li><img src="images/4.jpg" /></li>
</ul>

<script>
  // 1. 获取元素
  var imgs = document.querySelector('.baidu').querySelectorAll('img')
  // 2. 循环注册事件
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
      // this.src 就是点击图片的路径，把这个路径给body就可以了
      document.body.style.backgroundImage = 'url(' + this.src + ')'
    }
  }
</script>
```

###### 表格操作

1. 表格变色

```js
<style>
  .bg {
    background-color: pink;
  }
</style>

// 1.获取元素：获取的是 tbody 里面所有的行
var trs = document.querySelector('tbody').querySelectorAll('tr')
// 2. 利用循环绑定注册事件
for (var i = 0; i < trs.length; i++) {
  // 3. 鼠标经过事件 onmouseover
  trs[i].onmouseover = function () {
    this.className = 'bg'
  }
  // 4. 鼠标离开事件 onmouseout
  trs[i].onmouseout = function () {
    this.className = ''
  }
}
```

2. 表格选项框全选反选

```js
// 1. 全选和取消全选做法：让下面所有复选框的checked属性（选中状态）跟随，全选按钮即可
// 获取元素
var j_cbAll = document.getElementById('j_cbAll') // 全选按钮
var j_tbs = document.getElementById('j_tb').getElementsByTagName('input') // 下面所有的复选框
// 注册事件
j_cbAll.onclick = function () {
  // this.checked 它可以得到当前复选框的选中状态如果是true 就是选中，如果是false 就是未选中
  console.log(this.checked)
  for (var i = 0; i < j_tbs.length; i++) {
    j_tbs[i].checked = this.checked
  }
}
// 2. 下面复选框需要全部选中，上面全选才能选中做法：给下面所有复选框绑定点击事件，每次点击，都要循环查看下面所有的复选框是否有没选中的，如果有一个没选中的，上面全选就不选中。
for (var i = 0; i < j_tbs.length; i++) {
  j_tbs[i].onclick = function () {
    // flag 控制全选按钮是否选中
    var flag = true
    // 每次点击下面的复选框都要循环检查者4个小按钮是否全被选中
    for (var i = 0; i < j_tbs.length; i++) {
      if (!j_tbs[i].checked) {
        flag = false
        break // 退出for循环 这样可以提高执行效率，因为只要有一个没有选中，剩下的就无需循环判断了
      }
    }
    j_cbAll.checked = flag
  }
}
```

###### Tab栏切换内容

1. tab栏选中效果：排他算法

2. 底部内容区域跟随变化：通过对应tab栏的index编号进行索引，设置display属性（也用到了排他算法）

```html
<style>
  .current {
    background-color: red;
  }
</style>

<div class="tab">
  <div class="tab_list">
    <ul>
      <li class="current">商品介绍</li>
      <li>规格与包装</li>
      <li>售后保障</li>
      <li>商品评价（50000）</li>
      <li>手机社区</li>
    </ul>
  </div>
  <div class="tab_con">
    <div class="item" style="display: block">商品介绍模块内容</div>
    <div class="item">规格与包装模块内容</div>
    <div class="item">售后保障模块内容</div>
    <div class="item">商品评价（50000）模块内容</div>
    <div class="item">手机社区模块内容</div>
  </div>
</div>
<script>
  // 获取元素
  var tab_list = document.querySelector('.tab_list')
  var lis = tab_list.querySelectorAll('li')
  var items = document.querySelectorAll('.item')
  // for循环绑定点击事件
  for (var i = 0; i < lis.length; i++) {
    // 开始给5个小li，设置索引号（用于下面显示内容模块）
    lis[i].setAttribute('index', i)
    lis[i].onclick = function () {
      // 1. 上面的模块选项卡：点击某一个，当前这一个底色会是红色，其余不变（排他思想）
      // 干掉所有人：其余的li清除 class 这个类
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
      }
      // 留下我自己
      this.className = 'current'
        
      // 2. 下面的显示内容模块
      var index = this.getAttribute('index')
      // 干掉所有人 让其余的item 这些div 隐藏
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none'
      }
      // 留下我自己 让对应的item 显示出来
      items[index].style.display = 'block'
    }
  }
</script>
```

------

#### 3.2.5 Node操作

1. 特点：相对DOM获取元素而言，节点操作利用父子兄节点关系获取元素，逻辑性强，但是兼容性差

2. 基本属性：nodeType（节点类型）、nodeName（节点名称）、nodeValue（节点值）

3. 节点类型：`nodeType`

   1）Element：元素节点

   2）Attribute：属性节点

   3）Text：文本节点

   4）CDATA Section

   5）Entity Reference

   6）Entity

   7）Processing Instrucion

   8）Comment

   9）Document

   10）Document Type

   11）Document Fragment

   12）Notation

##### 3.2.5.1 父节点

1. 语法：`node.parentNode`

2. 就近原则：得到的是离元素最近的父级节点，如果找不到父节点就返回为 null

   ```html
   <div class="demo">
     <div class="box">
       <span class="erweima">×</span>
     </div>
   </div>
   <script>
     // 父节点 parentNode
     // 得到的是离元素最近的父级节点(亲爸爸) 如果找不到父节点就返回为 null
     var erweima = document.querySelector('.erweima')
     console.log(erweima.parentNode)
     // html元素的父节点是 #document
     var demo = document.documentElement
     console.log(demo.parentNode)
   </script>
   ```

3. 如果存在页面嵌套（如iframe），子页面可以跳到父页面js中的方法，如：`window.parent.XXX()`

##### 3.2.5.2 子节点

1. 语法：

   1）`parentNode.childNodes`：指定节点的子节点的集合（包含元素节点、文本节点等），形式为 NodeList(x)

   ```js
   <ul>
     <li>我是li</li>
     <li>我是li</li>
   </ul>
   <script>
     var ul = document.querySelector('ul')
     var lis = ul.querySelectorAll('li')
     // childNodes：所有的子节点，包含元素节点、文本节点等
     console.log(ul.childNodes)				// NodeList(9)
     console.log(ul.childNodes[0].nodeType)	// 3（text：文本节点，类型为3）
     console.log(ul.childNodes[1].nodeType)	// 1（li：元素节点，类型为1）
   </script>
   ```

   2）`parentNode.children`：返回所有的子元素节点（仅有元素节点），形式为HTMLCollection(x)，指定子元素节点：parentNode.children[i]

   ```js
   <ul>
     <li>我是li</li>
     <li>我是li</li>
   </ul>
   <script>
     var ul = document.querySelector('ul')
     var lis = ul.querySelectorAll('li')
     // children：获取所有的子元素节点，实际开发常用
     console.log(ul.children)	// HTMLCollection(4)
   </script>
   ```

2. 获取第一个子节点：

   1）`parent.firstChild`：第一个子节点（所有类型）

   2）`parent.firstElementChild`：第一个元素子节点，IE9上才支持

   3）`parentNode.children[0]`：第一个元素子节点，兼容性较好

3. 获取最后一个子节点:

   1）`parent.lastChild`：最后一个子节点（所有类型）

   2）`parent.lastElementChild`：最后一个元素子节点，IE9上才支持

   3）`parentNode.children[parentNode.children.length-1]`：最后一个元素子节点，兼容性较好
   
   ```js
   <ol>
     <li>我是li1</li>
     <li>我是li2</li>
     <li>我是li3</li>
   </ol>
   <script>
     var ol = document.querySelector('ol')
     // 1. firstChild 第一个子节点：不管是文本节点还是元素节点
     console.log(ol.firstChild)
     console.log(ol.lastChild)
     // 2. firstElementChild 返回第一个子元素节点（ie9支持）
     console.log(ol.firstElementChild)
     console.log(ol.lastElementChild)
     // 3. 实际开发写法：既没有兼容性问题又返回第一个子元素
     console.log(ol.children[0])
     console.log(ol.children[ol.children.length - 1])
   </script>
   ```

4. 案例：下拉菜单

   ```js
   <ul class="nav">
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
         <li>
           <a href="">评论</a>
         </li>
       </ul>
     </li>
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
         <li>
           <a href="">@我</a>
         </li>
       </ul>
     </li>
   </ul>
   <script>
     // 获取元素
     var nav = document.querySelector('.nav')
     var lis = nav.children // 得到里面的小li
     // 循环注册事件
     for (var i = 0; i < lis.length; i++) {
       lis[i].onmouseover = function () {
         this.children[1].style.display = 'block'
       }
       lis[i].onmouseout = function () {
         this.children[1].style.display = 'none'
       }
     }
   </script>
   ```

##### 3.2.5.3 兄弟节点

1. 下一个兄弟节点

   1）`node.nextSibling`：获取下一个兄弟节点（所有类型）

   2）`node.nextElementSibling`：获取下一个兄弟元素节点

2. 上一个兄弟节点：

   1）`node.previousSibling`：获取下一个兄弟节点（所有类型）

   2）`node.previousElementSibling`：获取下一个兄弟远元素节点
   
   ```html
   <div>我是div</div>
   <span>我是span</span>
   <script>
     var div = document.querySelector('div')
   
     // 1.nextSibling 下一个兄弟节点：包含元素节点、文本节点等
     console.log(div.nextSibling)
     console.log(div.previousSibling)
   
     // 2. nextElementSibling 得到下一个兄弟元素节点
     console.log(div.nextElementSibling)
     console.log(div.previousElementSibling)
   </script>
   ```

##### 3.2.5.4 创建节点

1. `document.createElement('tagName')`：动态创建节点

   ```html
   <textarea name="" id="">请输入您的留言...</textarea>
   <button>发布</button>
   <ul></ul>
   <script>
     // 1. 获取元素
     var btn = document.querySelector('button')
     var text = document.querySelector('textarea')
     var ul = document.querySelector('ul')
     // 2. 注册事件
     text.onclick = function () {
       text.value = ''
     }
     btn.onclick = function () {
       if (text.value == '') {
         alert('您没有输入内容')
         return false
       } else {
         // (1) 创建元素
         var li = document.createElement('li')
         // 先有li 才能赋值
         li.innerHTML = text.value
         // (2) 添加元素
         ul.insertBefore(li, ul.children[0])
         text.value = ''
       }
     }
   </script>
   ```

##### 3.2.5.5 添加节点

1. `node.appendChild(child)`：将一个节点添加到指定父节点的子节点列表末尾，像CSS的after伪元素

   ```html
   <div class="create"></div>
   <script>
     var create = document.querySelector('.create')
     for (var i = 0; i <= 100; i++) {
       var a = document.createElement('a')
       create.appendChild(a)
   }
   </script>
   ```

2. `node.insertBefore(child, 指定元素)`：将一个节点添加到指定元素之前

3. `node.insertAdjacentHTML(位置, 字符串元素)`：与appendChild的区别在于，此方法支持直接在父元素插入以字符串形式定义的新元素

   1）beforebegin：元素自身的前面

   2）afterbegin：插入元素内部第一个子节点之前

   3）beforeend：插入元素内部最后一个子节点之后

   4）afterend：元素自身后面

   ```js
   var ul = document.querySelector('div')
   var li = '<li class=avtive><span>new</span></li>'
   ul.insertAdjacentHTML('brforeend', li)
   ```

##### 3.2.5.6 删除节点

1. `node.removeChild(child)`：删除父节点下的子节点

2. 案例：删除留言：制作删除按钮，阻止链接<a>跳转：href = 'javascript: void(0);' 或 'javascript:;'

   ```html
   <textarea name="" id=""></textarea>
   <button>发布</button>
   <ul></ul>
   
   <script>
     // 1. 获取元素
     var btn = document.querySelector('button')
     var text = document.querySelector('textarea')
     var ul = document.querySelector('ul')
     // 2. 注册事件
     btn.onclick = function () {
       if (text.value == '') {
         alert('您没有输入内容')
         return false
       } else {
         // 1. 创建元素
         var li = document.createElement('li')
         // 先有li才能赋值
         li.innerHTML = text.value + "<a href='javascript:;'>删除</a>"
         // 2. 添加元素：让最新的留言在前面
         ul.insertBefore(li, ul.children[0])
         // 3. 删除元素：删除的是当前链接的li的父亲
         var as = document.querySelectorAll('a')
         for (var i = 0; i < as.length; i++) {
           as[i].onclick = function () {
             // 删除的是 li：即当前 a 所在的父节点 li：this.parentNode
             ul.removeChild(this.parentNode)
           }
         }
       }
     }
   </script>
   ```

##### 3.2.5.7 复制节点

1. `node.cloneNode()`：括号内为空或false，浅拷贝，只复制标签不复制里面的内容

2. `node.cloneNode(true)`：括号内为true，深拷贝，复制标签和内容

   ```js
   <button>复制</button>
   <ul>
     <li>Jack</li>
     <li>Emliy</li>
     <li>Alice</li>
   </ul>
   <script>
     var ul = document.querySelector('ul')
     var btn = document.querySelector('button')
     // 1. node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
     // 2. node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容
     btn.onclick = function () {
       var lili = ul.children[0].cloneNode(true)
       ul.appendChild(lili)
     }
   </script>
   ```

##### 3.2.5.8 动态创建表格

1. 创建行：for循环储存数据的数组，有几条数据创建几行
2. 创建单元格：for循环对象，对象有几个属性创建几个单元格，如果需要额外添加单元格（如：删除按钮），则再单独创建单元格
3. 删除按钮<a>：tbody.removeChild( this.parentNode.parentNode)，即删除<a>的父元素<td>的父元素<tr>

```html
<style>
  table {
    width: 500px;
    margin: 100px auto;
    border-collapse: collapse;
    text-align: center;
  }
  td,
  th {
    border: 1px solid #333;
  }
  thead tr {
    height: 40px;
    background-color: #ccc;
  }
</style>

<body>
  <table cellspacing="0">
    <thead>
      <tr>
        <th>姓名</th>
        <th>科目</th>
        <th>成绩</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
    
  <script>
    // 1. 准备好学生的数据
    var datas = [
      {
        name: '魏璎珞',
        subject: 'JavaScript',
        score: 100,
      },
      {
        name: '弘历',
        subject: 'JavaScript',
        score: 98,
      },
      {
        name: '傅恒',
        subject: 'JavaScript',
        score: 99,
      },
      {
        name: '明玉',
        subject: 'JavaScript',
        score: 88,
      },
      {
        name: '大猪蹄子',
        subject: 'JavaScript',
        score: 0,
      },
    ]
    // 2. 往tbody里面创建行：有几个人（通过数组的长度）我们就创建几行
    var tbody = document.querySelector('tbody')
    for (var i = 0; i < datas.length; i++) {
      // 外面的for循环：行tr
      // 1. 创建 tr行
      var tr = document.createElement('tr')
      tbody.appendChild(tr)
       
      // 2. 行里面创建单元格(跟数据有关系的3个单元格) td，单元格的数量取决于每个对象里面的属性数量
      for (var k in datas[i]) {
        // 里面的for循环：列td
        // 创建单元格
        var td = document.createElement('td')
        // 把对象里面的属性值 datas[i][k] 给 td
        td.innerHTML = datas[i][k]
        tr.appendChild(td)
      }
      
      // 3. 创建有删除2个字的单元格
      var td = document.createElement('td')
      td.innerHTML = '<a href="javascript:;">删除 </a>'
      tr.appendChild(td)
    }
      
    // 4. 删除操作
    var as = document.querySelectorAll('a')
    for (var i = 0; i < as.length; i++) {
      as[i].onclick = function () {
        // 点击a，删除当前a所在的行(链接的爸爸的爸爸)
        tbody.removeChild(this.parentNode.parentNode)
      }
    }
  </script>
</body>
```

------

### 3.3 BOM

> 浏览器对象模型（Browser Object Model），提供独立于内容而与浏览器窗口进行交互的对象，核心对象是window。

#### 3.3.1 BOM简介

1. BOM由一系列相关的对象构成，每个对象提供了很多方法和属性
2. BOM缺乏标准，JS标准是ECMA，DOM标准是W3C，BOM是网景浏览器标准的一部分，兼容性较差
3. 结构：window
   * document
   * location
   * navigation
   * screen
   * history

------

#### 3.3.2 Windows对象

1. 是浏览器的顶级对象，具有双重角色
2. 是JS访问浏览器窗口的一个接口
3. 是一个全局对象，定义在全局作用域中的变量、函数，都会变成windows对象的属性和方法

##### 3.3.2.1 Windows属性

1. `window.name`：窗口名字，用于为超链接和表单设置目标（targets）

2. `window.devicePixelRatio`：物理像素比（1px能显示的物理像素点的个数）

3. `window.innerWidth`：当前窗口大小

4. 页面滚动：

   1）`window.pageYOffset`：页面被卷去的头部大小（无单位）（IE9+支持）

   2）`window.pageXOffset`：页面被卷去的左侧大小（无单位）（IE9+支持）

   3）旧版兼容：

   * 已声明DTD（即<!DOCTYPE html>）：`document.documentElement.scrollTop`
   * 未声明DTD：`document.body.scrollTop`

   ```js
   // 使用时： getScroll().left 或 getScroll().top
   function getScroll() {
     return {
       left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
       top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
     }
   }
   ```

##### 3.3.2.2 Windows方法

###### 窗口加载: load

1. load

   1）定义：当文档内容完全加载会触发该事件（包括图像、脚本、CSS等），可以把JS放在head里

   2）触发动作：<a>、F5刷新、前进后退按钮

   3）`window.onload`：传统注册事件，只能写一次，如果有多个以最后一个为准

   ```js
   window.onload = function () {
     var btn = document.querySelector('button')
     btn.addEventListener('click', function () {
       alert('点击我')
     })
   }
   ```

   4）`window.addEventListener('load',fn)`：方法监听注册，可以写多个

   ```js
   window.addEventListener('load', function () {
     var btn = document.querySelector('button')
     btn.addEventListener('click', function () {
       alert('点击我')
     })
   })
   window.addEventListener('load', function () {
     alert(22)
   })
   ```

   5）`document.addEventListener('DOMContentLoaded',fn)`：仅当DOM加载完成时触发，包括JS，但不包括图片、CSS、flash等（IE9+支持），适用于多媒体较多的网页，不耽误用户操作其他按钮

   ```js
   document.addEventListener('DOMContentLoaded', function () {
     alert(33)
   })
   ```

2. `window.addEventListener('pageshow',fn)`

   1）火狐浏览器具有“往返缓存”的特点，使用后退按钮返回页面时，如果使用load不会重新加载页面，此时需要pageshow，页面先执行其中的回调函数

   ```html
   <script>
     // 会先执行pageshow内定义的回调函数
     window.addEventListener('pageshow', function () {
       alert(11)
     })
   </script>
   <!--执行完毕后，才会显示下面内容-->
   <a href="http://www.itcast.cn">链接</a>
   ```
   
   2）页面显示时触发，无论页面是否来自于缓存，会在load事件后触发，可配合使用 e.persisted 判断是否是缓存中的页面
   
   ```js
   window.addEventListener('pageshow', function (e) {
     // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
     if (e.persisted) {
       setRemUnit()
     }
   })
   ```

###### 窗口大小: resize

1. `window.onresize`

2. `window.addEventListener('resize',fn)`

   ```html
   <style>
     div {
       width: 200px;
       height: 200px;
       background-color: pink;
     }
   </style>
   <script>
     window.addEventListener('load', function () {
       var div = document.querySelector('div')
       window.addEventListener('resize', function () {
         console.log(window.innerWidth)
         console.log('变化了')
         if (window.innerWidth <= 800) {
           div.style.display = 'none'
         } else {
           div.style.display = 'block'
         }
       })
     })
   </script>
   <div></div>
   ```

###### 窗口滚动: scroll

1. `window.scroll(x,y)`：里面数值不加单位

###### 定时器: setTimeout

* 注意：如果重复点击按钮触发定时器，动作会越来越快，这是由于定时器叠加导致的，需要清除掉旧定时器，只保留一个定时器

1. `setTimeout(回调函数，[延迟的毫秒数])`：仅执行一次

   1）调用函数可以直接写函数，还可以写函数名或 '函数名()'

   2）页面中可能有很多的定时器，经常给定时器加名字

   ```js
   function callback() {
     console.log('爆炸了')
   }
   var timer1 = setTimeout(callback, 3000)
   var timer2 = setTimeout(callback, 5000)
   ```

   3)案例：页面广告自动隐藏

   ```html
   <img src="images/ad.jpg" alt="" class="ad" />
   
   <script>
     var ad = document.querySelector('.ad')
     setTimeout(function () {
       ad.style.display = 'none'
     }, 5000)
   </script>
   ```

   4）停止定时器：`clearTimeout(定时器名称)`

   ```html
   <button>点击停止定时器</button>
   
   <script>
     var btn = document.querySelector('button')
     var timer = setTimeout(function () {
       console.log('爆炸了')
     }, 5000)
     btn.addEventListener('click', function () {
       clearTimeout(timer)
     })
   </script>
   ```

2. `setInterval(回调函数，[延迟的毫秒数])`：重复调用一个函数，每隔这个时间就调用一次回调函数

   ```html
   <!--案例：倒计时-->
   <div>
       <span class="hour">1</span>
       <span>时</span>
       <span class="minute">2</span>
       <span>分</span>
       <span class="second">3</span>
       <span>秒</span>
   </div>
   <script>
       // 1. 获取元素 
       var hour = document.querySelector('.hour'); 		// 小时的黑色盒子
       var minute = document.querySelector('.minute'); 	// 分钟的黑色盒子
       var second = document.querySelector('.second'); 	// 秒数的黑色盒子
       var inputTime = +new Date('2025-12-31 18:00:00'); 	// 返回的是用户输入时间总的毫秒数
       countDown() 										// 先调用一次这个函数，防止第一次刷新页面有空白 
       // 2. 开启定时器
       setInterval(countDown, 1000);
       function countDown() {
           var nowTime = +new Date(); 						// 返回的是当前时间总的毫秒数
           var times = (inputTime - nowTime) / 1000; 		// times是剩余时间总的秒数 
           var h = parseInt(times / 60 / 60 % 24); 		//时
           h = h < 10 ? '0' + h : h;
           hour.innerHTML = h; 							// 把剩余的小时给 小时黑色盒子
           var m = parseInt(times / 60 % 60); 				// 分
           m = m < 10 ? '0' + m : m;
           minute.innerHTML = m;
           var s = parseInt(times % 60); 					// 秒
           s = s < 10 ? '0' + s : s;
           second.innerHTML = s;
       }
   </script>
   ```

   1）停止定时器：`clearInterval(定时器名称)`

   2）注意：如果定时器被写入了注册事件函数内部的匿名函数，需要在外面声明一个与定时器同名的全局变量，令其为null

   ```html
   <button class="begin">开启定时器</button>
   <button class="stop">停止定时器</button>
   
   <script>
     var begin = document.querySelector('.begin')
     var stop = document.querySelector('.stop')
     var timer = null // 全局变量，null是一个空对象
     begin.addEventListener('click', function () {
       timer = setInterval(function () {
         console.log('ni hao ma')
       }, 1000)
     })
     stop.addEventListener('click', function () {
       clearInterval(timer)
     })
   </script>
   ```

   ```html
   <!--案例：手机发送短信-->
   手机号码： <input type="tel" /> <button>发送</button>
   <script>
     // 按钮点击之后，会禁用 disabled 为true，按钮里面内容变化
     // 注意 button 里面的内容通过 innerHTML修改
     var btn = document.querySelector('button')
     var time = 3 // 定义剩下的秒数
     btn.addEventListener('click', function () {
       btn.disabled = true
       var timer = setInterval(function () {
         if (time == 0) {
           // 清除定时器和复原按钮
           clearInterval(timer)
           btn.disabled = false
           btn.innerHTML = '发送'
           time = 3
         } else {
           btn.innerHTML = '还剩下' + time + '秒'
           time--
         }
       }, 1000)
     })
   </script>
   ```

###### 本地储存: localStorage

1. 特性：

   1）数据储存在用户浏览器中

   2）设置/读取方便，页面刷新不丢失数据

   3）容量大，sessionStorage存5M、localStorage存20M

   4）查看数据：点击F12中的应用，本地储存空间/会话储存空间

2. 储存与读取：

   1）只能存储字符串，可以将对象`JSON.stringify()`编码后储存（格式为字符串）

   2）读取数据时，也要先用`JSON.parse()`转化后才能使用（格式为数组）

3. sessionStorage：会话储存，生命周期：关闭浏览器窗口

   1）`sessionStorage.setItem(key,value)`：存储数据

   ```js
   sessionStorage.setItem('todo', JSON.stringify(todolist))
   ```

   2）`sessionStorage.getItem(key)`：获取数据

   ```js
   var data = sessionStorage.getItem('todo')
   data = JSON.parse(data)
   ```

   3）`sessionStorage.removeItem(key)`：删除数据

   4）`sessionStorage.clear()`：删除所有数据

   ```html
   <input type="text" />
   <button class="set">存储数据</button>
   <button class="get">获取数据</button>
   <button class="remove">删除数据</button>
   <button class="del">清空所有数据</button>
   <script>
     console.log(localStorage.getItem('username'))
     var ipt = document.querySelector('input')
     var set = document.querySelector('.set')
     var get = document.querySelector('.get')
     var remove = document.querySelector('.remove')
     var del = document.querySelector('.del')
     set.addEventListener('click', function () {
       // 当点击了之后，就可以把表单里面的值存储起来
       var val = ipt.value
       sessionStorage.setItem('uname', val)
       sessionStorage.setItem('pwd', val)
     })
     get.addEventListener('click', function () {
       // 当点击了之后，就可以把表单里面的值获取过来
       console.log(sessionStorage.getItem('uname'))
     })
     remove.addEventListener('click', function () {
       //
       sessionStorage.removeItem('uname')
     })
     del.addEventListener('click', function () {
       // 当点击了之后，清除所有的
       sessionStorage.clear()
     })
   </script>
   ```

4. localStorage：本地储存，生命周期：永久，除非手动删除

   1）可以多窗口/页面共享（同一浏览器可以共享）

   2）方法：与sessionStorage相同

5. 案例：记住用户名

   ```js
   <input type="text" id="username" /> <input type="checkbox" name="" id="remember" /> 记住用户名
   <script>
     var username = document.querySelector('#username')
     var remember = document.querySelector('#remember')
     if (localStorage.getItem('username')) {
       username.value = localStorage.getItem('username')
       remember.checked = true
     }
     remember.addEventListener('change', function () {
       if (this.checked) {
         localStorage.setItem('username', username.value)
       } else {
         localStorage.removeItem('username')
       }
     })
   </script>
   ```

6. 案例：ToDoList

   1）页面刷新内容不会丢失：本地存储localStorage

   2）文本框输入内容，按下回车生成代办事项：`$("element").on("keydown",function(event){if(event.keyCode===13){...}})`

   3）先从localStorage取数据，再将新数据push添加到数组，再存储给localStorage

   4）点击删除按钮，内容消失：

   * 点击<a>链接删除的不是li，而是本地存储中对应的数据
   * 先获取本地存储数据，删除对应数据后保存，重新渲染列表li
   * 给每个<a>添加index属性，便于查找要删除的数据索引

   5）点击待办事项复选框，把当前数据添加到已完成事项中：点击之后获取本地存储数据，修改done属性值为当前复选框checked状态

   6）点击已完成事项复选框，把当前数据添加到待办事项中

   ```html
   <header>
     <section>
       <label for="title">ToDoList</label>
       <input type="text" id="title" name="title" placeholder="添加ToDo" required="required" autocomplete="off" />
     </section>
   </header>
   <section>
     <h2>正在进行 <span id="todocount"></span></h2>
     <ol id="todolist" class="demo-box"></ol>
     <h2>已经完成 <span id="donecount"></span></h2>
     <ul id="donelist"></ul>
   </section>
   <footer>Copyright &copy; 2014 todolist.cn</footer>
   ```
   
   ```js
   $(function () {
     // 1. 按下回车，把完整数据存储到本地存储里面
     // 存储的数据格式：var todolist = [{title: "xxx", done: false}]
     load()
     $('#title').on('keydown', function (event) {
       if (event.keyCode === 13) {
         if ($(this).val() === '') {
           alert('请输入您要的操作')
         } else {
           // 先读取本地存储原来的数据
           var local = getDate()
           // 把local数组进行更新数据，把最新的数据追加给local数组
           local.push({ title: $(this).val(), done: false })
           // 把这个数组给本地存储
           saveDate(local)
           // 2. toDoList 本地存储数据渲染加载到页面
           load()
           $(this).val('')
         }
       }
     })
     // 3. toDoList 删除操作
     $('ol, ul').on('click', 'a', function () {
       // 先获取本地存储
       var data = getDate()
       console.log(data)
       // 修改数据
       var index = $(this).attr('id')
       console.log(index)
       data.splice(index, 1)
       // 保存到本地存储
       saveDate(data)
       // 重新渲染页面
       // load()
       // 用fadeOut效果淡出
       $(this).parent('li').fadeOut()
     })
     // 4. toDoList 正在进行和已完成选项操作
     $('ol, ul').on('click', 'input', function () {
       // 先获取本地存储的数据
       var data = getDate()
       // 修改数据
       var index = $(this).siblings('a').attr('id')
       data[index].done = $(this).prop('checked')
       // 保存到本地存储
       saveDate(data)
       // 重新渲染页面
       load()
     })
   
     // 读取本地存储的数据
     function getDate() {
       var data = localStorage.getItem('todolist')
       if (data !== null) {
         // 本地存储里面的数据是字符串格式的 但是需要的是对象格式的
         return JSON.parse(data)
       } else {
         return []
       }
     }
     // 保存本地存储数据
     function saveDate(data) {
       localStorage.setItem('todolist', JSON.stringify(data))
     }
     // 渲染加载数据
     function load() {
       // 读取本地存储的数据
       var data = getDate()
       // 遍历之前先要清空ol里面的元素内容
       $('ol, ul').empty()
       var todoCount = 0 // 正在进行的个数
       var doneCount = 0 // 已经完成的个数
       // 遍历这个数据
       $.each(data, function (i, n) {
         if (n.done) {
           $('ul').prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + ' ></a></li>')
           doneCount++
         } else {
           $('ol').prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + ' ></a></li>')
           todoCount++
         }
       })
       $('#todocount').text(todoCount)
       $('#donecount').text(doneCount)
     }
   })
   ```

------

#### 3.3.3 location对象

1. 用途：用于获取或设置窗体的URL，可以解析URL

2. URL：统一资源定位符（Uniform Resource Locator），互联网上每个文件都有唯一的URL

   * 语法：`protocol://host[:port]/path/[?query]#fragment`

   1）protocol：通信协议，如http、https、maito等

   2）host：主机（域名）

   3）port：端口号，可选，省略时使用方案默认端口，如http默认端口为80

   4）path：路径，表示主机上的一个目录或文件地址

   5）query：参数，以键值对的形式通过&符号分隔开来

   6）fragment：片段，#后面内容常见于链接锚点

   ```html
   <!--案例：获取URL参数-->
   <!--login.html-->
   <form action="index.html">
     用户名： <input type="text" name="uname" />
     <input type="submit" value="登录" />
   </form>
   ```

   ```html
   <!--index.html-->
   <div></div>
   <script>
     console.log(location.search) // ?uname=andy
     // 1.先去掉问号
     var params = location.search.substr(1) // uname=andy
     console.log(params)
     // 2. 把字符串分割为数组
     var arr = params.split('=')
     console.log(arr) // ["uname", "ANDY"]
     // 3.把数据写入div中，decodeURIComponent可以显示中文
     var div = document.querySelector('div')
     div.innerHTML = decodeURIComponent(arr[1]) + '欢迎您'
   </script>
   ```

3. 属性：

   1）`location.href`：获取或设置整个URL

   2）`location.host`：返回主机（域名）

   3）`location.port`：返回端口号，如果未写返回空字符串" "

   4）`location.pathname`：返回路径，对应的path

   5）`location.search`：返回参数，对应的query，注意：如果参数中带有中文，需要用`decodeURIComponent()`解码

   6）`location.hash`：返回片段，对应的fragment

   ```html
   <button>点击</button>
   <div></div>
   <script>
     var btn = document.querySelector('button')
     var div = document.querySelector('div')
     btn.addEventListener('click', function () {
       // console.log(location.href);
       location.href = 'http://www.itcast.cn'
     })
     var timer = 5
     var count_down = function () {
       if (timer == 0) {
         location.href = 'http://www.itcast.cn'
       } else {
         div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页'
         timer--
       }
     }
     count_down()
     setInterval(count_down, 1000)
   </script>
   ```

4. 方法:

   1）location.assign()：与href相同，可以跳转页面，可以后退

   2）location.replace()：替换当前页面，但不记录历史，不能后退页面

   3）location.reload()：重新加载页面，相当于刷新按钮/F5，如果参数为true，强制刷新Ctrl+F5（不读取缓存）
   
   ```html
   <button>黑马IT(可后退)</button>
   <button>黑马IT(不可后退)</button>
   <button>刷新页面</button>
   <script>
     var btns = document.querySelectorAll('button')
     // 记录浏览历史，可以实现后退功能
     btns[0].addEventListener('click', () => {
       location.assign('http://www.itcast.cn')
     })
     // 不记录浏览历史，不可以实现后退功能
     btns[1].addEventListener('click', () => {
       location.replace('http://www.itcast.cn')
     })
     // 强制刷新页面
     btns[2].addEventListener('click', () => {
       location.reload(ture)
     })
   </script>
   ```

------

#### 3.3.4 navigator对象

1. `navigator.userAgent`：适配不同设备，如果是移动端，可以自动跳转到H5页面；返回由客户端发送服务器的user-agent头部的值

```js
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|
wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
  window.location.href = '../H5/index.html' //手机页面所在文件
}
```

------

#### 3.3.5 history对象

1. 定义：与浏览器历史进行交互，包含用户访问过的URL

2. 方法：

   1）`back()`：后退

   2）`forward()`：前进

   3）`go(参数)`：前进后退功能，参数为1即前进1个页面，参数为-1即后退1个页面
   
   ```html
   <!-- index.html -->
   <a href="list.html">点击我去往列表页</a>
   <button>前进</button>
   <script>
     var btn = document.querySelector('button')
     btn.addEventListener('click', function () {
       // history.forward();
       history.go(1)
     })
   </script>
   ```
   
   ```html
   <a href="list.html">点击我去往首页</a>
   <button>后退</button>
   <script>
     var btn = document.querySelector('button')
     btn.addEventListener('click', function () {
       // history.back();
       history.go(-1)
     })
   </script>
   ```

------

### 3.4 网页特效

#### 3.4.1 offset偏移量

* 带边框：padding、边框、内容

1. 属性：只读属性，不可赋值，无法更改元素样式

   1）`element.offsetParent`：返回作为该元素带有定位的父级元素，如过父级元素没有定位返回body

   2）`element.offsetTop`：返回元素相对带有定位父元素上方的偏移

   3）`element.offsetLeft`：返回元素相对带有定位父元素左边框的偏移

   4）`element.offsetWidth`：返回自身包括padding、边框、内容区的宽度，返回数值不带单位

   5）`element.offsetHeight`：返回自身包括padding、边框、内容区的高度，返回数值不带单位

   ```html
   <style>
     .father {
       /* position: relative; */
       width: 200px;
       height: 200px;
       background-color: pink;
       margin: 150px;
     }
     .son {
       width: 100px;
       height: 100px;
       background-color: purple;
       margin-left: 45px;
     }
     .w {
       height: 200px;
       background-color: skyblue;
       margin: 0 auto 200px;
       padding: 10px;
       border: 15px solid red;
     }
   </style>
   
   <div class="father">
     <div class="son"></div>
   </div>
   <div class="w"></div>
   <script>
     var father = document.querySelector('.father')
     var son = document.querySelector('.son')
     // 1.可以得到元素的偏移位置，返回的不带单位的数值
     console.log(father.offsetTop)
     console.log(father.offsetLeft)
     // 它以带有定位的父亲为准，如果没有父亲或者父亲没有定位，则以body为准
     console.log(son.offsetLeft)
     var w = document.querySelector('.w')
     
     // 2.可以得到元素的大小：宽度和高度，包含padding + border + width
     console.log(w.offsetWidth)
     console.log(w.offsetHeight)
     
     // 3. 返回带有定位的父亲，否则返回的是body
     console.log(son.offsetParent) // 返回带有定位的父亲，否则返回的是body
     console.log(son.parentNode)   // 对比：返回最近一级的父亲，不管父亲有没有定位
   </script>
   ```

2. 与sytle的区别：想获取元素大小位置用offset，想改变元素样式用style

   1）offset可获取任意样式表样式值，style只能得到行内样式表的样式值

   2）offset获得值没有单位，style获得值有单位

   3）offsetWidth 包含 padding+border+width，style.width只包含width

   4）offsetWidth是只读属性不能赋值，style.width可读写属性可以赋值

   ```html
   <style>
     .box {
       width: 200px;
       height: 200px;
       background-color: pink;
       padding: 10px;
     }
   </style>
   <div class="box" style="width: 200px"></div>
   <script>
     // offset与style的区别
     var box = document.querySelector('.box')
     console.log(box.offsetWidth)	// 220
     console.log(box.style.width)	// 200px
     // box.offsetWidth = '300px'  // 不能这样修改
     box.style.width = '300px'
   </script>
   ```

3. 案例1：计算鼠标在盒子内的坐标

   ```html
   <style>
     .box {
       width: 300px;
       height: 300px;
       background-color: pink;
       margin: 200px;
     }
   </style>
   
   <body>
     <div class="box"></div>
     <script>
       // 1. 首先得到鼠标在页面中的坐标（e.pageX, e.pageY）
       // 2. 其次得到盒子在页面中的距离(box.offsetLeft, box.offsetTop)
       // 3. 用鼠标距离页面的坐标减去盒子在页面中的距离，得到鼠标在盒子内的坐标
       var box = document.querySelector('.box')
       box.addEventListener('mousemove', function (e) {
         var x = e.pageX - this.offsetLeft
         var y = e.pageY - this.offsetTop
         this.innerHTML = 'x坐标是' + x + ' y坐标是' + y
       })
     </script>
   </body>
   ```

4. 案例2：模态框拖拽效果（mousedown开始拖拽事件，mouseup取消拖拽监听事件）

   ```html
   <style>
     .login-header {
       width: 100%;
       text-align: center;
       height: 30px;
       font-size: 24px;
       line-height: 30px;
     }
     a {
       text-decoration: none;
       color: #000000;
     }
     .login {
       display: none;
       width: 512px;
       height: 280px;
       position: fixed;
       border: #ebebeb solid 1px;
       left: 50%;
       top: 50%;
       background: #ffffff;
       box-shadow: 0px 0px 20px #ddd;
       z-index: 9999;
       transform: translate(-50%, -50%);
     }
     .login-title {
       width: 100%;
       margin: 10px 0px 0px 0px;
       text-align: center;
       line-height: 40px;
       height: 40px;
       font-size: 18px;
       position: relative;
       cursor: move;
     }
     .login-title span {
       position: absolute;
       font-size: 12px;
       right: -20px;
       top: -30px;
       background: #ffffff;
       border: #ebebeb solid 1px;
       width: 40px;
       height: 40px;
       border-radius: 20px;
     }
     .login-input-content {
       margin-top: 20px;
     }
     .login-input {
       overflow: hidden;
       margin: 0px 0px 20px 0px;
     }
     .login-input label {
       float: left;
       width: 90px;
       padding-right: 10px;
       text-align: right;
       line-height: 35px;
       height: 35px;
       font-size: 14px;
     }
     .login-input input.list-input {
       float: left;
       line-height: 35px;
       height: 35px;
       width: 350px;
       border: #ebebeb 1px solid;
       text-indent: 5px;
     }
     .login-button {
       width: 50%;
       margin: 30px auto 0px auto;
       line-height: 40px;
       font-size: 14px;
       border: #ebebeb 1px solid;
       text-align: center;
     }
     .login-button a {
       display: block;
     }
     .login-bg {
       display: none;
       width: 100%;
       height: 100%;
       position: fixed;
       top: 0px;
       left: 0px;
       background: rgba(0, 0, 0, 0.3);
     }
   </style>
   
   <div class="login-header"><a id="link" href="javascript:;">点击，弹出登录框</a></div>
   <div id="login" class="login">
     <div id="title" class="login-title">
       登录会员
       <span><a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a></span>
     </div>
     <div class="login-input-content">
       <div class="login-input">
         <label>用户名：</label>
         <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input" />
       </div>
       <div class="login-input">
         <label>登录密码：</label>
         <input type="password" placeholder="请输入登录密码" name="info[password]" id="password" class="list-input" />
       </div>
     </div>
     <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录会员</a></div>
   </div>
   <!-- 遮盖层 -->
   <div id="bg" class="login-bg"></div>
   
   <script>
       // 1. 获取元素
       var login = document.querySelector('.login')
       var mask = document.querySelector('.login-bg')
       var link = document.querySelector('#link')
       var closeBtn = document.querySelector('#closeBtn')
       var title = document.querySelector('#title')
       // 2. 点击弹出层这个链接 link，让 mask 和 login 显示出来
       link.addEventListener('click', function () {
         mask.style.display = 'block'
         login.style.display = 'block'
       })
       // 3. 点击 closeBtn 就隐藏 mask 和 login
       closeBtn.addEventListener('click', function () {
         mask.style.display = 'none'
         login.style.display = 'none'
       })
       // 4. 开始拖拽
       // (1) 当我们鼠标按下，就获得鼠标在盒子内的坐标（一旦鼠标按下，这个坐标就是固定住了）
       title.addEventListener('mousedown', function (e) {
         var x = e.pageX - login.offsetLeft
         var y = e.pageY - login.offsetTop
         // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去鼠标在盒子内的坐标，就是模态框的left和top值
         document.addEventListener('mousemove', move)
         function move(e) {
           login.style.left = e.pageX - x + 'px'
           login.style.top = e.pageY - y + 'px'
         }
         // (3) 鼠标弹起，就让鼠标移动事件移除
         document.addEventListener('mouseup', function () {
           document.removeEventListener('mousemove', move)
         })
       })
   </script>
   ```

5. 案例3：电商详情页放大镜

   1）鼠标经过橱窗preview_img，显示/隐藏遮挡层 mask 和放大镜大盒子 big

   2）鼠标移动时，遮挡层mask跟着鼠标走
   
   3）鼠标移动时，大图片也跟随mask移动
   
   ```js
   window.addEventListener('load', function () {
     var preview_img = document.querySelector('.preview_img')
     var mask = document.querySelector('.mask')
     var big = document.querySelector('.big')
     
     // 1. 当鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
     preview_img.addEventListener('mouseover', function () {
       mask.style.display = 'block'
       big.style.display = 'block'
     })
     preview_img.addEventListener('mouseout', function () {
       mask.style.display = 'none'
       big.style.display = 'none'
     })
      
     // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
     preview_img.addEventListener('mousemove', function (e) {
       // (1). 先计算出鼠标在盒子内的坐标
       var x = e.pageX - this.offsetLeft
       var y = e.pageY - this.offsetTop
       // (2) 减去盒子高度 300的一半是150，就是mask的最终left和top值了
       // (3) mask 移动的距离
       var maskX = x - mask.offsetWidth / 2
       var maskY = y - mask.offsetHeight / 2
       // (4) 如果x坐标小于0，就让他停在0的位置
       // 遮挡层的最大移动距离
       var maskMax = preview_img.offsetWidth - mask.offsetWidth
       if (maskX <= 0) {
         maskX = 0
       } else if (maskX >= maskMax) {
         maskX = maskMax
       }
       if (maskY <= 0) {
         maskY = 0
       } else if (maskY >= maskMax) {
         maskY = maskMax
       }
       mask.style.left = maskX + 'px'
       mask.style.top = maskY + 'px'
       
       // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
       // 大图
       var bigIMg = document.querySelector('.bigImg')
       // 大图片最大移动距离
       var bigMax = bigIMg.offsetWidth - big.offsetWidth
       // 大图片的移动距离 X Y
       var bigX = (maskX * bigMax) / maskMax
       var bigY = (maskY * bigMax) / maskMax
       bigIMg.style.left = -bigX + 'px'
       bigIMg.style.top = -bigY + 'px'
     })
   })
   ```
   

------

#### 3.4.2 client可视区

* 不带边框：padding、内容

1. `event.clientTop`：返回元素上边框大小

2. `event.clientLeft`：返回元素左边框大小

3. `event.clientWidth`：返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位

4. `event.clientHeight`：返回自身包括padding、内容区的高度，不含边框，返回数值不带单位

   ```html
   <style>
     div {
       width: 200px;
       height: 200px;
       background-color: pink;
       border: 10px solid red;
       padding: 10px;
     }
   </style>
   <div></div>
   <script>
     // client与offsetWidth最大的区别就是：不包含边框
     var div = document.querySelector('div')
     console.log(div.clientWidth)
   </script>
   ```

------

#### 3.4.3 scroll滚动区

* 与client的区别：scroll是内容真正宽高大小（含隐藏部分），而client只是可见部分的宽高大小

1. 属性：

   1）`event.scrollTop`：返回被卷去的上侧距离（无单位）

   2）`event.scrollLeft`：返回被卷去的左侧距离（无单位）

   3）`event.scrollWidth`：返回自身实际宽度，不含边框（无单位）

   4）`event.scrollHeight`：返回自身实际高度，不含边框（无单位）

2. 事件：scroll

   1）定义：只要滚动条发生变化，就会触发该事件

   2）语法：`element.addEventListener('scroll', fn)`

   ```html
   <style>
     div {
       width: 200px;
       height: 200px;
       background-color: pink;
       border: 10px solid red;
       padding: 10px;
       overflow: auto;
     }
   </style>
   <div>
     我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 
   我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
     我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
   </div>
   <script>
     // scroll 系列
     var div = document.querySelector('div')
     console.log(div.scrollHeight) // 290：自身实际高度，不含边框
     console.log(div.clientHeight) // 220：自身包括padding、内容区的高度，不含边框
   
     // scroll滚动事件：当滚动条发生变化会触发的事件
     div.addEventListener('scroll', function () {
       console.log(div.scrollTop)	// 在顶部：0；在底部：70
     })
   </script>
   ```

3. 案例：淘宝粘性固定侧边栏

   1）原理：计算页面被卷去的头部大小，滚动到指定位置后，侧边栏变为固定定位

   2）注意：侧边栏变成固定定位时，需要修改对应的距离顶部值，不然会出现向下跳的情况，返回时也需要修改回原值
   
   ```html
   <style>
     .slider-bar {
       position: absolute;
       left: 50%;
       top: 300px;
       margin-left: 600px;
       width: 45px;
       height: 130px;
       background-color: pink;
     }
     .w {
       width: 1200px;
       margin: 10px auto;
     }
     .header {
       height: 150px;
       background-color: purple;
     }
     .banner {
       height: 250px;
       background-color: skyblue;
     }
     .main {
       height: 5000px;
       background-color: yellowgreen;
     }
     span {
       display: none;
       position: absolute;
       bottom: 0;
     }
   </style>
   
   <div class="slider-bar">
     <span class="goBack">返回顶部</span>
   </div>
   <div class="header w">头部区域</div>
   <div class="banner w">banner区域</div>
   <div class="main w">主体部分</div>
   <script>
     //1. 获取元素
     var sliderbar = document.querySelector('.slider-bar')
     var banner = document.querySelector('.banner')
     // banner与顶部的距离，用于判断是否令侧边栏显示
     var bannerTop = banner.offsetTop
     // 当侧边栏固定定位之后应该变化的数值
     var sliderbarTop = sliderbar.offsetTop - bannerTop
     // 获取main 主体元素
     var main = document.querySelector('.main')
     var goBack = document.querySelector('.goBack')
     var mainTop = main.offsetTop
     // 2. 页面滚动事件 scroll
     document.addEventListener('scroll', function () {
       // window.pageYOffset 页面被卷去的头部
       // 当页面被卷去的头部大于等于banner距离页面顶端高度时，侧边栏就要改为固定定位，与页面顶部始终保持固定距
       if (window.pageYOffset >= bannerTop) {
         sliderbar.style.position = 'fixed'
         sliderbar.style.top = sliderbarTop + 'px'
       } else {
         sliderbar.style.position = 'absolute'
         sliderbar.style.top = '300px'
       }
       // 当页面滚动到main盒子，就显示 goback模块
       if (window.pageYOffset >= mainTop) {
         goBack.style.display = 'block'
       } else {
         goBack.style.display = 'none'
       }
     })
     goBack.addEventListener('click', function () {
       animate(window, 0)
     })
     // 动画函数
     function animate(obj, target, callback) {
       clearInterval(obj.timer)
       obj.timer = setInterval(function () {
         // obj.offsetLeft 改为 window.pageYOffset
         var step = (target - window.pageYOffset) / 10
         step = step > 0 ? Math.ceil(step) : Math.floor(step)
         if (window.pageYOffset == target) {
           clearInterval(obj.timer)
           callback && callback()
         } else {
           window.scroll(0, window.pageYOffset + step)
         }
       }, 15)
     }
   </script>
   ```

------

#### 3.4.4 动画函数封装

1. 原理：通过定时器`setInterval()`不断移动盒子位置，附加定时器停止的条件

   ```js
   var div = document.querySelector('div')
   var timer = setInterval(function () {
     if (div.offsetLeft >= 400) {
       // 停止动画：本质是停止定时器
       clearInterval(timer)
     }
     div.style.left = div.offsetLeft + 1 + 'px'
   }, 30)
   ```

   1）通过函数封装动画函数，里面的定时器名字最好用`obj.timer`的方式命名，同时要先清除旧定时器，可以避免重复调用定时器（后果是越来越快）

   2）注意：盒子有绝对定位才能动起来

   ```html
   <style>
     div {
       position: absolute;
       left: 0;
       width: 200px;
       height: 200px;
       text-align: center;
       line-height: 200px;
       background-color: #00e5ee;
       border-radius: 200px;
     }
   </style>
   
   <div>大明湖</div>
   
   <script>
     function animate(obj, target) {
       // 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
       // 解决方案：让元素只有一个定时器执行，先清除以前的定时器，只保留当前的一个定时器执行
       clearInterval(obj.timer)
       obj.timer = setInterval(function () {
         if (obj.offsetLeft >= target) {
           clearInterval(obj.timer)
         } else {
           obj.style.left = obj.offsetLeft + 1 + 'px'
         }
       }, 30)
     }
     var div = document.querySelector('div')
     // 调用函数
     animate(div, 300)
   </script>
   ```

2. 缓动动画：让盒子每次移动距离变小，速度就会慢下来

   1）算法：步长=(目标值-当前位置)/n份数

   2）除法计算步长容易出现小数问题，需要转换为整数：`step = step > 0 ? Math.ceil(step) : Math.floor(step);`

   3）由于步长可以为负数，所以算法可以直接实现倒退效果

   4）回调函数：如果想让元素在动画结束后执行某函数，可以将回调函数写到定时器结束语句后

   * 写法1：`if(callback){callback()}`
   * 写法2：`callback && callback()`（短路运算a && b，当a为真时返回b）

   ```js
   <style>
     span {
       position: absolute;
       left: 0;
       top: 200px;
       display: block;
       width: 150px;
       height: 150px;
       background-color: purple;
     }
   </style>
   <button class="btn800">点击夏雨荷到800</button>
   <span>夏雨荷</span>
   <script>
     function animate(obj, target, callback) {
       clearInterval(obj.timer)
       obj.timer = setInterval(function () {
         var step = (target - obj.offsetLeft) / 10
         step = step > 0 ? Math.ceil(step) : Math.floor(step)
         if (obj.offsetLeft == target) {
           // 停止动画：本质是停止定时器
           clearInterval(obj.timer)
           // 回调函数写到定时器结束里面
           if (callback) {
             callback()
           }
           // 另外写法
           // callback && callback()
         } else {
           obj.style.left = obj.offsetLeft + step + 'px'
         }
       }, 15)
     }
     var span = document.querySelector('span')
     var btn800 = document.querySelector('.btn800')
     btn800.addEventListener('click', function () {
       animate(span, 800, function () {
         span.style.backgroundColor = 'red'
       })
     })
   </script>
   ```

3. 插件：animate

#### 3.4.5 轮播图特效

> 轮播图插件：[swiper](https://www.swiper.com.cn/)

1. 轮播图片：

   1）ul>li放轮播图片（最后需要复制一个第一张图），共n+1张图

   2）ul超大宽度，li在内浮动，使ul可以装下所有图

   3）触发动画时，ul运动，li不动

   4）自动播放：计时器触发右箭头点击事件，鼠标移入后清除计时器

2. 底部圆点：

   1）ol>li放小圆点，使用createElement创建圆点

   2）添加index属性，代表图片编号：li.setAttribute('index',i)

   3）用排他算法，令被选中的圆点具有突出效果

   4）圆点索引变量：circle

   5）同步左右箭头索引变量：num

3. 左右箭头：

   1）鼠标移动进轮播图主区域才显示箭头，离开时箭头消失

   2）走到最前/最后时修改ul的left值，控制图片看起来像无缝衔接

   3）箭头索引变量：num

   4）同步底部圆点索引变量：circle

4. 节流阀：

   1）作用：在轮播图中，防止连续点击造成图片滚动过快，使用节流阀控制速度

   2）算法：声明全局变量flag=true，if判断flag条件执行动画，先令flag=false，然后在动画函数传参使flag=true
   
   ```js
   window.addEventListener('load', function () {
     // 1. 获取元素
     var arrow_l = document.querySelector('.arrow-l')
     var arrow_r = document.querySelector('.arrow-r')
     var focus = document.querySelector('.focus')
     var focusWidth = focus.offsetWidth
     // 2. 鼠标经过focus 就显示隐藏左右按钮
     focus.addEventListener('mouseenter', function () {
       arrow_l.style.display = 'block'
       arrow_r.style.display = 'block'
       clearInterval(timer)
       timer = null // 清除定时器变量
     })
     focus.addEventListener('mouseleave', function () {
       arrow_l.style.display = 'none'
       arrow_r.style.display = 'none'
       timer = setInterval(function () {
         //手动调用点击事件
         arrow_r.click()
       }, 2000)
     })
     // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
     var ul = focus.querySelector('ul')
     var ol = focus.querySelector('.circle')
     // console.log(ul.children.length);
     for (var i = 0; i < ul.children.length; i++) {
       // 创建一个小li
       var li = document.createElement('li')
       // 记录当前小圆圈的索引号 通过自定义属性来做
       li.setAttribute('index', i)
       // 把小li插入到ol 里面
       ol.appendChild(li)
       // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
       li.addEventListener('click', function () {
         // 干掉所有人 把所有的小li 清除 current 类名
         for (var i = 0; i < ol.children.length; i++) {
           ol.children[i].className = ''
         }
         // 留下我自己  当前的小li 设置current 类名
         this.className = 'current'
         // 5. 点击小圆圈，移动图片 当然移动的是 ul
         // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
         // 当我们点击了某个小li 就拿到当前小li 的索引号
         var index = this.getAttribute('index')
         // 当我们点击了某个小li 就要把这个li 的索引号给 num
         num = index
         // 当我们点击了某个小li 就要把这个li 的索引号给 circle
         circle = index
         // num = circle = index;
         console.log(focusWidth)
         console.log(index)
         animate(ul, -index * focusWidth)
       })
     }
     // 把ol里面的第一个小li设置类名为 current
     ol.children[0].className = 'current'
     // 6. 克隆第一张图片(li)放到ul 最后面
     var first = ul.children[0].cloneNode(true)
     ul.appendChild(first)
     // 7. 点击右侧按钮， 图片滚动一张
     var num = 0
     // circle 控制小圆圈的播放
     var circle = 0
     // flag 节流阀
     var flag = true
     arrow_r.addEventListener('click', function () {
       if (flag) {
         flag = false // 关闭节流阀
         // 如果走到了最后复制的一张图片，此时ul要快速复原 left 改为 0
         if (num == ul.children.length - 1) {
           ul.style.left = 0
           num = 0
         }
         num++
         // 之所以会调到第二张图，是因为num=0后，又进行了num++，此时num=1
         animate(ul, -num * focusWidth, function () {
           flag = true // 打开节流阀
         })
         // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
         circle++
         // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
         if (circle == ol.children.length) {
           circle = 0
         }
         // 调用函数
         circleChange()
       }
     })
     // 9. 左侧按钮做法
     arrow_l.addEventListener('click', function () {
       if (flag) {
         flag = false
         if (num == 0) {
           num = ul.children.length - 1
           ul.style.left = -num * focusWidth + 'px'
         }
         num--
         animate(ul, -num * focusWidth, function () {
           flag = true
         })
         // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
         circle--
         // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
         // if (circle < 0) {
         //     circle = ol.children.length - 1;
         // }
         circle = circle < 0 ? ol.children.length - 1 : circle
         // 调用函数
         circleChange()
       }
     })
     function circleChange() {
       // 先清除其余小圆圈的current类名
       for (var i = 0; i < ol.children.length; i++) {
         ol.children[i].className = ''
       }
       // 留下当前的小圆圈的current类名
       ol.children[circle].className = 'current'
     }
     // 10. 自动播放轮播图
     var timer = setInterval(function () {
       //手动调用点击事件
       arrow_r.click()
     }, 2000)
   })
   ```

5. 插件[swiper](https://www.swiper.com.cn/)：

   ```js
   window.addEventListener('load', function () {
     var swiper = new Swiper('.swiper-container', {
       spaceBetween: 30,
       centeredSlides: true,
       autoplay: {
         delay: 5000,
         disableOnInteraction: false,
       },
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     })
   })
   
   ```

#### 3.4.6 返回顶部

1. 原理：将缓动动画函数中的 obj.offsetLeft 改为 window.pageYOffset
2. 动作：window.scroll(0, window.pageYOffset + step)
3. 调用：animate(window, 0)

```js
function animate(obj, target, callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    // obj.offsetLeft 改为 window.pageYOffset
    var step = (target - window.pageYOffset) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    // obj.offsetLeft 改为 window.pageYOffset
    if (window.pageYOffset == target) {
      clearInterval(obj.timer)
      callback && callback()
    } else {
      window.scroll(0, window.pageYOffset + step)
    }
  }, 15)
}
```

------

#### 3.4.7 筋斗云

1. 鼠标经过li，筋斗云跟到当前li：mouseenter --> animate(cloud, this.offsetLeft)
2. 鼠标离开li，筋斗云恢复原位：mouseleave --> animate(cloud, current)
3. 鼠标点击li，筋斗云留在当前li：click --> current = this.offsetLeft

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  body {
    background-color: black;
  }
  .c-nav {
    width: 900px;
    height: 42px;
    background: #fff url(images/rss.png) no-repeat right center;
    margin: 100px auto;
    border-radius: 5px;
    position: relative;
  }
  .c-nav ul {
    position: absolute;
  }
  .c-nav li {
    float: left;
    width: 83px;
    text-align: center;
    line-height: 42px;
  }
  .c-nav li a {
    color: #333;
    text-decoration: none;
    display: inline-block;
    height: 42px;
  }
  .c-nav li a:hover {
    color: white;
  }
  .c-nav li.current a {
    color: #0dff1d;
  }
  .cloud {
    position: absolute;
    left: 0;
    top: 0;
    width: 83px;
    height: 42px;
    background: url(images/cloud.gif) no-repeat;
  }
</style>

<script>
  // 缓动动画函数
  function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
      var step = (target - obj.offsetLeft) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      if (obj.offsetLeft == target) {
        clearInterval(obj.timer)
        // 回调函数写到定时器结束里面
        callback && callback()
      }
      obj.style.left = obj.offsetLeft + step + 'px'
    }, 15)
  }
  // 窗口加载
  window.addEventListener('load', function () {
    // 1. 获取元素
    var cloud = document.querySelector('.cloud')
    var c_nav = document.querySelector('.c-nav')
    var lis = c_nav.querySelectorAll('li')
    // 2. 给所有的小li绑定事件
    // 这个current 做为筋斗云的起始位置
    var current = 0
    for (var i = 0; i < lis.length; i++) {
      // (1) 鼠标经过把当前小li 的位置做为目标值
      lis[i].addEventListener('mouseenter', function () {
        animate(cloud, this.offsetLeft)
      })
      // (2) 鼠标离开就回到起始的位置
      lis[i].addEventListener('mouseleave', function () {
        animate(cloud, current)
      })
      // (3) 当鼠标点击，就把当前位置做为目标值
      lis[i].addEventListener('click', function () {
        current = this.offsetLeft
      })
    }
  })
</script>

<div id="c_nav" class="c-nav">
  <span class="cloud"></span>
  <ul>
    <li class="current"><a href="#">首页新闻</a></li>
    <li><a href="#">师资力量</a></li>
    <li><a href="#">活动策划</a></li>
    <li><a href="#">企业文化</a></li>
    <li><a href="#">招聘信息</a></li>
    <li><a href="#">公司简介</a></li>
    <li><a href="#">我是佩奇</a></li>
    <li><a href="#">啥是佩奇</a></li>
  </ul>
</div>
```

------

#### 3.4.8 移动端特效

##### 3.4.8.1 触摸屏幕

1. 事件动作：

   1）`touchstart`：手指获取元素

   2）`touchmove`：手指移动元素

   3）`touchend`：手指离开元素

   ```html
   <style>
     div {
       width: 100px;
       height: 100px;
       background-color: pink;
     }
   </style>
   <div></div>
   <script>
     // 1. 手指触摸DOM元素事件
     var div = document.querySelector('div')
     div.addEventListener('touchstart', function () {
       console.log('我摸了你')
     })
     // 2. 手指在DOM元素身上移动事件
     div.addEventListener('touchmove', function () {
       console.log('我继续摸')
     })
     // 3. 手指离开DOM元素事件
     div.addEventListener('touchend', function () {
       console.log('轻轻的我走了')
     })
   </script>
   ```

2. 事件对象：

   1）`e.touches`：正在触摸屏幕的所有手指的列表

   2）`e.targetTouches`：正在触摸当前DOM元素上的手指列表

   3）`e.changedTouches`：手指状态发生改变的列表

   ```html
   <style>
     div {
       width: 100px;
       height: 100px;
       background-color: pink;
     }
   </style>
   <div></div>
   <script>
     // 1. 手指触摸DOM元素事件
     var div = document.querySelector('div')
     div.addEventListener('touchstart', function (e) {
       // 得到正在触摸dom元素的第一个手指的相关信息：如手指的坐标等等
       console.log(e.targetTouches[0])
     })
     // 2. 手指在DOM元素身上移动事件
     div.addEventListener('touchmove', function () {})
     // 3. 手指离开DOM元素事件
     div.addEventListener('touchend', function (e) {
       // 当手指离开屏幕的时候，就没有了 touches 和 targetTouches 列表，但会有changedTouches
       console.log(e.changedTouches[0])
     })
   </script>
   ```

3. click事件延迟300ms：

   1）原因：由于移动端双击手指可以放大/缩小屏幕，在第一次点击后的300ms内如果有第二次点击，则会放大屏幕

   2）解决方案：

   * 禁用缩放：<meta name="viewport" content="user-scalable=no">

   * 自己定义函数tap：如果手指触摸和离开时间小于150ms算作点击，但每次只能添加一个元素，非常麻烦

   * [fastclick.js](https://github.com/ftlabs/fastclick)插件：引入即可，按官方文档用法调用

     ```js
     <script src="fastclick.js"></script>
     <div></div>
     <script>
       if ('addEventListener' in document) {
         document.addEventListener(
           'DOMContentLoaded',
           function () {
             FastClick.attach(document.body)
           },
           false
         )
       }
       var div = document.querySelector('div')
       div.addEventListener('click', function () {
         alert(11)
       })
     </script>
     ```

##### 3.4.8.2 拖动元素

1. touchstart：初始坐标

   1）手指初始坐标：

   ```js
   startX = e.targetTouches[0].pageX
   startY = e.targetTouches[0].pageY
   ```

   2）元素初始坐标：

   ```js
   x = this.offsetLeft
   y = this.offsetTop
   ```

2. touchmove：移动距离

   1）手指移动距离

   ```js
   var moveX = e.targetTouches[0].pageX - startX
   var moveY = e.targetTouches[0].pageY - startY
   ```

   2）元素移动距离

   ```js
   this.style.left = x + moveX + 'px'
   this.style.top = y + moveY + 'px'
   ```

   3）阻止屏幕滚动默认行为：`e.preventDefault()`
   
   ```html
   <!--案例：手指移动盒子-->
   <style>
     div {
       position: absolute;
       left: 0;
       width: 100px;
       height: 100px;
       background-color: pink;
     }
   </style>
   <div></div>
   <script>
     // （1） 触摸元素 touchstart： 获取手指初始坐标，同时获得盒子原来的位置
     // （2） 移动手指 touchmove： 计算手指的滑动距离，并且移动盒子
     // （3） 离开手指 touchend:
     var div = document.querySelector('div')
     var startX = 0
     var startY = 0
     var x = 0 
     var y = 0
     div.addEventListener('touchstart', function (e) {
       //  获取手指初始坐标
       startX = e.targetTouches[0].pageX
       startY = e.targetTouches[0].pageY
       // 获得盒子原来的位置
       x = this.offsetLeft
       y = this.offsetTop
     })
     div.addEventListener('touchmove', function (e) {
       //  计算手指的移动距离： 手指移动之后的坐标减去手指初始的坐标
       var moveX = e.targetTouches[0].pageX - startX
       var moveY = e.targetTouches[0].pageY - startY
       // 移动盒子：盒子原来的位置 + 手指移动的距离
       this.style.left = x + moveX + 'px'
       this.style.top = y + moveY + 'px'
       e.preventDefault() // 阻止屏幕滚动的默认行为
     })
   </script>
   ```

##### 3.4.8.3 移动端轮播图

1. 图片索引：index，由于ul一开始就往右移动了一格，最左侧的复制最后一张图被隐藏，这张图没有索引

2. 轮播图片：

   1）ul>li放图片，第一张前复制最后一张图，最后一张图复制第一张图，共n+2张图

   2）在移动端中，装图片的li要用百分比表示，如有5张图，li宽度为20%，此时才能设置img宽度100%，不然图片会以ul宽度为参考溢出屏幕

   3）利用CSS3过渡+位移：transition、transform

   4）移动距离：var translatex = -index * w;

3. 无缝滚动：

   1）等图片滚动完毕后在判断，即过渡完判断

   2）监听过渡完成的事件：transitionend

   3）到最后一张图：若index>=ul.length-2，index恢复为0，取消transition='none'，translateX归位

   4）手指在第一张图往前划：若index<0，index恢复为ul.length-3，取消transition='none'，translateX归位

4. 圆点跟随：利用classList添加/删除类名选择器

   ```js
   ol.querySelector('.current').classList.remove('current')
   ol.children[index].classList.add('current')
   ```

5. 手指滑动轮播图：

   1）ul添加touchstart事件，获取手指初始X坐标，并停止计时器

   2）ul添加touchmove事件，获取手指移动距离，移动ul，并取消过渡效果transition

   3）e.preventDefault()：阻止滚动屏幕默认行为

   4）添加flag=false全局变量，只有当手指滑动事件发生后，使flag=ture，便于后面手指松开效果触发的判断

6. 手指离开图片回弹/跳转：

   1）ul添加touchend事件，判断盒子移动距离的绝对值Math.abs(moveX)

   * 大于某值：跳转
     * 右划往左走：moveX>0：index--
     * 左划往右走：moveX<0，index++
   * 小于某值：回弹
     * index不变
     * 利用CSS3过渡+位移：transition、transform

   2）利用flag判断是否为手指滑动了图片再触发事件，而不是滑动了其他地方

   3）重新启动定时器

```html
<!-- 焦点图模块 -->
<div class="focus">
  <ul>
    <li><img src="upload/focus3.jpg" alt="" /></li>
    <li><img src="upload/focus1.jpg" alt="" /></li>
    <li><img src="upload/focus2.jpg" alt="" /></li>
    <li><img src="upload/focus3.jpg" alt="" /></li>
    <li><img src="upload/focus1.jpg" alt="" /></li>
  </ul>
  <!-- 小圆点 -->
  <ol>
    <li class="current"></li>
    <li></li>
    <li></li>
  </ol>
</div>
```

```js
window.addEventListener('load', function () {
  // 1. 获取元素
  var focus = document.querySelector('.focus')
  var ul = focus.children[0]
  // 获得focus 的宽度
  var w = focus.offsetWidth
  var ol = focus.children[1]
  // 2. 利用定时器自动轮播图图片
  var index = 0
  var timer = setInterval(function () {
    index++
    var translatex = -index * w
    ul.style.transition = 'all .3s'
    ul.style.transform = 'translateX(' + translatex + 'px)'
  }, 2000)
  // 等着过渡完成之后，再去判断（监听过渡完成的事件：transitionend）
  ul.addEventListener('transitionend', function () {
    // 无缝滚动
    if (index >= 3) {
      index = 0
      // console.log(index);
      // 去掉过渡效果，这样让的ul快速的跳到目标位置
      ul.style.transition = 'none'
      // 利用最新的索引号乘以宽度 去滚动图片
      var translatex = -index * w
      ul.style.transform = 'translateX(' + translatex + 'px)'
    } else if (index < 0) {
      index = 2
      ul.style.transition = 'none'
      // 利用最新的索引号乘以宽度去滚动图片
      var translatex = -index * w
      ul.style.transform = 'translateX(' + translatex + 'px)'
    }
    // 3. 小圆点跟随变化
    // 把ol里面li带有current类名的选出来去掉类名 remove
    ol.querySelector('.current').classList.remove('current')
    // 让当前索引号的小li，加上 current（add）
    ol.children[index].classList.add('current')
  })

  // 4. 手指滑动轮播图
  // 触摸元素 touchstart： 获取手指初始坐标
  var startX = 0
  var moveX = 0 // 后面会使用这个移动距离所以要定义一个全局变量
  var flag = false
  ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX
    // 手指触摸的时候就停止定时器
    clearInterval(timer)
  })
  // 移动手指 touchmove：计算手指的滑动距离，并移动盒子
  ul.addEventListener('touchmove', function (e) {
    // 计算移动距离
    moveX = e.targetTouches[0].pageX - startX
    // 移动盒子：  盒子原来的位置 + 手指移动的距离
    var translatex = -index * w + moveX
    // 手指拖动的时候，不需要动画效果所以要取消过渡效果
    ul.style.transition = 'none'
    ul.style.transform = 'translateX(' + translatex + 'px)'
    flag = true // 如果用户手指移动过再去判断否则不做判断效果
    e.preventDefault() // 阻止滚动屏幕的行为
  })
  // 手指离开，根据移动距离去判断是回弹还是播放上一张下一张
  ul.addEventListener('touchend', function (e) {
    if (flag) {
      // (1) 如果移动距离大于50像素就播放上一张或者下一张
      if (Math.abs(moveX) > 50) {
        // 如果是右滑就是 播放上一张 moveX 是正值
        if (moveX > 0) {
          index--
        } else {
          // 如果是左滑就是 播放下一张 moveX 是负值
          index++
        }
        var translatex = -index * w
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)'
      } else {
        // (2) 如果移动距离小于50像素就回弹
        var translatex = -index * w
        ul.style.transition = 'all .1s'
        ul.style.transform = 'translateX(' + translatex + 'px)'
      }
    }
    // 手指离开的时候就重新开启定时器
    clearInterval(timer)
    timer = setInterval(function () {
      index++
      var translatex = -index * w
      ul.style.transition = 'all .3s'
      ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000)
  })

  // 返回顶部模块制作
  var goBack = document.querySelector('.goBack')
  var nav = document.querySelector('nav')
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= nav.offsetTop) {
      goBack.style.display = 'block'
    } else {
      goBack.style.display = 'none'
    }
  })
  goBack.addEventListener('click', function () {
    window.scroll(0, 0)
  })
})
```

##### 3.4.8.4 视频插件

1. `zy.media.js`：可以解决不同浏览器之间视频播放器样式不同的情况

   ```html
   <style type="text/css">
     #modelView {
       background-color: #dddddd;
       z-index: 0;
       opacity: 0.7;
       height: 100%;
       width: 100%;
       position: relative;
     }
     .playvideo {
       padding-top: auto;
       z-index: 9999;
       position: relative;
       width: 300px;
       height: 200px;
     }
     .zy_media {
       z-index: 999999999;
     }
   </style>
   <link rel="stylesheet" href="zy.media.min.css" />
       
   <div class="playvideo">
     <div class="zy_media">
       <video data-config='{"mediaTitle": "测试视频--视频"}'>
         <source src="mov.mp4" type="video/mp4" />
         您的浏览器不支持HTML5视频
       </video>
     </div>
     <div id="modelView">&nbsp;</div>
   </div>
   <script src="zy.media.min.js"></script>
   <script>
     zymedia('video', {
       autoplay: true,
     })
   </script>
   ```

------

## 第4章 jQuery

> 官网：[jquery.com](https://jquery.com/)

### 4.1 jQuery基本概念

#### 4.1.1 jQuery简介

1. JS库：是一个封装好的特定的集合（方法和函数），如animate、hide、show等
2. 常见的JS库：jQuery、Prototype、YUI、Dojo、Ext JS、移动端的zepto
3. jQuery的意思是查询JS库，把JS中的DOM操作进行了封装，可以快速查询使用里面的功能

------

#### 4.1.2 入口函数

1. 作用：等待页面DOM加载完毕执行代码，相当于DOMContentLoaded

2. 顶级对象` $`：`$`是jQuery的别称，可以用jQuery代替`$`符号，`$`也是jQuery的顶级对象，相当于window

3. 语法：`$(document).ready(function(){...})`，`$(function() { ... })`

   ```js
   // 等着页面DOM加载完毕再去执行js代码（以下三种写法等价）
   $(document).ready(function () {
     ...
   })
   
   $(function () {
     ...
   })
   
   jQuery(function () {
     ...
   })
   ```

4. 多库共存：

   1）若`$`符号冲突，使用jQuery代替`$`

   ```js
   // 定义一个$()函数
   function $(ele) {
     return document.querySelector(ele)
   }
   console.log($('div'))
   jQuery.each()
   ```

   2）noConflick()：让jquery释放对`$`的控制权，自定义一个符号或名称

   ````js
   // 用￥代替$
   var ￥ = $.noConflict()
   ````

------

#### 4.1.3 jQuery对象

1. DOM对象：用原生JS获取的对象，如：`document.querySelector('div')`，只能使用原生JS的属性和方法

2. jQuery对象：用jQuery方式获取过来的对象，利用`$`包装DOM元素（w.fn.init(n)），如：`$(div)`，只能使用 jQuery方法

   ```js
   // 1. DOM 对象：用原生js获取过来的对象就是DOM对象
   var myDiv = document.querySelector('div') // myDiv 是DOM对象
   var mySpan = document.querySelector('span') // mySpan 是DOM对象
   console.dir(myDiv)
   
   // 2. jQuery对象：用jquery方式获取过来的对象是jQuery对象。 本质：通过$把DOM元素进行了包装
   $('div') // $('div')是一个jQuery 对象
   $('span') // $('span')是一个jQuery 对象
   console.dir($('div'))
   
   // 3. jQuery 对象只能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 属性和方法
   myDiv.style.display = 'none'
   myDiv.hide() // myDiv是一个dom对象不能使用 jquery里面的hide方法
   $('div').style.display = 'none' // 这个$('div')是一个jQuery对象不能使用原生js的属性和方法
   ```

3. DOM转JQ：

   1）DOM对象：`$('element')`，里面有引号

   2）用原生JS获取来的DOM对象：`$(object)`，里面没有引号

   ```js
   <video src="mov.mp4" muted></video>
   <script>
     // (1) 直接获取视频，得到就是jQuery对象
     $('video')
     // (2) 已经使用原生js获取过来DOM对象
     var myvideo = document.querySelector('video')
     $(myvideo)
   </script>
   ```

4. JQ转DOM：

   1）`$('element')[index]`

   2）`$('element').get(index)`

   ```js
   <video src="mov.mp4" muted></video>
   <script>
     // play()方法只有原生DOM才能使用，需要把jQuery对象转为DOM
     $('video')[0].play()
     $('video').get(0).play()
   </script>
   ```

------

#### 4.1.4 jQuery方法

1. `index()`：获取当前元素的索引值

   1）如果只有一层嵌套，`$(this).index()`可以获取当前元素索引

   ```html
   <div>
     <a href="#">1</a>
     <a href="#">2</a>
     <a href="#">3</a>
   </div>
   <script>
     $('div a').click(function () {
       console.log($(this).index())
     })
   </script>
   ```

   2）如果有多层嵌套，`$(this).index()`无法获取当前元素索引，返回值0

   ```html
   <ul>
     <li><a href="#">a</a></li>
     <li><a href="#">b</a></li>
     <li><a href="#">c</a></li>
   </ul>
   <script>
     $('ul a').click(function () {
       console.log($(this).index())
     })
   </script>
   ```

2. `toFixed(n)`：保留n位小数

3. `hover([over,] out)`：鼠标事件

   1）第一个位置over（可选）：相当于mouseenter触发的函数

   2）第二个位置out：相当于mouseleave触发的函数

   3）注意：如果里面只写一个函数，鼠标经过、离开都会触发这个函数

4. `change(fn{...})`：表单事件，checkbox中checked属性发生变化的事件

   ```js
   $('input').change(function () {
     console.log($(this).prop('checked'))
   })
   ```

------

### 4.2 jQuery API

#### 4.2.1 jQuery选择器

> 语法：`$("选择器")`

##### 4.2.1.1 基础选择器

1. ID选择器：`$("#id")`

2. 全选择器：`$("*")`

3. 类选择器：`$(".class")`

4. 标签选择器：`$("div")`

5. 并集选择器：`$("div,p,li")`

6. 交集选择器：`$("li.current")`

7. 子代选择器：`$("ul>li")`，选中最近一级子元素

8. 后代选择器：`$("ul li")`，选中全部子元素

   ```html
   <!--案例：下拉菜单-->
   <ul class="nav">
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
       </ul>
     </li>
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
       </ul>
     </li>
   </ul>
   <script>
     $(function () {
       // 鼠标经过
       $('.nav>li').mouseover(function () {
         $(this).children('ul').show()
       })
       // 鼠标离开
       $('.nav>li').mouseout(function () {
         $(this).children('ul').hide()
       })
     })
   </script>
   ```

##### 4.2.1.2 筛选选择器

1. `:first`：获取第一个元素，例：`$("li:first")`

2. `:last`：获取最后一个元素，例：`$("li:last")`

3. `:eq(index)`：获取到的元素中索引号为index的元素，例：`$("li:eq(2)")`

4. `:odd`：获取到的元素中索引号为奇数的元素，例：`$("li:odd")`

5. `:even`：获取到的元素中索引号为偶数的元素，例：`$("li:even"):checked`：获取被选中的元素（如应用在checkbox）

   ```js
   <ul>
     <li>多个里面筛选几个</li>
     <li>多个里面筛选几个</li>
     <li>多个里面筛选几个</li>
     <li>多个里面筛选几个</li>
   </ul>
   <ol>
     <li>多个里面筛选几个</li>
     <li>多个里面筛选几个</li>
     <li>多个里面筛选几个</li>
     <li>多个里面筛选几个</li>
   </ol>
   <script>
     $(function () {
       $('ul li:first').css('color', 'red')
       $('ul li:eq(2)').css('color', 'blue')
       $('ol li:odd').css('color', 'skyblue')
       $('ol li:even').css('color', 'pink')
     })
   </script>
   ```

##### 4.2.1.3 筛选方法

1. `parent()`：查找最近一级父元素，例：`$("li").parent()`

   ```js
   // 如果有多个嵌套祖先，可以在parent()中指定祖先类名进行查找
   <div class="one">
     <div class="two">
       <div class="three">
         <div class="four">我不容易</div>
       </div>
     </div>
   </div>
   <script>
     console.log($('.four').parent().parent().parent())
     console.log($('.four').parents())
     console.log($('.four').parents('.one'))
   </script>
   ```

2. `children(selector)`：查找最近一级子元素，例：`$("ul").children("li")`，相当于`$("ul>li")`

3. `find(selector)`：后代选择器，包含所有孩子，例：`$("ul").find("li")`，相当于`$("ul li")`

   ```js
   <div class="one">
     <div class="two">
       <div class="three">
         <div class="four">我不容易</div>
       </div>
     </div>
   </div>
   <script>
     // 查找最近一级子元素
     console.log($('.one').children('div'))
     // 后代选择器，包含所有孩子
     console.log($('.one').find('div'))
   </script>
   ```

4. `siblings(selector)`：查找兄弟节点，不包括自身，例：`$(".first").siblings("li")`

   ```html
   // 应用：排他思想
   <button>快速</button>
   <button>快速</button>
   <button>快速</button>
   <script>
     $(function () {
       // 1. 隐式迭代，给所有的按钮都绑定了点击事件
       $('button').click(function () {
         // 2. 当前的元素变化背景颜色
         $(this).css('background', 'pink')
         // 3. 其余的兄弟去掉背景颜色
         $(this).siblings('button').css('background', '')
       })
     })
   </script>
   ```

5. `nextAll([expr])`：查找当前元素之后所有的同辈元素，例：`$(".first").nextAll()`

6. `prevtAll([expr])`：查找当前元素之前所有的同辈元素，例：`$(".last").prevtAll()`

7. `hasClass(class)`：检查当前元素是否含有某个特定类，返回true，例：`$("div").hasClass("protected")`

   ```html
   <div class="current">俺有current</div>
   <div>俺没有current</div>
   <script>
     $(function () {
       // 判断是否有某个类名
       console.log($('div:first').hasClass('current'))
       console.log($('div:last').hasClass('current'))
     })
   </script>
   ```

8. `eq(index)`：等同于:eq(index)，例：`$("li").eq(2)`，相当于`$("li:eq(2)")`

   ```html
   <ul>
     <li>我是ol 的li</li>
     <li>我是ol 的li</li>
     <li>我是ol 的li</li>
   </ul>
   <script>
     $(function () {
       var index = 2
       // (1) 可以利用选择器的方式选择
       $('ul li:eq(2)').css('color', 'blue')
       $('ul li:eq(' + index + ')').css('color', 'blue')
       // (2) 可以利用选择方法的方式选择（更推荐这种写法）
       $('ul li').eq(2).css('color', 'blue')
       $('ul li').eq(index).css('color', 'blue')
     })
   </script>
   ```

   

------

#### 4.2.2 jQuery样式操作

> 隐式迭代：遍历内部DOM元素的过程，不再需要for循环修改样式了

##### 4.2.2.1 CSS方法

1. 只写属性名，返回属性值：`$('element').css('属性')`

2. 修改单个样式：`$('element').css('属性', '值')`

   1）属性名一定要加引号

   2）属性值如果是数字不用加引号和单位

   ```js
   $("div").css("background", "pink")
   ```

3. 以对象形式修改多个样式：`$('element').css({属性1:值1, 属性2:值2, ...})`

   1）属性名不用加引号，复合属性必须用驼峰命名法

   2）属性值如果不是数字需要加引号
   
   ```js
   $('div').css({
     width: 400,
     height: 400,
     backgroundColor: 'red',
   })
   ```

##### 4.2.2.2 类样式方法

* 里面写的类名不用加“.”

1. 添加类：`$("element").addClass("classname")`,不影响原类名，类似JS的classList操作，而原生JS的element.className会覆盖原类名

2. 删除类：`$("element").removeClass("classname")`

3. 切换类：`$("element").toggleClass("classname")`，若类名存在则删除，若类名不存在则添加上

   ```js
   <style>
     div {
       width: 150px;
       height: 150px;
       background-color: pink;
       margin: 100px auto;
       transition: all 0.5s;
     }
     .current {
       background-color: red;
       transform: rotate(360deg);
     }
   </style>
   
   <div class="current"></div>
   
   <script>
     $(function () {
       // 1. 添加类 addClass()
       $('div').click(function () {
         $(this).addClass("current");
       })
       // 2. 删除类 removeClass()
       $('div').click(function () {
         $(this).removeClass('current')
       })
       // 3. 切换类 toggleClass()
       $('div').click(function () {
         $(this).toggleClass('current')
       })
     })
   </script>
   ```

4. 案例：Tab栏切换

   ```html
   <!--案例：Tab栏切换-->
   <style>
     * {
       margin: 0;
       padding: 0;
     }
     li {
       list-style-type: none;
     }
     .tab {
       width: 978px;
       margin: 100px auto;
     }
     .tab_list {
       height: 39px;
       border: 1px solid #ccc;
       background-color: #f1f1f1;
     }
     .tab_list li {
       float: left;
       height: 39px;
       line-height: 39px;
       padding: 0 20px;
       text-align: center;
       cursor: pointer;
     }
     .tab_list .current {
       background-color: #c81623;
       color: #fff;
     }
     .item_info {
       padding: 20px 0 0 20px;
     }
     .item {
       display: none;
     }
   </style>
   
   <div class="tab">
     <div class="tab_list">
       <ul>
         <li class="current">商品介绍</li>
         <li>规格与包装</li>
         <li>售后保障</li>
         <li>商品评价（50000）</li>
         <li>手机社区</li>
       </ul>
     </div>
     <div class="tab_con">
       <div class="item" style="display: block">商品介绍模块内容</div>
       <div class="item">规格与包装模块内容</div>
       <div class="item">售后保障模块内容</div>
       <div class="item">商品评价（50000）模块内容</div>
       <div class="item">手机社区模块内容</div>
     </div>
   </div>
   <script>
     $(function () {
       // 1.点击上部的li，当前li添加current类，其余兄弟移除类
       $('.tab_list li').click(function () {
         // 链式编程操作
         $(this).addClass('current').siblings().removeClass('current')
         // 2.点击的同时，得到当前li的索引号
         var index = $(this).index()
         // 3.让下部里面相应索引号的item显示，其余的item隐藏
         $('.tab_con .item').eq(index).show().siblings().hide()
       })
     })
   </script>
   ```

------

#### 4.2.3 jQuery动态效果

##### 4.2.3.1 显示隐藏

1. `show(speed,callback)`：显示

2. `hide(speed,callback)`：隐藏

3. `togggle(speed,callback)`：切换

   ```html
   <style>
     div {
       width: 150px;
       height: 300px;
       background-color: pink;
     }
   </style>
   
   <button>显示</button>
   <button>隐藏</button>
   <button>切换</button>
   <div></div>
   
   <script>
     $(function () {
       $('button')
         .eq(0)
         .click(function () {
           $('div').show(1000, function () {
             alert(1)
           })
         })
       $('button')
         .eq(1)
         .click(function () {
           $('div').hide(1000, function () {
             alert(1)
           })
         })
       $('button')
         .eq(2)
         .click(function () {
           $('div').toggle(1000)
         })
     })
   </script>
   ```

##### 4.2.3.2 滑动

1. `slideDown(speed,callback)`：下滑，一般和display: none配合

2. `slideUp(speed,callback)`：上滑，一般和display: none配合

3. `slideToggle(speed,callback)`：切换滑动

   ```html
   <style>
     div {
       width: 150px;
       height: 300px;
       background-color: pink;
       display: none;
     }
   </style>
   
   <button>下拉滑动</button>
   <button>上拉滑动</button>
   <button>切换滑动</button>
   <div></div>
   
   <script>
     $(function () {
       $('button')
         .eq(0)
         .click(function () {
           // 下滑动 slideDown()
           $('div').slideDown()
         })
       $('button')
         .eq(1)
         .click(function () {
           // 上滑动 slideUp()
           $('div').slideUp(500)
         })
       $('button')
         .eq(2)
         .click(function () {
           // 滑动切换 slideToggle()
           $('div').slideToggle(500)
         })
     })
   </script>
   ```

   ```html
   <!--案例：下拉菜单-->
   <ul class="nav">
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
       </ul>
     </li>
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
       </ul>
     </li>
   </ul>
   <script>
     $(function () {
       $('.nav>li').hover(function () {
         // 注意：这里有个问题，如果鼠标快速滑动，会造成动画效果卡顿（后面可以用stop()解决）
         $(this).children('ul').slideToggle()
       })
     })
   </script>
   ```

##### 4.2.3.3 淡入淡出

1. `fadeIn(speed,callback)`：淡入

2. `fadeOut(speed,callback)`：淡出

3. `fadeToggle(speed,callback)`：淡入淡出切换

4. `fadeTo(speed,opacity,[easing],callback)`：修改透明度，速度和透明度参数必须写

   ```html
   <style>
     div {
       width: 150px;
       height: 300px;
       background-color: pink;
       display: none;
     }
   </style>
   
   <button>淡入效果</button>
   <button>淡出效果</button>
   <button>淡入淡出切换</button>
   <button>修改透明度</button>
   <div></div>
   
   <script>
     $(function () {
       $('button')
         .eq(0)
         .click(function () {
           // 淡入 fadeIn()
           $('div').fadeIn(1000)
         })
       $('button')
         .eq(1)
         .click(function () {
           // 淡出 fadeOut()
           $('div').fadeOut(1000)
         })
       $('button')
         .eq(2)
         .click(function () {
           // 淡入淡出切换 fadeToggle()
           $('div').fadeToggle(1000)
         })
       $('button')
         .eq(3)
         .click(function () {
           //  修改透明度 fadeTo() 这个速度和透明度要必须写
           $('div').fadeTo(1000, 0.5)
         })
     })
   </script>
   ```

   ```html
   <!--案例：图片高亮显示-->
   <style>
     * {
       margin: 0;
       padding: 0;
     }
     ul {
       list-style: none;
     }
     body {
       background: #000;
     }
     .wrap {
       margin: 100px auto 0;
       width: 630px;
       height: 394px;
       padding: 10px 0 0 10px;
       background: #000;
       overflow: hidden;
       border: 1px solid #fff;
     }
     .wrap li {
       float: left;
       margin: 0 10px 10px 0;
     }
     .wrap img {
       display: block;
       border: 0;
     }
   </style>
   <script>
     $(function () {
       //鼠标进入的时候，其他的li标签透明度：0.5
       $('.wrap li').hover(
         function () {
           $(this).siblings().stop().fadeTo(400, 0.5)
         },
         function () {
           // 鼠标离开，其他li 透明度改为 1
           $(this).siblings().stop().fadeTo(400, 1)
         }
       )
     })
   </script>
   <div class="wrap">
     <ul>
       <li><a href="#"><img src="images/01.jpg" alt="" /></a></li>
       <li><a href="#"><img src="images/02.jpg" alt="" /></a></li>
       <li><a href="#"><img src="images/03.jpg" alt="" /></a></li>
       <li><a href="#"><img src="images/04.jpg" alt="" /></a></li>
       <li><a href="#"><img src="images/05.jpg" alt="" /></a></li>
       <li><a href="#"><img src="images/06.jpg" alt="" /></a></li>
     </ul>
   </div>
   ```

##### 4.2.3.4 效果函数参数

1. speed：动画速度

   1）预设字符：slow、normal、fast

   2）毫秒数值：如1000，即为1秒

2. easing：切换效果

   1）swing：先快再慢（默认）

   2）linear：匀速运动

##### 4.2.3.4 动画停止排队

1. 语法：`stop()`

2. 作用：如果不加stop()，鼠标多次经过触发按钮的动画事件，会反复执行

3. 写到效果/动画函数的前面

   ```js
   <!--案例：下拉菜单-->
   <ul class="nav">
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
       </ul>
     </li>
     <li>
       <a href="#">微博</a>
       <ul>
         <li>
           <a href="">私信</a>
         </li>
       </ul>
     </li>
   </ul>
   <script>
     $(function () {
       $('.nav>li').hover(function () {
         // 解决了鼠标快速滑动，造成动画效果卡顿的问题
         $(this).children('ul').slideToggle()
       })
     })
   </script>
   ```

##### 4.2.3.5 自定义动画

1. 语法：`animate(params,[speed],[easing],[callback])`，params：想要更改的样式属性，以对象形式传递

   ```html
   <style>
     div {
       position: absolute;
       width: 200px;
       height: 200px;
       background-color: pink;
     }
   </style>
   <button>动起来</button>
   <div></div>
   <script>
     $(function () {
       $('button').click(function () {
         $('div').animate(
           {
             left: 500,
             top: 300,
             opacity: 0.4,
             width: 500,
           },
           500
         )
       })
     })
   </script>
   ```

2. 案例：王者荣耀手风琴效果

   ```html
   <style type="text/css">
     * {
       margin: 0;
       padding: 0;
     }
     img {
       display: block;
     }
     ul {
       list-style: none;
     }
     .king {
       width: 852px;
       margin: 100px auto;
       background: url(https://game.gtimg.cn/images/yxzj/web201605/top_banner/bg_header.png) no-repeat;
       overflow: hidden;
       padding: 10px;
     }
     .king ul {
       overflow: hidden;
     }
     .king li {
       position: relative;
       float: left;
       width: 69px;
       height: 69px;
       margin-right: 10px;
     }
     .king li.current {
       width: 224px;
     }
     .king li.current .big {
       display: block;
     }
     .king li.current .small {
       display: none;
     }
     .big {
       width: 224px;
       display: none;
     }
     .small {
       position: absolute;
       top: 0;
       left: 0;
       width: 69px;
       height: 69px;
       border-radius: 5px;
     }
   </style>
   <script src="js/jquery.min.js"></script>
   <script>
     $(function () {
       // 鼠标经过某个小li 有两步操作：
       $('.king li').mouseenter(function(){
         // 1.当前小li宽度变为 224px，同时里面的小图片淡出，大图片淡入
         $(this)
           .stop()
           .animate({
             width: 224,
           })
           .find('.small')
           .stop()
           .fadeOut()
           .siblings('.big')
           .stop()
           .fadeIn()
         // 2.其余兄弟小li宽度变为69px，小图片淡入，大图片淡出
         $(this)
           .siblings('li')
           .stop()
           .animate({
             width: 69,
           })
           .find('.small')
           .stop()
           .fadeIn()
           .siblings('.big')
           .stop()
           .fadeOut()
       })
     })
   </script>
     
   <div class="king">
     <ul>
       <li class="current">
         <a href="#">
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" alt="" class="small" />
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116-freehover.png" alt="" class="big" />
         </a>
       </li>
       <li>
         <a href="#">
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" alt="" class="small" />
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117-freehover.png" alt="" class="big" />
         </a>
       </li>
       <li>
         <a href="#">
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" alt="" class="small" />
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118-freehover.png" alt="" class="big" />
         </a>
       </li>
       <li>
         <a href="#">
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" alt="" class="small" />
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119-freehover.png" alt="" class="big" />
         </a>
       </li>
       <li>
         <a href="#">
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" alt="" class="small" />
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120-freehover.png" alt="" class="big" />
         </a>
       </li>
       <li>
         <a href="#">
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" alt="" class="small" />
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121-freehover.png" alt="" class="big" />
         </a>
       </li>
       <li>
         <a href="#">
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" alt="" class="small" />
           <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123-freehover.png" alt="" class="big" />
         </a>
       </li>
     </ul>
   </div>
   ```

------

#### 4.2.4 jQuery属性操作

1. `prop()`

   1）获取固有属性：`prop("属性")`

   2）设置固有属性：`prop("属性", "属性值")`

2. `attr()`

   1）获取自定义属性：`attr("属性")`，类似原生JS中的getAttribute()

   2）设置自定义属性：`attr("属性","属性值")`，类似原生JS中的setAttribute()

3. `data()`

   1）设置缓存属性：`data("属性","属性值")`，缓存在内存，浏览器刷新后消失

   2）获取缓存属性：`data("属性")`，注意：获取H5定义的“data-属性名”不用加“data-"
   
   ```js
   <a href="http://www.itcast.cn" title="都挺好">都挺好</a>
   <input type="checkbox" name="" id="" checked />
   <div index="1" data-index="2">我是div</div>
   <span>123</span>
   <script>
     $(function () {
       //1. prop()：获取元素固有的属性值
       console.log($('a').prop('href'))
       $('a').prop('title', '我们都挺好')
       $('input').change(function () {
         console.log($(this).prop('checked'))
       })
       
       // 2. attr()：获取元素的自定义属性
       console.log($('div').attr('index'))
       $('div').attr('index', 4)
       console.log($('div').attr('data-index'))
       
       // 3. data()：缓存在内存，浏览器刷新后消失
       $('span').data('uname', 'andy')	// 为span设置uname属性，值为andy
       console.log($('span').data('uname'))
       // 获取H5定义的“data-属性名”不用加“data-"
       console.log($('div').data('index'))
     })
   </script>
   ```

------

#### 4.2.5 jQuery文本属性

1. 获取设置文本内容：`text()`，相当于原生JS的innerText

2. 获取设置元素内容：`html()`，相当于原生JS的innerHTML

3. 获取设置表单值：val()，例：清空表单值：`$('element').val('')`

   ```js
   <div>
     <span>我是内容</span>
   </div>
   <input type="text" value="请输入内容" />
   <script>
     // 1. 获取设置元素内容 html()
     console.log($('div').html())
     $('div').html('123')
     // 2. 获取设置元素文本内容 text()
     console.log($('div').text())
     $('div').text('123')
     // 3. 获取设置表单值 val()
     console.log($('input').val())
     $('input').val('123')
   </script>
   ```

------

#### 4.2.6 jQuery元素操作

##### 4.2.6.1 遍历元素

1. 隐式迭代（默认）：只能统一修改样式，无法差异化

2. 语法1：`$("element").each(function(index, domEle){...})`

   1）index：索引号（JQ已自动编号）

   2）domEle：每个DOM元素对象，不是JQ对象

   ```html
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <script>
     $(function () {
       var sum = 0
       // each() 方法遍历元素
       var arr = ['red', 'green', 'blue']
       $('div').each(function (i, domEle) {
         // 第一个参数：索引号；第二个参数：dom元素对象
         $(domEle).css('color', arr[i])
         sum += parseInt($(domEle).text())
       })
       console.log(sum)
     })
   </script>
   ```

3. 语法2：`$.each($("element"),function(index, domEle){...})`

   1）区别：用于遍历、处理数据

   2）如果element是对象，index输出属性名，domEle输出属性值
   
   ```html
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <script>
     $(function () {
       // $.each()方法遍历元素
       $.each($('div'), function (i, ele) {
         console.log(i)
         console.log(ele)
       })
       $.each(arr, function (i, ele) {
         console.log(i)
         console.log(ele)
       })
       $.each(
         {
           name: 'andy',
           age: 18,
         },
         function (i, ele) {
           console.log(i)   // 属性名：name age
           console.log(ele) // 属性值：andy  18
         }
       )
     })
   </script>
   ```

##### 4.2.6.2 创建元素

1. `$("html标签")`：例：$("<li>我是后来创建的li</li>")

##### 4.2.6.3 添加元素

1. 内部添加：

   1）添加到最前面：`$("element").prepend(jQuery元素)`

   2）添加到最后面：`$("element").append(jQuery元素)`

2. 外部添加：

   1）添加到前面：`$("element").before(jQuery元素)`

   2）添加到后面：`$("element").after(jQuery元素)`

3. 删除元素：

   1）删除匹配的元素：`$("element").remove()`

   2）删除匹配的元素里面的子节点：`$("element").empty()`

   3）清空匹配的元素内容：`$("element").html("")`
   
   ```js
   <ul>
     <li>原先的li</li>
   </ul>
   <div class="test">我是原先的div</div>
   <script>
     $(function () {
       // 1. 创建元素
       var li = $('<li>我是后来创建的li</li>')
       // 2. 添加元素
       // (1) 内部添加
       $('ul').append(li) //内部添加并且放到内容的最后面
       $('ul').prepend(li) // 内部添加并且放到内容的最前面
       // (2) 外部添加
       var div = $('<div>我是后妈生的</div>')
       $('.test').after(div)
       $('.test').before(div)
       // 3. 删除元素
       $('ul').remove() // 可以删除匹配的元素 自杀
       $('ul').empty() // 可以删除匹配的元素里面的子节点 孩子
       $('ul').html('') // 可以删除匹配的元素里面的子节点 孩子
     })
   </script>
   ```

------

#### 4.2.7 jQuery大小操作

* 注意：若不填参数则返回数字值；若参数为数字则修改相应值，可以不写单位

1. `width()` / `height()`：元素本身宽、高

2. `innderWidth()` / `innerHeight()`：包含padding

3. `outerWidth()` / `outerHeight()`：包含padding、border

4. `outerWidth(ture)` / `outerHeight(ture)`：包含padding、border、margin

   ```html
   <style>
     div {
       width: 200px;
       height: 200px;
       background-color: pink;
       padding: 10px;
       border: 15px solid red;
       margin: 20px;
     }
   </style>
   <div></div>
   <script>
     $(function () {
       // 1. width() / height() 获取设置元素 width和height大小
       console.log($('div').width())
       // 2. innerWidth() / innerHeight()  获取设置元素 width和height + padding 大小
       console.log($('div').innerWidth())
       // 3. outerWidth()  / outerHeight()  获取设置元素 width和height + padding + border 大小
       console.log($('div').outerWidth())
       // 4. outerWidth(true) / outerHeight(true) 获取设置 width和height + padding + border + margin
       console.log($('div').outerWidth(true))
     })
   </script>
   ```

------

#### 4.2.8 jQuery位置操作

1. `offset()`：元素相对于文档的偏移坐标，与父级无关

   1）属性：top、left

   2）括号内填写数字可以修改数值

2. `position()`：元素相对于父级的偏移坐标，没有父级则以文档为参考

   1）属性：top、left

   2）只能获取，不能修改

   ```html
   <style>
     .father {
       width: 400px;
       height: 400px;
       background-color: pink;
       margin: 100px;
       overflow: hidden;
       position: relative;
     }
     .son {
       width: 150px;
       height: 150px;
       background-color: purple;
       position: absolute;
       left: 10px;
       top: 10px;
     }
   </style>
   <div class="father">
     <div class="son"></div>
   </div>
   <script>
     $(function () {
       // 1. offset：获取设置距离文档的位置（偏移）
       console.log($('.son').offset())		// {top: 200, left: 200}
       console.log($('.son').offset().top)	// 200
       $('.son').offset({
         top: 200,
         left: 200,
       })
       // 2. position：获取距离带有定位父级位置（偏移），如果没有带有定位的父级，则以文档为准
       // 这个方法只能获取不能设置偏移
       console.log($('.son').position())	// {top: 100, left: 100}
     })
   </script>
   ```

3. `scrollTop()` / `scrollLeft()`：元素被卷去的头部和左侧

   1）配合页面滚动事件：`$(window).scroll(function(){...})`

   2）页面被卷去的头部：`$(document).scrollTop()`

   3）返回顶部动画：`$("body, html").stop().animate({scrollTop:0})`

   ```html
   <style>
     body {
       height: 2000px;
     }
     .back {
       position: fixed;
       width: 50px;
       height: 50px;
       background-color: pink;
       right: 30px;
       bottom: 100px;
       display: none;
     }
     .container {
       width: 900px;
       height: 500px;
       background-color: skyblue;
       margin: 400px auto;
     }
   </style>
   
   <div class="back">返回顶部</div>
   <div class="container"></div>
   <script>
     $(function () {
       $(document).scrollTop(100)
       // 页面滚动事件
       var boxTop = $('.container').offset().top
       $(window).scroll(function () {
         console.log($(document).scrollTop())
         if ($(document).scrollTop() >= boxTop) {
           $('.back').fadeIn()
         } else {
           $('.back').fadeOut()
         }
       })
       // 返回顶部
       $('.back').click(function () {
         $('body, html').stop().animate({
           scrollTop: 0,
         })
       })
     })
   </script>
   ```
   
   ```js
   // 案例：电梯导航
   $(function () {
     // 当点击了小li，此时不需要执行，页面滚动事件里面的li的背景选择，添加current
     // 节流阀（互斥锁）
     var flag = true
     // 1.显示隐藏电梯导航
     var toolTop = $('.recommend').offset().top
     toggleTool()
     function toggleTool() {
       if ($(document).scrollTop() >= toolTop) {
         $('.fixedtool').fadeIn()
       } else {
         $('.fixedtool').fadeOut()
       }
     }
     $(window).scroll(function () {
       toggleTool()
       // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
       if (flag) {
         $('.floor .w').each(function (i, ele) {
           if ($(document).scrollTop() >= $(ele).offset().top) {
             console.log(i)
             $('.fixedtool li').eq(i).addClass('current').siblings().removeClass()
           }
         })
       }
     })
     // 2. 点击电梯导航页面可以滚动到相应内容区域
     $('.fixedtool li').click(function () {
       flag = false
       console.log($(this).index())
       // 当每次点击小li，就需要计算出页面要去往的位置
       // 选出对应索引号的内容区的盒子，计算它的.offset().top
       var current = $('.floor .w').eq($(this).index()).offset().top
       // 页面动画滚动效果
       $('body, html')
         .stop()
         .animate(
           {
             scrollTop: current,
           },
           function () {
             flag = true
           }
         )
       // 点击之后，让当前的小li添加current类名，姐妹移除current类名
       $(this).addClass('current').siblings().removeClass()
     })
   })
   ```

------

### 4.3 jQuery事件

#### 4.3.1 单事件注册

1. `$("element").事件动作(fn(){...})`：每次只能绑定一个事件

   ```js
   $('div').click(function () {
     $(this).css('background', 'purple')
   })
   ```

#### 4.3.2 事件处理: on()

1. 可以绑定多个事件处理程序

   1）语法：`$("element").on(events, [selector], fn)`

   ```js
   $('div').on({
     mouseenter: function () {
       $(this).css('background', 'skyblue')
     },
     click: function () {
       $(this).css('background', 'purple')
     },
     mouseleave: function () {
       $(this).css('background', 'blue')
     },
   })
   ```

   2）若多个事件处理方法相同可合并写

   ```js
   $('div').on('mouseenter mouseleave', function () {
     $(this).toggleClass('current')
   })
   ```

2. 可以实现事件委托/委派

   1）定义：把原来加在子元素身上的绑定事件绑在父元素身上

   2）注意：旧方法bind()、live()、delegate()已经被on()替代

   ```js
   // click绑定在ul上，但触发的对象是里面的li
   $('ul').on('click', 'li', function () {
     alert(11)
   })
   ```

3. 给未来动态创建的元素绑定事件

   1）绑定尚未创建的子元素：`$("ol").on("click", "li",fn{...} )`

   2）创建子元素：`var li = $("<li>我是后来创建的</li>")`

   3）添加子元素：`$("ol").append(li)`

   4）注意：此时$("ol li").click()是无效的，无法给动态创建的元素添加事件
   
   ```html
   <ol></ol>
   <script>
     // 错误写法：单事件注册无法给动态创建的元素添加事件
     // $('ol li').click(function () {
     //   alert(11)
     // })
     // 正确写法：事件处理on()
     $('ol').on('click', 'li', function () {
       alert(11)
     })
     var li = $('<li>我是后来创建的</li>')
     $('ol').append(li)
   </script>
   ```

   ```html
   <!--案例：微博发布效果-->
   <style>
     ul {
       list-style: none;
     }
     .box {
       width: 600px;
       margin: 100px auto;
       border: 1px solid #000;
       padding: 20px;
     }
     textarea {
       width: 450px;
       height: 160px;
       outline: none;
       resize: none;
     }
     ul {
       width: 450px;
       padding-left: 80px;
     }
     ul li {
       line-height: 25px;
       border-bottom: 1px dashed #cccccc;
       display: none;
     }
     input {
       float: right;
     }
     ul li a {
       float: right;
     }
   </style>
   
   <script>
     $(function () {
       // 1.点击发布按钮，动态创建一个小li，放入文本框的内容和删除按钮，并且加到ul中
       $('.btn').on('click', function () {
         var li = $('<li></li>')
         li.html($('.txt').val() + "<a href='javascript:;'> 删除</a>")
         $('ul').prepend(li)
         li.slideDown()
         $('.txt').val('')
       })
       // 2.点击删除按钮，可以删除当前的微博留言li
       $('ul').on('click', 'a', function () {
         // this是a, a的parent是li
         $(this)
           .parent()
           .slideUp(function () {
             $(this).remove()
           })
       })
     })
   </script>
   
   <div class="box" id="weibo">
     <span>微博发布</span>
     <textarea name="" class="txt" cols="30" rows="10"></textarea>
     <button class="btn">发布</button>
     <ul></ul>
   </div>
   ```

#### 4.3.3 单次触发: one()

1. `$("element").one(events,[selector],fn)`：只能触发一次事件

   ```js
   <p>我是P</p>
   <script>
     $(function () {
       // one()：只能触发事件一次
       $('p').one('click', function () {
         alert(11)
       })
     })
   </script>
   ```

#### 4.3.4 事件解绑: off()

* off()可以移除通过on()添加的事件处理程序

1. 解绑所有事件：`$("element").off()`

2. 解绑指定事件：`$("element").off(events)`

3. 解除事件委托：`$("element").off(events, [selector])`

   ```html
   <div></div>
   <ul>
     <li>我们都是好孩子</li>
     <li>我们都是好孩子</li>
     <li>我们都是好孩子</li>
   </ul>
   
   
   <script>
     $(function () {
       $('div').on({
         click: function () {
           console.log('我点击了')
         },
         mouseover: function () {
           console.log('我鼠标经过了')
         },
       })
       $('ul').on('click', 'li', function () {
         alert(11)
       })
       // 事件解绑 off
       $('div').off() 				// 解除div身上的所有事件
       $('div').off('click') 		// 解除div身上的点击事件
       $('ul').off('click', 'li')	// 解除ul身上的事件委托
     })
   </script>
   ```

#### 4.3.5 自动触发: trigger()

1. `$("element").事件()`：默认方法

2. `$("element").trigger("事件")`：触发元素的默认行为

3. `$("element").triggerHandler("事件")`：不会触发元素的默认行为，例：表单获得焦点后会有光标闪烁，可以用此方法取消光标闪烁

   ```html
   <div></div>
   <input type="text" />
   <script>
     $(function () {
       $('div').on('click', function () {
         alert(11)
       })
       // 自动触发事件
       // 1. 元素.事件()：会触发元素的默认行为
       $('div').click()
       // 2. 元素.trigger("事件")：会触发元素的默认行为
       $('div').trigger('click')
       // 3. 元素.triggerHandler("事件") ：不会触发元素的默认行为
       // 表单获得焦点后会有光标闪烁，可以用此方法取消光标闪烁
       $('input').triggerHandler('focus', function () {
         $(this).val('你好吗')
       })
     })
   </script>
   ```

#### 4.3.6 事件对象: event

1. `$("element").on( events,[selector],fn(event){...})`：使用方法与原生JS相同

   ```html
   <style>
     div {
       width: 100px;
       height: 100px;
       background-color: pink;
     }
   </style>
   <div></div>
   <script>
     $(function () {
       $(document).on('click', function () {
         console.log('点击了document')
       })
       $('div').on('click', function (event) {
         console.log('点击了div')
         event.stopPropagation()
       })
     })
   </script>
   ```

#### 4.3.7 对象拷贝: extend

1. 语法：`.extend([deep],target,object1,[objectN])`

2. 参数：

   1）deep：可选，默认false浅拷贝，true深拷贝

   * 浅拷贝：把原来对象里面的复杂数据类型地址拷贝给目标对象，修改目标对象也会同时修改原对象
   * 深拷贝：把里面的数据完全复制一份给目标对象，如果里面有不冲突的属性会合并到一起 

   2）target：要拷贝的目标对象

   3）object1：待拷贝到第一个对象的对象
   
   ```js
   var targetObj = {
     id: 0,
     msg: {
       sex: '男',
     },
   }
   var obj = {
     id: 1,
     name: 'andy',
     msg: {
       age: 18,
     },
   }
   // 1. 浅拷贝把原来对象里面的复杂数据类型地址拷贝给目标对象
   $.extend(targetObj, obj)
   console.log(targetObj) 	// 覆盖targetObj：{id: 1, msg: {age: 18}, name: 'andy'}
   targetObj.msg.age = 20
   console.log(targetObj) 	// {id: 1, msg: {age: 20}, name: 'andy'}
   console.log(obj) 		// 跟随targetObj变化：{id: 1, msg: {age: 20}, name: 'andy'}
   
   // 2. 深拷贝把里面的数据完全复制一份给目标对象，如果里面有不冲突的属性，会合并到一起
   $.extend(true, targetObj, obj)
   console.log(targetObj) 	// 覆盖targetObj：{id: 1, msg: {age: 18}, name: 'andy'}
   targetObj.msg.age = 20
   console.log(targetObj) 	// {id: 1, msg: {sex: '男', age: 20}, name: 'andy'}
   console.log(obj) 		// 不跟随targetObj变化：{id: 1, msg: {age: 18}, name: 'andy'}
   ```

------

### 4.4 jQuery插件

1. 网站：

   1）jQuery插件库：[www.jq22.com](www.jq22.com)

   2）jQuery之家：[www.htmleaf.com](www.htmleaf.com)

2. 瀑布流插件：[http://www.htmleaf.com/jQuery/pubuliuchajian](http://www.htmleaf.com/jQuery/pubuliuchajian)

3. 图片懒加载：[https://www.jq22.com/jquery-info11629](https://www.jq22.com/jquery-info11629)

   1）作用：页面滑动到可视区域再显示图片

   2）注意：此插件需要写到DOM元素的最后面

4. 全屏滚动：[github.com/alvarotrigo/fullPage.js](github.com/alvarotrigo/fullPage.js)
5. Bootstrap插件：[https://v3.bootcss.com/javascript/](https://v3.bootcss.com/javascript/)

------

