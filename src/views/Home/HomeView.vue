<template>
    teste
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    mounted() {
        this.$store.dispatch('getlAllBreeds')
    }
})
</script>
