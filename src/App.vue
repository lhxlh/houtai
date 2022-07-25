<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  min-width: 1500px;
}
</style>