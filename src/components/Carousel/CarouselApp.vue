<template>
  <Carousel
    :items-to-show="2"
    :items-to-scroll="1"
    :wrapAround="true"
    :autoplay="2000"
    snapAlign="start"
  >
    <Slide v-for="slide in imagesBreed" :key="slide.id">
      <div class="carousel__item">
        <b-img class="imageBreed" :src="slide.url" fluid />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    imagesBreed: {
      type: Array,
    },
  },
});
</script>