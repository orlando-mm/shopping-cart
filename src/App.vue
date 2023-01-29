<script setup>
import { RouterView } from 'vue-router';
import TitleCart from '@/components/TitleCart.vue';
import NavBar from "@/components/NavBar.vue";
import NavBadge from "@/components/NavBadge.vue";
</script>

<template>
  <div class="container px-2 mx-auto mt-2 sm:mt-5 flex justify-end">
    <NavBadge />
  </div>
  <div class="container px-2 mx-auto mt-2 sm:mt-5 divide-y-2">
    <div class="flex flex-row justify-between py-2">
      <TitleCart />
      <NavBar />
    </div>
    <div class="pt-10">
      <RouterView />
    </div>
  </div>
</template>


