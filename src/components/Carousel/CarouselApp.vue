<template>
    <b-carousel
    :interval="5000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="280"
    style="text-shadow: 1px 1px 2px #333"
    class="carousel-dark carousel-fade"
    >
      <b-carousel-slide active img-src="https://picsum.photos/1024/480/?image=20" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
  </b-carousel>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        imageCat: {
            type: String
        }
    }
})
</script>
