<template>
  <b-row cols="3">
    <b-col v-for="breed in breeds" :key="breed" class="pb-4">
      <b-card :img-src="breed['image']?.url ? breed['image'].url : '/img/unnamed.jpg'" img-top>
        <div></div>
        <b-badge variant="info">{{ breed['origin'] }}</b-badge>
        <h4>{{ breed['name'] }}</h4>
        <p>{{ breed['description'].substring(0, 120) + '...'}}</p>
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
    }
  }
});
</script>
