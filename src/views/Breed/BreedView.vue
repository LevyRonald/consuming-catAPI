<template>
  <cat-breed-card :current-breed="breed"/>
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
      const breedRoute = this.$router.currentRoute.value.params.name;
      CatsRequests.getOneBreed(breedRoute).then((result) => {
        this.breed = result.data;
      });
    },
  },
});
</script>
