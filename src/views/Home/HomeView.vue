<template>
  <cats-card :breeds="breeds" />
  <div class="w-100 d-flex justify-content-end">
    <pagination v-model="page" :page="limit" :rows="rows" @click="handlePageChange" />
  </div>
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
      page: 0,
      rows: 1,
      breeds: {},
    };
  },
  mounted() {
    this.handlePageChange()
    this.getRows()
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
      this.page;
      this.renderCats();
    },
    getRows() {
        CatsRequests.getlAllBreeds().then((result) => {
            this.rows = result.data.length
            console.log(result);
        })
    }
  },
});
</script>
