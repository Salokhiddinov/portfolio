<template>
  <div class="burger-menu" v-if="!menuIsOpen">
    <i class="fas fa-bars menu-icon" @click="openCloseMenu"></i>
  </div>
  <transition name="menu">
    <div class="menu" v-if="menuIsOpen">
      <i class="fas fa-times menu-icon" @click="openCloseMenu"></i>
      <ul>
        <div class="ul">
          <i class="fas fa-terminal terminal-icon"></i>
          <router-link to="/main" class="router-link">.main()</router-link>
        
          <router-link to="./about" class="router-link">.about()</router-link>
        
          <router-link to="" class="router-link">.skills()</router-link>
        
          <router-link to="" class="router-link">.contacts()</router-link>
        </div>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    openCloseMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<style scoped>
.burger-menu {
  padding: 0;
  margin: 0;
  
}
.menu-icon {
  position: absolute;
  display: block;
  top: 18px;
  right: 18px;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 1.5rem;
  transition: all 0.2s;
}
.menu-icon:hover {
  color: var(--light-blue);
}
ul {
  position: absolute;
  display: block;
  width: 50%;
  top: 50%;
  left: 50%;
 
  transform: translate(-50%, -50%);
}
.ul {
  display: flex;
  flex-direction: column;
}
hr {
  width: 100%;
  border-style: solid;
  border-color: white;
  color: white;
}
.terminal-icon{
    color: var(--light-blue);
    font-size: 2rem;
    padding: 1rem 0;
    
}

.router-link {
  text-decoration: none;
  color: #fff;
  padding: 1rem 0;
  font-family: var(--sub-font);
  text-align: center;
  width: 100%;
  transition: all 0.2s;
}
.router-link:hover{
    background-color: var(--light-blue);
    width: 90%;
}

.menu {
  position: absolute;
  display: block;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.801);

  animation: appear 0.3s ease-out;
}
.menu-leave-to {
  animation: disappear 0.3s ease-out;
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

@media screen and (min-width: 900px) {
  .menu-icon {
    display: none;
    
  }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(-500px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes disappear {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-500px);
  }
}
</style>
