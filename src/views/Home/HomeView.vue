<template>
    <cats-card/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CatsCard from '@/components/Cards/CatsCard.vue';

export default defineComponent({
    components: { CatsCard },
})
</script>
