<template>
  <b-row cols="2">
    <b-col v-for="breed in breeds" :key="breed">
      <b-card :img-src="breed.image?.url" img-top>{{breed.name}}</b-card>
    </b-col>
  </b-row>
  <!-- <div>
        <b-card-group deck>
            <b-card v-for="breed in breeds" :key="breed">{{breed}}</b-card>
        </b-card-group>
    </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CatsRequests from "@/services/axios/CatsRequests";

export default defineComponent({
  data() {
    return {
      breeds: {
        name: '',
        wikipedia_url: '',
        image: {
            url: '',
        }
      },
    };
  },
  async mounted() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    await CatsRequests.getlAllBreeds()
      .then((result) => {
        console.log(result.data);
        this.breeds = result.data;
        console.log(this.breeds);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
      })
  },
});
</script>
