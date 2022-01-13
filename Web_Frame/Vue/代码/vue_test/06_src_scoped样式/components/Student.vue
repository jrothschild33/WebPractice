<template>
  <div class="demo">
    <h2 class="title">学生姓名：{{name}}</h2>
    <h2 class="atguigu">学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  }
}
</script>

// 这里可以指定style用哪种语言进行定义，如果使用less，需要安装less-loader
// 查看版本命令：npm view 包名 versions
// 注意：由于webpeck版本是4.46.0，需要安装less-loader@7版本才行

<style lang="less" scoped>
.demo {
  background-color: pink;
  .atguigu {
    font-size: 40px;
  }
}
</style>
