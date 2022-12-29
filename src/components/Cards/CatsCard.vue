<template>
  <b-row cols="3">
    <b-col v-for="breed in breeds" :key="breed" class="pb-4">
      <b-card
        class="cardClick align-items-center pt-2"
        :img-src="breed['image']?.url ? breed['image'].url : '/img/unnamed.jpg'"
        img-top
        @click="redirectBreed(breed.id)"
      >
        <b-badge variant="info">{{ breed["origin"] }}</b-badge>
        <h4 class="colorText">{{ breed["name"] }}</h4>
        <p class="colorText">
          {{ breed["description"].substring(0, 120) + "..." }}
        </p>
      </b-card>
    </b-col>
  </b-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      substring: "",
    };
  },
  props: {
    breeds: {
      type: Object,
    },
  },
  methods: {
    redirectBreed(breedId: string) {
      this.$router.push({path: `/${breedId}`})
    }
  }
});
</script>
