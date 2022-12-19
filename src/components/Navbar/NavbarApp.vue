<template>
  <sidebar />
  <b-navbar type="dark" variant="dark">
    <div>
      <b-button
        variant="outline-primary"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        >Menu</b-button
      >
    </div>
    <div class="w-100">
      <div class="d-flex justify-content-center">
        <h5 class="title" @click="redirect">Cats Curiosity</h5>
      </div>
    </div>
  </b-navbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../Sidebar/SidebarApp.vue";

export default defineComponent({
  components: { Sidebar },
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
  },
});
</script>
