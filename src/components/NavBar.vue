<script setup>
import { RouterLink } from 'vue-router';
import NavBadge from "@/components/NavBadge.vue";
</script>

<template>
  <nav class="text-xl sm:text-1xl divide-x-2 divide-orange-500">
    <RouterLink to="/">
      <span class="text-stone-800 mx-2 hover:text-orange-500 tracking-wider transition">HOME</span>
    </RouterLink>
    <RouterLink to="/cart">
      <span class="text-stone-800 mx-2 hover:text-orange-500 tracking-wider transition">CART</span>
    </RouterLink>
    <!--<NavBadge />-->
  </nav>
</template>
