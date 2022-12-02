<template>
  <div>
    <b-card>
      <div>
        <carousel-app :images-breed="imagesBreed[1]" />
      </div>
    </b-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CarouselApp from "@/components/Carousel/CarouselApp.vue";
import CatsRequests from "@/services/axios/CatsRequests";

export default defineComponent({
  data() {
    return {
      limit: 10,
      imagesBreed: [Object]
    };
  },
  components: { CarouselApp },
  props: {
    currentBreed: {
      type: Object,
    },
  },
  async mounted() {
    await this.getImage();
  },
  methods: {
    async getImage() {
      let breedRoute: string | string[];
      breedRoute = this.$router.currentRoute.value.params.name;
      await CatsRequests.getImagesBreed({
        breed_id: breedRoute,
        limit: this.limit,
      }).then((result) => {
        this.imagesBreed.push(result.data)
      });
    },
  },
});
</script>
