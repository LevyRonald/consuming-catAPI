<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <p class="actions" @click="redirect" data-bs-dismiss="offcanvas">
          Home
        </p>
        <p class="actions">Favoritos</p>
      </div>
      <div class="dropdown mt-3"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
  },
});
</script>
