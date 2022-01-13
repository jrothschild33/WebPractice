<template>
  <div>
    <!-- 这里如果age是数字，需要用v-bind绑定，这样的话直接解析引号里面的内容 -->
    <Student name="李四" sex="女" :age="18" />
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: { Student }
}
</script>
