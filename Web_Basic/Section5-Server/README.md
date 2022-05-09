# Server

## 第1章 Ajax

### 1.1 Ajax基础知识

#### 1.1.1 URL

1. 定义：统一资源定位符（Uniform Resource Locator），互联网上每个文件都有唯一的URL

2. 语法：`protocol: // host [:port] / path / [?query] #fragment`

   1）protocol：通信协议，如http、https、maito等

   2）host：主机（域名）

   3）port：端口号，可选，省略时使用方案默认端口，如http默认端口为80

   4）path：路径，表示主机上的一个目录或文件地址

   5）query：参数，以键值对的形式通过&符号分隔开来

   6）fragment：片段，#后面内容常见于链接锚点

#### 1.1.2 客户端与服务器

1. 客户端与服务器通信（三次握手）

   1）请求：客户端请求服务器。打开浏览器输入网址，向服务器发起资源请求

   2）处理：服务器处理请求。服务器收到客户端的资源请求；服务器内部处理请求，找到相应资源

   3）响应：服务器响应客户端。服务器把找到的资源发送给客户端

2. Chrome开发者工具分析通信过程

   1）Ctrl+Shift+I：开发者工具面板

   2）Network网络，Doc标签，刷新页面

3. 网页中请求数据

   1）XMLHttpRequest对象：简称XHR，是浏览器提供的JS成员，通过它可以请求服务器上的数据资源

   2）语法：`var xhrObj = new XMLHttpRequest()`

   3）get请求：获取服务器资源，根据URL地址从服务器获取HTML、CSS、JS、图片、数据资源等

   4）post请求：向服务器提交数据，提交登录信息、注册信息、用户信息等

#### 1.1.3 Ajax简介

1. 全称：Asynchronous Javascript And XML（异步JS和XML）

2. 定义：在网页中利用XMLHttpRequest对象和服务器进行数据交互的方式

3. 应用场景

   1）用户注册：动态监测用户名是否被占用

   2）搜索提示：输入关键字，动态加载搜索提示列表

   3）分页显示：点击页码值，动态刷新表格中的数据

   4）数据操作：增删改查，进行数据交互

#### 1.1.4 数据接口

1. 定义：使用Ajax请求数据时，被请求的URL地址称为接口，每个接口必须有【请求方式】
2. 测试工具：[PostMan](https://www.getpostman.com/downloads/)

------

### 1.2 HTTP协议

#### 1.2.1 HTTP协议简介

1. 通信协议（Communication Protocol）：通信的双方完成通信所必须遵守的规则和约定

2. 通信协议三要素：

   1）通信的主体：服务器、客户端浏览器

   2）通信的内容：数据文本

   3）通信的方式：响应

3. 超文本传输协议（HyperText Transfer Protocol，HTTP 协议） ：网页内容传输协议

   1）规定了客户端与服务器之间进行网页内容传输时，所必须遵守的传输格式

   2）采用【请求/响应】的交互模型

   3）客户端：以HTTP协议要求的格式把数据【提交】到服务器

   4）服务器：以HTTP协议要求的格式把内容【响应】给客户端

#### 1.2.2 HTTP请求

> * HTTP 请求：客户端发起的请求
> * HTTP 请求消息（请求报文）：客户端发送到服务器的消息

![HTTP请求消息结构](.\src\HTTP请求消息结构.png)

1. 请求行（request line）

   1）由 请求方式、URL 和 HTTP 协议版本 3 个部分组成，使用空格隔开

   2）例：POST /api/post HTTP/1.1

2. [请求头部（header）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)：描述客户端的基本信息并告知服务器

   1）Host：要请求的服务器域名

   2）Connection：客户端与服务器的连接方式(close 或 keepalive)

   3）Content-Length：描述请求体的大小

   4）Accept：客户端可识别的响应内容类型列

   5）User-Agent：产生请求的浏览器类型

   6）Content-Type：发送到服务器的数据类型

   7）Accept-Encoding：客户端可接收的内容压缩编码形式

   8）Accept-Language：用户期望获得的自然语言的优先顺序

3. 空行：

   1）最后一个请求头字段的后面是一个空行，通知服务器请求头部至此结束

   2）请求消息中的空行，用来分隔请求头部与请求体

4. 请求体：

   1）存放通过 POST 方式提交到服务器的数据

   2）注意：只有 POST 请求才有请求体，GET 请求没有请求体

#### 1.2.3 HTTP响应

> HTTP响应消息（响应报文）：服务器响应给客户端的消息内容
>

![HTTP响应](.\src\HTTP响应.png)

1. 状态行

   1）由 HTTP 协议版本、状态码、状态码的描述文本 3 个部分组成，用空格隔开

   2）例：HTTP/1.1 200 OK

2. [响应头部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)：用来描述服务器的基本信息，由多行【键/值】组成，每行的键和值之间用英文的冒号分隔

3. 空行：

   1）最后一个响应头部字段结束之后，会跟一个空行，用来通知客户端响应头部至此结束

   2）响应消息中的空行，用来分隔响应头部与响应体

4. 响应体：存放服务器响应给客户端的资源内容

#### 1.2.4 HTTP请求方法

> 用来表明要对服务器上的资源执行的操作，常用GET、POST

1. `GET`：(查询)发送请求来获得服务器上的资源，请求体中不会包含请求数据，请求数据放在协议头中
2. `POST`：(新增)向服务器提交资源（例如提交表单或上传文件），数据被包含在请求体中提交给服务器
3. `PUT`：(修改)向服务器提交资源，并使用提交的新资源，替换掉服务器对应的旧资源
4. `DELETE`：(删除)请求服务器删除指定的资源
5. `HEAD`：请求一个与 GET 请求的响应相同的响应，但没有响应体
6. `OPTIONS`：获取http服务器支持的http请求方法，允许客户端查看服务器的性能，比如ajax跨域时的预检等
7. `CONNECT`：建立一个到由目标资源标识的服务器的隧道
8. `TRACE`：沿着到目标资源的路径执行一个消息环回测试，主要用于测试或诊断
9. `PATCH`：是对 PUT 方法的补充，用来对已知资源进行局部更新 

#### 1.2.5 HTTP响应状态代码

> HTTP Status Code，属于 HTTP 协议的一部分，用来标识响应的状态，随着响应消息一起被发送至客户端浏览器。由3个十进制数字组成，第1个十进制数字定义了状态码的类型，后2个数字用来对状态码进行细分。

1. `1**`：信息，服务器收到请求，需要请求者继续执行操作（少见）

2. `2**`：成功，操作被成功接收并处理

   1）200：OK，请求成功。一般用于 GET 与 POST 请求

   2）201：Created，已创建。成功请求并创建了新的资源，通常用于 POST 或 PUT 请求

3. `3**`：重定向，需要进一步的操作以完成请求

   1）301：Moved Permanently，永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替

   2）302：Found，临时移动。与301类似，但资源只是临时被移动。客户端应继续使用原有URI

   3）304：Not Modified，未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源（响应消息中不包含响应体），客户端通常会缓存访问过的资源

4. `4**`：客户端错误，请求包含语法错误或无法完成请求

   1）400：Bad Request，语义有误，当前请求无法被服务器理解，除非进行修改，否则客户端不应该重复提交这个请求；请求参数有误

   2）401：Unauthorized，当前请求需要用户验证

   3）403：Forbidden，服务器已经理解请求，但是拒绝执行它

   4）404：Not Found，服务器无法根据客户端的请求找到资源（网页）

   5）408：Request Timeout，请求超时。服务器等待客户端发送的请求时间过长超时

5. `5**`：服务器错误，服务器在处理请求的过程中发生了错误

   1）500：Internal Server Error，服务器内部错误，无法完成请求

   2）501：Not Implemented，服务器不支持该请求方法，无法完成请求。只有 GET 和 HEAD 请求方法是要求每个服务器必须支持的，其它请求方法在不支持的服务器上会返回501

   3）503：Service Unavailable，由于超载或系统维护，服务器暂时的无法处理客户端的请求

------

### 1.3 jQuery中的Ajax

1. 定义：浏览器中提供的XMLHttpRequest用法复杂，jQuery对其进行了封装，降低了Ajax的使用难度

2. 查看响应数据：F12-网络-XHR-响应

#### 1.3.1 Ajax方法

##### 1.3.1.1 GET请求

1. `$.get(url,[data],[callbkack])`：从服务器获取数据

2. 参数：

   1）`url`：string，资源地址

   2）`data`：object，请求资源期间要携带的参数

   3）`callback`：function，请求成功时的回调函数，可通过事件对象e返回数据

   ```js
   $(function () {
     $('#btnGETINFO').on('click', function () {
       $.get('http://www.liulongbin.top:3006/api/getbooks', { id: 1 }, function (res) {
         console.log(res)
       })
     })
   })
   ```

##### 1.3.1.2 POST请求

1. `$.post(url,[data],[callbkack])`：将数据提交到服务器

   ```js
   $(function () {
     $('#btnPOST').on('click', function () {
       $.post(
         'http://www.liulongbin.top:3006/api/addbook',
         {
           bookname: '水浒传',
           author: '施耐庵',
           publisher: '天津图书出版社',
         },
         function (res) {
           console.log(res)
         }
       )
     })
   })
   ```

##### 1.3.1.3 Ajax请求

1. `$.ajax({type/method, url, data, success: function(res){...})`：get和post请求均可

2. 参数：

   1）`type`：string，请求的方式，GET、POST

   2）`url`：string，资源地址

   3）`data`：object，请求要携带的数据

   4）`success：function(res) {...}`，请求成功后的回调函数

   ```js
   // GET请求
   $(function () {
     $('#btnGET').on('click', function () {
       $.ajax({
         type: 'GET',
         url: 'http://www.liulongbin.top:3006/api/getbooks',
         data: {
           id: 1,
         },
         success: function (res) {
           console.log(res)
         },
       })
     })
   })
   
   // POST请求
   $(function () {
     $('#btnPOST').on('click', function () {
       $.ajax({
         type: 'POST',
         url: 'http://www.liulongbin.top:3006/api/addbook',
         data: {
           bookname: '史记',
           author: '司马迁',
           publisher: '上海图书出版社',
         },
         success: function (res) {
           console.log(res)
         },
       })
     })
   })
   ```

##### 1.3.1.4 服务器响应机制

1. 如果成功：执行`success`回调函数

2. 如果失败：执行`error`回调函数

3. 无论成功或失败：执行`complete`函数

4. 服务器返回数据：`res.responseJSON`

   ```js
   $(function () {
     $('#btnGET').on('click', function () {
       $.ajax({
         type: 'GET',
         url: 'http://www.liulongbin.top:3006/api/getbooks',
         data: {
           id: 1,
         },
         success: function (res) {
           console.log(res)
         },
         // 不论成功还是失败，最终都会调用 complete 回调函数
         complete: function (res) {
           // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
           if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
             // 1. 强制清空 token
             localStorage.removeItem('token')
             // 2. 强制跳转到登录页面
             location.href = '/login.html'
           }
         },
       })
     })
   })
   ```

##### 1.3.1.5 案例：聊天机器人

1. 通过`<audio>`播放语音：

   1）原理：只要为 audio 指定了新的 src 属性，而且指定了 autoplay，语音就会自动播放

   2）html：`<audio src="" id="voice" autoplay style="display: none"></audio>`

   3）JS：`$('#voice').attr('src', res.voiceUrl)`

2. 使用回车键发送消息：给文本输入框绑定keyup事件，当e.keyCode===13时触发点击按钮事件

   ```js
   // 为文本框绑定 keyup 事件
   $('#ipt').on('keyup', function (e) {
     if (e.keyCode === 13) {
       $('#btnSend').click()
     }
   })
   ```

3. 案例完整代码

   ```html
   <head>
     <link rel="stylesheet" href="css/reset.css" />
     <link rel="stylesheet" href="css/main.css" />
     <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
     <script type="text/javascript" src="js/jquery-ui.min.js"></script>
     <script type="text/javascript" src="js/jquery.mousewheel.js"></script>
     <title>聊天机器人</title>
   </head>
   <div class="wrap">
     <!-- 头部 Header 区域 -->
     <div class="header">
       <h3>小思同学</h3>
       <img src="img/person01.png" alt="icon" />
     </div>
     <!-- 中间 聊天内容区域 -->
     <div class="main">
       <ul class="talk_list" style="top: 0px" id="talk_list">
         <li class="left_word">
           <img src="img/person01.png" />
           <span>嗨，最近想我没有？</span>
         </li>
         <!-- <li class="right_word">
           <img src="img/person02.png" />
           <span>可想你了！</span>
         </li> -->
       </ul>
       <div class="drag_bar" style="display: none">
         <div class="drager ui-draggable ui-draggable-handle" style="display: none; height: 412.628px"></div>
       </div>
     </div>
     <!-- 底部 消息编辑区域 -->
     <div class="footer">
       <img src="img/person02.png" alt="icon" />
       <input type="text" placeholder="说点什么吧..." class="input_txt" id="ipt" />
       <input type="button" value="发 送" class="input_sub" id="btnSend" />
     </div>
   </div>
   <!-- 注意：只要为 audio 指定了新的 src 属性，而且指定了 autoplay，那么，语音就会自动播放 -->
   <audio src="" id="voice" autoplay style="display: none"></audio>
   <script type="text/javascript" src="js/scroll.js"></script>
   <script src="./js/chat.js"></script>
   ```
   ```js
   $(function () {
     // 初始化右侧滚动条
     // 这个方法定义在scroll.js中
     resetui()
   
     // 为发送按钮绑定鼠标点击事件
     $('#btnSend').on('click', function () {
       var text = $('#ipt').val().trim()
       if (text.length <= 0) {
         return $('#ipt').val('')
       }
       // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
       $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
       $('#ipt').val('')
       // 重置滚动条的位置，是第三方插件scroll.js中的方法
       resetui()
       // 发起请求，获取聊天内容
       getMsg(text)
     })
   
     // 获取聊天机器人发送回来的消息
     function getMsg(text) {
       $.ajax({
         method: 'GET',
         url: ' http://www.liulongbin.top:3006/api/robot',
         data: {
           spoken: text,
         },
         success: function (res) {
           // console.log(res)
           if (res.message === 'success') {
             // 接收聊天消息
             var msg = res.data.info.text
             $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
             // 重置滚动条的位置，是第三方插件scroll.js中的方法
             resetui()
             // 调用 getVoice 函数，把文本转化为语音
             getVoice(msg)
           }
         },
       })
     }
   
     // 把文字转化为语音进行播放
     function getVoice(text) {
       $.ajax({
         method: 'GET',
         url: ' http://www.liulongbin.top:3006/api/synthesize',
         data: {
           text: text,
         },
         success: function (res) {
           // console.log(res)
           if (res.status === 200) {
             // 播放语音
             $('#voice').attr('src', res.voiceUrl)
           }
         },
       })
     }
   
     // 为文本框绑定 keyup 事件
     $('#ipt').on('keyup', function (e) {
       // console.log(e.keyCode)
       if (e.keyCode === 13) {
         // console.log('用户弹起了回车键')
         $('#btnSend').click()
       }
     })
   })
   
   ```

------

#### 1.3.2 文件上传

1. 定义HTML结构

   ```html
   <input type="file" id="file1" />
   <button id="btnUpload">上传文件</button>
   <img src="./images/loading.gif" alt="" style="display: none" id="loading" />
   ```

2. 验证是否选择了文件

   ```js
   // 获取文件选择框中的文件列表
   var files = $('#file1')[0].files
   // 判断是否选择了文件
   if (files.length <= 0) {...}
   ```

2. 向FormData中追加文件

   ```js
   var fd = new FormData()
   fd.append('avatar', files[0])
   ```

3. ajax发起上传文件的请求

   1）`contentType: false`：不修改 Content-Type 属性，使用 FormData 默认的 Content-Type 值

   2）`processData: false`：不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器

   ```js
   $.ajax({
     method: 'POST',
     url: 'http://www.liulongbin.top:3006/api/upload/avatar',
     data: fd,
     processData: false,
     contentType: false,
     success: function (res) {
       console.log(res)
     },
   })
   ```

4. 实现loading效果

   1）`ajaxStart(callback)：callback` 中定义 loading 效果

   2）`ajaxStop(callback)：callback` 中定义 finish 效果

   3）注意：`$(document).ajaxStart()` 函数会监听当前文档内所有的 Ajax 请求

   ```js
   // 完整代码：文件上传
   $(function () {
     // 监听到Ajax请求被发起了
     $(document).ajaxStart(function () {
       $('#loading').show()
     })
     // 监听到 Ajax 完成的事件
     $(document).ajaxStop(function () {
       $('#loading').hide()
     })
     $('#btnUpload').on('click', function () {
       // 验证是否选择了文件
       var files = $('#file1')[0].files
       if (files.length <= 0) {
         return alert('请选择文件后再上传！')
       }
       var fd = new FormData()
       fd.append('avatar', files[0])
       // 发起 jQuery 的 Ajax 请求，上传文件
       $.ajax({
         method: 'POST',
         url: 'http://www.liulongbin.top:3006/api/upload/avatar',
         data: fd,
         processData: false,	// 不修改 Content-Type 属性，使用 FormData 默认的 Content-Type 值
         contentType: false,	// 不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器
         success: function (res) {
           console.log(res)
         },
       })
     })
   })
   ```

------

#### 1.3.3 ajaxPrefilter

1. 作用：每次调用get/post/ajax的时候会先调用此函数，可以对ajax进行配置

2. 引入：如果是在外部文件定义的，需要引入该js文件，位置在调用ajax函数之前

3. `oprions.url`：设置地址前缀，不用每次在ajax中重复输入一长串地址了

   ```js
   $.ajaxPrefilter(function (options) {
     options.url = 'http://ajax.frontend.itheima.net' + options.url
   })
   ```

4. `options.header`：设置请求头，如果需要的话

   ```js
   // 场景：以 /my 开头的请求路径，需要在请求头中携带 Authorization 身份认证字段，才能正常访问成功。
   // 统一为有权限的接口，设置 headers 请求头
   if (options.url.indexOf('/my/') !== -1) {
     options.headers = {
       Authorization: localStorage.getItem('token') || '',
     }
   }
   ```

5. `options.complete`：设置服务器返回结果后的complete回调函数

   ```js
   $.ajaxPrefilter(function (options) {
     // 全局统一挂载 complete 回调函数
     options.complete = function (res) {
       // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
       if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
         // 1. 强制清空 token
         localStorage.removeItem('token')
         // 2. 强制跳转到登录页面
         location.href = '/login.html'
       }
     }
   })
   ```


------

### 1.4 Form表单

> 表单主要负责数据采集功能，`<form>`就是用于采集用户输入的信息，通过提交操作提交到服务器。三要素：表单标签、表单域、表单按钮。

#### 1.4.1 表单属性

1. `action`：当提交表单时，向何处发送表单数据，提交后页面自动跳转到该URL地址

   1）值：URL地址

   2）注意：如果未指定URL地址，默认提交到当前页面地址

2. `method`：以何种方式把表单数据提交到action URL

   1）GET：默认，通过URL地址(字符串)的形式，把表单数据提交到action URL

   2）POST：常用，可提交隐私/大量/复杂/文件上传数据，不显示在URL中

3. `enctype`：在发送表单数据之前如何对其进行编码

   1）`application/x-www-form-urlencoded`：默认，发送前编码所有字符

   2）`multipart/form-data`：不对字符编码，使用包含文件上传控件的表单时，必须使用该值

   3）`text/plain`：空格转换为“+”加号，但不对特殊字符编码（很少用）

4. `target`：在何处打开action URL

   1）`_self`：默认，在相同框架下打开action URL

   2）`_blank`：在新窗口中打开

   3）`_parent`：在父框架集中打开（很少用）

   4）`_top`：在整个窗口中打开（很少用）

   5）`framename`：在指定框架中打开（很少用）

#### 1.4.2 同步提交

1. 定义：点击submit按钮触发表单提交操作，使页面跳转到action URL的行为
2. 缺点：整个页面会发生跳转到 action URL 所指向的地址，用户体验很差；页面之前的状态和数据会丢失
3. 解决方案：表单只负责采集数据，Ajax 负责将数据提交到服务器

#### 1.4.3 Ajax提交数据

1. 监听表单提交事件

   1）方法1：`$('#form1').submit(function(e) {...}`

   2）方法2：`$('#form1').on('submit', function(e) {...}`

2. 阻止表单默认提交行为：`event.preventDefault()`

   ```js
   $(function () {
     // 第一种方式
     $('#f1').submit(function (e) {
       alert('监听到了表单的提交事件')
       e.preventDefault()
     })
     // 第二种方式
     $('#f1').on('submit', function (e) {
       alert('监听到了表单的提交事件2')
       e.preventDefault()
     })
   })
   ```

3. 获取表单中的数据：`$(selector).serialize()`

   1）作用：可以一次性获取到表单中的所有的数据

   2）注意：必须为每个表单元素添加 `name` 属性才能使用该函数

   ```js
   <form id="form1">
     <input type="text" name="username" />
     <input type="password" name="password" />
     <button type="submit">提交</button>
   </form>
   <script>
     $('#form1').serialize()
   </script>
   ```

------

### 1.5 XMLHttpRequest

> XMLHttpRequest 是浏览器提供的 Javascript 对象，通过它可以请求服务器上的数据资源，Ajax就是基于XHR对象封装出来的。

#### 1.5.1 GET请求

##### 1.5.1.1 一般步骤

1. 创建 xhr 对象：`var xhr = new XMLHttpRequest()`

2. 调用 `xhr.open()` 函数：指定请求方式和URL地址，`xhr.open('GET', url)`

3. 调用 `xhr.send()` 函数：发起ajax请求，`xhr.send()`

4. 监听 xhr.onreadystatechange 事件

   1）xhr对象的请求状态：`readyState`

   * 0：UNSENT，xhr对象已创建，但未调用open方法
   * 1：OPENED，open方法已调用
   * 2：HEADERS_RECEIVED，send方法已调用，响应头已被接收
   * 3：LOADING，数据接收中，response属性中已包含部分数据
   * 4：DONE，Ajax请求完成，数据传输已经彻底完成或失败

   2）服务器的响应状态：status，这里的status和数据中的status不是一个东西

   3）返回结果：`xhr.responseText`

   ```js
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       // 获取服务器响应的数据
       console.log(xhr.responseText)
     }
   }
   ```

##### 1.5.1.2 携带参数

1. 查询字符串：在 URL 的末尾加上用于向服务器发送信息的字符串（变量）

   1）将英文的`?`放在URL的末尾，然后再加上`参数＝值 `

   2）想加上多个参数的话，使用 `&` 符号进行分隔

   3）例：`http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记`

2. 本质上就是将查询字符串追加到url地址后面

   ```js
   // 以下两者等价
   $.get('url', {name: 'zs', age: 20}, function() {})
   $.get('url?name=zs&age=20', function() {})
   
   // 以下两者等价
   $.ajax({ method: 'GET', url: 'url', data: {name: 'zs', age: 20}, success: function() {} })
   $.ajax({ method: 'GET', url: 'url?name=zs&age=20', success: function() {} })
   ```

3. URL编码与解码：URL中不允许出现中文字符，故需要用英文字符去表示非英文字符

   1）encodeURI() ：编码的函数

   2）decodeURI() ：解码的函数

   3）规律：每1个中文字符对应3个百分号字符

   ```js
   encodeURI('黑马程序员') 			  // 输出字符串  %E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98
   decodeURI('%E9%BB%91%E9%A9%AC')  // 输出字符串  黑马
   ```

------

#### 1.5.2 POST请求

1. 创建 xhr 对象：`var xhr = new XMLHttpRequest()`

2. 调用 xhr.open() ：指定请求方式和URL地址，`xhr.open('GET', url)`

3. 设置 Content-Type 属性（固定写法）：`xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')`

4. 调用 xhr.send()，将数据以查询字符串的形式提交给服务器

5. 监听 xhr.onreadystatechange 事件

   1）xhr对象的请求状态：readyState

   2）服务器的响应状态：status，这里的status和数据中的status不是一个东西

   3）返回结果：xhr.responseText，JSON.parse()可以转为对象

   ```js
   // 1. 创建 xhr 对象
   var xhr = new XMLHttpRequest()
   // 2. 调用 open 函数
   xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook')
   // 3. 设置 Content-Type 属性（固定写法）
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
   // 4. 调用 send 函数
   xhr.send('bookname=水浒传&author=施耐庵&publisher=上海图书出版社')
   // 5. 监听事件
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       console.log(xhr.responseText)
     }
   }
   ```

------

#### 1.5.3 封装Ajax

1. 效果：`myajax({method, url, data : {...}, success: function(){..})`

2. 定义转换函数：把data对象转为查询字符串

   ```js
   function resolveData(data) {
     var arr = []
     for (var k in data) {
       var str = k + '=' + data[k]
       arr.push(str)
     }
     return arr.join('&')
   }
   ```

3. 创建 xhr 对象

4. 发起请求：

   1）发起GET请求

   2）发起POST请求

5. 监听 xhr.onreadystatechange 事件：用JSON.parse()转为对象

   ```js
   //将对象转为查询字符串
   function resolveData(data) {
     var arr = []
     for (var k in data) {
       var str = k + '=' + data[k]
       arr.push(str)
     }
     return arr.join('&')
   }
   function myajax(options) {
     var xhr = new XMLHttpRequest()
     // 把外界传递过来的参数对象，转换为查询字符串
     var qs = resolveData(options.data)
     if (options.method.toUpperCase() === 'GET') {
       // 发起GET请求
       xhr.open(options.method, options.url + '?' + qs)
       xhr.send()
     } else if (options.method.toUpperCase() === 'POST') {
       // 发起POST请求
       xhr.open(options.method, options.url)
       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
       xhr.send(qs)
     }
     xhr.onreadystatechange = function () {
       if (xhr.readyState === 4 && xhr.status === 200) {
         var result = JSON.parse(xhr.responseText)
         options.success(result)
       }
     }
   }
   ```

------

#### 1.5.4 新版XHR

> 旧版XHR的缺点：只支持文本数据的传输，无法用来读取和上传文件；传送和接收数据时，没有进度信息，只能提示有没有完成

1. 设置 HTTP 请求的时限：

   ```js
   xhr.timeout = 3000，单位是毫秒
   xhr.ontimeout = function(event){alert('请求超时！')}
   ```

2. 用 FormData 对象管理表单数据：

   1）添加数据：这里添加的数据都被加到返回的data对象中了

   ```js
   // 1. 创建 FormData 实例
   var fd = new FormData()
   // 2. 调用 append 函数，向 fd 中追加数据
   fd.append('uname', 'zs')
   fd.append('upwd', '123456')
   var xhr = new XMLHttpRequest()
   xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
   xhr.send(fd)
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       console.log(JSON.parse(xhr.responseText))
     }
   }
   ```

   2）获取表单数据

   ```js
   // 1. 通过 DOM 操作，获取到 form 表单元素
   var form = document.querySelector('#form1')
   form.addEventListener('submit', function (e) {
     // 阻止表单的默认提交行为
     e.preventDefault()
     // 创建 FormData，快速获取到 form 表单中的数据
     var fd = new FormData(form)
     var xhr = new XMLHttpRequest()
     xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
     xhr.send(fd)
     xhr.onreadystatechange = function () {
       if (xhr.readyState === 4 && xhr.status === 200) {
         console.log(JSON.parse(xhr.responseText))
       }
     }
   })
   ```

3. 文件上传

   ```html
   <!-- 1. 文件选择框 -->
   <input type="file" id="file1" />
   <!-- 2. 上传文件的按钮 -->
   <button id="btnUpload">上传文件</button>
   <br />
   <!-- 3. img 标签，来显示上传成功以后的图片 -->
   <img src="" alt="" id="img" width="800" />
   <script>
     // 1. 获取到文件上传按钮
     var btnUpload = document.querySelector('#btnUpload')
     // 2. 为按钮绑定单击事件处理函数
     btnUpload.addEventListener('click', function () {
       // 3. 获取到用户选择的文件列表
       var files = document.querySelector('#file1').files
       if (files.length <= 0) {
         return alert('请选择要上传的文件！')
       }
       var fd = new FormData()
       // 将用户选择的文件，添加到 FormData 中
       fd.append('avatar', files[0])
       var xhr = new XMLHttpRequest()
       xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
       xhr.send(fd)
       xhr.onreadystatechange = function () {
         if (xhr.readyState === 4 && xhr.status === 200) {
           var data = JSON.parse(xhr.responseText)
           if (data.status === 200) {
             // 上传成功
             document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url
           } else {
             // 上传失败
             console.log('图片上传失败！' + data.message)
           }
         }
       }
     })
   </script>
   ```

4. 获得数据传输的进度信息

   1）监听上传进度的事件：`xhr.upload.onprogress = function(e) {...}`

   * e.lengthComputable：布尔值，表示当前上传的资源是否具有可计算的长度
   * e.loaded：已传输的字节
   * e.total：需传输的总字节
   * 计算进度：var percentComplete = Math.ceil((e.loaded / e.total) * 100)

   2）监听上传完成的事件：`xhr.upload.onload`

   ```html
   <!-- bootstrap 中的进度条 -->
   <div class="progress" style="width: 500px; margin: 15px 10px">
     <div class="progress-bar progress-bar-striped active" style="width: 0%" id="percent">0%</div>
   </div>
   
   <script>
     // 监听文件上传的进度
     xhr.upload.onprogress = function (e) {
       if (e.lengthComputable) {
         // 计算出上传的进度
         var procentComplete = Math.ceil((e.loaded / e.total) * 100)
         console.log(procentComplete)
         // 动态设置进度条
         $('#percent')
           .attr('style', 'width: ' + procentComplete + '%;')
           .html(procentComplete + '%')
       }
     }
     //上传完成
     xhr.upload.onload = function () {
       $('#percent').removeClass().addClass('progress-bar progress-bar-success')
     }
   </script>
   ```

------

### 1.6 数据交换格式

> 服务器端与客户端之间进行数据传输与交换的格式，主要包括 XML 和 JSON

#### 1.6.1 XML

1. 定义：`EXtensible Markup Language`，可扩展标记语言

   ```xml
   <note>
     <to>ls</to>
     <from>zs</from>
     <heading>通知</heading>
     <body>
       晚上开会
     </body>
   </note>
   ```

2. 与HTML的区别：

   1）HTML 被设计用来描述网页上的内容，是网页内容的载体

   2）XML 被设计用来传输和存储数据，是数据的载体

3. 缺点：

   1）格式臃肿，和数据无关的代码多、体积大、传输效率低

   2）在 Javascript 中解析 XML 比较麻烦

#### 1.6.2 JSON

1. 定义：`JavaScript Object Notation`，JavaScript 对象表示法，本质是【字符串】
2. 特点：轻量级的文本数据交换格式，比 XML 更小、更快、更易解析

3. 结构：

   1）对象结构`{key: value,}`：key必须是使用英文的双引号包裹的字符串；value 可以是数字、字符串、布尔值、null、数组、对象

   2）数组结构`[]`：数字、字符串、布尔值、null、数组、对象

4. 规则：

   1）属性名必须使用双引号包裹

   2）字符串类型的值必须使用双引号包裹，不允许使用单引号表示字符串

   3）JSON 中不能写注释

   4）JSON 的最外层必须是对象或数组格式

   5）不能使用 undefined 或函数作为 JSON 的值

5. 区别：

   1）JS对象：`var obj = {a: 'Hello', b: 'World'}`，字符串用单引号，外部无引号

   2）JSON字符串：`var json = '{"a": "Hello", "b": "World"}'`，字符串用双引号，外部单引号

6. 转换：

   1）JS对象转JSON：`JSON.stringify(obj)`，JSON 序列化

   2）JSON转JS对象：`JSON.parse(JSON)`，JSON 反序列化

   ```js
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
   xhr.send()
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       console.log(xhr.responseText)
       console.log(typeof xhr.responseText)
       var result = JSON.parse(xhr.responseText)	// JSON转JS对象
       console.log(result)
     }
   }
   ```

------

### 1.7 Axios

> [Axios](https://www.axios-http.cn/)是专注于网络数据请求的库，比XHR更简单易用，比jQuery更轻量化。

1. GET请求：`axios.get('url', {params: {/*参数*/}}).then(callback)`

   ```js
   var url = 'http://www.liulongbin.top:3006/api/get'
   var paramsObj = { name: 'zs', age: 20 }
   axios.get(url, { params: paramsObj }).then(function (res) {
     console.log(res.data)
   })
   ```

2. POST请求：`axios.post('url', {/*参数*/}).then(callback)`

   ```js
   var url = 'http://www.liulongbin.top:3006/api/post'
   var dataObj = { address: '北京', location: '顺义区' }
   axios.post(url, dataObj).then(function (res) {
     console.log(res.data)
   })
   ```

3. 直接用Axios发起请求

   1）语法

   ```js
   axios({
     method: '请求类型',
     url: '请求的URL地址',
     data: {/* POST数据 */},
     params: {/* GET参数 */},
   }).then(callback)
   ```

   2）GET请求

   ```js
   var url = 'http://www.liulongbin.top:3006/api/get'
   var paramsData = { name: '钢铁侠', age: 35 }
   axios({
     method: 'GET',
     url: url,
     params: paramsData,
   }).then(function (res) {
     console.log(res.data)
   })
   ```

   3）POST请求

   ```js
   axios({
     method: 'POST',
     url: 'http://www.liulongbin.top:3006/api/post',
     data: {
       name: '娃哈哈',
       age: 18,
       gender: '女',
     },
   }).then(function (res) {
     console.log(res.data)
   })
   ```

------

### 1.8 跨域与JSONP

#### 1.8.1 同源策略与跨域

##### 1.8.1.1 同源

1. 定义：如果两个页面的【协议】【域名】【端口】都相同，则两个页面具有相同的源

2. 注意：如果在域名后面没指定端口，默认是80端口

3. 同源策略：Same origin policy，是浏览器提供的一个安全功能

   1）作用：同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制

   2）无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB

   3）无法接触非同源网页的 DOM

   4）无法向非同源地址发送 Ajax 请求

##### 1.8.1.2 跨域

1. 定义：同源指的是两个 URL 的协议、域名、端口一致，反之则是跨域

2. 引子：浏览器允许发起跨域请求，但是跨域请求回来的数据，会被浏览器拦截，无法被页面获取到

3. JSONP：出现的早，兼容性好（兼容低版本IE）

   1）是前端程序员为了解决跨域问题，被迫想出来的一种临时解决方案

   2）缺点：只支持 GET 请求，不支持 POST 请求

4. CORS：支持 GET 和 POST 请求

   1）出现的较晚，是W3C 标准，属于跨域 Ajax 请求的根本解决方案

   2）缺点：不兼容某些低版本的浏览器

------

#### 1.8.2 JSONP

> JSON with Padding，是 JSON 的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。JSONP 和 Ajax 之间没有任何关系，不能把 JSONP 请求数据的方式叫做 Ajax，因为 JSONP 没有用到 XMLHttpRequest。

##### 1.8.2.1 JSONP实现原理

1. `<script> `标签不受浏览器同源策略的影响，可以通过 src 属性请求非同源的 js 脚本

2. 通过`<script>`标签的 src 属性，请求跨域的数据接口，并通过函数调用的形式，接收跨域接口响应回来的数据

3. 通过`？`查询字符串的形式进行函数调用：实际API中会在url后面加 `?jsonp` 查询字符串

   ```js
   <script>
     // 定义函数abc
     function abc(data) {
       console.log('拿到了Data数据：')
       console.log(data)
     }
   </script>
   // <script>调用独立JS文件
   <script src="./js/getdata.js?callback=abc"></script>
   
   // JS文件：getdata.js
   // 调用函数abc
   abc({ name: 'ls', age: 30 })
   ```

4. 案例：实现简单的JSONP数据请求

   ```js
   <script>
     function abc(data) {
       console.log('JSONP响应回来的数据是：')
       console.log(data)
     }
   </script>
   <script src="http://www.liulongbin.top:3006/api/jsonp?callback=abc&name=ls&age=30"></script>
   ```

##### 1.8.2.2 jQuery发起JSONP请求

1. `$.ajax({url, dataType, jsonp, jsonpCallback, success: function(){}})`

   1）dataType: 'jsonp',必须指定

   2）jsonp: 'callback',发送到服务端的参数名称，默认值是callback

   3）jsonpCallback: 'abc',自定义的回调函数名称，如果不指定，会随机生成 callback=jQueryxxx

   ```js
   $(function () {
     // 发起JSONP的请求
     $.ajax({
       url: 'http://ajax.frontend.itheima.net:3006/api/jsonp?name=zs&age=20',
       // 代表我们要发起JSONP的数据请求
       dataType: 'jsonp',
       jsonp: 'callback',
       jsonpCallback: 'abc',
       success: function (res) {
         console.log(res)
       },
     })
   })
   ```

2. 实现过程

   1）原理：动态创建和移除`<script>` 标签

   2）在发起 JSONP 请求的时候，动态向 `<header>` 中 append 一个 `<script>` 标签

   3）在 JSONP 请求成功以后，动态从 `<header>` 中移除刚才 append 进去的 `<script>` 标签

------

#### 1.8.3 防抖 debounce

1. 定义：当事件被触发后延迟 n 秒后再执行回调，如果在这 n 秒内事件又被触发则重新计时

   ```js
   // 1. 防抖动的 timer
   var timer = null
   function debounceSearch(keywords) {
     // 2. 定义防抖的函数
     timer = setTimeout(function () {
       // 发起 JSONP 请求
       getSuggestList(keywords)
     }, 500)
   }
   $('#ipt').on('keyup', function () {
     // 3. 在触发 keyup 事件时，立即清空 timer
     clearTimeout(timer)
     // ...省略其他代码
     debounceSearch(keywords)
   })
   ```

2. 应用：用户连续输入一串字符时，通过防抖策略，只在输入完后才执行查询请求，有效减少请求次数，节约请求资源

3. 缓存：将用户曾经搜索过的结果缓存到对象中，每次搜索先去对象中查找，如果没有的话再请求服务器

   ```js
   // 缓存对象
   var cacheObj = {}
   // 渲染建议列表
   function renderSuggestList(res) {
     //...省略其他代码，将搜索的结果，添加到缓存对象中
     // 1. 获取到用户输入的内容，当做键
     var k = $('#ipt').val().trim()
     // 2. 需要将数据作为值，进行缓存
     cacheObj[k] = res
   }
   ```

------

#### 1.8.4 节流 throttle

1. 定义：可以减少一段时间内事件的触发频率

2. 应用：

   1）鼠标连续不断地触发某事件（如点击），只在单位时间内只触发一次

   2）懒加载时要监听计算滚动条的位置，但不必每次滑动都触发，可以降低计算的频率，而不必去浪费 CPU 资源

3. 节流阀

   1）节流阀为空，表示可以执行下次操作；不为空，表示不能执行下次操作

   2）当前操作执行完，必须将节流阀重置为空，表示可以执行下次操作了

   3）每次执行操作前，必须先判断节流阀是否为空

   ```js
   // 案例：跟随鼠标移动的精灵
   $(function () {
     // 1. 获取到图片
     var angel = $('#angel')
     // 步骤1. 定义节流阀
     var timer = null
     // 2. 绑定 mousemove 事件
     $(document).on('mousemove', function (e) {
       // 步骤3：判断节流阀是否为空
       if (timer) {
         return
       }
       // 3. 设置图片的位置
       // 步骤2：开启延时器
       timer = setTimeout(function () {
         $(angel)
           .css('top', e.pageY + 'px')
           .css('left', e.pageX + 'px')
         console.log('ok')
         timer = null
       }, 16)
     })
   })
   ```

------

## 第2章 Git
