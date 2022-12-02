<template>
    <div class="d-flex justify-content-center">
        <cat-breed-card class="card-breed" :current-breed="breed"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CatsRequests from "@/services/axios/CatsRequests";
import CatBreedCard from "@/components/Cards/CatBreedCard.vue";

export default defineComponent({
  components: { CatBreedCard },
  data() {
    return {
      breed: {},
    };
  },
  mounted() {
    this.getCurrentBreed();
  },
  methods: {
    getCurrentBreed() {
      let breedRoute: string | string[] 
      breedRoute = this.$router.currentRoute.value.params.name;
      CatsRequests.getOneBreed(breedRoute).then((result) => {
        this.breed = result.data;
      });
    },
  },
});
</script>
