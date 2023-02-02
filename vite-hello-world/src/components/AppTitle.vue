<script setup>
import { ref } from 'vue'

defineProps({
    msg: "La mia prima app Vue"
})

</script>

<template>
    <h1>{{msg}}</h1>

</template>

<style scoped> </style>
