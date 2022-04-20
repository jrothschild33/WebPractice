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

## 第2章 JavaScript基础

### 2.1 JS变量

1. 变量的使用：

   1)方法1：声明变量：var age，计算机自动分配内存空间，给变量赋值：age = 18;

   2）方法2：变量初始化，例：var age=18;

   3）方法3：不声明直接赋值使用，age = 18;

   4）多变量赋值：可以直接赋值多个变量，用逗号隔开

   ```js
   var age = 18,
       address = '火影村',
       gz = 2000;
   ```

2. 变量命名规范：

   1）由字母、数字、【下换线_】、【美元符号$】构成，下划线和美元符号都可以开头

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

### 2.5 数组Array

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

