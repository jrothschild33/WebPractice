# CSS

## 第1章 CSS基础知识

### 1.1 CSS结构与类型

1. 结构：头部`<head>`里写`<style>...</style>`

2. 样式表类型：

   1）内部样式表：单独写到style标签内部

   2）行内样式表：直接在标签内写样式属性

   3）外部样式表：

   ```html
   <link rel="stylesheet" href="style.css">
   ```

### 1.2 CSS书写顺序

1. 布局定位

   ```css
   display / position / float / clear / visibility / overflow
   ```

2. 自身属性

   ```css
   width / height / margin / padding / margin / border / background
   ```

3. 文本属性

   ```css
   color / font / text-decoration / text-align / vertical-align / white-space / break-word
   ```

4. 其他属性

   ```css
   content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient
   ```

### 1.3 CSS常用工具

#### 1.3.1 emmet语法

1. 标签：

   1）输入标签名，按Tab键即可生成

   2）生成多个相同标签，加上`*`即可，如：`div*3 ` + Tab

   3）生成多个不同选择器的div：`.name1+.name2+...+.namex` + Tab

   4）生成父子级关系标签，用>即可，如：`ul>li` + Tab

   5）生成兄弟级关系标签，用+即可，如：`div+p `+ Tab

   6）生成带有类名或id名的标签，用 `标签名.name或#name` + Tab

   7）生成带顺序的标签，用 `标签名$.name*n` + Tab

   8）生成标签内部写内容，用{}表示：`标签名{}` + Tab

2. 样式名缩写:数值 + Tab

   1）`w200` --> width:200px

   2）`lh26` --> line-height:26px

   3）`ti2` --> text-indent: 2em

3. 首字母缩写 + Tab

   1）`tac` --> text-align: center

   2）`tdn` --> text-decoration: none

#### 1.3.2 自动格式化代码

1. 设置 --> emmet.include--> settings.json

   ```json
   "editor.formatOnType": true
   "editor.formatOnSave": true
   ```

#### 1.3.3 兼容性检查

1. 网站：[caniuse.com](https://caniuse.com/)

------

## 第2章 CSS基础属性

### 2.1 字体属性

1. `font-style`：文字风格

   1）正常：normal

   2）倾斜：italic

2. `font-weight`：字体粗细

   1）正常：400

   2）加粗：700

3. `font-size`：字体大小，标题h1~h6需要单独指定文字大小

4. `font-family`：字体类型，可以写多个，用逗号隔开

   ```css
   font-family: 'Times New Roman', Times, serif;
   ```

5. `font`：复合简写，默认顺序：文字风格、字体粗细、字体大小/行高、字体类型

   ```css
   font： font-style font-weight font-size/line-height font-family
   ```

------

### 2.2 文本属性

1. `color`：颜色

   1）预定义文字：deeppink

   2）十六进制：#cc00ff

   3）RGB：rgb(255, 0, 255)

2. `text-align`：对齐

   1）left：默认，左对齐

   2）right：右对齐

   3）center：居中对齐

3. `text-decoration`：装饰

   1）none：默认，无

   2）underline：下划线

   3）overline：上划线

   4）line-through：删除线

4. `text-indent`：缩进，单位：em，表示缩进几个文字大小

5. `line-height`：行间距，单位：px，如果写成【字体大小/行高X】的样式，则行高为字体大小的X倍

6. `user-select`：用户是否可以选中文字

   1）auto：默认，可选中

   2）none：不可选中

------

### 2.3 透明度属性

1. `opacity(0~1)`：0完全透明，1完全不透明

------

### 2.4 背景属性

1. 背景颜色：`background-color`

   1）颜色：pink ....

   2）透明：transparent

   3）半透明：rgba（X, X, X, alpha【0~1小数】）

2. 背景图片：`background-img`

   1）参数：`url（images/logo.png）`

3. 背景平铺：`background-repeat`

   1）不平铺：no-repeat

   2）平铺：repeat

   3）沿着X轴平铺：repeat-x

   4）沿着Y轴平铺：repeat-y

4. 背景固定：`background-attachment`

   1）背景图片固定：fixed

   2）随着页面其余部分滚动：scroll

5. 背景位置：`background-position：x y`

   1）方位名词：`top`、`center`、`bottom`、`left`、`center`、`right`

   * 先写哪个没关系，center right 和 right center是等价的，默认居中对齐

   2）精确单位：

   * 百分数、浮点数字+单位标识符
   * 顺序：第一个肯定是X坐标，第二个肯定是Y坐标（距上顶、左侧的距离）

   3）混合单位：

   * 方位名词+精确单位：第一个肯定是X坐标，第二个肯定是Y坐标
   * 注意：x和y之间没有逗号，是空格！

6. 背景缩放：`background-size：x y`

   1）像素单位px：宽、高，只写一个则默认是宽度，高度随着等比例缩放

   2）百分比单位%：相对于父级盒子拉伸，只写一个则默认是宽度，高度随着等比例缩放

   3）cover：等比例拉伸铺满，可能有部分背景图显示不全

   4）contain：宽高等比例拉伸，如果宽或高其中一个铺满盒子就不再拉伸，可能有部分空白

   5）注意：x和y之间没有逗号，是空格！

7. 复合简写：`background`，默认顺序：颜色、图片地址、平铺、固定、位置 / 缩放

   ```css
   background: url(../images/bg.jpg) no-repeat 0 0 / cover;
   ```

8. 背景渐变：`background: -webkit-linear-gradient（起始方向，颜色1，眼色2，……）`

   1）方位名词：`top`(默认)、`bottom`、`left`、`right`，以及它们的组合使用

   2）注意：必须添加浏览器私有前缀

------

### 2.5 边框属性

#### 2.5.1 默认边框 border

> 边框会向外延伸大小，如盒子大小为200px，10px的边框让盒子整体变为220px

1. 边框粗细：`border-width`，单位：px

2. 边框样式：`border-style`

   1）实线边框：solid

   2）虚线边框：dashed

   3）点线边框：dotted

3. 边框位置：

   1）上边框：`border-top`

   2）下边框：`border-bottom`

   3）左边框：`border-left`

   4）右边框：`border-right`

4. 复合简写：`border`，没有顺序：粗细、样式、颜色

5. 表格相邻边框合并：`border-collapse`

   1）分开：separate（默认）

   2）合并：collapse

6. 相邻单元格边框间距：`border-spacing`

   1）仅用于“边框分离 separate”模式

   2）两个数值：水平间隔px，垂直间隔px

------

#### 2.5.2 圆角边框 border-radius

1. 边框半径：

   1）单位：px

   2）百分比：50%（半径是宽高的一半，可以做圆形）

2. 多种写法：例：`border-top-left-radius`
3. 复合简写：`border-radius`，顺序：左上、右上、右下、左下（规则与padding相同）

------

#### 2.5.3 边框图片 border-image

> 需要与border、border-width、内部盒子相配合使用，盒子模型设置为 `box-sizing:border-box`

1. 作用：盒子大小不一，但边框样式相同，可以自定义边框样式

2. 图片路径：`border-image-source:url(...)`

3. 边框切图：`border-image-slice`

   ![边框切图：border-image-slice](D:\MyProjects\Website\Tutoring\Web_Basic\Section2-CSS\src\边框切图：border-image-slice.png)

   1）原理：把四个角切出去（类似九宫格），中间部分可以铺排、拉抻、环绕

   2）顺序：上、右、下、左（不加单位）

   ```css
   border-image-slice: 51 38 20 132;
   ```

4. 边框宽度：`border-image-width`，里面的内容不会被挤压、保持原位

5. 边框平铺：拉抻的是九宫格上下左右中间部分

   1）平铺：repeat

   2）铺满：round

   3）拉抻：stretch（默认）

------

### 2.6 边距属性

> 不同浏览器有不同的默认设定值，为了统一起见，最好清除默认边距：`* {margin: 0;padding: 0;}`

#### 2.6.1 内边距属性

> 内边距会向外延伸大小，如盒子大小为200px，10px的边距让盒子整体变为220px。

1. 内边距：`padding-XXX`，顺时针顺序：上/右/下/左（top/right/bottom/left)

2. 复合简写：`padding`

   1）1个值：padding: 5px （上下左右都有5px内边距）

   2）2个值：padding: 5px 10px（上下5px，左右10px）

   3）3个值：padding: 5px 10px 20px（上5px，左右10px，下20px）

   4）4个值：padding: 5px 10px 20px 30px（上5px，左10px，右20px，下30px）

3. 注意：

   1）如果盒子本身没有指定width/height属性，则padding不会撑开盒子大小

   2）对于子级元素，如果仅是继承了父级元素的width/height属性，padding也不会撑开盒子大小

------

#### 2.6.2 外边距属性

> 外边距不会撑大盒子，但会使盒子周围出现空白。

1. 外边距：`margin-XXX`，顺时针顺序：上/右/下/左（top/right/bottom/left)

2. 块级元素水平居中：

   ```css
   margin-left/right: auto
   margin: auto
   margin: 0 auto
   ```

3. 行内、行内块元素水平居中

   ```css
   text-align：center
   ```

4. 复合简写：`margin`（与padding规则相同）

   * 特殊应用：auto自动适应

   ```css
   margin：100px auto
   ```

5. 外边距合并问题

   1）相邻块元素垂直外边距合并：总边距取最大值(上盒子`margin-bottom`，下盒子`margin-top`)

   2）嵌套块元素垂直外边距塌陷：对于嵌套父子元素，父元素有上边距，同时子元素也有上边距，此时父元素会塌陷较大的外边距值

   * 为父元素定义上边框：`border: 1px solid transparent`
   * 为父元素定义上内边框：`padding: 1px`
   * 为父元素添加：`overflow: hidden`
   * 注意：浮动、固定、绝对定位的盒子不会有塌陷问题

------

### 2.7 列表属性

1. 列表项的标记：`list-style-type`

   1）去掉小圆点：none

   2）实心圆：disc

   3）空心圆：circle

   4）实心方块：suqare

   5）阿拉伯数字：decimal

------

### 2.8 阴影属性

1. 盒子阴影：`box-shadow`

   1）h-shadow：水平阴影距离，允许负值

   2）v-shadow：垂直阴影距离，允许负值

   3）blur：模糊距离，可选

   4）spread：阴影尺寸，可选

   5）color：阴影颜色，可选

   6）inset：将外部阴影(outset)改为内部阴影，可选

2. 文字阴影：`text-shadow`

   1）h-shadow：水平阴影距离，允许负值

   2）v-shadow：垂直阴影距离，允许负值

   3）blur：模糊距离，可选

   4）color：阴影颜色，可选

------

## 第3章 CSS高级属性

### 3.1 盒子模型 box-sizing

1. `content-box`（默认）：盒子大小 = width+padding+border
2. `border-box`：盒子大小 = width（无需再担心边框、内边距撑大盒子）
   * 注意：此时使用`line-height=height`值不一定能居中对齐了，需要将`line-height`设置为`height减去边框后的大小`

### 3.2 图片滤镜 filter

1. `blur(5px)`：图片模糊，括号中填写像素大小，越大越模糊

### 3.3 计算函数 calc()

1. 宽度计算：`width:calc(100%-30)`，子元素比父元素宽度小30px

### 3.4 过渡效果 transition

1. 作用：可以不用Flash或JS的情况下制作元素样式变换的效果，常与`:hover`配合使用

2. 书写位置：谁做过渡给谁加，要写在原来的元素上！

3. 属性：添加多个属性可用逗号分隔，按顺序写

   1）要变换的属性：如width、height，全部变换为all

   2）花费时间 ：如 .5s

   3）运动曲线：

   * 逐渐变慢：ease（默认）
   * 匀速：linear
   * 加速：ease-in
   * 减速：ease-out
   * 先加速再减速：ease-in-out

   4）何时开始：延迟触发时间，如 .5s，可省略

### 3.5 2D转换 transform

1. 位移：`translate(x,y)`

   1）单位：px 或 百分比%（相对于自身）

   2）沿轴移动：translateX(n)、translateY(n)

   3）水平居中：绝对定位50%，位移-50%

   4）注意：对行内元素无效，比如`<span>`

2. 旋转：`rotate(n deg)`

   1）单位：deg，正数顺时针，负数逆时针

   2）应用：制作CSS三角形，div旋转45度，只给底部、右侧边框

3. 中心点：`transform-origin:x y`

   1）像素：px

   2）方位名词：left、right、top、bottom、center

   3）百分比：50% 50%（默认）

   4）应用：制作鼠标移动从底部旋转出现的效果

   5）注意：x和y之间没有逗号，是空格！

4. 缩放：`scale(x,y)`

   1）2个数字：等于倍数，如scale(2,3)即宽度变成2倍，高度变成3倍

   2）1个数字：等于倍数，如scale(2)即宽高都变成2倍

   3）可以设置缩放中心点，如果写了宽高则以最新数值为参考，且不影响其他盒子位置

5. 复合简写：`transform: translate(x,y) rotatae(n deg) scale(n)`
   * 注意：书写顺序会影响效果，有位移的时候必须先写位移

### 3.5 3D转换 transform

1. 坐标系：x轴右正左负，y轴下正上负，z轴外正里负

2. 透视：`perspective`

   1）单位：px，数值越小，盒子越大

   2）写到被观察元素的父盒子上面，即眼睛到屏幕的距离，近大远小

3. 3D移动：`translate3d（x,y,z）`

   1）等价写法：`transform: translateX(n) translateY(n) translateZ(n)`

   2）x、y、z不能省略，没有就写0

4. 3D旋转：`rotate3d（x,y,z,deg）`

   1）x,y,z用：0/1 代表是否选中，并合成矢量，例：rotate3d(1, 1, 0, 45deg)

   2）等价写法：`transform:rotateX(n deg) rotateY(n deg) rotateZ(n deg)`

   3）X/Y/旋转：左手准则，大拇指指向正轴，四指弯曲指向正角度旋转方向

   4）Z轴旋转：类似2D旋转效果

5. 3D呈现：`trasnform-style`

   1）preserve-3d：让子元素保持3D立体空间环境

   2）flat：默认，子元素不开启3D立体空间环境

### 3.6 轮播图 swiper

1. 插件工具：swiper，网址：[www.swiper.com.cn](www.swiper.com.cn)
2. 下载文件：swiper.min.js、swiper.min.css
3. 使用方法：找到案例查看源码，复制HTML、CSS、JS代码，按需修改

------

## 第4章 CSS动画效果

1. 语法：中间可以自定义百分比过程

   1）`@keyframes 动画名称 { 0% { 开始状态的效果 } 100% {结束状态的效果}}`

   2）`@keyframes 动画名称 { from { 开始状态的效果 } to {结束状态的效果}}`

2. 调用：至少写动画名称、动画时间2个属性，同一个元素中多个动画可以一起调用，用逗号隔开即可

3. 属性：

   1）动画名称（必填）：`animation-name`

   2）动画时间（必填）：`animation-duration`

   3）运动曲线：`animation-timing-function`

   * 效果：ease/ease-in/ease-out/ease-in-out/linear
   * 步长：steps（n），适合做轮播图式动画

   4）延迟时间：`animation-delay: 1s`

   5）重复次数：`animation-iteration-count: infinite/数字次数`

   6）反方向播放：`animation-direction: alternate（是）/normal（否）`

   7）结束后状态：`animation-fill-mode: forwards（停留在结束状态）/backwards（默认恢复初始状态）`

4. 播放状态：`animation-play-state: paused/running`

5. 复合简写：动画名称，持续时间，运动曲线，延迟时间，重复次数，反方向播放，结束后状态

   ```css
   animation: name duration timing-function delay iteration-count direction fill-mode; 
   ```

6. 案例：无限无缝滚动效果（竖向）

   1）先用JS的遍历clone方法克隆一份元素，添加到大盒子后面

   ```js
   $('.marquee-view .marquee').each(function () {
     var rows = $(this).children().clone()
     $(this).append(rows)
   })
   ```

   2）用CSS的@keyframes定义动画，translateY(-50%)

   ```css
   @keyframes move {
     0% {
     }
     100% {
       transform: translateY(-50%);
     }
   }
   ```

   3）动作效果animation：move 10s linear infinite

   ```css
   .marquee-view .marquee {
     animation: move 15s linear infinite;
   }
   ```

------

## 第5章 CSS选择器

### 5.1 选择器特性

1. 层叠性：相同选择器如有最新属性定义，会覆盖旧定义

2. 继承性：如果不特殊定义子元素选择器，子元素会继承父元素的选择器样式

3. 优先级：

   1）若选择器相同，执行层叠性

   2）若选择器不同，根据权重执行

   |    权重     |                      适用情况                      |
   | :---------: | :------------------------------------------------: |
   | （0,0,0,0） | 继承、*【父级选择器无论权重多大，继承的权重都为0】 |
   | （0,0,0,1） |              元素选择器、伪元素选择器              |
   | （0,0,1,0） |  类选择器、伪类选择器、属性选择器、结构伪类选择器  |
   | （0,1,0,0） |                      ID选择器                      |
   | （1,0,0,0） |                      行内样式                      |
   |   无穷大    |                     !important                     |

4. 权重叠加：可以叠加，但不会有进位

### 5.2 基础选择器

1. 标签选择器：对HTML默认标签定义属性

   ```css
   p {color:green； font-size: 12px；}
   ```

2. 类选择器（最常用）：点.+文字（.name)

   1）调用：`class="name"`

   2）叠加调用：`class="name1 name2 ..."`

3. id选择器：井号#+文字（#name）

   1）调用：id="name"

   2）注意：只能调用一次，别人不能使用

4. 通配符选择器：星号 `* `，把所有HTML默认标签都进行修改，覆盖全局

### 5.3 复合选择器

1. 后代选择器：针对父子级&兄弟级元素嵌套

   1）`ol li`：针对有序列表中的子项目

   2）`ol li a`：针对有序列表中子项目中的`<a>`

   3）`.nav li a`：针对nav类选择器中子项目中的<a>

   4）`.nav .bg`：针对nav类选择器中的bg伪类，只能在nav的子项目中应用

   ```html
   <div class="nav"><p class="bg">...</p></div>
   ```

2. 子元素选择器：只针对嵌套1个层级的子元素

   1）`.nav>a`：只能更改nav类选择器中第1层子项目的<a>

3. 并集选择器：选取多个元素合并修改，竖着写并用逗号隔开，最后一个选择器不要加逗号

   ```css
   div, p{...}
   div, p, .pig li {...}
   ```

4. 链接伪类选择器：

   1）未访问的链接：a:link

   2）已访问的链接：a:visited

   3）鼠标经过的链接：a:hover

   4）鼠标按下的链接：a:active

   5）注意：一般要把`<a>`的默认样式改成不加下划线的

   ```css
   a {
     color: #333;
     text-decoration: none;
   }
   ```

5. focus伪类选择器：把获得光标的元素选出来，常与input元素结合使用

   ```css
   input: focus {...}
   ```

### 5.4 CSS3选择器

#### 5.4.1 属性选择器

1. 无需借助类/ID选择器：`E[att]`，选中具有att属性的E元素
2. 选择属性等于某值的某元素：`E[att=val]`，选中具有att属性且属性值等于val的E元素
3. 选择属性值开头的元素：`E[att^=val]`，匹配具有att属性且值以val开头的E元素
4. 选择属性值结尾的元素：`E[att$=val]`，匹配具有att属性且值以val结尾的E元素
5. 选择属性包含某值的某元素：`E[att*=val]`，匹配具有att属性且值包含val的E元素

#### 5.4.2 结构伪类选择器

1. 匹配父元素中的第一个子元素：`E：first-child`
2. 匹配父元素中最后一个E元素：`E：last-child`

3. 匹配父元素中第n个子元素E：`E：nth-child(n)`

   1）n=数字：选中第n个

   2）n=odd、even：选中奇数/偶数个（隔行效果）

   3）n=公式（从0开始算）

   * n：选中所有
   * 2n：选中偶数
   * 2n+1：选中奇数
   * 5n：选中5的倍数
   * n+5：选中从第5个开始到最后
   * -n+5：选中前5个

   4）执行的时候首先看 `:nth-child(n)`中的n，即先把所有父元素中的子元素排序，之后回去看前面的E是否能对上，如果不匹配则语法无效

4. 指定类型E的第一个：`E：first-of-type`
5. 指定类型E的最后一个：`E：last-of-type`

6. 指定类型E的第n个：`E：nth-of-type(n)`
   * 执行的时候首先看E，即选中了哪个子元素，之后再去看后面的`:nth-child(n)`中的n，判断是E中的第n个元素

#### 5.4.3 伪元素选择器

1. 语法：`element::before/after{content:XXX；....}`（必须有content属性）
2. 权重：1，与元素选择器一起写的话权重变为2
3. 作用：利用CSS创建新标签元素，而不需要HTML标签，简化HTML结构，在文档树中找不到
4. 注意：有行内元素属性，如果想设置宽高需要转换，或添加浮动、定位

5. 应用1：伪元素字体图标

   ```css
   div::after {
     position: absolute;
     top: 10px;
     right: 10px;
     font-family: 'icomoon';
     content: '\e91e';
     color: red;
     font-size: 18px;
   }
   ```

6. 应用2：播放缩略图遮罩

   ```css
   .tudou::before {
     content: '';
     display: none;
   }
   .tudou:hover::before {
     display: block;
   }
   ```

------

## 第6章 显示模式

### 6.1 块级元素

1. 包括：`<div>`、`<h1~h6>`、`<p>`、`<ul>`、`<ol>`、`<li>`

2. 特点:

   1）自己独占一行

   2）高度、行高、内外边距都可以控制

   3）宽度默认是容器（父级宽度）的100%

   4）是一个大容器及盒子，里面可以放行内或块级元素

3. 文字类元素内不可使用块级元素：`<p>`、`<h1~h6>`里面不能放其他块级元素

4. 特殊应用：单行文字垂直居中

   1）直接在`<div>`中输入文字会顶格显示，而不会垂直居中

   2）设置：hight、line-height 两者同样数值，即可使文字垂直居中

### 6.2 行内元素

1. 包括：`<span>`、`<a>`、`<strong>`、`<b>`、`<em>`、`<i>`、`<del>`、`<s>`、`<ins>`、`<u>`

2. 特点:

   1）相邻行内元素在一行上，一行可显示多个

   2）高度、宽度直接设置是无效的

   3）默认宽度就是它本身内容的宽度

   4）行内元素只能容纳文本或其他行内元素

3. 注意：链接里不能再放链接了，如果非要放需要将`<a>`转为块级元素

### 6.3 行内块元素

1. 包括：`<input />`、`<img />`、`<td>`

2. 特点：

   1）和相邻行内元素在同一行上，之间有空白缝隙，一行可以显示多个

   2）如果想去掉一行元素之间的空白缝隙，可以设置为浮动排列

   3）默认宽度就是它本身内容的宽度

   4）高度、行高、内外边距都可以控制

### 6.4 元素转换

1. 块级元素-->行内元素：`display: inline`

   ```css
   div {display: inline;}
   ```

2. 行内元素-->块级元素：`display: block`

   ```css
   a {display: block;}
   ```

3. 行内元素-->行内块元素：`display: inline-block`

   ```css
   span {display: inline-block;}
   ```

## 第7章 布局模式

