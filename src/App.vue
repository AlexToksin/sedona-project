<template>
  <div id="app">
    <header-block></header-block>
    <router-view/>
    <footer-block></footer-block>
  </div>
</template>

<script>
  import headerBlock from './components/header.vue'
  import footerBlock from './components/footer.vue'
export default {
  components:{
    headerBlock,
    footerBlock
  }
}
</script>


