<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <h1 class="text-xl text-orange-500 border-2 border-orange-500 opacity-2 bg-orange-50 py-5 px-10 rounded-xl">
    {{ message }}
  </h1>
</template>

