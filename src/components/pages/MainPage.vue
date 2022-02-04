<template>
  <div class="wrapper">
    <div class="intro section" id="intro">
      <div class="h1">
        <span class="color-white">Hello</span>
        <span class="color-blue">.World()</span>
      </div>
      <h2 class="color-white name h2">// Nomonjon Salokhiddinov</h2>
      <h2 class="color-grey desc h2">
        VueJS Junior(strong) front-end developer<br />
        && graphic designer.
      </h2>
      <a href="#cv">
        <button class="btn-main">Explore</button>
      </a>
    </div>

    <div class="cv section" id="cv">
      <div class="h1">
        <span class="color-white">Curriculum</span>
        <span class="color-blue">.Vitae()</span>
      </div>
      <h2 class="color-grey desc h2">&lt;cv&gt;</h2>
      <h2 class="color-white name h2 tab">
        My CV can be downloaded through the link below.
      </h2>
      <h2 class="color-grey desc h2">&lt;/cv&gt;</h2>
      <a href="https://youtu.be/dQw4w9WgXcQ">
        <button class="btn-main">Download</button>
      </a>
    </div>

    <div class="interests section" id="interests">
      <div class="h1">
        <span class="color-white">my</span>
        <span class="color-blue">.Interests()</span>
      </div>
      <div class="code-interests">
        <div class="h2">
          <span class="color-white">const </span>
          <span class="color-blue">interests </span>
          <span class="color-white">= </span>
          <span class="color-blue">{</span>
        </div>
        <div class="h2 tab" style="margin: 10px 0">
          <span class="color-grey">first: </span>
          <span class="color-white h2-larger">"Coding"</span>
          <span class="color-grey">,</span>
        </div>
        <div class="h2 tab" style="margin: 10px 0">
          <span class="color-grey">second: </span>
          <span class="color-white h2-larger">"Graphic Design"</span>
          <span class="color-grey">,</span>
        </div>
        <div class="h2 tab" style="margin: 10px 0">
          <span class="color-grey">third: </span>
          <span class="color-white h2-larger">"Video Games"</span>
          <span class="color-grey">,</span>
        </div>
        <div class="h2">
          <span class="color-blue">}</span>
        </div>
        <div class="h2" style="margin: 30px 0 0 0">
          <span class="color-white">console</span>
          <span class="color-blue">.log(`</span>
          
            <span class="color-white"><a href="https://youtu.be/dQw4w9WgXcQ" class="color-white">Life is </a></span>
            <span class="color-blue">${</span>
            <span class="color-white">interests</span>
            <span class="color-blue">.first}</span>
            <span class="color-blue">`)</span>
          
          <span class="color-white">;</span>
        </div>
      </div>
    </div>

    <div class="cv section" id="cv">
      <div class="h1">
        <span class="color-white">Curriculum</span>
        <span class="color-blue">.Vitae()</span>
      </div>
      <h2 class="color-grey desc h2">&lt;cv&gt;</h2>
      <h2 class="color-white name h2 tab">
        My CV can be downloaded through the link below.
      </h2>
      <h2 class="color-grey desc h2">&lt;/cv&gt;</h2>
      <a href="https://youtu.be/dQw4w9WgXcQ">
        <button class="btn-main">Download</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped>
/* font-family: var(--sub-font); */

.section {
  padding: 33vh 0;
}

.h2 {
  font-family: var(--sub-font);
}

.btn-main {
  margin: 15px 0;
  background-color: rgba(255, 255, 255, 0);
  border-style: solid;
  border-width: 3px;
  border-color: white;
  padding: 5px 15px;
  color: white;
  font-size: 1rem;
  font-family: var(--sub-font);
  transition: all 0.2s;
}
a {
  text-decoration: none;
}
.btn-main:hover {
  background-color: white;
  color: black;
}
.code-interests {
  padding: 20px 0;
}

/* --- Large Screens and Laptops --- */
@media screen and (max-width: 2000px) {
}

/* --- Tablets Ipads --- */
@media screen and (max-width: 900px) {
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
