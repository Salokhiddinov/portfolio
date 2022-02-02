<template>
<div class="app">
  <BaseGlitch class="base-glitch"/>

</div>
</template>

<script>
import BaseGlitch from '@/components/base/BaseGlitch.vue';
export default {
  components: {BaseGlitch}
}
</script>

<style>
.app{
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.base-glitch{
  display: block;
  position: absolute fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>