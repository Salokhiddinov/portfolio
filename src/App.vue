<template>
  <div class="app">
    <div class="glitch-wrapper">
      <BaseGlitch class="base-glitch" />
      <div class="base-black"></div>
    </div>
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
.color-grey {
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
.base-glitch,
.glitch-wrapper {
  display: block;
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.glitch-wrapper {
  position: fixed;
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
.the-menu,
.menu-wrapper
 {
  display: block;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100vh;
}
.menu-wrapper{
  position: fixed;
  z-index: 0 !important;
}

.wrapper {
  margin: 0 auto;
}
.h1 {
  font-family: var(--sub-font) !important;
  font-weight: 700;
  font-size: 3rem;
  animation: shake 1s ease infinite;
}
.h2 {
  font-family: var(--sub-font);
}
.h2-larger{
  font-size: 1.7rem;
}


.name {
  font-weight: 300;
  font-size: 1.2rem;
}
.desc {
  width: 50%;
  font-weight: 300;
  font-size: 1rem;
  line-height: 2rem;
}
.tab {
  margin-left: 2rem !important;
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
  .h1 {
    font-size: 2.5rem;
  }
  .h2-larger{
  font-size: 1.5rem;
}
  .name,
  .desc {
    font-size: 1.25rem;
    width: 65%;
  }
}

/* --- Mobile --- */
@media screen and (max-width: 600px) {
  .wrapper {
    width: 90%;
  }
  .h1 {
    font-size: 2rem;
  }
  .h2-larger{
  font-size: 1.2rem;
}
  .name,
  .desc {
    font-size: 1rem;
    width: 100%;
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(1px);
  }
  66% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
