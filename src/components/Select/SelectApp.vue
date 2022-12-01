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
        { value: "abob", text: "American Bobtail" },
        { value: "acur", text: "American Curl" },
        { value: "asho", text: "American Shorthair" },
        { value: "awir", text: "American Wirehair" },
        { value: "amau", text: "Arabian Mau" },
        { value: "amis", text: "Australian Mist" },
        { value: "bali", text: "Balinese" },
        { value: "bamb", text: "Bambino" },
        { value: "beng", text: "Bengal" },
        { value: "birm", text: "Birman" },
        { value: "bomb", text: "Bombay" },
        { value: "bslo", text: "British Longhair" },
        { value: "bsho", text: "British Shorthair" },
        { value: "bure", text: "Burmese" },
        { value: "buri", text: "Burmilla" },
        { value: "cspa", text: "California Spangled" },
        { value: "ctif", text: "Chantilly-Tiffany" },
        { value: "char", text: "Chartreux" },
        { value: "chau", text: "Chausie" },
        { value: "chee", text: "Cheetoh" },
        { value: "csho", text: "Colorpoint Shorthair" },
        { value: "crex", text: "Cornish Rex" },
        { value: "cymr", text: "Cymric" },
        { value: "cypr", text: "Cyprus" },
        { value: "drex", text: "Devon Rex" },
        { value: "dons", text: "Donskoy" },
        { value: "lihu", text: "Dragon Li" },
        { value: "emau", text: "Egyptian Mau" },
        { value: "ebur", text: "European Burmese" },
        { value: "esho", text: "Exotic Shorthair" },
        { value: "hbro", text: "Himalayan" },
        { value: "jbob", text: "Japanese Bobtail" },
        { value: "java", text: "Javanese" },
        { value: "khao", text: "Khao Manee" },
        { value: "kora", text: "Korat" },
        { value: "kuri", text: "Kurilian" },
        { value: "lape", text: "LaPerm" },
        { value: "mcoo", text: "Maine Coon" },
        { value: "mala", text: "Malayan" },
        { value: "manx", text: "Manx" },
        { value: "munc", text: "Munchkin" },
        { value: "nebe", text: "Nebelung" },
        { value: "norw", text: "Norwegian Forest Cat" },
        { value: "ocic", text: "Ocicat" },
        { value: "orie", text: "Oriental" },
        { value: "pers", text: "Persian" },
        { value: "pixi", text: "Pixie-bo" },
        { value: "raga", text: "Ragamuffin" },
        { value: "ragd", text: "Ragdoll" },
        { value: "rblu", text: "Russian Blue" },
        { value: "sava", text: "Savannah" },
        { value: "sfol", text: "Scottish Fold" },
        { value: "srex", text: "Selkirk Rex" },
        { value: "siam", text: "Siamese" },
        { value: "sibe", text: "Siberian" },
        { value: "sing", text: "Singapura" },
        { value: "snow", text: "Snowshoe" },
        { value: "soma", text: "Somali" },
        { value: "sphy", text: "Sphynx" },
        { value: "tonk", text: "Tonkinese" },
        { value: "toyg", text: "Toyger" },
        { value: "tang", text: "ToTurkish Angorayger" },
        { value: "tvan", text: "Turkish Van" },
        { value: "ycho", text: "York Chocolate" },
      ],
    };
  },
  methods: {
    async searchBreed() {
      if(this.exGroupSelected != null) {
        CatsRequests.getOneBreed(this.exGroupSelected)
        console.log(this.exGroupSelected);
        this.$router.push({path: `/${this.exGroupSelected}`})
        this.exGroupSelected = null
      }
    },
  }
});
</script>
