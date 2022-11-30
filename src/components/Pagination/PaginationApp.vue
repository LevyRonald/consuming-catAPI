<template>
  <b-pagination
    pills
    size="lg"
    :total-rows="rows"
    :per-page="page"
  ></b-pagination>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    rows: {
        type: Number,
    },
    page:{
        type: Number,
    }
  }
});
</script>
