<script setup>
import ProductCard from "@/components/ProductCard.vue";
import AppAlert from "@/components/AppAlert.vue";
import AppLoading from "@/components/AppLoading.vue";
import {useProductsStore} from "@/stores/products";
import {storeToRefs} from "pinia";
import {computed, onMounted, ref} from "vue";

const useProducts = useProductsStore();
const { products, cart } = storeToRefs(useProducts);
const loading = ref(false);
const hasProducts = computed(() => !!products.value?.length > 0);

onMounted(async () => {
  if(!hasProducts.value){
    loading.value = true;
    await useProducts.fetchProducts();
    loading.value = false;
  }
})
</script>

<template>
  <div v-if="loading">
    <AppLoading />
  </div>
  <div v-else-if="hasProducts" class="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
    <div v-for="(product,index) in products" :key="index">
      <ProductCard :product="product">
        <template #actions>
          <div class="mt-5 flex gap-2">
            <button class="button-primary" @click="useProducts.addToCart(product)">
              Add to cart
            </button>
          </div>
        </template>
      </ProductCard>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <AppAlert :message="'Could not show the products of the store, try later!!'" />
  </div>
</template>