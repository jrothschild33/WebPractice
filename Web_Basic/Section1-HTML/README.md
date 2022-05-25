# HTML

## 第1章 HTML框架

1. 文件类型：`<!DOCTYPE html>`

2. 网站语言：`<html lang="zh-CN">`

3. 头部：`<head>`

   1）`<META ...>`：编码UTF-8、视图自适应、其他、渲染
   
   ```html
   <meta http-quiv="X-UA-Compatible content="IE="edge">
   <!--如果版本低于IE9-->
   [if lt IE 9]>
   <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
   <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <![endif]
   ```

   2）标题`<title>`

4. 主体：`<body>`

------

## 第2章 基础文字

1. 标题：`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`

2. 段落：`<p>`、`<br />`

3. 文本格式化：

   1）加粗：`<strong>`、`<b>`

   2）倾斜：`<em>`、`<i>`

   3）删除线：`<del>`、`<s>`

   4）下划线：`<ins>`、`<u>`

4. 盒子元素：

   1）独占一行：`<div>`

   2）小箱体：`<span>`

5. 图像：`<img>`

   1）路径：src

   2）替换：alt

   3）标题：title

   4）宽高：width、height

   5）边框：border

   ```html
   <img src="img.jpg" alt="我是pink老师" title="我是pink老师思密达" width="500" border="15" />
   ```

6. 超链接：`<a>`

   1）打开方式：target

   * 当前窗口(默认)：`_self`

   * 新窗口：`_blank`

   2）提示文字：title

   3）锚点：

   * 起点：`<a href："#...">`
   * 终点：`<h3 id="...">`

   ```html
   1.外部链接：
   target 打开窗口的方式：_self当前窗口打开页面（默认）、_blank 新窗口打开页面
   <a href="http://www.qq.com" target="_blank"> 腾讯</a>
   <a href="http://www.itcast.cn" target="_blank">传智播客</a>
   
   2.内部链接: 网站内部页面之间的相互链接
   <a href="gongsijianjie.html" target="_blank">公司简介</a>
   
   3.空链接:#
   <a href="#">公司地址</a>
   
   4.下载链接: 地址链接的是 文件 .exe 或者是 zip 等压缩包形式
   <a href="img.zip">下载文件</a>
   
   5.网页元素的链接
   <a href="http://www.baidu.com"><img src="img.jpg" /></a>
   
   6.锚点链接
   <a href="#live">个人生活</a><br />
   <a href="#zuopin">主要作品</a><br />
   
   <h3 id="live">个人生活</h3>
   个人生活内容部分....
   <h3 id="zuopin">主要作品</h3>
   主要作品内容部分....
   ```

7. 特殊字符

   1）空格：`&nbsp;`

   2）左尖头<：`&lt;`

   3）右尖头>：`&gt;`

   4）注释：`<!-- -->`、`/*`

------

## 第3章 表格Table

1. 结构：

   1）表头：`<thead>`

   2）主体：`<tbody>`

2. 元素：

   1）行：`<tr>`

   2）标题单元格：`<th>`

   3）单元格：`<td>`

3. 属性：

   1）对齐：align

   2）边框：border

   3）文字距单元格距离：cellpadding

   4）单元格之间的距离：cellspacing

   5）宽高：width、height

   ```html
   <table align="center" border="1" cellpadding="0" cellspacing="0" width="500" height="249">
     <tr>
       <th>姓名</th>
       <th>性别</th>
       <th>年龄</th>
     </tr>
     <tr>
       <td>刘德华</td>
       <td>男</td>
       <td>56</td>
     </tr>
     <tr>
       <td>张学友</td>
       <td>男</td>
       <td>58</td>
     </tr>
     <tr>
       <td>郭富城</td>
       <td>男</td>
       <td>51</td>
     </tr>
     <tr>
       <td>黎明</td>
       <td>男</td>
       <td>57</td>
     </tr>
   </table>
   ```

4. 合并单元格：

   1）横向合并列：colspan，例：`<td colspan="2"></td>`

   2）纵向合并行：rowspan，例：`<td rowspan="2"></td>`

   ```html
   <table width="500" height="249" border="1" cellspacing="0">
     <tr>
       <td></td>
       <td colspan="2"></td>
     </tr>
     <tr>
       <td rowspan="2"></td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <td></td>
       <td></td>
     </tr>
   </table>
   ```

------

## 第4章 列表

1. 无序列表`<ul>`：项目`<li>`

2. 有序列表`<ol>`：项目`<li>`

3. 自定义列表`<dl>`

   1）项目1：`<dt>`：一个`<dt>`对应多个`<dd>`

   2）项目2：`<dd>`

   ```html
   <dl>
     <dt>关注我们</dt>
       <dd>新浪微博</dd>
       <dd>官方微信</dd>
       <dd>联系我们</dd>
     <dt>关注我们</dt>
       <dd>新浪微博</dd>
       <dd>官方微信</dd>
       <dd>联系我们</dd>
   </dl>
   ```

------

## 第5章 表单Form

### 5.1 表单属性

1. 动作：`action`，例：`"XXX.php"`

2. 方法：`method`，例：`"POST"`、`"GET"`

3. 名称：`name`

   ```html
   <form action="demo.php" method="POST" name="name1">
     <!-- 里面储存各种表单元素 -->
   </form>
   ```

4. 必填：`required`

5. 提示：`placeholder`，提示文本，若输入文字则自动消失

6. 自动聚焦：`autofocus`，页面加载完后光标自动聚焦到指定表单

7. 自动填写：`autocomplate`，可填：`off/on（默认）`，必须有name属性，且曾经成功提交过

   ```html
   <style>
     /* 这里有2个冒号，因为placeholder是伪元素 */
     input::placeholder {
       color: pink;
     }
   </style>
   <form action="">
     <input type="search" name="sear" id="" required="required" placeholder="pink老师" autofocus="autofocus" 
   autocomplete="on" />
     <input type="file" name="" id="" multiple="multiple" />
     <input type="submit" value="提交" />
   </form>
   ```

### 5.2 输入型 input

1. 属性

   1）名称：name

   2）值：value

2. H5之前的类型：`type`

   1）文字：text，最大长度：maxlength

   2）密码：password

   3）单选：radio

   4）多选：checkbox，选中状态：checked

   5）提交：submit

   6）重置：reset

   7）文件：file，多选文件：multiple

   8）按钮：button

   ```html
   <form action="xxx.php" method="get">
     <!-- text 文本框 用户可以里面输入任何文字 -->
     用户名: <input type="text" name="username" value="请输入用户名" maxlength="6" /> <br />
       
     <!-- password 密码框 用户看不见输入的密码 -->
     密码: <input type="password" name="pwd" /> <br />
       
     <!-- radio 单选按钮 可以实现多选一 -->
     <!-- name 是表单元素名字 这里性别单选按钮必须有相同的名字 name 才可以实现多选 -->
     <!-- 单选按钮和复选框可以设置checked 属性, 当页面打开的时候就可以默认选中这个按钮 -->
     性别: <input type="radio" name="sex" value="男" /> 男 <input type="radio" name="sex" value="女" 
   checked="checked" /> 女 <input type="radio" name="sex" value="不明" /> 不明 <br />
     <!-- checkbox 复选框 可以实现多选 name值也必须相同-->
     爱好: 吃饭 <input type="checkbox" name="hobby" value="吃饭" checked="checked" /> 睡觉 <input 
   type="checkbox" name="hobby" value="睡觉" /> 打豆豆 <input type="checkbox" name="hobby" value="打豆豆" 
   checked="checked" />
     <br />
       
     <!-- 点击了提交按钮,可以把 表单域 form 里面的表单元素 里面的值 提交给后台服务器 -->
     <input type="submit" value="免费注册" />
       
     <!-- 重置按钮可以还原表单元素初始的默认状态 -->
     <input type="reset" value="重新填写" />
       
     <!-- 普通按钮 button  后期结合js 搭配使用-->
     <input type="button" value="获取短信验证码" /> <br />
       
     <!-- 文件域 使用场景 上传文件使用的 -->
     上传头像: <input type="file" />
   </form>
   ```

3. H5之后新增类型：`type`

   1）邮箱：email：以下类型可添加提交按钮：`type="submit" value="提交"`，可以对输入的值进行验证

   2）网址：url

   3）日期：date

   4）时间：time

   5）数量：number

   6）手机：tel

   7）搜索：search

   8）颜色：color

   ```html
   <form action="">
     <ul>
       <li>邮箱: <input type="email" /></li>
       <li>网址: <input type="url" /></li>
       <li>日期: <input type="date" /></li>
       <li>时间: <input type="time" /></li>
       <li>数量: <input type="number" /></li>
       <li>手机号码: <input type="tel" /></li>
       <li>搜索: <input type="search" /></li>
       <li>颜色: <input type="color" /></li>
       <!-- 点击提交按钮就可以验证表单了 -->
       <li><input type="submit" value="提交" /></li>
     </ul>
   </form>
   ```

### 5.3 标签型 label

1. 作用：绑定一个表单元素，点击文字即可跳转到表单元素上

2. 属性：`<label>`起点：`for`，表单元素终点：`id`

   ```html
   <label for="text"> 用户名:</label> <input type="text" id="text" value="请输入用户名">
   <input type="radio" id="male" name="sex" value="male" checked="checked" /><label for="male">男</label>
   <input type="radio" id="female" name="sex" value="female" /> <label for="female">女</label>
   ```

### 5.4 下拉表单 select

1. 选项：`<option>`

2. 属性：选中状态：`selected="selected"`

   ```html
   <form>
     籍贯:
     <select>
       <option>山东</option>
       <option>北京</option>
       <option>天津</option>
       <option selected="selected">火星</option>
     </select>
   </form>
   ```

### 5.5 文本域 textarea

1. 属性：列：`cols`，行：`rows`

2. 预留文字：写在`<textarea>....</textarea>`之间

   ```html
   <form>
     今日反馈:
     <textarea cols="50" rows="5">我知道这个反馈留言是textarea来做的 </textarea>
   </form>
   ```

------

## 第6章 语义化标签

> 兼容性较差，只能在IE9+的浏览器使用，IE9中需要将这些元素转为块级元素（display: block）

1. 头部标签：`<header>`

2. 导航标签：`<nav>`

3. 内容标签：`<article>`

4. 定义文档某个区域：`<section>`

5. 侧边栏标签：`<aside>`

6. 尾部标签：`<footer>`

   ```html
   <body>
     <header>头部标签</header>
     <nav>导航栏标签</nav>
     <section>某个区域</section>
   </body>
   ```

------

## 第7章 多媒体标签

### 7.1 音频 audio

1. 格式：MP3(主流)、Wav、Ogg

2. 考虑兼容性：`type`，可填：`"audio/mpeg"`、`"audio/ogg"`

3. 自动播放：`autoplay`，谷歌禁用了此项功能

4. 播放组件：`controls`

   ```html
   <audio src="media/music.mp3" autoplay="autoplay" controls="controls"></audio>
   ```

### 7.2 视频 vedio

1. 格式：MP4(主流)、WebM、Ogg

2. 地址：`src`，填写视频地址url

3. 自动播放：`autoplay`

4. 播放组件：`controls`，一般不显示控制组件

5. 宽高：`width`、`height`

6. 循环播放：`loop`

7. 预加载：`preload`

8. 预加载：`auto`

9. 不加载：`none`

10. 静音播放：`muted`

11. 等待加载的画面：`poster`，填写图片地址`url`

12. 考虑兼容性：type，可填：`"vedio/mp4"`、`"vedio/ogg"`

    ```html
    <style>
      video { width: 100%; }
    </style>
    <video src="media/mi.mp4" autoplay="autoplay" muted="muted" loop="loop" poster="media/mi9.jpg"></video>
    ```

------

## 第8章 框架标签 iframe

1. 语法：

   ```html
   <iframe name="fm" src="/xx.html"></iframe>
   ```

2. 配合超链接标签：

   1）href：用来打开的网页地址

   2）target：用来指定在哪里打开网页，例子中在name="fm"的框架中打开网页

   ```html
   <a href="/xx.html" target="fm"></a>
   ```

------
