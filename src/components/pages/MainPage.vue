<template>
  <div class="wrapper">
    <div class="space"></div>
    <section class="intro section" id="intro">
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
    </section>

    <section class="cv section" id="cv" data-aos="fade-up">
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
    </section>

    <section class="interests section" id="interests" data-aos="fade-right">
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

          <span class="color-white"
            ><a href="https://youtu.be/l0U7SxXHkPY?t=100" class="color-white"
              >Life is
            </a></span
          >
          <span class="color-blue">${</span>
          <span class="color-white">interests</span>
          <span class="color-blue">.first}</span>
          <span class="color-blue">`)</span>

          <span class="color-white">;</span>
        </div>
      </div>
    </section>

    <section class="made-width section" id="made-width" data-aos="fade-left">
      <h2 class="color-grey name h2">// Made With</h2>
      <div class="made-with">
        <div class="coding made-with-block">
          <i class="fas fa-file-code color-blue" style="font-size: 1.5rem"></i>
          <h2 class="color-white desc h2">VueJS</h2>
          <h2 class="color-white desc h2">JavaScript</h2>
          <h2 class="color-white desc h2">AOS</h2>
          <h2 class="color-white desc h2">Figma</h2>
          <h2 class="color-white desc h2">Photoshop</h2>
          <h2 class="color-white desc h2">Illustrator</h2>
        </div>
        <div class="resources made-with-block">
          <i class="fab fa-algolia color-blue" style="font-size: 1.5rem"></i>
          <h2 class="color-white desc h2">20h+ of planning</h2>
          <h2 class="color-white desc h2">24h+ of coding</h2>
          <h2 class="color-white desc h2">21 cups of coffee</h2>
          <h2 class="color-white desc h2">1 easter egg</h2>
        </div>
        <div class="music made-with-block">
          <i class="fas fa-music color-blue music-item" style="font-size: 1.5rem"></i>
          <a class="color-white desc h2"
          href="https://youtu.be/WxOulfAfKvk">Tokyo Ghoul (Acoustics)</a>
          <a class="color-white desc h2 music-item"
          href="https://youtu.be/YP78tnK-vGU">Bandana I</a>
          <a class="color-white desc h2 music-item"
          href="https://www.youtube.com/watch?v=6ONRf7h3Mdk">Sicko Mode</a>
          <a class="color-white desc h2 music-item"
          href="https://youtu.be/xWggTb45brM">Toosie Slide</a>
          <a class="color-white desc h2 music-item"
          href="https://youtu.be/3CxtK7-XtE0">Popstar</a>
          <a class="color-white desc h2 music-item"
          href="https://youtu.be/_CL6n0FJZpk">Toosie Slide</a>
        </div>
      </div>
    </section>

    <section class="links section" id="links" data-aos="fade-up">
      <div class="h1">
        <span class="color-blue">&lt;a&gt;</span>
        <span class="color-white"> Links </span>
        <span class="color-blue">&lt;/a&gt;</span>
      </div>
      <div class="h2" style="margin: 10px 0">
        <span class="color-grey">&lt;--</span>
        <router-link to='/about' class="color-white h2 name">About</router-link>
        <span class="color-grey">--&gt;</span>
      </div>
      <div class="h2" style="margin: 10px 0">
        <span class="color-grey">&lt;--</span>
        <router-link to='/about' class="color-white h2 name">View Skills</router-link>
        <span class="color-grey">--&gt;</span>
      </div>
      <div class="h2" style="margin: 10px 0">
        <span class="color-grey">&lt;--</span>
        <router-link to='/about' class="color-white h2 name">View contacts</router-link>
        <span class="color-grey">--&gt;</span>
      </div>
      <a href="#intro">
        <button class="btn-main">Back to Top</button>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    // var controller = new ScrollMagic.Controller();
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: ".section",
    // })
    //   .setClassToggle(".section", "show")
    //   .addTo(controller);
    // console.log(scene, controller);
  },
};
</script>

<style scoped>
/* font-family: var(--sub-font); */
.space {
  height: 40vh;
  padding: 0;
  margin: 0;
}
.wrapper {
  overflow-y: scroll;
  overflow: hidden;
  scroll-snap-type: y mandatory;
}

.section {
  padding-bottom: 40vh;
  scroll-snap-align: start;
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
.made-with-block{
  padding: 20px 0;
  width: 40%;
}
.made-with{
  display: flex;
  justify-content: space-between;
}
.resources{
  line-break: after;
}
.music{
  display: flex;
  flex-direction: column;
}
.music-item{
  padding-bottom: 15px;
}

/* --- Large Screens and Laptops --- */
@media screen and (max-width: 2000px) {
}

/* --- Tablets Ipads --- */
@media screen and (max-width: 900px) {

}

/* --- Mobile --- */
@media screen and (max-width: 600px) {

}
</style>
