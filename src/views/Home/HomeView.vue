<template>
  <cats-card :breeds="breeds" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CatsCard from "@/components/Cards/CatsCard.vue";
import CatsRequests from "@/services/axios/CatsRequests";

export default defineComponent({
  components: { CatsCard },
  data() {
    return {
      limit: 9,
      page: 0,
      breeds: {},
    };
  },
  mounted() {
    this.renderCats();
  },
  methods: {
    renderCats() {
      CatsRequests.getlAllBreeds({
        limit: this.limit,
        page: this.page,
      }).then((result) => {
        this.breeds = result.data;
        console.log(this.breeds);
      });
    },
  },
});
</script>
