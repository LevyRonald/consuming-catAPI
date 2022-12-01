<template>
    <div class="d-flex justify-content-center">
        <b-card class="card-breed">{{currentBreed}}</b-card>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    currentBreed: {
      type: Object,
    },
  },
});
</script>
