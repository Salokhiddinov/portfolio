<template>
  <div class="wrapper">
    <div class="intro">
      <div class="h1">
        <span class="color-white">Hello</span>
        <span class="color-blue">.World()</span>
      </div>
      <h2 class="color-white name h2">// Nomonjon Salokhiddinov</h2>
      <h2 class="color-grey desc h2">
        VueJS Junior(strong) front-end developer<br />
        && graphic designer.
      </h2>
      <button class="btn-explore">Explore</button>
    </div>
  </div>
</template>

<style scoped>
/* font-family: var(--sub-font); */

.intro {
  padding: 30vh 0;
}
.h1 {
  font-family: var(--main-font) !important;
  font-size: 3rem;
}
.h2 {
  font-family: var(--sub-font);
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
.btn-explore{
    background-color: rgba(255, 255, 255, 0);
    border-style: solid;
    border-width: 3px;
    border-color: white;
    padding: 5px 15px;
    color: white;
    font-size: 1rem;
    font-family: var(--sub-font);
    transition: all .2s;
}
.btn-explore:hover{
    background-color: white;
    color: black;
}

/* --- Large Screens and Laptops --- */
@media screen and (max-width: 2000px) {
}

/* --- Tablets Ipads --- */
@media screen and (max-width: 900px) {
  .h1 {
    font-size: 2.5rem;
  }
  .name,
  .desc {
    font-size: 1.25rem;
    width: 65%;
  }
}

/* --- Mobile --- */
@media screen and (max-width: 600px) {
  .h1 {
    font-size: 2rem;
  }
  .name,
  .desc {
    font-size: 1rem;
    width: 100%;
  }
}
</style>
