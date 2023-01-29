<script setup>
import {useProductsStore} from "@/stores/products";
import {storeToRefs} from "pinia";
const useProducts = useProductsStore();
const { totalProductsAmount, totalPrice } = storeToRefs(useProducts);
</script>
<template>
  <div class="flex flex-row justify-between mb-10">
    <div>
      <h1 class="font-bold text-orange-500">
        Products:
        <span class="bg-orange-100 text-stone-800 py-1 px-2 rounded-xl"> {{ totalProductsAmount }}</span>
      </h1>
      <h1 class="font-bold text-orange-500 mt-2">
        To pay:
        <span class="bg-orange-100 text-stone-800 py-1 px-2 rounded-xl"> ${{ Math.round(totalPrice) }}</span>
      </h1>
    </div>

    <button class="button-secondary" @click="useProducts.resetCart">
      Clear
    </button>
  </div>
</template>
