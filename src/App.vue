<template>
  <div class="app">
    <BaseGlitch class="base-glitch" />
    <div class="base-black"></div>
    <header>
      <the-navigation class="navigation"></the-navigation>
    </header>
    <the-menu class="the-menu"></the-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseGlitch from "@/components/base/BaseGlitch.vue";

export default {
  components: { BaseGlitch },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&family=Source+Code+Pro:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@200;500;700&family=Russo+One&family=Source+Code+Pro:wght@300;400;700&display=swap");
:root {
  --main-font: "Encode Sans SC", sans-serif;
  --sub-font: "Source Code Pro", monospace;
  --light-blue: #428cd4;
  --light-grey: #848484;
}
.color-white {
  color: white;
}
.color-blue {
  color: var(--light-blue);
}
.color-grey{
  color: var(--light-grey);
}

.app {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h2 {
  color: white;
}
.base-glitch {
  display: block;
  position: absolute fixed;
  z-index: -10;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.base-black {
  display: block;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -9;
  background-color: rgba(0, 0, 0, 0.829);
}
.navigation {
  margin: 0;
}
.the-menu{
  display: block;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100vh;
}


.wrapper {
  margin: 0 auto;
}

/* --- Large Screens and Laptops --- */
@media screen and (max-width: 2000px) {
  .wrapper {
    width: 60%;
  }
}

/* --- Tablets Ipads --- */
@media screen and (max-width: 900px) {
  .wrapper {
    width: 70%;
  }
}

/* --- Mobile --- */
@media screen and (max-width: 600px) {
  .wrapper {
    width: 90%;
  }
}
</style>
