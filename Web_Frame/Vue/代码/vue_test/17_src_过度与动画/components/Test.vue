<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- Vue动画标签 -->
    <!-- appear属性：代表一打开页面的时候就有动画效果 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}

/* 进入效果：v-enter-action */
.hello-enter-active {
  animation: atguigu 0.5s linear;
}

/* 离开效果：v-enter-action */
.hello-leave-active {
  animation: atguigu 0.5s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>