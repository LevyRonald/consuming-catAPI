<template>
  <nav class="pb-4">
    <navbar/>
    <background class="backg"/>
  </nav>
  <div class="pe-5 ps-5">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar/NavbarApp.vue'
import background from '@/components/background/BackgroundApp.vue'

export default defineComponent({
  components: { Navbar, background }
  
})
</script>

<style>
.backg{
  position: absolute;
  z-index: -1;
  /* width: 100%;
  height: 100vh;
  overflow: hidden; */
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
