<template>
  <cats-card :breeds="breeds" />
  <pagination v-model="page" :page="limit" :rows="rows" @click="handlePageChange" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CatsCard from "@/components/Cards/CatsCard.vue";
import Pagination from "@/components/Pagination/PaginationApp.vue";
import CatsRequests from "@/services/axios/CatsRequests";

export default defineComponent({
  components: { CatsCard, Pagination },
  data() {
    return {
      limit: 9,
      page: 1,
      rows: 67,
      breeds: {},
    };
  },
  mounted() {
    this.handlePageChange()
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
    handlePageChange() {
      this.page + 1;
      this.renderCats();
    },
  },
});
</script>
