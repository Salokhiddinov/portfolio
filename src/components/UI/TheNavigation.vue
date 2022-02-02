<template>
  <nav>
    <h3 to="/main">
      <strong class="color-white">the</strong>
      <strong class="color-blue">.portfolio()</strong>
    </h3>
    <ul>
      <div class="ul">
        <router-link to="/main" class="router-link">.main()</router-link>
        <router-link to="./about" class="router-link">.about()</router-link>
        <router-link to="" class="router-link">.skills()</router-link>
        <router-link to="" class="router-link">.contacts()</router-link>
      <div class="burger-menu">
        <i class="fas fa-bars"></i>
      </div>
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
}
.router-link {
  margin: 0;
  font-size: 1.3rem;
  text-decoration: none;
  color: white;
  padding-left: 20px;
  font-family: var(--sub-font);
  transition: all 0.2s;
}
.router-link:hover {
  color: var(--light-blue);
}
ul {
  margin: 0;
  padding: 10px;
}
h3 {
  margin: 0;
  padding: 10px;
  font-family: var(--sub-font);
  font-size: 1.5rem;
}
.fas {
  color: white;
  padding: 0 10px 0 20px;
  font-size: 2rem;
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
}

/* --- Mobile --- */
@media screen and (max-width: 700px) {
}

@media screen and (min-width: 900) {
  .burger-menu {
    display: none;
  }
}
</style>
