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

### 1.3 XMLHttpRequest

> XMLHttpRequest 是浏览器提供的 Javascript 对象，通过它可以请求服务器上的数据资源，Ajax就是基于XHR对象封装出来的。

#### 1.3.1 GET请求

##### 1.3.1.1 一般步骤

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
   // 1. 创建 XHR 对象
   var xhr = new XMLHttpRequest()
   // 2. 调用 open 函数
   xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
   // 3. 调用 send 函数
   xhr.send()
   // 4. 监听 onreadystatechange 事件
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       // 获取服务器响应的数据
       console.log(xhr.responseText)
     }
   }
   ```

##### 1.3.1.2 携带参数

1. 查询字符串：在 URL 的末尾加上用于向服务器发送信息的字符串（变量）

   1）将英文的`?`放在URL的末尾，然后再加上`参数＝值 `

   2）想加上多个参数的话，使用 `&` 符号进行分隔

   3）例：`http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记`

   ```js
   // 发起携带参数的GET请求
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks?id=1')
   xhr.send()
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       console.log(xhr.responseText)
     }
   }
   ```

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

#### 1.3.2 POST请求

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

#### 1.3.3 封装Ajax

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

3. 创建XHR对象

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

#### 1.3.4 新版XHR

> 旧版XHR的缺点：只支持文本数据的传输，无法用来读取和上传文件；传送和接收数据时，没有进度信息，只能提示有没有完成

1. 设置 HTTP 请求的时限：

   ```js
   var xhr = new XMLHttpRequest()
   // 设置超时时间
   xhr.timeout = 30
   // 设置超时以后的处理函数
   xhr.ontimeout = function () {
     console.log('请求超时了！')
   }
   xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
   xhr.send()
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       console.log(xhr.responseText)
     }
   }
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

   ```html
   <form id="form1">
     <input type="text" name="uname" autocomplete="off" />
     <input type="password" name="upwd" />
     <button type="submit">提交</button>
   </form>
   
   <script>
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
   </script>
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
   <head>
     <link rel="stylesheet" href="./lib/bootstrap.css" />
     <script src="./lib/jquery.js"></script>
   </head>
   
   <!-- 1. 文件选择框 -->
   <input type="file" id="file1" />
   <!-- 2. 上传文件的按钮 -->
   <button id="btnUpload">上传文件</button>
   <!-- bootstrap 中的进度条 -->
   <div class="progress" style="width: 500px; margin: 15px 10px">
     <div class="progress-bar progress-bar-striped active" style="width: 0%" id="percent">0%</div>
   </div>
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
       xhr.upload.onload = function () {
         $('#percent').removeClass().addClass('progress-bar progress-bar-success')
       }
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

------

### 1.4 数据交换格式

> 服务器端与客户端之间进行数据传输与交换的格式，主要包括 XML 和 JSON

#### 1.4.1 XML

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

#### 1.4.2 JSON

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

### 1.5 jQuery中的Ajax

1. 定义：浏览器中提供的XMLHttpRequest用法复杂，jQuery对其进行了封装，降低了Ajax的使用难度

2. 查看响应数据：F12-网络-XHR-响应

#### 1.5.1 Ajax方法

##### 1.5.1.1 GET请求

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

##### 1.5.1.2 POST请求

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

##### 1.5.1.3 Ajax请求

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

##### 1.5.1.4 服务器响应机制

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

##### 1.5.1.5 案例：图书管理

1. 接口文档：

   1）请求根路径：http://www.liulongbin.top:3006

   2）接口URL：/api/getbooks，调用方式：GET

   3）接口URL：/api/addbook，调用方式：POST

   4）接口URL：/api/delbook，调用方式：GET

2. 完整代码

   ```html
   <head>
     <title>案例：图书管理</title>
     <link rel="stylesheet" href="./lib/bootstrap.css" />
     <script src="./lib/jquery.js"></script>
   </head>
   <!-- 添加图书的Panel面板 -->
   <div class="panel panel-primary">
     <div class="panel-heading">
       <h3 class="panel-title">添加新图书</h3>
     </div>
     <div class="panel-body form-inline">
       <!-- form-inline：控制表格横向展示 -->
       <div class="input-group">
         <div class="input-group-addon">书名</div>
         <input type="text" class="form-control" id="iptBookname" placeholder="请输入书名" />
       </div>
       <div class="input-group">
         <div class="input-group-addon">作者</div>
         <input type="text" class="form-control" id="iptAuthor" placeholder="请输入作者" />
       </div>
       <div class="input-group">
         <div class="input-group-addon">出版社</div>
         <input type="text" class="form-control" id="iptPublisher" placeholder="请输入出版社" />
       </div>
       <button id="btnAdd" class="btn btn-primary">添加</button>
     </div>
   </div>
   <!-- 图书的表格 -->
   <table class="table table-bordered table-hover">
     <thead>
       <tr>
         <th>Id</th>
         <th>书名</th>
         <th>作者</th>
         <th>出版社</th>
         <th>操作</th>
       </tr>
     </thead>
     <tbody id="tb"></tbody>
   </table>
   
   <script>
     $(function () {
       // 获取图书列表数据
       function getBookList() {
         $.get('http://www.liulongbin.top:3006/api/getbooks', function (res) {
           if (res.status !== 200) return alert('获取数据失败！')
           var rows = []
           $.each(res.data, function (i, item) {
             rows.push('<tr><td>' + item.id + '</td><td>' + item.bookname + '</td><td>' + item.author + '</td><td>' + item.publisher + '</td><td><a href="javascript:;" class="del" data-id="' + item.id + '">删除</a></td></tr>')
           })
           $('#tb').empty().append(rows.join(''))
         })
       }
       getBookList()
       // 通过代理的方式为动态添加的元素绑定点击事件
       $('tbody').on('click', '.del', function () {
         var id = $(this).attr('data-id')
         $.get('http://www.liulongbin.top:3006/api/delbook', { id: id }, function (res) {
           if (res.status !== 200) return alert('删除图书失败！')
           getBookList()
         })
       })
       $('#btnAdd').on('click', function () {
         var bookname = $('#iptBookname').val().trim()
         var author = $('#iptAuthor').val().trim()
         var publisher = $('#iptPublisher').val().trim()
         if (bookname.length <= 0 || author.length <= 0 || publisher.length <= 0) {
           return alert('请填写完整的图书信息！')
         }
         $.post(
           'http://www.liulongbin.top:3006/api/addbook',
           {
             bookname: bookname,
             author: author,
             publisher: publisher,
           },
           function (res) {
             if (res.status !== 201) return alert('添加图书失败！')
             getBookList()
             $('#iptBookname').val('')
             $('#iptAuthor').val('')
             $('#iptPublisher').val('')
           }
         )
       })
     })
   </script>
   ```

##### 1.5.1.6 案例：聊天机器人

1. API接口：

   1）新接口1：http://www.liulongbin.top:3006/api/robot

   2）新接口2:http://www.liulongbin.top:3006/api/synthesize

2. 通过`<audio>`播放语音：

   1）原理：只要为 audio 指定了新的 src 属性，而且指定了 autoplay，语音就会自动播放

   2）html：`<audio src="" id="voice" autoplay style="display: none"></audio>`

   3）JS：`$('#voice').attr('src', res.voiceUrl)`

3. 使用回车键发送消息：给文本输入框绑定keyup事件，当e.keyCode===13时触发点击按钮事件

   ```js
   // 为文本框绑定 keyup 事件
   $('#ipt').on('keyup', function (e) {
     if (e.keyCode === 13) {
       $('#btnSend').click()
     }
   })
   ```

4. 案例完整代码

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

#### 1.5.2 文件上传

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
   <input type="file" id="file1" />
   <button id="btnUpload">上传文件</button>
   <br />
   <img src="./images/loading.gif" alt="" style="display: none" id="loading" />
   
   <script>
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
           processData: false,
           contentType: false,
           success: function (res) {
             console.log(res)
           },
         })
       })
     })
   </script>
   ```

------

#### 1.5.3 ajaxPrefilter

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

### 1.6 Form表单

> 表单主要负责数据采集功能，`<form>`就是用于采集用户输入的信息，通过提交操作提交到服务器。三要素：表单标签、表单域、表单按钮。

#### 1.6.1 表单属性

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

#### 1.6.2 同步提交

1. 定义：点击submit按钮触发表单提交操作，使页面跳转到action URL的行为
2. 缺点：整个页面会发生跳转到 action URL 所指向的地址，用户体验很差；页面之前的状态和数据会丢失
3. 解决方案：表单只负责采集数据，Ajax 负责将数据提交到服务器

#### 1.6.3 Ajax提交数据

1. 监听表单提交事件

   1）方法1：`$('#form1').submit(function(e) {...}`

   2）方法2：`$('#form1').on('submit', function(e) {...}`

2. 阻止表单默认提交行为：`event.preventDefault()`

   ```js
   $(function () {
     // 写法1
     $('#f1').submit(function (e) {
       alert('监听到了表单的提交事件')
       e.preventDefault()
     })
     // 写法2
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
     // 通过Ajax提交数据 
     // 写法1
     $(function () {
       $('#form1').submit(function (e) {
         e.preventDefault()
         var data = $(this).serialize()
         console.log(data)
       })
     })
     // 写法2
     $(function () {
       $('#form1').on('submit', function (e) {
         e.preventDefault()
         var data = $('#form1').serialize()
         console.log(data)
       })
     })
   </script>
   ```

#### 1.6.4 案例：评论列表

1. 使用bootstrap搭建

   ```html
   <head>
     <link rel="stylesheet" href="./lib/bootstrap.css" />
     <script src="./lib/jquery.js"></script>
   </head>
   <!-- 评论面板 -->
   <div class="panel panel-primary">
     <div class="panel-heading">
       <h3 class="panel-title">发表评论</h3>
     </div>
     <form class="panel-body" id="formAddCmt">
       <div>评论人：</div>
       <input type="text" class="form-control" name="username" autocomplete="off" />
       <div>评论内容：</div>
       <textarea class="form-control" name="content"></textarea>
       <button type="submit" class="btn btn-primary">发表评论</button>
     </form>
   </div>
   <!-- 评论列表 -->
   <ul class="list-group" id="cmt-list">
     <li class="list-group-item">
       <span class="badge" style="background-color: #f0ad4e">评论时间：</span>
       <span class="badge" style="background-color: #5bc0de">评论人：</span>
       Item 1
     </li>
   </ul>
   <script>
     function getCommentList() {
       $.ajax({
         method: 'GET',
         url: 'http://www.liulongbin.top:3006/api/cmtlist',
         success: function (res) {
           if (res.status !== 200) return alert('获取评论列表失败！')
           var rows = []
           $.each(res.data, function (i, item) {
             var str =
               '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' +
               item.time +
               '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' +
               item.username +
               '</span>' +
               item.content +
               '</li>'
             rows.push(str)
           })
           $('#cmt-list').empty().append(rows.join(''))
         },
       })
     }
     getCommentList()
     $(function () {
       $('#formAddCmt').submit(function (e) {
         e.preventDefault()
         var data = $(this).serialize()
         $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
           if (res.status !== 201) {
             return alert('发表评论失败！')
           }
           getCommentList()
           // JS对象转DOM对象，reset是原生DOM对表单域进行重置的方法
           $('#formAddCmt')[0].reset()
         })
       })
     })
   </script>
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

   ```html
   <button id="btnJSONP">发起JSONP数据请求</button>
   <script>
     $(function () {
       $('#btnJSONP').on('click', function () {
         $.ajax({
           url: 'http://www.liulongbin.top:3006/api/jsonp?address=北京&location=顺义',
           dataType: 'jsonp',
           jsonpCallback: 'abc',
           success: function (res) {
             console.log(res)
           },
         })
       })
     })
   </script>
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

4. 案例：淘宝搜索框-防抖与缓存

   ```html
   <head>
     <link rel="stylesheet" href="./css/search.css" />
     <script src="./lib/jquery.js"></script>
     <!-- 导入模板引擎 -->
     <script src="./lib/template-web.js"></script>
   </head>
   
   <div class="container">
     <!-- Logo -->
     <img src="./images/taobao_logo.png" alt="" class="logo" />
     <div class="box">
       <!-- tab 栏 -->
       <div class="tabs">
         <div class="tab-active">宝贝</div>
         <div>店铺</div>
       </div>
       <!-- 搜索区域（搜索框和搜索按钮） -->
       <div class="search-box"><input id="ipt" type="text" class="ipt" placeholder="请输入要搜索的内容" /><button class="btnSearch">搜索</button></div>
       <!-- 搜索建议列表 -->
       <div id="suggest-list"></div>
     </div>
   </div>
   
   <!-- 模板结构 -->
   <script type="text/html" id="tpl-suggestList">
     {{each result}}
     <!--搜索建议项-->
     <div class="suggest-item">{{$value[0]}}</div>
     {{/each}}
   </script>
   
   <script>
     $(function () {
       // 1. 定义延时器的Id
       var timer = null
       // 定义全局缓存对象
       var cacheObj = {}
       // 2. 定义防抖的函数
       function debounceSearch(kw) {
         timer = setTimeout(function () {
           getSuggestList(kw)
         }, 500)
       }
       // 为输入框绑定 keyup 事件
       $('#ipt').on('keyup', function () {
         // 3. 清空 timer
         clearTimeout(timer)
         var keywords = $(this).val().trim()
         // 当搜索关键词为空时，清除列表
         if (keywords.length <= 0) {
           return $('#suggest-list').empty().hide()
         }
         // 先判断缓存中是否有数据
         if (cacheObj[keywords]) {
           return renderSuggestList(cacheObj[keywords])
         }
         // TODO:获取搜索建议列表
         debounceSearch(keywords)
       })
       // 淘宝API：返回搜索建议数据列表，数据结构：数组，结果项：包含2条数据的数组，第一个数据为商品名称
       function getSuggestList(kw) {
         $.ajax({
           url: 'https://suggest.taobao.com/sug?q=' + kw,
           dataType: 'jsonp',
           success: function (res) {
             // console.log(res);
             renderSuggestList(res)
           },
         })
       }
       // 渲染UI结构
       function renderSuggestList(res) {
         if (res.result.length <= 0) {
           return $('#suggest-list').empty().hide()
         }
         var htmlStr = template('tpl-suggestList', res)
         $('#suggest-list').html(htmlStr).show()
         // 1. 获取到用户输入的内容，当做键
         var k = $('#ipt').val().trim()
         // 2. 需要将数据作为值，进行缓存
         cacheObj[k] = res
       }
     })
   </script>
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

   ```html
   <!--案例：跟随鼠标移动的精灵-->
   <style>
     html,
     body {
       margin: 0;
       padding: 0;
       overflow: hidden;
     }
     #angel {
       position: absolute;
     }
   </style>
   <img src="./angel.gif" alt="" id="angel" />
   <script>
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
   </script>
   ```

------

## 第2章 Git

### 2.1 Git基本概念

#### 2.1.1 控制系统

##### 2.1.1.1 本地版本控制系统

1. 单机运行，不支持多人协作开发
2. 版本数据库故障后，所有历史更新记录会丢失

##### 2.1.2 集中化的版本控制系统

> 典型代表：SVN

1. 特点：

   1）基于服务器、客户端的运行模式

   2）服务器保存文件的所有更新记录

   3）客户端只保留最新的文件版本

2. 优点：联网运行，支持多人协作开发

3. 缺点：

   1）不支持离线提交版本更新

   2）中心服务器崩溃后，所有人无法正常工作

   3）版本数据库故障后，所有历史更新记录会丢失

##### 2.1.3 分布式版本控制系统

> 典型代表：Git

1. 特点：

   1）基于服务器、客户端的运行模式

   2）服务器保存文件的所有更新版本

   3）客户端是服务器的完整备份，并不是只保留文件的最新版本

2. 优点：

   1）联网运行，支持多人协作开发

   2）客户端断网后支持离线本地提交版本更新

   3）服务器故障或损坏后，可使用任何一个客户端的备份进行恢复

------

#### 2.1.2 Git基础概念

> Git是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。

1. 特点：项目越大越复杂，协同开发者越多，越能体现出 Git 的高性能和高可用性

2. 直接记录快照，而非差异比较：

   1）SVN的差异比较：存储的是一组基本文件和每个文件随时间逐步累积的差异

   * 优点：节省磁盘空间
   * 缺点：耗时、效率低；在每次切换版本的时候，都需要在基本文件的基础上，应用每个差异，从而生成目标版本对应的文件

   2）Git 的记录快照：在原有文件版本的基础上重新生成一份新的文件，类似于备份。为了效率，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件

   * 优点：版本切换时非常快，因为每个版本都是完整的文件快照，切换版本时直接恢复目标版本的快照即可
   * 缺点：占用磁盘空间较大
   * 特点：空间换时间

3. 近乎所有操作都是本地执行：

   1）断网后依旧可以在本地对项目进行版本管理

   2）联网后，把本地修改的记录同步到云端服务器即可

4. 三个区域：

   1）工作区：处理工作的区域

   2）暂存区：已完成的工作的临时存放区域，等待被提交

   3）Git 仓库：最终的存放区域

5. 四种状态：

   1）已修改（Modified）：表示修改了文件，但还没将修改的结果放到暂存区；工作区的文件被修改了，但还没有放到暂存区，就是已修改状态

   2）已暂存（Staged）：表示对已修改文件的当前版本做了标记，使之包含在下次提交的列表中；如果文件已修改并放入暂存区，就属于已暂存状态

   3）已提交（Committed）：表示文件已经安全地保存在本地的 Git 仓库中；如果 Git 仓库中保存着特定版本的文件，就属于已提交状态

   4）未跟踪（Untracked）：不被 Git 所管理的文件

------

### 2.2 安装并配置Git

1. 下载地址：[https://git-scm.com/downloads](https://git-scm.com/downloads)

2. 配置用户信息：

   ```git
   git config --global user.name "yourname"
   git config --global user.email "your@email.com"
   ```

3. 检查配置信息：

   1）全局配置文件

   ```git
   C:/Users/用户名/.gitconfig
   ```

   2）查看所有全局配置项

   ```git
   git config --list --global
   ```

   3）查看制定的全局配置项

   ```git
   git config user.name
   git config user.email
   ```

4. 获取帮助信息：

   1）查看帮助

   ```git
   git help <verb>
   git <verb> -h
   ```

   2）打开config帮助手册

   ```git
   git help config
   ```

   3）获取git config命令的快速参考

   ```git
   git config -h
   ```

------

### 2.3 Git操作

#### 2.3.1 常用命令

![git工作流](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\git工作流.png)

##### 2.3.1.1 获取仓库

1. 将尚未进行版本控制的本地目录转换为 Git 仓库（形式：.git文件夹）

   ```git
   git init
   ```

2. 从其它服务器克隆一个已存在的 Git 仓库

   ```git
   git clone url地址
   ```

##### 2.3.1.2 检查状态

1. 命令：

   ```git
   git status
   
   // 精简命令
   git status -s
   git status --short
   ```

2. 状态：

   * M：已修改
   * A：新添加到暂存区
   * D：已删除
   * R：重命名
   * C：已复制
   * ??：未跟踪
   * !!：已忽略

##### 2.3.1.3 暂存文件

1. 添加单个文件：

   ```git
   git add 文件名
   ```

2. 添加所有新增与修改过的文件

   ```git
   git add .
   ```

3. 状态：`A`，已被跟踪并处于暂存状态（Changes to be committed）

##### 2.3.1.4 取消暂存

1. 命令：

   ```git
   git reset HEAD 要移除的文件名称
   ```

##### 2.3.1.5 提交更新

1. 命令：

   ```git
   git commit -m "描述内容"
   ```

2. 状态：`nothing to commit, working tree clean`

##### 2.3.1.6 跳过暂存区直接提交

1. 将“工作区 → 暂存区 → Git 仓库”的中间步骤省略，直接“工作区 → Git 仓库”

2. 命令：

   ```git
   git commit -a -m "描述内容"
   ```

------

#### 2.3.2 修改文件

![git修改文件](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\git修改文件.png)

##### 2.3.2.1 修改已提交文件

1. 场景：对已被git跟踪的文件进行修改
2. 状态：红色M，已跟踪文件的内容发生了变化，但还没有放到暂存区（Changes not staged for commit）

##### 2.3.2.2 暂存已修改文件

1. 命令：

   ```git
   git add 修改的文件
   ```

2. 状态：绿色M，已修改并放入暂存区（modified）

##### 2.3.2.3 提交已暂存文件

1. 命令：

   ```git
   git commit -m "描述内容"
   ```

2. 状态：nothing to commit, working tree clean

##### 2.3.2.4 撤销修改

![git撤销修改](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\git撤销修改.png)

1. 命令：

   ```git
   git checkout -- 文件名
   ```

2. 场景：把对工作区中对应文件的修改，还原成 Git 仓库中所保存的版本

3. 影响：所有的修改会丢失，且无法恢复！危险性比较高，请慎重操作！

4. 本质：用 Git 仓库中保存的文件，覆盖工作区中指定的文件

------

#### 2.3.3 删除文件

1. 从 Git 仓库和工作区中同时移除对应的文件

   ```git
   git rm -f  要移除的文件名称
   ```

2. 只从 Git 仓库中移除指定的文件，但保留工作区中对应的文件

   ```git
   git rm --cached 要移除的文件名称
   ```

------

#### 2.3.4 忽略文件 gitignore

1. 语法：

   1）以 # 开头的是注释

   2）以 / 结尾的是目录：例：`build/`，忽略任何目录下名为build的文件夹

   3）以 / 开头防止递归，例：`/TODO`，只忽略当前目录下的TODO文件，而不忽略subdir/TODO

   4）以 ! 开头表示取反

   5）可用 glob 模式（简化了的正则表达式）进行文件和文件夹的匹配

2. glob 模式

   1）`?`：只匹配一个任意字符

   2）`*`：匹配0个或多个任意字符，例：`doc/*.txt`，忽略`doc/notes.txt`，但不忽略`doc/server/arch.txt``

   3）``**`：匹配任意中间目录

   * 例：`a/**/z` 可以匹配 `a/z` 、 `a/b/z` 或 `a/b/c/z` 等
   * 例：`doc/**/*.pdf`，忽略doc/目录及其所有子目录下的.pdf文件

   4）[]：匹配任何一个列在方括号中的字符

   5）[-]：所有在这两个字符范围内的都可以匹配

------

#### 2.3.5 查看提交历史 git log

1. 按时间先后顺序列出所有的提交历史，最近的排在最上面

   ```git
   git log
   ```

2. 只展示最新的2条提交历史

   ```git
   git log -2
   ```

3. 在上一行展示最近2条提交历史的信息

   ```git
   git log -2 --pretty=oneline
   ```

4. 自定义输出格式

   1）`%h`：提交的简写哈希值

   2）`%an`：作者名字

   3）`%ar`：作者修订日期，按多久以前的方式显示

   4）`%s`：提交说明

   ```git
   git log -2 --pretty=format:"%h |%an | %an | %s"
   ```

------

#### 2.3.6 回退到指定的版本

1. 在上一行展示所有提交历史

   ```git
   git log --pretty==oneline
   ```

2. 根据指定的提交ID回退到指定版本

   ```git
   git reset --hard <CommitID>
   ```

3. 回退到旧版本后查看命令操作历史

   ```git
   git reflog --pretty=oneline
   ```

4. 根据指定的提交ID回退到指定版本

   ```git
   git reset --hard <CommitID>
   ```

------

### 2.4 Github

1. 开源许可协议（Open Source License）：限制使用者的使用范围和保护作者的权利

   1）BSD（Berkeley Software Distribution）

   2）Apache Licence 2.0

   3）GPL（GNU General Public License）：不允许修改后和衍生的代码做为闭源的商业软件发布和销售，最著名的软件项目是：Linux

   4）LGPL（GNU Lesser General Public License）

   5）MIT：限制最少的协议，只需在修改后的代码或者发行包中包含原作者的许可信息，使用MIT的项目有：jquery、Node.js

2. 托管平台：以下3个开源项目托管平台，只能托管以Git管理的项目源代码

   1）Github：全球最牛的开源项目托管平台，没有之一

   2）Gitlab：对代码私有性支持较好，因此企业用户较多

   3）Gitee：又叫做码云，是国产的开源项目托管平台。访问速度快、纯中文界面、使用友好

3. 主要功能：

   1）Star：关注自己喜欢的开源项目

   2）Pull Request：为自己喜欢的开源项目做贡献

   3）Issues：和开源项目的作者讨论 Bug 和提需求

   4）Fork：把喜欢的项目复制一份作为自己的项目进行修改

4. 访问仓库：

   1）HTTPS：零配置；但是每次访问仓库时，需要重复输入 Github 的账号和密码才能访问成功

   2）SSH：（推荐）需要进行额外的配置；但是配置成功后，每次访问仓库时，不需重复输入 Github 的账号和密码

5. 关联仓库

   1）本地没有仓库

   ```git
   echo "# 仓库名" >> README.md
   git init
   git add README.md
   git commit -m "评论"
   git remote add orgin 地址
   git push -u origin main
   ```

   2）本地已有仓库

   ```git
   git remote add origin 地址
   git branch -M main
   git push -u origin main
   ```

6. SSH key

   1）作用：实现本地仓库和 Github 之间免登录的加密数据传输

   2）结构：

   * `id_rsa`：私钥文件，存放于客户端的电脑中
   * `id_rsa.pub`：公钥文件，需要配置到 Github 中

   3）命令：

   ```cmd
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   4）配置：将 id_rsa.pub 中的公钥复制到Github的SSH设置中

   5）检测：

   ```cmd
   sst -t git@github.com
   ```

------

### 2.5 Git分支

![git分支](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\git分支.png)

1. 作用：多人协作开发时，为了防止互相干扰，提高协同开发的体验，建议每个开发者都基于分支进行项目功能的开发
2. 功能分支：专门用来开发新功能的分支，临时从 master 主分支上分叉出来，当新功能开发且测试完毕后，最终需要合并到 master 主分支上

#### 2.5.1 main主分支

1. 作用：git默认创建的分支，用来保存和记录整个项目已完成的功能代码
2. 有时候也叫master分支，需要看github上面的名称
3. 不允许程序员直接在 master 分支上修改代码，因为这样做的风险太高，容易导致整个项目崩溃

#### 2.5.2 本地分支

1. 查看分支列表：分支名字前面的 * 号表示当前所处的分支

   ```git
   git branch
   ```

2. 创建新分支：基于当前分支创建一个新的分支，分支中的代码和当前分支完全一样

   ```git
   git branch 分支名称

3. 切换分支：切换到指定的分支上进行开发

   ```git
   git chechout 分支名称
   ```

4. 分支的快速创建和切换：创建指定名称的新分支，并立即切换到新分支上

   ```git
   git checkout -b 分支名称
   ```

5. 合并分支：功能分支的代码开发测试完毕之后，将完成后的代码合并到master主分支上

   ```git
   git checkout main：切换到main分支
   git merge 分支名称：在main分支运行merge命令
   ```

6. 删除分支：当把功能分支的代码合并到 master 主分支上以后，删除对应的功能分支

   ```js
   git branch -d 分支名称
   ```

7. 遇到冲突时的分支合并：如果在两个不同的分支中，对同一个文件进行了不同的修改，Git就没法干净的合并它们，需要手动解决冲突

   ```git
   git checkout main
   git merge 分支X
   git add . 
   git commit -m "解决冲突问题"
   ```

#### 2.5.3 远程分支

1. 将本地分支推送到远程仓库：

   1）首次推送带`-u`参数

   ```git
   git push -u origin 本地分支名称：远程分支名称
   ```

   2）若远程和本地分支名称一致

   ```git
   git push -u origin 分支名称
   ```

2. 查看远程仓库中所有的分支列表：需要在本地仓库根目录中打开bash

   ```git
   git remote show origin
   ```

3. 跟踪分支：从远程仓库中，把远程分支下载到本地仓库中

   1）远程仓库与本地仓库分支名称相同

   ```git
   git checkout 远程分支名称
   ```

   2）远程仓库与本地仓库分支名称不同

   ```git
   git checkout -b 本地分支名称 origin/远程分支名称
   ```

4. 拉取远程分支的最新的代码：当前处于哪个分支，就更新该分支的代码

   ```git
   git pull
   ```

5. 删除远程分支

   ```git
   git push origin --delete 远程分支名称
   ```

------

## 第3章 Node.js

### 3.1 基础知识

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境

1. 官网：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)

2. 作用：可以使 JavaScript 基于Node.js 做后端开发

3. 版本：

   1）LTS：长期稳定版，适合追求稳定性的企业级项目（推荐）

   2）Current：新特性尝鲜版，适合热衷于尝试新特性的用户，但可能有Bug和漏洞

4. 区别：Node.js 中无法调用 DOM 和 BOM 等浏览器内置 API，只能调用Node.js的内置API

   |                环境                |                             图解                             |
   | :--------------------------------: | :----------------------------------------------------------: |
   | 浏览器：JavaScript 的前端运行环境  | ![JavaScript 的前端运行环境](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\JavaScript 的前端运行环境.png) |
   | Node.js：JavaScript 的后端运行环境 | ![JavaScript 的后端运行环境](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\JavaScript 的后端运行环境.png) |

5. 工具：

   1）[Express](http://www.expressjs.com.cn/)：快速构建 Web 应用

   2）[Electron](https://electronjs.org/)：构建跨平台的桌面应用

   3）[Restify](http://restify.com/)：快速构建 API 接口项目

6. 执行命令：`node 项目名称.js`

7. [nodemon](https://www.npmjs.com/package/nodemon)：调试工具，能够监听项目文件的变动，当代码被修改后，nodemon 会自动重启项目

   1）安装：`npm i nodemon -g`

   2）运行：`nodemon 项目名称.js`

------

### 3.2 内置API

#### 3.2.1 FS模块

> fs模块是官方提供的、用来操作文件的模块。

1. 导入：

   ```js
   const fs = require('fs')
   ```

2. `fs.readFile(path[,options],callback) `：用来读取指定文件中的内容

   1）参数：

   * `path`：文件的路径
   * `options`：可选，以什么编码格式来读取文件，如 utf8
   * `callback`：文件读取完成后，通过回调函数拿到读取的结果

   2）回调函数：`function(err, result)`

   * err：如果为 `null`，表示读取成功；如果是`ture`，可用 `err.message` 显示错误信息
   * result：读取结果

   ```js
   const fs = require('fs')
   fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
     if (err) {
       return console.log('读取文件失败！' + err.message)
     }
     console.log('读取文件成功！' + dataStr)
   })
   ```

3. `fs.writeFile(file,data[,options],callback)`：用来向指定的文件中写入内容

   1）参数：

   * `path`：文件的路径
   * `data`：要写入的内容
   * `options`：可选，以什么编码格式来写入文件，默认 utf8
   * `callback`：文件写入完成后的回调函数

   2）回调函数：`function(err)`

   * err：如果为 `null`，表示写入成功；如果是 `ture`，可用 err.message 显示错误信息

   3）fs.writeFile() 方法只能用来创建文件，不能用来创建路径

   4）重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容

   ```js
   const fs = require('fs')
   fs.writeFile('./files/3.txt', 'ok123', function (err) {
     if (err) {
       return console.log('文件写入失败！' + err.message)
     }
     console.log('文件写入成功！')
   })
   ```

   ```js
   // 案例：整理成绩
   // 成绩.txt：小红=66 小白=100 小黄=70 小黑=66 小绿=88
   const fs = require('fs')
   fs.readFile(__dirname + '/files/成绩.txt', 'utf8', function (err, dataStr) {
     if (err) {
       return console.log('读取文件失败！' + err.message)
     }
     // 先把成绩的数据，按照空格进行分割
     const arrOld = dataStr.split(' ')
     // 循环分割后的数组，对每一项数据，进行字符串的替换操作
     const arrNew = []
     arrOld.forEach((item) => {
       arrNew.push(item.replace('=', '：'))
     })
     // 把新数组中的每一项，进行合并，得到一个新的字符串
     const newStr = arrNew.join('\r\n')
     // 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
     fs.writeFile(__dirname + '/files/成绩-ok.txt', newStr, function (err) {
       if (err) {
         return console.log('写入文件失败！' + err.message)
       }
       console.log('成绩写入成功！')
     })
   })
   ```

4. 路径动态拼接的问题

   1）问题：如果提供的操作路径是以 `./` 或 `../` 开头的相对路径时，很容易出现路径动态拼接错误的问题

   2）解决：`__dirname`，表示当前文件所处目录，直接提供完整的路径

   3）注意：路径拼接用 `path.join()` 方法进行处理，不要直接使用 + 进行字符串的拼接

   ```js
   const fs = require('fs')
   // 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
   // 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
   fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
     if (err) {
       return console.log('读取文件失败！' + err.message)
     }
     console.log('读取文件成功！' + dataStr)
   })
   
   // 但移植性非常差、不利于维护
   fs.readFile('C:\\Users\\escook\\Desktop\\Node.js基础\\day1\\code\\files\\1.txt', 'utf8', function (err, dataStr) {
     if (err) {
       return console.log('读取文件失败！' + err.message)
     }
     console.log('读取文件成功！' + dataStr)
   })
   
   // __dirname 表示当前文件所处的目录
   fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
     if (err) {
       return console.log('读取文件失败！' + err.message)
     }
     console.log('读取文件成功！' + dataStr)
   })
   ```

------

#### 3.2.2 Path模块

> path模块是官方提供的、用来处理路径的模块。

1. 导入：

   ```js
   const path = require('path')
   ```

2. `path.join([...paths])`：用来将多个路径片段拼接成一个完整的路径字符串

   1）`...paths`：可选，路径片段的序列

   2）注意：`../` 会抵消前面的路径

   ```js
   const path = require('path')
   const fs = require('fs')
   
   // 注意：  ../ 会抵消前面的路径
   // const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
   // console.log(pathStr) // \a\b\d\e
   
   fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function (err, dataStr) {
     if (err) {
       return console.log(err.message)
     }
     console.log(dataStr)
   ```

3. `path.basename(path[,ext])`：用来从路径字符串中将文件名解析出来

   1）`path`：路径字符串

   2）`ext`：可选，件扩展名

   ```js
   const path = require('path')
   // 定义文件的存放路径
   const fpath = '/a/b/c/index.html'
   // 输出文件全称（带扩展名）
   const fullName = path.basename(fpath)
   console.log(fullName)		// index.html
   // 输出文件名称（不带扩展名）
   const nameWithoutExt = path.basename(fpath, '.html')
   console.log(nameWithoutExt)	// index
   ```

4. `path.extname(path)`：获取路径中的扩展名部分

   1）`path`：路径字符串

   ```js
   const path = require('path')
   // 这是文件的存放路径
   const fpath = '/a/b/c/index.html'
   const fext = path.extname(fpath)
   console.log(fext)	// .html
   ```

5. 案例：时钟，将html文件中的css和js分拆出单独的文件

   ```js
   // 1.1 导入 fs 模块
   const fs = require('fs')
   // 1.2 导入 path 模块
   const path = require('path')
   
   // 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
   const regStyle = /<style>[\s\S]*<\/style>/
   const regScript = /<script>[\s\S]*<\/script>/
   
   // 2.1 调用 fs.readFile() 方法读取文件
   fs.readFile(path.join(__dirname, '/clock/clock.html'), 'utf8', function (err, dataStr) {
     // 2.2 读取 HTML 文件失败
     if (err) return console.log('读取HTML文件失败！' + err.message)
     // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
     resolveCSS(dataStr)
     resolveJS(dataStr)
     resolveHTML(dataStr)
   })
   
   // 3.1 定义处理 css 样式的方法
   function resolveCSS(htmlStr) {
     // 3.2 使用正则提取需要的内容
     const r1 = regStyle.exec(htmlStr)
     // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
     const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
     // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
     fs.writeFile(path.join(__dirname, '/clock/index.css'), newCSS, function (err) {
       if (err) return console.log('写入 CSS 样式失败！' + err.message)
       console.log('写入样式文件成功！')
     })
   }
   
   // 4.1 定义处理 js 脚本的方法
   function resolveJS(htmlStr) {
     // 4.2 通过正则，提取对应的 <script></script> 标签内容
     const r2 = regScript.exec(htmlStr)
     // 4.3 将提取出来的内容，做进一步的处理
     const newJS = r2[0].replace('<script>', '').replace('</script>', '')
     // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
     fs.writeFile(path.join(__dirname, '/clock/index.js'), newJS, function (err) {
       if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
       console.log('写入 JS 脚本成功！')
     })
   }
   
   // 5.1 定义处理 HTML 结构的方法
   function resolveHTML(htmlStr) {
     // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
     const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
     // 5.3 写入 index.html 这个文件
     fs.writeFile(path.join(__dirname, '/clock/index.html'), newHTML, function (err) {
       if (err) return console.log('写入 HTML 文件失败！' + err.message)
       console.log('写入 HTML 页面成功！')
     })
   }
   ```

------

#### 3.2.3 Http模块

> Http模块是官方提供的、用来创建 web 服务器的模块。

1. req 请求对象：包含了与客户端相关的数据和属性

   1）`req.rul`：客户端请求的URL地址

   2）`req.method`：客户端的请求类型

2. res 响应对象：包含了与服务器相关的数据和属性

   1）`res.end()`：向客户端发送指定内容，并结束本次请求的处理过程

   2）解决中文乱码问题：`res.setHeader('Content-Type', 'text/html; charset=utf-8')`

3. 导入：

   ```js
   const http = require('http')
   ```

4. 创建基本服务器：

   1）创建 web 服务器实例：`const serve  = http.createServer()`

   2）为服务器实例绑定 request 事件：`server.on('request', function(req,res){...})`

   3）启动服务器 listen()：`server.listen(8080,function (){...})`

   ```js
   // 1. 导入 http 模块
   const http = require('http')
   // 2. 创建 web 服务器实例
   const server = http.createServer()
   // 3. 为服务器实例绑定 request 事件，监听客户端的请求
   server.on('request', (req, res) => {
     // 定义一个字符串，包含中文的内容
     const str = `您请求的 URL 地址是 ${req.url}，请求的 method 类型为 ${req.method}`
     // 调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
     res.setHeader('Content-Type', 'text/html; charset=utf-8')
     // 调用 res.end() 将内容响应给客户端
     res.end(str)
   })
   
   server.listen(80, () => {
     console.log('server running at http://127.0.0.1')
   })
   ```

5. 案例：根据不同的 url 响应不同的 html 内容

   1）获取请求的 url 地址：`const url = req.url`

   2）设置默认的响应内容为 404 Not found：`let content = '<h1>404 Not found!</h1>'`

   3）判断用户请求的是否为 / 或 /index.html 首页

   4）判断用户请求的是否为 /about.html 关于页面

   5）设置 Content-Type 响应头，防止中文乱码：`res.setHeader('Content-Type', 'text/html; charset=utf-8')`

   6）使用 res.end() 把内容响应给客户端：`res.end(content)`

   ```js
   const http = require('http')
   const server = http.createServer()
   
   server.on('request', (req, res) => {
     // 1. 获取请求的 url 地址
     const url = req.url
     // 2. 设置默认的响应内容为 404 Not found
     let content = '<h1>404 Not found!</h1>'
     // 3. 判断用户请求的是否为 / 或 /index.html 首页
     // 4. 判断用户请求的是否为 /about.html 关于页面
     if (url === '/' || url === '/index.html') {
       content = '<h1>首页</h1>'
     } else if (url === '/about.html') {
       content = '<h1>关于页面</h1>'
     }
     // 5. 设置 Content-Type 响应头，防止中文乱码
     res.setHeader('Content-Type', 'text/html; charset=utf-8')
     // 6. 使用 res.end() 把内容响应给客户端
     res.end(content)
   })
   
   server.listen(80, () => {
     console.log('server running at http://127.0.0.1')
   })
   ```

6. 案例：创建clock时钟服务器

   1）将资源的请求 url 地址映射为文件的存放路径

   2）读取文件内容并响应给客户端

   ```js
   // 1.1 导入 http 模块
   const http = require('http')
   // 1.2 导入 fs 模块
   const fs = require('fs')
   // 1.3 导入 path 模块
   const path = require('path')
   
   // 2.1 创建 web 服务器
   const server = http.createServer()
   // 2.2 监听 web 服务器的 request 事件
   server.on('request', (req, res) => {
     // 3.1 获取到客户端请求的 URL 地址
     //     /clock/index.html
     //     /clock/index.css
     //     /clock/index.js
     const url = req.url
     // 3.2 把请求的 URL 地址映射为具体文件的存放路径
     // const fpath = path.join(__dirname, url)
     // 5.1 预定义一个空白的文件存放路径
     let fpath = ''
     if (url === '/') {
       fpath = path.join(__dirname, '/clock/index.html')
     } else {
       //     /index.html
       //     /index.css
       //     /index.js
       fpath = path.join(__dirname, '/clock', url)
     }
   
     // 4.1 根据“映射”过来的文件路径读取文件的内容
     fs.readFile(fpath, 'utf8', (err, dataStr) => {
       // 4.2 读取失败，向客户端响应固定的“错误消息”
       if (err) return res.end('404 Not found.')
       // 4.3 读取成功，将读取成功的内容，响应给客户端
       res.setHeader('Content-Type', 'text/js; charset=utf-8')	// 防止中文乱码
       res.end(dataStr)
     })
   })
   // 2.3 启动服务器
   server.listen(80, () => {
     console.log('server running at http://127.0.0.1')
   })
   ```

------

### 3.3 模块化

> 解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元。

#### 3.3.1 模块的加载机制

1. 模块在第一次加载后会被缓存，多次调用 require() 不会导致模块的代码被执行多次。

2. 内置模块的加载机制：

   1）内置模块的加载优先级最高

   2）require('fs') 始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs

3. 自定义模块的加载机制：

   1）必须指定以 ./ 或 ../ 开头的路径标识符，否则会当作内置模块或第三方模块进行加载

   2）如果省略文件扩展名，按以下顺序加载：

   * 按照确切的文件名进行加载
   * 补全 .js 扩展名进行加载
   * 补全 .json 扩展名进行加载
   * 补全 .node 扩展名进行加载

4. 第三方模块的加载机制

   1）如果传递给 require() 的模块标识符不是一个内置模块，也没有以 `./` 或 `../` 开头，则为第三方模块

   2）加载顺序：假设在 'C:\Users\itheima\project\foo.js' 文件里调用了 require('tools')

   * 当前目录的/node_modules 文件夹，找不到则移动到再上一层父目录
   * C:\Users\itheima\project\node_modules\tools
   * C:\Users\itheima\node_modules\tools
   * C:\Users\node_modules\tools
   * C:\node_modules\tools

5. 目录作为模块：

   1）在被加载的目录下查找 `package.json` 文件，寻找 main 属性，作为 require() 加载入口

   2）如果目录没有 package.json 文件，或 main 入口不存在或无法解析， Node.js 将会试图加载目录下的 index.js 文件

   3）如果以上两步均失败，会报错

------

#### 3.3.2 Node.js中的模块化

1. 模块的分类：

   1）内置模块：由 Node.js 官方提供的，例如 fs、path、http 等

   2）自定义模块：用户创建的每个 .js 文件，都是自定义模块

   3）第三方模块：由第三方开发出来的模块，使用前需要先下载

2. 加载模块：`require()`

3. 模块作用域：在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问

4. 向外共享模块作用域中的成员：

   ![向外共享模块作用域中的成员](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\向外共享模块作用域中的成员.png)

   1）`module` 对象：在每个 .js 自定义模块中都有，里面存储了和当前模块有关信息

   2）`module.exports` 对象：

   * 作用：可将模块内的成员共享出去，供外界使用
   * 外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象
   * 在自定义模块中，默认 `module.exports = {}`

   3）`exports` 对象：为了简化书写，exports 和 module.exports 指向同一个对象，但冲突时以后者为准

   4）注意：require() 模块时，得到的永远是 module.exports 指向的对象；为了防止混乱，不要在同一个模块中同时使用 exports 和 module.exports

   ```js
   // 在一个自定义模块中，默认情况下， module.exports = {}
   const age = 20
   // 向 module.exports 对象上挂载 username 属性
   module.exports.username = 'zs'
   // 向 module.exports 对象上挂载 sayHello 方法
   module.exports.sayHello = function () {
     console.log('Hello!')
   }
   module.exports.age = age
   
   // 让 module.exports 指向一个全新的对象
   module.exports = {
     nickname: '小黑',
     sayHi() {
       console.log('Hi!')
     },
   }
   ```

5. 模块化规范：遵循 CommonJS 模块化规范，规定了模块的特性和各模块之间如何相互依赖

   1）每个模块内部，module 变量代表当前模块

   2）module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口

   3）加载某个模块，其实是加载该模块的 module.exports 属性，require() 方法用于加载模块

------

### 3.4 npm与包

#### 3.4.0 npm常用包

1. [moment](https://www.npmjs.com/package/moment)：格式化时间

   ```js
   const moment = require('moment')
   const dt = moment().format('YYYY-MM-DD HH:mm:ss')
   console.log(dt)
   ```
   
1. [i5ting_toc](https://github.com/i5ting/i5ting_ztree_toc)：可以把 md 文档转为 html 页面的小工具

   ```js
   // 安装
   npm install -g i5ting_toc
   // 使用
   i5ting_toc -f 要转换的md文件路径 -o
   ```

------

#### 3.4.1 npm简介

1. 定义：Node.js 中的第三方模块又叫做包

2. 全球最大的包共享平台：npm,Inc

   1）搜索：[https://www.npmjs.com](https://www.npmjs.com)

   2）下载源：[https://registry.npmjs.org](https://registry.npmjs.org)

   3）国内镜像：[https://registry.npm.taobao.org](https://registry.npm.taobao.org)

3. npm 包管理工具：Node Package Manager（随 Node.js 一起安装了）

4. 包的语义化版本规范：

   1）以“点分十进制”形式进行定义，总共有三位数字，如：2.24.0

   2）第1位数字：大版本，第2位数字：功能版本，第3位数字：Bug修复版本

   3）版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零

5. [规范的包结构](https://yarnpkg.com/zh-Hans/docs/package-json)：

   1）包必须以单独的目录而存在

   2）包的顶级目录下要必须包含 package.json 这个包管理配置文件

   3）package.json 中必须包含 `name`，`version`，`main` 这三个属性，分别代表包的名字、版本号、包的入口

------

#### 3.4.3 包的分类

1. 项目包：被安装到项目的 node_modules 目录中的包

   1）开发依赖包：被记录到 devDependencies 节点中的包，只在开发期间会用到

   ```js
   // 正常写法
   npm install packageName --save-dev
   // 简化写法
   npm i packageName -D
   ```

   2）核心依赖包：被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到

   ```js
   // 正常写法
   npm install packageName
   // 简化写法
   npm i packageName
   // 安装指定版本的包
   npm i packageName@1.1.0
   ```

2. 全局包：全局包会被安装到 `C:\Users\用户目录\AppData\Roaming\npm\node_modules` 目录下

   1）安装命令

   ```cmd
   npm i packageName -g
   ```

   2）卸载命令

   ```cmd
   npm uninstall packageName -g
   ```

   3）只有工具性质的包才有全局安装的必要性，它们提供了好用的终端命令；判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可

------

#### 3.4.3 npm管理

1. 快速创建项目：项目文件夹名不能有中文，路径可以有中文

   ```cmd
   npm init -y
   ```

2. 安装包：不同类型包的安装方法

   ```cmd
   npm i packageName
   npm i packageName -D
   npm i packageName -g
   ```

3. 文件结构：

   1）`node_modules` 文件夹：存放所有已安装到项目中的包

   2）`package-lock.json` 配置文件：记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等

3. 包管理配置文件：`package.json`

   1）引子：多人协作时，第三方包的体积过大，不方便团队成员之间共享项目源代码，需要删除node_modules文件夹

   2）作用：记录项目中安装了哪些包，从而方便剔除 node_modules 目录之后，在团队成员之间共享项目的源代码

   3）内容：

   * 项目的名称、版本号、描述等
   * 项目中都用到了哪些包
   * 哪些包只在开发期间会用到
   * 那些包在开发和部署时都需要用到

   4）注意：开发时一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中

   5）dependencies 节点：记录使用 npm 命令安装了哪些包

   6）devDependencies 节点：只在项目开发阶段会用到的包，在项目上线之后不会用到

4. 一次性安装所有包：npm 先读取package.json中的dependencies节点，一次性下载到项目中

   ```cmd
   npm install
   npm i
   ```

5. 卸载包：执行成功后，会把卸载的包自动从 package.json 的 dependencies 中移除掉

   1）卸载项目包：

   ```cmd
   npm uninstall packageName
   ```

6. 切换镜像：

   1）查看镜像源

   ```cmd
   npm config get registry
   ```

   2）切换镜像源

   ```cmd
   npm config set registry=https://registry.npm.taobao.org/
   ```

   3）nrm 小工具：可以代替传统方法查看和切换镜像源

   * 安装nrm

   ```cmd
   npm i nrm -g
   ```

   * 查看所有可用镜像源

   ```cmd
   nrm ls
   ```

   * 切换淘宝镜像源

   ```cmd
   nrm use taobao
   ```

------

#### 3.4.4 开发自己的包

##### 3.4.4.1 定义包

1. 包管理配置文件：package.json

   1）必须：name、version、main

   2）可选：description、keywords、license

   ```json
   {
     "name": "itheima-tools",
     "version": "1.1.0",
     "main": "index.js",
     "description": "提供了格式化时间、HTMLEscape相关的功能",
     "keywords": ["itheima", "dateFormat", "escape"],
     "license": "ISC"
   }
   
   ```

2. 包的入口文件：index.js

   ```js
   // 这是包的入口文件
   const date = require('./src/dateFormat')
   const escape = require('./src/htmlEscape')
   
   // 向外暴露需要的成员
   module.exports = {
     ...date,
     ...escape,
   }
   ```

3. 包的说明文档：README.md

   ````markdown
   ## 安装
   ```
   npm install itheima-tools
   ```
   ## 导入
   ```js
   const itheima = require('itheima-tools')
   ```
   ## 格式化时间
   ```js
   // 调用 dateFormat 对时间进行格式化
   const dtStr = itheima.dateFormat(new Date())
   // 结果  2020-04-03 17:20:58
   console.log(dtStr)
   ```
   ## 转义 HTML 中的特殊字符
   ```js
   // 带转换的 HTML 字符串
   const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
   // 调用 htmlEscape 方法进行转换
   const str = itheima.htmlEscape(htmlStr)
   // 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
   console.log(str)
   ```
   ## 还原 HTML 中的特殊字符
   ```js
   // 待还原的 HTML 字符串
   const str2 = itheima.htmlUnEscape(str)
   // 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
   console.log(str2)
   ```
   ## 开源协议
   ISC
   ````

4. src文件夹：定义函数

   1）dateFormat.js

   ```js
   // 定义格式化时间的函数
   function dateFormat(dateStr) {
     const dt = new Date(dateStr)
     const y = dt.getFullYear()
     const m = padZero(dt.getMonth() + 1)
     const d = padZero(dt.getDate())
     const hh = padZero(dt.getHours())
     const mm = padZero(dt.getMinutes())
     const ss = padZero(dt.getSeconds())
     return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
   }
   
   // 定义一个补零的函数
   function padZero(n) {
     return n > 9 ? n : '0' + n
   }
   
   module.exports = {
     dateFormat,
   }
   ```

   2）htmlEscape.js

   ```js
   // 定义转义 HTML 字符的函数
   function htmlEscape(htmlstr) {
     return htmlstr.replace(/<|>|"|&/g, match => {
       switch (match) {
         case '<':
           return '&lt;'
         case '>':
           return '&gt;'
         case '"':
           return '&quot;'
         case '&':
           return '&amp;'
       }
     })
   }
   
   // 定义还原 HTML 字符串的函数
   function htmlUnEscape(str) {
     return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
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
   
   module.exports = {
     htmlEscape,
     htmlUnEscape
   }
   ```


##### 3.4.4.2 发布包

1. 注册登录：[https://www.npmjs.com](https://www.npmjs.com)

2. 将下包的服务器地址切换为 npm 的官方服务器

   ```cmd
   npm config set registry=https://registry.npmjs.org/
   ```

3. 登录：`npm login`
4. 切换到包的根目录并发布：`npm publish`

##### 3.4.4.3 删除包

1. 只能删除 72 小时以内发布的包，删除后在 24 小时内不允许重复发布

   ```cmd
   npm unpublish packageName --force
   ```

------

### 3.5 Express

> Express是一个基于 Node.js 平台，快速、开放、极简的 Web 开发框架

#### 3.5.1 Express简介

1. 官网：[http://www.expressjs.com.cn](http://www.expressjs.com.cn)

2. 安装：

   ```cmd
   npm i express@4.17.1
   ```

3. 作用：与 Node.js 内置的 http 模块类似，是专门用来创建 Web 服务器的

4. 本质：就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法

5. 服务器类型

   1）Web网站服务器：专门对外提供 Web 网页资源的服务器

   2）API 接口服务器：专门对外提供 API 接口的服务器

6. 工具：配合Postman测试

------

#### 3.5.2 Express基本用法

1. 创建基本Web服务器

   ```js
   // 导入 express
   const express = require('express')
   // 创建 web 服务器
   const app = express()
   // 启动 web 服务器
   app.listen(80, () => { console.log('express server running at http://127.0.0.1')})
   ```

2. 监听GET请求：`app.get('URL',function(req,res){...})`

   1）URL：客户端请求的URL地址

   2）req：请求对象（包含了与请求相关的属性与方法）

   3）res：响应对象（包含了与响应相关的属性与方法）

3. 监听POST请求：`app.post('URL',function(req,res){...})`

   1）URL：客户端请求的URL地址

   2）req：请求对象（包含了与请求相关的属性与方法）

   3）res：响应对象（包含了与响应相关的属性与方法）

4. 服务器把内容响应给客户端：`res.send()`

   ```js
   app.get('/user', (req, res) => {
     // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
     res.send({ name: 'zs', age: 20, gender: '男' })
   })
   
   app.post('/user', (req, res) => {
     // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
     res.send('请求成功')
   })
   ```

5. 获取 URL 中携带的查询参数：`req.query`

   1）作用：可以访问到客户端通过查询字符串的形式，发送到服务器的参数

   2）注意：默认情况下，req.query 是一个空对象

   3）例：查询字符串为`'?name=zs&age=20'`，则可访问 `req.query.name`、`req.query.age`

   ```js
   app.get('/', (req, res) => {
     // 通过 req.query 可以获取到客户端发送过来的 查询参数（注意：默认情况下，req.query 是一个空对象）
     console.log(req.query)
     res.send(req.query)
   })
   ```

6. 获取 URL 中的动态参数：`req.params`

   1）通过 ":参数名" 匹配动态参数，如：`'/user/:id/:name'`

   2）案例：输入 `http://127.0.0.1/user/333/jason`，此时 `res.params={id:'333', name:'jason'}`

   3）注意：默认情况下，req.params 是一个空对象

   ```js
   app.get('/user/:ids/:username', (req, res) => {
     // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
     console.log(req.params)
     res.send(req.params)
   })
   ```

#### 3.5.3 托管静态资源

1. `express.static()`：可非常方便地创建一个静态资源服务器，访问目录下的所有资源

   1）语法：`app.use(express.static('指定的目录文件夹')`

   2）注意：存放静态文件的目录名不会出现在 URL 中

2. 托管多个静态资源目录：

   1）多次调用 `express.static()` 函数即可

   2）访问静态资源文件时，`express.static()` 函数会根据目录的添加顺序查找所需的文件

3. 挂载路径前缀:

   1）如果希望根目录也出现在路径中，可以挂载路径前缀

   2）语法：`app.use('/自定义路径'， express.static('指定的目录文件夹')`

   ```js
   const express = require('express')
   const app = express()
   
   // 在这里，调用 express.static() 方法，快速的对外提供静态资源
   app.use(express.static('clock'))
   // 可以选择挂载文件夹前缀
   app.use('/api', express.static('files'))
   
   // 3. 启动 web 服务器
   app.listen(80, () => {
     console.log('express server running at http://127.0.0.1')
   })
   ```


#### 3.5.4 路由Router

1. 定义：客户端的请求与服务器处理函数之间的映射关系
2. 构成：`app.method(path, handler)`：请求的类型、请求的 URL 地址、处理函数，

3. 匹配过程:

   1）每个请求按照定义的先后顺序进行匹配

   2）请求类型和请求的URL同时匹配成功，才会调用对应的处理函数

4. 最简单的路由使用：直接把路由挂载到 app 上

   ```js
   const express = require('express')
   const app = express()
   
   // 挂载路由
   app.get('/', (req, res) => {
     res.send('hello world.')
   })
   app.post('/', (req, res) => {
     res.send('Post Request.')
   })
   
   app.listen(80, () => {
     console.log('http://127.0.0.1')
   })
   ```

5. 模块化路由：

   1）创建路由模块对应的 .js 文件：`router.js`

   2）调用 express.Router() 函数创建路由对象：`const router = express.Router()`

   3）向路由对象上挂载具体的路由：`router.get(...)`、`router.post(...)`

   4）使用 module.exports 向外共享路由对象：`module.exports = router`

   ```js
   // 路由模块：router.js
   // 1. 导入 express
   const express = require('express')
   // 2. 创建路由对象
   const router = express.Router()
   // 3. 挂载具体的路由
   router.get('/user/list', (req, res) => {
     res.send('Get user list.')
   })
   router.post('/user/add', (req, res) => {
     res.send('Add new user.')
   })
   module.exports = router
   ```

   5）使用 `app.use('/api', router)` 函数注册全局中间件

   ```js
   const express = require('express')
   const app = express()
   
   // 1. 导入路由模块
   const router = require('./04.router')
   // 2. 注册路由模块：app.use() 函数的作用，就是来注册全局中间件
   app.use('/api', router)
   
   app.listen(80, () => {
     console.log('http://127.0.0.1')
   })
   ```

#### 3.5.5 中间件Middleware

##### 3.5.5.1 中间件简介

1. 定义：业务流程的中间处理环节

2. 调用流程：当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理

3. 格式：`app.use('/url',function(req, res, next) {...next()}`

4. 区别：中间件函数的形参列表中必须包含 `next` 参数，而路由处理函数中只包含 req 和 res

5. next() 的作用：实现多个中间件连续调用的关键，表示把流转关系转交给下一个中间件或路由

6. 注意：一定要在路由之前注册中间件；调用 next() 函数后不要再写额外的代码

##### 3.5.5.2 中间件作用

1. 多个中间件之间，共享同一份 req 和 res

2. 可以在上游的中间件中，统一为 req 或 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用

   ```js
   const express = require('express')
   const moment = require('moment')
   const app = express()
   
   // 这是定义全局中间件的简化形式
   app.use((req, res, next) => {
     // 获取到请求到达服务器的时间
     const time = Date.now()
     // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
     req.pureTime = time
     req.startTime = moment().format('YYYY-MM-DD HH:mm:ss')
     next()
   })
   
   app.get('/', (req, res) => {
     res.send('Home page. ' + req.startTime + ` => pure time : ${req.pureTime}`)
   })
   app.get('/user', (req, res) => {
     res.send('User page. ' + req.startTime + ` => pure time : ${req.pureTime}`)
   })
   
   app.listen(80, () => {
     console.log('http://127.0.0.1')
   })
   ```

##### 3.5.5.3 全局与局部中间件

1. 全局生效的中间件：客户端发起的任何请求，到达服务器之后都会触发的中间件

   1）语法：`app.use(中间件函数)`

   ```js
   const express = require('express')
   const app = express()
   // 定义一个最简单的中间件函数
   const mw = function (req, res, next) {
     console.log('这是最简单的中间件函数')
     // 把流转关系，转交给下一个中间件或路由
     next()
   }
   // 将 mw 注册为全局生效的中间件
   app.use(mw)
   
   // 上面两行的简写方法
   // app.use((req, res, next) => {
   //   console.log('这是最简单的中间件函数')
   //   next()
   // })
   
   app.get('/', (req, res) => {
     console.log('调用了 / 这个路由')
     res.send('Home page.')
   })
   app.get('/user', (req, res) => {
     console.log('调用了 /user 这个路由')
     res.send('User page.')
   })
   app.listen(80, () => {
     console.log('http://127.0.0.1')
   })
   ```

   2）定义多个全局中间件：可用 app.use() 连续定义多个全局中间件，按照中间件定义的先后顺序依次进行调用

   ```js
   const express = require('express')
   const app = express()
   
   // 定义第一个全局中间件
   app.use((req, res, next) => {
     console.log('调用了第1个全局中间件')
     next()
   })
   // 定义第二个全局中间件
   app.use((req, res, next) => {
     console.log('调用了第2个全局中间件')
     next()
   })
   // 定义一个路由
   app.get('/user', (req, res) => {
     res.send('User page.')
   })
   
   app.listen(80, () => {
     console.log('http://127.0.0.1')
   })
   ```

2. 局部生效的中间件：不使用 app.use() 定义的中间件，仅在指定位置调用，其他请求不调用

   1）语法：`app.get(url,中间件函数名,(req, res) =>{...}`

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // 1. 定义中间件函数
   const mw1 = (req, res, next) => {
     console.log('调用了局部生效的中间件')
     next()
   }
   
   // 2. 创建路由
   app.get('/', mw1, (req, res) => {
     res.send('Home page.')
   })
   app.get('/user', (req, res) => {
     res.send('User page.')
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1')
   })
   
   ```

   2）定义多个局部中间件：

   * 语法1：`app.get(url, 中间件函数名1, 中间件函数名2, (req, res) =>{...}`
   * 语法2：`app.get(url, [中间件函数名1, 中间件函数名2], (req, res) =>{...}`

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // 1. 定义中间件函数
   const mw1 = (req, res, next) => {
     console.log('调用了第1个局部生效的中间件')
     next()
   }
   const mw2 = (req, res, next) => {
     console.log('调用了第2个局部生效的中间件')
     next()
   }
   
   // 2. 创建路由
   app.get('/', [mw1, mw2], (req, res) => {
     res.send('Home page.')
   })
   app.get('/user', (req, res) => {
     res.send('User page.')
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1')
   })
   ```

##### 3.5.5.4 中间件分类

1. 应用级别的中间件：通过 `app.use()` 或 `app.get()` 或 `app.post()`，绑定到 app 实例上的中间件

2. 路由级别的中间件：绑定到 `express.Router()` 实例上的中间件，与应用级别中间件无区别

3. 错误级别的中间件：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题，如`throw new Error('服务器内部发生了错误！')`

   1）处理函数的四个参数：err, req, res, next，其中 err.message，对应的就是Error中定义的消息

   2）注意：错误级别中间件必须注册在所有路由之后（其他的中间件都是注册在路由之前）

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // 1. 定义路由
   app.get('/', (req, res) => {
     // 1.1 人为的制造错误
     throw new Error('服务器内部发生了错误！')
     res.send('Home page.')
   })
   
   // 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
   app.use((err, req, res, next) => {
     console.log('发生了错误！' + err.message)
     res.send('Error：' + err.message)
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1')
   })
   ```

4. Express 内置的中间件

   1）`express.static`：快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）

   2）`express.json`：解析 JSON 格式的请求体数据（有兼容性：4.16.0+）

   * 测试：postman->【post请求】->body->raw->JSON
   * `req.body`：服务器通过此属性接收数据
   * 注意：如果不注册解析表单数据中间件，req.body=undefined

   3）`express.urlencoded`：解析 URL-encoded 格式的请求体数据（有兼容性：4.16.0+）

   * 写法：`express.urlencoded({extended: false})`
   * 测试：postman->【post请求】->body->x-www-form-urlencoded

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
   // 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
   app.use(express.json())
   // 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
   app.use(express.urlencoded({ extended: false }))
   
   app.post('/user', (req, res) => {
     // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
     // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
     console.log(req.body)
     res.send('user: ok')
   })
   
   app.post('/book', (req, res) => {
     // 在服务器端，可以通过 req.body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
     console.log(req.body)
     res.send('book: ok')
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1')
   })
   ```

5. 第三方的中间件

   1）定义：非 Express 官方内置的，由第三方开发出来的中间件

   2）案例：`body-parser`，在express@4.16.0之前代替express.urlencoded的作用

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // 1. 导入解析表单数据的中间件 body-parser
   const parser = require('body-parser')
   // 2. 使用 app.use() 注册中间件
   app.use(parser.urlencoded({ extended: false }))
   // app.use(express.urlencoded({ extended: false }))	// 对比最新写法
   
   app.post('/user', (req, res) => {
     // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
     console.log(req.body)
     res.send('ok')
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1')
   })
   ```

6. 自定义中间件：`bodyParser`

   1）直接定义中间件

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   // 导入 Node.js 内置的 querystring 模块
   const qs = require('querystring')
   
   // 这是解析表单数据的中间件
   app.use((req, res, next) => {
     // 定义中间件具体的业务逻辑
     // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
     let str = ''
     // 2. 监听 req 的 data 事件
     req.on('data', (chunk) => {
       str += chunk
     })
     // 3. 监听 req 的 end 事件
     req.on('end', () => {
       // 在 str 中存放的是完整的请求体数据
       // TODO: 把字符串格式的请求体数据，解析成对象格式
       const body = qs.parse(str)
       req.body = body
       next()
     })
   })
   
   app.post('/user', (req, res) => {
     res.send(req.body)
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1')
   })
   ```

   2）分模块写法

   ```js
   // 中间件：custom-body-parser.js
   // 导入 Node.js 内置的 querystring 模块
   const qs = require('querystring')
   
   const bodyParser = (req, res, next) => {
     // 定义中间件具体的业务逻辑
     // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
     let str = ''
     // 2. 监听 req 的 data 事件
     req.on('data', (chunk) => {
       str += chunk
     })
     // 3. 监听 req 的 end 事件
     req.on('end', () => {
       // 在 str 中存放的是完整的请求体数据
       // console.log(str)
       // TODO: 把字符串格式的请求体数据，解析成对象格式
       const body = qs.parse(str)
       req.body = body
       next()
     })
   }
   
   module.exports = bodyParser
   ```

   ```js
   // 使用中间件
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // 1. 导入自己封装的中间件模块
   const customBodyParser = require('./14.custom-body-parser')
   // 2. 将自定义的中间件函数，注册为全局可用的中间件
   app.use(customBodyParser)
   
   app.post('/user', (req, res) => {
     res.send(req.body)
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1')
   })
   ```

------

#### 3.5.6 编写接口

##### 3.5.6.1 编写路由

1. 导入模块

   ```js
   // 路由文件：apiRouter.js
   const express = require('express')
   const router = express.Router()
   ```

2. 编写接口

   1）GET接口：对应 `req.query`

   ```js
   // 定义 GET 接口
   router.get('/get', (req, res) => {
     // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
     const query = req.query
     // 调用 res.send() 方法，向客户端响应处理的结果
     res.send({
       status: 0, // 0 表示处理成功，1 表示处理失败
       msg: 'GET 请求成功！', // 状态的描述
       data: query, // 需要响应给客户端的数据
     })
   })
   ```

   2）POST接口：对应 `req.body`

   ```js
   // 定义 POST 接口
   router.post('/post', (req, res) => {
     // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
     const body = req.body
     // 调用 res.send() 方法，向客户端响应结果
     res.send({
       status: 0,
       msg: 'POST 请求成功！',
       data: body,
     })
   })
   ```

   3）DELETE接口

   ```js
   // 定义 DELETE 接口
   router.delete('/delete', (req, res) => {
     res.send({
       status: 0,
       msg: 'DELETE请求成功',
     })
   })
   ```

3. 导出路由

   ```js
   module.exports = router
   ```

##### 3.5.6.2 编写服务器

1. 导入模块

   ```js
   const express = require('express')
   const app = express()
   ```

2. 配置中间件

   1）配置urlencoded中间件

   ```js
   // 配置解析表单数据的中间件
   app.use(express.urlencoded({ extended: false }))
   ```

   2）配置JSONP接口

   ```js
   // 必须在配置 cors 中间件之前，配置 JSONP 的接口
   app.get('/api/jsonp', (req, res) => {
     // TODO: 定义 JSONP 接口具体的实现过程
     // 1. 得到函数的名称
     const funcName = req.query.callback
     // 2. 定义要发送到客户端的数据对象
     const data = { name: 'zs', age: 22 }
     // 3. 拼接出一个函数的调用
     const scriptStr = `${funcName}(${JSON.stringify(data)})`
     // 4. 把拼接的字符串，响应给客户端
     res.send(scriptStr)
   })
   ```

   3）配置cors中间件

   ```js
   // 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
   const cors = require('cors')
   app.use(cors())
   ```

3. 导入路由并注册

   ```js
   // 导入路由模块
   const router = require('./apiRouter')
   // 把路由模块，注册到 app 上
   app.use('/api', router)
   ```

4. 启动服务器

   ```js
   // 启动服务器
   app.listen(80, () => {
     console.log('express server running at http://127.0.0.1')
   })
   ```

------

### 3.6 跨域资源共享

> 作用：解决GET、POST接口的跨域请求

#### 3.6.1 CORS

> Cross-Origin Resource Sharing，由一系列 HTTP 响应头组成，决定浏览器是否阻止前端 JS 代码跨域获取资源

##### 3.6.1.1 CORS基本使用

1. 原理：接口服务器配置了 CORS 相关的 HTTP 响应头，就可以解除浏览器端的跨域访问限制

2. 兼容性：IE10+、Chrome4+、FireFox3.5+

3. 使用：主要在服务器端进行配置，客户端浏览器无须做任何额外的配置

   ```js
   // 导入
   const cors = require('cors') 
   // 在路由之前调用
   app.use(cors())
   ```

##### 3.6.1.2 Access-Control-Allow

1. Origin：`Access-Control-Allow-Origin：<origin> | *`

   1）只允许来自指定地址的请求

   ```js
   res.setHeader( 'Access-Control-Allow-Origin', 'http://itcast.cn')
   ```

   2）允许来自任何域的请求

   ```js
   res.setHeader( 'Access-Control-Allow-Origin', '*')
   ```

2. Headers

   1）默认情况下，CORS 仅支持客户端向服务器发送9类请求头

   * Accept
   * Accept-Language
   * Content-Language
   * DPR
   * Downlink
   * Save-Data
   * Viewport-Width
   * Width 
   * Content-Type （text/plain、multipart/form-data、application/x-www-form-urlencoded ）

   2）如果发送了额外的请求头信息，需要在服务器端通过 Access-Control-Allow-Headers 对额外的请求头进行声明

   ```js
   res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header ')
   ```

3. Methods

   1）默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求

   2）想用PUT、DELETE 等方式请求服务器的资源，需要在服务器端通过 Access-Control-Alow-Methods指明实际请求所允许使用的 HTTP 方法

   3）例：只允许POST、GET、DELETE、HEAD方法

   ```js
   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
   ```

   4）例：允许所有的HTTP方法

   ```js
   res.setHeader('Access-Control-Allow-Methods', ' * ')
   ```

##### 3.6.1.3 请求分类

1. 简单请求：客户端与服务器之间只会发生一次请求

   1）请求方式：`GET`、`POST`、`HEAD`

   2）请求头：9类请求头

2. 预检请求：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求

   1）定义：在正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求。成功响应预检请求后，才会发送真正的请求并携带真实数据。

   2）满足以下任一条件：

   * 请求方式：除`GET`、`POST`、`HEAD`之外
   * 请求头：包含自定义头部字段
   * 向服务器发送了 application/json 格式的数据

------

#### 3.6.2 JSONP

> 浏览器端通过 `<script>` 标签的 src 属性请求服务器上的数据，同时服务器返回一个函数的调用，仅支持`GET`请求。

1. 特点：

   1）不属于真正的 Ajax 请求，因为没有使用 XMLHttpRequest 这个对象
   2）仅支持 GET 请求，不支持 POST、PUT、DELETE 等请求

2. 创建 JSONP 接口

   1）获取客户端发送过来的回调函数的名字

   ```js
   const funcName = req.query.callback
   ```

   2）得到要通过 JSONP 形式发送给客户端的数据

   ```js
   const data = { name: 'zs', age: 22 }
   ```

   3）根据前两步得到的数据，拼接出一个函数调用的字符串

   ```js
   const scriptStr = `${funcName}(${JSON.stringify(data)})`
   ```

   4）把上一步拼接得到的字符串，响应给客户端的 `<script>` 标签进行解析执行

   ```js
   res.send(scriptStr)
   ```

   5）注意：如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突必须在配置 CORS 中间件之前声明 JSONP 的接口

   ```js
   // 优先创建JSONP接口，这个接口不会被处理成CORS接口
   app.get('/api/jsonp', (req, res) => {})
   // 在配置CORS中间件，后续所有接口都会被处理成CORS接口
   app.use(cors())
   // 这是一个开启了CORS的接口
   app.get('/api/get', (req, res) => {})
   ```

   6）完整代码

   ```js
   app.get('/api/jsonp', (req, res) => {
     // TODO: 定义 JSONP 接口具体的实现过程
     // 1. 得到函数的名称
     const funcName = req.query.callback
     // 2. 定义要发送到客户端的数据对象
     const data = { name: 'zs', age: 22 }
     // 3. 拼接出一个函数的调用
     const scriptStr = `${funcName}(${JSON.stringify(data)})`
     // 4. 把拼接的字符串响应给客户端
     res.send(scriptStr)
   })
   ```

3. 使用 jQuery 发起 JSONP 请求

   ```js
   $('#btnJSONP').on('click', function () {
     $.ajax({
       method: 'GET',
       url: 'http://127.0.0.1/api/jsonp',
       dataType: 'jsonp',
       success: function (res) {
         console.log(res)
       },
     })
   })
   ```

------

### 3.7 MySQL

#### 3.7.1 MySQL基本概念

1. 分类：

   1）传统型数据库（关系型数据库/SQL 数据库）

   * MySQL（Community + Enterprise）
   * Oracle（收费）
   * SQL Server（收费）

   2）新型数据库（非关系型数据库/NoSQL 数据库）

   * MongoDB（Community + Enterprise）

2. 传统型数据库的数据组织结构：数据库(database)、数据表(table)、数据行(row)、字段(field)
3. 结构化查询语言SQL：Structured Query Language，是一门数据库编程语言，只能在关系型数据库中使用

------

#### 3.7.2 MySQL基本用法

##### 3.7.2.1 Workbench

1. DataType 数据类型：

   1）`int`：整数

   2）`varchar(20)`：字符串

   3）`tinyint(1)`：布尔值

2. 字段的特殊标识

   1）PK（Primary Key）：主键、唯一标识

   2）NN（Not Null）：值不允许为空

   3）UQ（Unique）：值唯一

   4）AI（Auto Increment）：值自动增长

##### 3.7.2.2 SQL语句

1. `SELECT` 语句：从表中查询数据
   1）查询表格所有数据：SELECT * FROM 表名

   ```sql
   SELECT * FROM users
   ```

   2）查询指定字段的数据：SELECT 列1,列2,... FROM table_name

   ```sql
   select username, password from users
   ```

   3）AS 关键字设置别名：SELECT 列1 AS 别名1, 列2 AS 别名2,... FROM 表名

   ```sql
   select count(*) as total from users where status=0
   select username as uname, password as upwd from users
   ```

2. `INSERT INTO` 语句：向数据表中插入新的数据行

   ```sql
   INSERT INTO table_name (列1, 列2, ...) VALUES (值1,值2, ...)
   INSERT INTO users (username, password) VALUES ('tony stark', '098123')
   ```

3. `UPDATE` 语句：修改表中的数据

   1）UPDATE：指定要更新的表

   2）SET：指定要更新的列

   3）WHERE：指定更新的条件，如果不指定WHERE，会导致整张表被更新

   ```sql
   UPDATE table_name SET 列1=值1, 列2=值2 WHERE 列名=某值
   UPDATE users SET password='888888' WHERE id=4
   ```

4. `DELETE` 语句：删除表中的行（如果不指定WHERE，会导致整张表被删除）

   ```sql
   DELETE FROM table_name WHERE 列名=某值
   DELETE FROM users WHERE id=4
   ```

5. `WHERE` 语句：限定选择的标准

   1）应用

   ```sql
   SELECT 列名 FROM 表名 WHERE 列 运算符 值
   UPDATE 表名 SET 列=新值 WHERE 列 运算符 值
   DELETE FROM 表名 WHERE 列 运算符 值
   ```

   2）运算符

   * =、>、<、>=、<=
   * 不等于：<>、!=
   * BETWEEN：在某范围内
   * LIKE：搜索某种形式

   ```sql
   SELECT * FROM users WHERE status=1
   SELECT * FROM users WHERE id>=2
   SELECT * FROM users WHERE username<>'ls'
   SELECT * FROM users WHERE username!='ls'
   ```

   3）`AND` 和 `OR` 运算符：在 WHERE 子语句中把两个或多个条件结合起来

   ```sql
   -- 使用 AND 来显示所有状态为0且id小于3的用户
   SELECT * FROM users WHERE status=0 AND id<3
   
   -- 使用 or 来显示所有状态为1 或 username 为 zs 的用户
   SELECT * FROM users WHERE status=1 or username='zs'
   ```

6. `ORDER BY` 语句：根据指定的列对结果集进行排序

   1）升序：默认，ASC

   ```sql
   -- 对users表中的数据，按照 status 字段进行升序排序
   SELECT * FROM users ORDER BY status
   ```

   2）降序：DESC

   ```sql
   -- 按照 id 对结果进行降序的排序  desc 表示降序排序   asc 表示升序排序（默认情况下，就是升序排序的）
   SELECT * FROM users ORDER BY id DESC
   ```

   3）多重排序

   ```sql
   SELECT * FROM 表名 ORDER BY 列1 DESC, 列2 ASC
   
   -- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序的排序
   SELECT * FROM users ORDER BY status DESC, username ASC
   ```

##### 3.7.2.3 SQL函数

1. `COUNT(*)` 函数：返回查询结果的总数据条数

   ```sql
   SELECT COUNT(*) FROM 表名
   ```

------

#### 3.7.3 项目中操作MySQL

1. 安装

   ```js
   npm i mysql
   ```

2. 连接

   1）配置 mysql 模块

   ```js
   const mysql = require('mysql')
   const db = mysql.createPool({
     host: '127.0.0.1', // 数据库的 IP 地址
     user: 'root', // 登录数据库的账号
     password: 'admin123', // 登录数据库的密码
     database: 'my_db_01', // 指定要操作哪个数据库
   })
   ```

   2）测试 mysql 模块

   ```js
   // 测试 mysql 模块能否正常工作
   db.query('select 1', (err, results) => {
     // mysql 模块工作期间报错了
     if (err) return console.log(err.message)
     // 能够成功的执行 SQL 语句
     console.log(results)
   })
   // 如果返回[ RowDataPacket { '1': 1 } ]说明测试成功
   ```

3. 查询数据：SELECT 语句：results为数组

   ```js
   // 查询 users 表中所有的数据
   const sqlStr = 'select * from users'
   db.query(sqlStr, (err, results) => {
     // 查询数据失败
     if (err) return console.log(err.message)
     // 查询数据成功
     // 注意：如果执行的是 select 查询语句，则执行的结果是数组
     console.log(results)
   })
   ```

4. 插入数据：INSERT INTO语句：results为对象

   1）传统方法：通过 affectedRows 属性，来判断是否插入数据成功

   ```js
   // 向 users 表中，新增一条数据
   const user = { username: 'Spider-Man', password: 'pcc123' }
   const sqlStr = 'insert into users (username, password) values (?, ?)'
   // 执行 SQL 语句
   db.query(sqlStr, [user.username, user.password], (err, results) => {
     if (err) return console.log(err.message)
     // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
     // 可以通过 affectedRows 属性，来判断是否插入数据成功
     if (results.affectedRows === 1) {
       console.log('插入数据成功!')
     }
   })
   ```

   2）便捷方法

   ```js
   // 演示插入数据的便捷方式
   const user = { username: 'Spider-Man2', password: 'pcc4321' }
   // 定义待执行的 SQL 语句
   const sqlStr = 'insert into users set ?'
   // 执行 SQL 语句
   db.query(sqlStr, user, (err, results) => {
       if (err) return console.log(err.message)
       if (results.affectedRows === 1) {
           console.log('插入数据成功')
       }
   })
   ```

5. 更新数据：UPDATE语句：results为对象

   1）传统方法：通过 affectedRows 属性，来判断是否更新数据成功

   ```js
   // 演示如何更新用户的信息
   const user = { id: 4, username: 'aaa', password: '000' }
   // 定义 SQL 语句
   const sqlStr = 'update users set username=?, password=? where id=?'
   // 执行 SQL 语句
   db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
     if (err) return console.log(err.message)
     // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
     if (results.affectedRows === 1) {
       console.log('更新成功')
     }
   })
   ```

   2）便捷方法：前提是数据对象的每个属性和数据表的字段一一对应

   ```js
   // 演示更新数据的便捷方式
   const user = { id: 4, username: 'aaaa', password: '0000' }
   // 定义 SQL 语句
   const sqlStr = 'update users set ? where id=?'
   // 执行 SQL 语句
   db.query(sqlStr, [user, user.id], (err, results) => {
     if (err) return console.log(err.message)
     if (results.affectedRows === 1) {
       console.log('更新数据成功')
     }
   })
   ```

6. 删除数据：DELETE语句：results为对象

   ```js
   // 删除 id 为 5 的用户
   const sqlStr = 'delete from users where id=?'
   db.query(sqlStr, 5, (err, results) => {
     if (err) return console.log(err.message)
     // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
     if (results.affectedRows === 1) {
       console.log('删除数据成功')
     }
   })
   ```

7. 标记删除：使用DELETE会真正删除数据，推荐用UPDATE将status改为1来模拟删除的状态

   ```js
   // 标记删除：将 id=4 的用户 status 改为1
   const sqlStr = 'update users set status=? where id=?'
   db.query(sqlStr, [1, 4], (err, results) => {
     if (err) return console.log(err.message)
     if (results.affectedRows === 1) {
       console.log('标记删除成功')
     }
   })
   ```

------

### 3.8 身份认证

#### 3.8.1 Sessio认证机制

##### 3.8.1.1 基于服务端渲染的传统模式

1. 定义：服务器发送给客户端的 HTML 页面，是在服务器通过字符串的拼接动态生成的，客户端无需使用Ajax请求页面数据

   ```js
   app.get('/index.html', (req, res) => {
     const user = { name: 'zs', age: 20 }
     const html = `<h1>姓名: ${user.name}, 年龄: ${user.age}</h1>`
     res.send(html)
   })
   ```

   1）优点：

   * 前端耗时少：服务器端负责动态生成 HTML 内容，浏览器只需要直接渲染页面即可
   * 有利于SEO：服务器端响应的是完整的 HTML 页面，爬虫更容易爬取获得信息

   2）缺点：

   * 占用服务器端资源：服务器端完成 HTML 页面内容的拼接，如果请求较多会对服务器造成一定的访问压力
   * 不利于前后端分离：无法进行分工合作，尤其对于前端复杂度高的项目，开发效率低

2. HTTP 协议的无状态性

   1）定义：客户端的每次 HTTP 请求都是独立的，连续多个请求之间没有直接的关系，服务器不会主动保留每次 HTTP 请求的状态

   2）突破限制方法：Cookie

3. Cookie：存储在用户浏览器中的一段不超过 4 KB 的字符串

   1）结构：由一个名称（Name）、一个值（Value）和其它几个用于控制 Cookie 有效期、安全性、使用范围的可选属性组成

   2）发送：不同域名下的 Cookie 各自独立，每当客户端发起请求时，会自动把当前域名下所有未过期的 Cookie 一同发送到服务器

   3）特性：自动发送、域名独立、过期时限、4KB 限制

   4）流程：

   * 客户端第一次请求服务器时，服务器通过响应头的形式，向客户端发送一个身份认证的 Cookie，客户端会自动将 Cookie 保存在浏览器中
   * 随后当客户端浏览器每次请求服务器时，浏览器会自动将身份认证相关的 Cookie，通过请求头的形式发送给服务器，服务器即可验明客户端的身份

   5）不安全：Cookie 是存储在浏览器中的，且浏览器也提供了读写 Cookie 的 API，因此 Cookie 很容易被伪造

##### 3.8.1.2 Session认证

![session认证机制](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\session认证机制.png)

1. 适用场景：当前端请求后端接口【不存在跨域问题】的时候，推荐使用 Session 身份认证机制

2. 局限性：需要配合 Cookie 才能实现，由于 Cookie 默认不支持跨域访问，所以当涉及到前端跨域请求后端接口时，需要做很多额外的配置

3. 安装：

   ```cmd
   npm i express-session
   ```

4. 使用步骤：

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // TODO_01：请配置 Session 中间件
   const session = require('express-session')
   app.use(
     session({
       secret: 'itheima',
       resave: false,
       saveUninitialized: true,
     })
   )
   
   // 托管静态页面
   app.use(express.static('./pages'))
   // 解析 POST 提交过来的表单数据
   app.use(express.urlencoded({ extended: false }))
   
   // 登录的 API 接口
   app.post('/api/login', (req, res) => {
     // 判断用户提交的登录信息是否正确
     if (req.body.username !== 'admin' || req.body.password !== '000000') {
       return res.send({ status: 1, msg: '登录失败' })
     }
   
     // TODO_02：请将登录成功后的用户信息，保存到 Session 中
     // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
     req.session.user = req.body // 用户的信息
     req.session.islogin = true // 用户的登录状态
   
     res.send({ status: 0, msg: '登录成功' })
   })
   
   // 获取用户姓名的接口
   app.get('/api/username', (req, res) => {
     // TODO_03：请从 Session 中获取用户的名称，响应给客户端
     if (!req.session.islogin) {
       return res.send({ status: 1, msg: 'fail' })
     }
     res.send({
       status: 0,
       msg: 'success',
       username: req.session.user.username,
     })
   })
   
   // 退出登录的接口
   app.post('/api/logout', (req, res) => {
     // TODO_04：清空 Session 信息
     req.session.destroy()
     res.send({
       status: 0,
       msg: '退出登录成功',
     })
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80, function () {
     console.log('Express server running at http://127.0.0.1:80')
   })
   ```

5. 登录案例：

   1）后端接口：app.js

   ```js
   // 登录接口
   app.post('/api/login')
   // 获取用户登录状态
   app.get('/api/username')
   // 退出登录
   app.post('/api/logout')
   ```

   2）前端页面：pages/

   ```js
   // index.html
   $.get('/api/username')  // 检测用户是否登录，若未登录跳转至 login.html
   $.post('/api/logout')   // 点击退出登录按钮，跳转至 login.html
   
   // login.html
   $.post('/api/login')	// 用户登录表单验证，成功后跳转至index.html
   ```

------

#### 3.8.2 JWT认证机制

> JSON Web Token，是目前最流行的跨域认证解决方案。

##### 3.8.2.1 基于前后端分离的新型模式

1. 定义：后端只负责提供 API 接口，前端使用 Ajax 调用接口

2. 优点：

   1）开发体验好：前端专注于 UI 页面的开发，后端专注于API 的开发

   2）用户体验好：Ajax 技术可以轻松实现页面的局部刷新

   3）减轻服务器端压力：页面最终是在每个用户的浏览器中生成的

3. 缺点：

   1）不利于 SEO：完整的 HTML 页面需要在客户端动态拼接完成，爬虫对无法爬取页面的有效信息

   2）解决方案：利用 Vue、React 等前端框架的 SSR （server side render）技术

##### 3.8.2.2 JWT认证

![JWT认证机制](D:\MyProjects\Website\Tutoring\Web_Basic\Section5-Server\src\JWT认证机制.png)

1. 适用场景：当前端需要跨域请求后端接口的时候，推荐使用 JWT 认证机制
2. 流程：用户的信息通过 Token 字符串的形式，保存在客户端浏览器中；服务器通过还原 Token 字符串的形式来认证用户的身份

3. 结构：三部分组成，分别是 Header（头部）、Payload（有效荷载）、Signature（签名），三者之间用“.”分隔

   1）Payload（有效荷载）：真正的用户信息，它是用户信息经过加密之后生成的字符串

   2）Header（头部）、Signature（签名）：安全性相关的部分，只是为了保证 Token 的安全性

4. 使用方式：

   1）语法：`Authorzation: Bearer <token>`

   2）客户端收到服务器返回的 JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中

   3）此后客户端每次与服务器通信，都要带上这个 JWT 的字符串进行身份认证，把 JWT 放在 HTTP 请求头的 Authorization 字段中

5. 安装：

   ```js
   // 用于生成 JWT 字符串
   npm i jsonwebtoken
   // 用于将 JWT 字符串解析还原成 JSON 对象
   npm i express-jwt
   ```

6. 使用步骤

   1）导入：`jsonwebtoken`、`express-jwt/lib`、`cors`、`body-parser`

   2）定义 secret 密钥：`const secretKey = 'XXXXXXXX'`

   * 加密：生成 JWT 字符串时，使用 secret 密钥对用户的信息进行加密，最终得到加密好的 JWT 字符串
   * 解密：把 JWT 字符串解析还原成 JSON 对象的时候，使用 secret 密钥进行解密

   3）登录成功后生成 JWT 字符串：`jwt.sign({ username: userinfo.username },secretKey, {expiresIn:'30s'})`

   * 注意：千万不要把密码加密到 token 字符中

   4）注册 express-jwt 中间件：`app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))`

   * 原理：客户端每次在访问那些有权限接口时，都需要主动通过请求头中的 Authorization 字段，将 Token 字符串发送到服务器进行身份认证，服务器可以通过 express-jwt自动将客户端发送过来的 Token 解析还原成 JSON 对象
   * 作用：可以把解析出来的用户信息，挂载到 req.user 属性上
   * 可用 `unless` 指定哪些接口不需要访问权限

   5）使用 req.user 获取用户信息

   * 作用：express-jwt配置成功后，可在那些有权限的接口中使用 req.user 对象访问从 JWT 字符串中解析出来的用户信息
   * Postman测试：GET->Headers->`Authorization: Bearer <token>`（注意token的有效时长）
   * 返回示例：{ username: 'admin', iat: 1641140151, exp: 1641140181 }

   6）捕获解析 JWT 失败后产生的错误：`app.use((err, req, res, next) => {...})`

   * 若客户端发送过来的 Token 字符串过期或不合法，会产生解析失败的错误，可通过 Express 的错误中间件捕获错误并处理
   * token 解析失败错误：`err.name == 'UnauthorizedError'`

   ```js
   // 导入 express 模块
   const express = require('express')
   // 创建 express 的服务器实例
   const app = express()
   
   // TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
   const jwt = require('jsonwebtoken')
   const expressJWT = require('express-jwt/lib')
   
   // 允许跨域资源共享
   const cors = require('cors')
   app.use(cors())
   
   // 解析 post 表单数据的中间件
   const bodyParser = require('body-parser')
   app.use(bodyParser.urlencoded({ extended: false }))
   
   // TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey
   // 加密：生成 JWT 字符串时，使用 secret 密钥对用户的信息进行加密，最终得到加密好的 JWT 字符串
   // 解密：把 JWT 字符串解析还原成 JSON 对象的时候，使用 secret 密钥进行解密
   const secretKey = 'itheima No1 ^_^'
   
   // TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
   // 客户端每次在访问那些有权限接口时，都需要主动通过请求头中的 Authorization 字段，将 Token 字符串发送到服务器进行身份认证
   // 服务器可以通过 express-jwt 自动将客户端发送过来的 Token 解析还原成 JSON 对象
   // 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
   // 可用 unless 指定哪些接口不需要访问权限
   app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))
   
   // 登录接口
   app.post('/api/login', function (req, res) {
     // 将 req.body 请求体中的数据，转存为 userinfo 常量
     const userinfo = req.body
     // 登录失败
     if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
       return res.send({
         status: 400,
         message: '登录失败！',
       })
     }
     // 登录成功
     // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
     // 参数1：用户的信息对象
     // 参数2：加密的秘钥
     // 参数3：配置对象，可以配置当前 token 的有效期
     // 记住：千万不要把密码加密到 token 字符中
     const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
     res.send({
       status: 200,
       message: '登录成功！',
       token: tokenStr, // 要发送给客户端的 token 字符串
     })
   })
   
   // 这是一个有权限的 API 接口
   app.get('/admin/getinfo', function (req, res) {
     // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
     console.log(req.user)
     res.send({
       status: 200,
       message: '获取用户信息成功！',
       data: req.user, // 要发送给客户端的用户信息
     })
   })
   
   // TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
   app.use((err, req, res, next) => {
     // 这次错误是由 token 解析失败导致的
     if (err.name === 'UnauthorizedError') {
       return res.send({
         status: 401,
         message: '无效的token',
       })
     }
     res.send({
       status: 500,
       message: '未知的错误',
     })
   })
   
   // 调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(8888, function () {
     console.log('Express server running at http://127.0.0.1:8888')
   })
   ```

   
