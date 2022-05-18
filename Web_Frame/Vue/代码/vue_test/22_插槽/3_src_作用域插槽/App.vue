<template>
  <div class="container">
    <Category title="游戏">
      <!--方法1：自定义名称随便写，不影响任何元素，只是临时使用 -->
      <template scope="atguigu">
        <ul>
          <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
        </ul>
        <h4>{{atguigu.msg}}</h4>
      </template>
    </Category>

    <Category title="游戏">
      <!--方法2-->
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
      <h4>{{msg}}</h4>
    </Category>

    <Category title="游戏">
      <!--方法2-->
      <template slot-scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category }
}
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
