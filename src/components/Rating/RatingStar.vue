<template>
    <vue3starRatings
      class="p-0 m-0"
      :disableClick="true"
      :showControl="showControl"
      :numberOfStars="5"
      starSize="14"
      starColor="#0d6efd"
      inactiveColor="#D9D9D9"
      controlBg="#ffffff00"
      controlColor="#fff"
      v-model="data"
    ></vue3starRatings>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import vue3starRatings from "vue3-star-ratings";
  export default defineComponent({
    components: {
    vue3starRatings,
  },
    props: {
      ratingRawValue: { type: Number, default: 2 },
      showControl: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        data: this.ratingRawValue,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped></style>
  