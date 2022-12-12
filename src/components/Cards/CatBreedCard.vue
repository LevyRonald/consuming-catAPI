<template>
  <div v-if="currentBreed != undefined">
    <b-card>
      <div v-if="imagesBreed.length > 0">
        <carousel-app :images-breed="imagesBreed" />
        <div class="pt-2">
          <h5>
            <b-badge href="#" pill variant="primary">{{ currentBreed.origin }}</b-badge>
            <b-badge href="#" pill variant="primary">{{currentBreed.life_span}}</b-badge>
          </h5>
        </div>
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
      imagesBreed: [],
    };
  },
  components: {
    CarouselApp,
  },
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
        this.imagesBreed = result.data;
        console.log(this.imagesBreed);
      });
    },
  },
});
</script>
