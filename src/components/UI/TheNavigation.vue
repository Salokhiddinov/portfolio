<template>
  <nav>
    <router-link class="h3" to="/main">
      <span class="color-white">the</span>
      <span class="color-blue">.portfolio()</span>
    </router-link>
    <ul>
      <div class="ul">
        <router-link to="/main" class="router-link">.main()</router-link>
        <router-link to="./about" class="router-link">.about()</router-link>
        <router-link to="" class="router-link">.skills()</router-link>
        <router-link to="" class="router-link">.contacts()</router-link>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
}
.router-link {
  margin: 0;
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
  padding-left: 20px;
  padding-top: 10px;
  font-family: var(--sub-font);
  transition: all 0.2s;
  font-weight: 300;
}
.router-link:hover {
  color: var(--light-blue);
}
ul {
  margin: 0;
  padding-right: 40px;
}
.h3 {
  margin: 0;
  padding: 10px;
  font-family: var(--sub-font);
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  transition: 0.2s all;
}
.h3:hover{
  transform: translateX(5px);
}
.fas {
  color: white;
  padding: 0 10px 0 20px;
  font-size: 1.5rem;
  transition: all 0.2s;
}
.fas:hover {
  color: var(--light-blue);
}
.ul{
    display: flex;
}

/* --- Large Screens and Laptops --- */
@media screen and (max-width: 2000px) {
}

/* --- Tablets Ipads --- */
@media screen and (max-width: 900px) {
  ul {
    display: none;
  }
  .h3{
    font-size: 1rem;
    padding-top: 15px;
  }
 
}

/* --- Mobile --- */
@media screen and (max-width: 700px) {
}

</style>
