<script setup>
import {useProductsStore} from "@/stores/products";
import {storeToRefs} from "pinia";

const useProducts = useProductsStore();
const { totalProductsAmount } = storeToRefs(useProducts);
</script>

<template>
  <span class="bg-orange-500 text-white py-1 px-2 rounded-lg text-xl shadow-lg shadow-orange-500">{{ totalProductsAmount }}</span>
</template>



