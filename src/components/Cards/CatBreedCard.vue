<template>
  <div v-if="currentBreed != undefined">
    <b-card class="cardBreed">
      <div v-if="imagesBreed.length > 0">
        <carousel-app :images-breed="imagesBreed" />
        <div class="pt-2">
          <div class="badges d-flex justify-content-center">
            <h5>
              <b-badge href="#" pill variant="primary">{{
                currentBreed.origin
              }}</b-badge>
            </h5>
            <h5>
              <b-badge href="#" pill variant="primary"
                >Life Span {{ currentBreed.life_span }}</b-badge
              >
            </h5>
            <h5>
              <h5>
                <b-badge href="#" pill variant="primary"
                  >Weigth: {{ currentBreed.weight.metric }}</b-badge
                >
              </h5>
            </h5>
          </div>
          <div>
            <h3 class="colorText">{{ currentBreed.name }}</h3>
            <p class="p-0 m-0 colorText">{{ currentBreed.description }}</p>
            --
            <h6 class="colorText">{{ currentBreed.temperament }}</h6>
          </div>
          <div class="d-flex w-100 flex-column">
            <div class="d-flex pb-1 flex-column">
              <span class="colorText">Adaptability:</span>
              <RatingStarVue class="d-flex" :rating-raw-value="currentBreed.adaptability" />
            </div>
            <div class="d-flex flex-column">
              <span class="colorText">Affection:</span>
              <RatingStarVue class="d-flex" :rating-raw-value="currentBreed.affection_level" />
            </div>
            <div class="d-flex flex-column">
              <span class="colorText">child friendly:</span>
              <RatingStarVue class="d-flex" :rating-raw-value="currentBreed.child_friendly" />
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CarouselApp from "@/components/Carousel/CarouselApp.vue";
import CatsRequests from "@/services/axios/CatsRequests";
import RatingStarVue from "../Rating/RatingStar.vue";

export default defineComponent({
  data() {
    return {
      limit: 10,
      imagesBreed: [],
    };
  },
  components: {
    CarouselApp,
    RatingStarVue,
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
<!-- <h5>
  <b-badge href="#" pill variant="primary">{{
    currentBreed.origin
  }}</b-badge>
</h5>
<h5>
  <b-badge href="#" pill variant="primary">
    Life Span: {{ currentBreed.life_span }}</b-badge
  >
</h5>
<h5>
  <b-badge href="#" pill variant="primary"
    >Weigth: {{ currentBreed.weight.metric }}</b-badge
  >
</h5> -->
