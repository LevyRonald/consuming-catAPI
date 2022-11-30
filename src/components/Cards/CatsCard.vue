<template>
  <b-row cols="3">
    <b-col v-for="breed in breeds" :key="breed" class="pb-4">
      <b-card :img-src="breed['image'].url" img-top>
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
import CatsRequests from "@/services/axios/CatsRequests";

export default defineComponent({
  data() {
    return {
      substring: "",
      limit: 9,
      page: 0,
      breeds: {}
    };
  },
  async mounted() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    await CatsRequests.getlAllBreeds({limit: this.limit, page: this.page}).then((result) => {
      console.log(result.data);
      this.breeds = result.data;
      console.log(this.breeds);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
    });
  },
});
</script>
