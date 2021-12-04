## 1. 基本使用步骤

1. 在 `<head>` 中导入 `cropper.css` 样式表：

   ```html
   <link rel="stylesheet" href="/assets/lib/cropper/cropper.css" />
   ```

2. 在 `<body>` 的结束标签之前，按顺序导入如下的 js 脚本：

   ```html
   <script src="/assets/lib/jquery.js"></script>
   <script src="/assets/lib/cropper/Cropper.js"></script>
   <script src="/assets/lib/cropper/jquery-cropper.js"></script>
   ```

3. 在卡片的 `layui-card-body` 主体区域中，定义如下的 HTML 结构：

   ```html
     <!-- 第一行的图片裁剪和预览区域 -->
     <div class="row1">
       <!-- 图片裁剪区域 -->
       <div class="cropper-box">
         <!-- 这个 img 标签很重要，将来会把它初始化为裁剪区域 -->
         <img id="image" src="/assets/images/sample.jpg" />
       </div>
       <!-- 图片的预览区域 -->
       <div class="preview-box">
         <div>
           <!-- 宽高为 100px 的预览区域 -->
           <div class="img-preview w100"></div>
           <p class="size">100 x 100</p>
         </div>
         <div>
           <!-- 宽高为 50px 的预览区域 -->
           <div class="img-preview w50"></div>
           <p class="size">50 x 50</p>
         </div>
       </div>
     </div>
   
     <!-- 第二行的按钮区域 -->
     <div class="row2">
       <button type="button" class="layui-btn">上传</button>
       <button type="button" class="layui-btn layui-btn-danger">确定</button>
     </div>
   ```

4. 美化的样式：

   ```css
   /* 设置卡片主体区域的宽度 */
   .layui-card-body {
     width: 500px;
   }
   
   /* 设置按钮行的样式 */
   .row2 {
     display: flex;
     justify-content: flex-end;
     margin-top: 20px;
   }
   
   /* 设置裁剪区域的样式 */
   .cropper-box {
     width: 350px;
     height: 350px;
     background-color: cyan;
     overflow: hidden;
   }
   
   /* 设置第一个预览区域的样式 */
   .w100 {
     width: 100px;
     height: 100px;
     background-color: gray;
   }
   
   /* 设置第二个预览区域的样式 */
   .w50 {
     width: 50px;
     height: 50px;
     background-color: gray;
     margin-top: 50px;
   }
   
   /* 设置预览区域下方文本的样式 */
   .size {
     font-size: 12px;
     color: gray;
     text-align: center;
   }
   
   /* 设置图片行的样式 */
   .row1 {
     display: flex;
   }
   
   /* 设置 preview-box 区域的的样式 */
   .preview-box {
     display: flex;
     flex-direction: column;
     flex: 1;
     align-items: center;
   }
   
   /* 设置 img-preview 区域的样式 */
   .img-preview {
     overflow: hidden;
     border-radius: 50%;
   }
   ```

5. 实现基本裁剪效果：

   ```js
     // 1.1 获取裁剪区域的 DOM 元素
     var $image = $('#image')
     // 1.2 配置选项
     const options = {
       // 纵横比
       aspectRatio: 1,
       // 指定预览区域
       preview: '.img-preview'
     }
   
     // 1.3 创建裁剪区域
     $image.cropper(options)
   ```



## 2. 更换裁剪的图片

1. 拿到用户选择的文件

   ```js
   var file = e.target.files[0]
   ```

2. 根据选择的文件，创建一个对应的 URL 地址：

   ```js
   var newImgURL = URL.createObjectURL(file)
   ```

3. 先`销毁`旧的裁剪区域，再`重新设置图片路径`，之后再`创建新的裁剪区域`：

   ```js
   $image
      .cropper('destroy')      // 销毁旧的裁剪区域
      .attr('src', newImgURL)  // 重新设置图片路径
      .cropper(options)        // 重新初始化裁剪区域
   ```

   

## 3. 将裁剪后的图片，输出为 base64 格式的字符串

```js
var dataURL = $image
      .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
        width: 100,
        height: 100
      })
      .toDataURL('image/png')       // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
```



