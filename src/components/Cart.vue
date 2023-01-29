<script setup>
import {useProductsStore} from "@/stores/products";
import {storeToRefs} from "pinia";
import ProductCard from "@/components/ProductCard.vue";
import CartSlotCard from "@/components/CartSlotCard.vue";
import AppAlert from "@/components/AppAlert.vue";
import CartTop from "@/components/CartTop.vue";


const useProducts = useProductsStore();
const { cart, totalProductsAmount } = storeToRefs(useProducts);
</script>
<template>
  <div v-if="totalProductsAmount" class="pb-10">
    <CartTop />
    <div class="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
      <div v-for="product in cart" :key="product.id">
        <ProductCard :product="product">
          <template #actions>
            <CartSlotCard :product="product" />
          </template>
        </ProductCard>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <AppAlert :message="'Empty cart, you can start shopping now!'" />
  </div>
</template>