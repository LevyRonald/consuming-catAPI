<template>
  <div>
    <b-card>
        <div>
            <carousel-app />
            {{currentBreed}}
        </div>
    </b-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CarouselApp from "../Carousel/CarouselApp.vue";

export default defineComponent({
  components: { CarouselApp },
  props: {
    currentBreed: {
      type: Object,
    },
  },
});
</script>
