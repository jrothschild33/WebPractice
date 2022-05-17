<template>
  <!-- 注意：由于index.html中已有<div id="app">，所以要避免重名 -->
  <div class="container">
    <Search />
    <List />
  </div>
  <!-- 注意：本项目用到了bootstrap，需要放在public/css/bootstrap.css，然后再index.html中引入 -->
</template>

<script>
import Search from './components/Search'
import List from './components/List'
export default {
  name: 'App',
  components: { Search, List }
}
</script>
