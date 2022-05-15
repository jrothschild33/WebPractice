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

   2）data：存储数据，数据供el所指定的容器去使用

   * 写法1：对象型：`data: { name:'尚硅谷' }`
   * 写法2：函数型（脚手架必用）：`data() { return { name:'尚硅谷', }}`

   ```js
   new Vue({
     el: '#root',
     data: {
       name: 'atguigu',
       address: '北京',
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

   * 语法：v-bind、v-model、v-for、v-text等等

   ```html
   <a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}学习1</a>
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

3. get函数(getter)：当有人读取对象的新增属性时，get函数(getter)就会被调用，且返回值就是新增属性的值

   ```js
   get() {
     console.log('有人读取age属性了')
     return number
   },
   ```

4. set函数(setter)：当有人修改对象的新增属性时，set函数(setter)就会被调用，且会收到修改的具体值

   ```js
   set(value) {
     console.log('有人修改了age属性，且值是', value)
     number = value
   },
   ```

##### 1.2.2.2 Vue的数据代理

1. 目的：通过vm对象来代理data对象中属性的操作（读/写）

2. 原理：

   1）通过`Object.defineProperty()`把data对象中所有属性添加到`vm`上

   2）为每一个添加到vm上的属性，都指定一个getter/setter

   3）在getter/setter内部去操作（读/写）data中对应的属性

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

   ```html
   <a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>
   <script>
     new Vue({
       el: '#root',
       data: {
         name: '尚硅谷',
       },
       methods: {
         showInfo(e) {
           alert('同学你好！')
           console.log(e.target)
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
   </script>
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

   ```html
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

------

### 1.4 计算属性 computed

1. 定义：要用的属性不存在，要通过已有属性计算得来

2. 与method区别：

   1）内部有缓存机制（复用），效率更高、调试方便

   2）如果多次调用，无需多次get，直接读取缓存，除非数据发生了变化，再重新get一次

   ```html
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

   ```js
   watch: {
     isHot: {
       immediate:true, //初始化时让handler调用一下
       deep:true, //深度监视
       handler(newValue, oldValue) {
         console.log('isHot被修改了', newValue, oldValue)
       },
     },
   },
   ```

   2）通过vm.$watch监视

   ```js
   vm.$watch('isHot', {
     immediate: true, //初始化时让handler调用一下
     deep: true, //深度监视
     handler(newValue, oldValue) {
       console.log('isHot被修改了', newValue, oldValue)
     },
   })
   ```

3. 参数：

   1）`immediate`：布尔值，默认false，初始化时是否让handler调用一下

   2）`handler(newValue,oldValue){...}`：回调函数，当监视的属性改变时被调用

   3）`deep`: true，深度监视模式，注意：如果不用deep，也可以单写 obj.attr，但很麻烦

4. 简写：`attibute(newValue, oldValue){...}`，注意：无法配置immediate、deep等参数

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

   ```js
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
   ```

------

### 1.6 绑定样式

#### 1.6.1 class样式

1. 字符串写法：类名不确定，要动态获取

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

2. 对象写法：要绑定多个样式，个数不确定，名字也不确定

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
   
3. 数组写法：要绑定多个样式，个数确定，名字也确定，但不确定用不用

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

#### 1.6.2 style样式

1. `:style="{fontSize: xxx}"`：其中xxx是动态值

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
   
2. `:style="[a,b]"`：其中a、b是样式对象

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

