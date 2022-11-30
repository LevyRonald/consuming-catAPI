<template>
    <b-form-select :options="NameBreeds"></b-form-select>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        NameBreeds: {
            type: Array
        }
    }
})
</script>
