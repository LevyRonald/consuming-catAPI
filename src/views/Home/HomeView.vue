<template>
  <div class="mb-2 d-flex justify-content-end">
    <select-app class="w-25" />
  </div>
  <cats-card :breeds="breeds" />
  <div class="w-100 d-flex justify-content-end">
    <pagination
      v-model="page"
      :page="limit"
      :rows="rows"
      @click="handlePageChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CatsCard from "@/components/Cards/CatsCard.vue";
import Pagination from "@/components/Pagination/PaginationApp.vue";
import CatsRequests from "@/services/axios/CatsRequests";
import SelectApp from "@/components/Select/SelectApp.vue";

export default defineComponent({
  components: { CatsCard, Pagination, SelectApp },
  data() {
    return {
      teste: [{}],
      selectBreeds:[
        {
          breeds: "",
          id: "",
        }],
      nameBreeds: [
        {
          name: "",
          id: "",
        },
      ],
      limit: 9,
      page: 0,
      rows: 1,
      breeds: {},
    };
  },
  mounted() {
    this.handlePageChange();
    this.getRows();
  },
  methods: {
    renderCats() {
      CatsRequests.getlAllBreeds({
        limit: this.limit,
        page: this.page,
      }).then((result) => {
        this.breeds = result.data;
      });
    },
    handlePageChange() {
      this.page;
      this.renderCats();
    },
    async getRows() {
      await CatsRequests.getlAllBreeds().then((result) => {
        this.rows = result.data.length;
        this.nameBreeds = result.data;
      });
      // for (let index = 0; index < this.rows; index++) {
      //   this.selectBreeds[index].breeds = this.nameBreeds[index].name;
      //   this.selectBreeds[index].id = this.nameBreeds[index].id;
      //   // console.log(this.teste);
      //   console.log(this.nameBreeds);
      // }
    },
  },
});
</script>
