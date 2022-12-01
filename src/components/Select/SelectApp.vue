<template>
  <b-form-select v-model="exGroupSelected" :options="ex1GroupOptions" @click="searchBreed">
    <template #first>
      <b-form-select-option :value="null" disabled
        >-- Please select an option --</b-form-select-option
      >
    </template>
  </b-form-select>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import CatsRequests from "@/services/axios/CatsRequests";

export default defineComponent({
  data() {
    return {
      exGroupSelected: ref(null),
      ex1GroupOptions: [
        { value: "abys", text: "Abyssinian" },
        { value: "aege", text: "Aegean" },
      ],
    };
  },
  methods: {
    searchBreed() {
      if(this.exGroupSelected != null) {
        CatsRequests.getOneBreed(this.exGroupSelected)
        this.exGroupSelected = null
      }
    },
  }
});
</script>
