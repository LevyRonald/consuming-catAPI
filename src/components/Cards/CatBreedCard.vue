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
          <div class="colorText">
            <h3 class="colorText">{{ currentBreed.name }}</h3>
            <p class="p-0 m-0 colorText">{{ currentBreed.description }}</p>
            --
            <h6 class="colorText">{{ currentBreed.temperament }}</h6>
          </div>
          <b-container>
            <b-row align-h="between">
              <b-col cols="6">
                <div class="d-flex pb-1 flex-column">
                  <span class="colorText">Adaptability:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.adaptability"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.affection_level > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Affection:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.affection_level"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.child_friendly > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">child friendly:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.child_friendly"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.dog_friendly > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Dog friendly:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.dog_friendly"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.energy_level > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Energy level:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.energy_level"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.grooming > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Grooming:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.grooming"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.health_issues > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Health issues:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.health_issues"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.intelligence > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Intelligence:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.intelligence"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.shedding_level > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Sheeding level:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.shedding_level"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.social_needs > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Social needs:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.social_needs"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.stranger_friendly > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Stranger friendly:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.stranger_friendly"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.social_needs > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Vocalisation:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.social_needs"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.experimental > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Experimental:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.experimental"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.hairless > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Hairless:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.hairless"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.natural > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Natural:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.natural"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.rare > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Rare:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.rare"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.suppressed_tail > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Suppressed tail:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.suppressed_tail"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.short_legs > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Short legs:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.short_legs"
                  />
                </div>
              </b-col>
              <b-col cols="6" v-if="currentBreed.hypoallergenic > 0">
                <div class="d-flex flex-column">
                  <span class="colorText">Hypoallergenic:</span>
                  <RatingStarVue
                    class="d-flex"
                    :rating-raw-value="currentBreed.hypoallergenic"
                  />
                </div>
              </b-col>
            </b-row>
          </b-container>
          <!-- <div class="d-flex w-100 flex-column">
            <div class="d-flex pb-1 flex-column">
              <span class="colorText">Adaptability:</span>
              <RatingStarVue
                class="d-flex"
                :rating-raw-value="currentBreed.adaptability"
              />
            </div>
            <div class="d-flex flex-column">
              <span class="colorText">Affection:</span>
              <RatingStarVue
                class="d-flex"
                :rating-raw-value="currentBreed.affection_level"
              />
            </div>
            <div class="d-flex flex-column">
              <span class="colorText">child friendly:</span>
              <RatingStarVue
                class="d-flex"
                :rating-raw-value="currentBreed.child_friendly"
              />
            </div>
            <div class="d-flex flex-column">
              <span class="colorText">Dog friendly:</span>
              <RatingStarVue
                class="d-flex"
                :rating-raw-value="currentBreed.dog_friendly"
              />
            </div>
            <div class="d-flex flex-column">
              <span class="colorText">Energy level:</span>
              <RatingStarVue
                class="d-flex"
                :rating-raw-value="currentBreed.energy_level"
              />
            </div>
          </div> -->
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
