<template>
  <sidebar />
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="d-flex justify-items-center">
        <b-nav-item class="nav-items">
          <b-button
            variant="outline-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            >Menu</b-button
          >
        </b-nav-item>
        <b-navbar-brand>Cats Curiosity</b-navbar-brand>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../Sidebar/SidebarApp.vue";

export default defineComponent({
  components: { Sidebar },
});
</script>
