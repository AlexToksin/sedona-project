<template>
<<<<<<< Updated upstream
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
=======
  <div id="app" class="main">
    <div class="wrapper">
    <header-block></header-block>
    <router-view/>
    <footer-block></footer-block>
    </div>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
