<script setup>
import {useProductsStore} from "@/stores/products";
import {computed} from "vue";
const  props = defineProps({
  product: {
    type: Object,
    default: ()=> ({})
  }
})
const useProducts = useProductsStore();
const toPay = computed(() => (Math.round(props.product?.amount * props.product?.price) || 0));
</script>
<template>
  <h1 class="font-bold text-orange-500">To pay:
    <span class="bg-orange-100 text-stone-800 py-1 px-2 rounded-xl">${{ toPay }}</span>
  </h1>
  <div class="mt-5 flex gap-2 justify-between">
    <button class="button-secondary" @click="useProducts.subtractQuantity(product.id)">
      -
    </button>
    <h1 class="font-bold text-orange-500 text-xl">{{ product.amount }}</h1>
    <button class="button-primary" @click="useProducts.addToCart(product)">
      +
    </button>
  </div>
</template>
