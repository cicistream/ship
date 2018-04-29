<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import cssReset from "../node_modules/vux/src/styles/index"
import mainCss from "./main.css"
export default {
  name: 'App',
  components: {
    cssReset,
  }
}
</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
