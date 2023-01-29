<script setup>
import {computed} from "vue";
const props = defineProps({
  product: {
    type: Object,
    default: ()=> ({})
  }
})
const title = computed(() => props.product?.title || '');
const image = computed(() => props.product?.image || '');
const category = computed(() => props.product?.category || '');
const price = computed(() => props.product?.price || 0);
const raiting = computed(() => props.product?.rating?.count || 0);
const savePercent = computed(() => (Math.round(props.product?.price + (props.product?.price * 20)/100, 1) || 0));
</script>
<template>
  <div class="card">
    <img
        class="w-full h-60 object-scale-down p-2"
        :alt="title"
        :title="title"
        :src="image"
        loading="lazy"
    />
    <div class="p-5 flex flex-col gap-3">

      <!-- badge -->
      <div class="flex items-center gap-2">
        <span class="badge">stock ready</span>
        <span class="badge">{{ category }}</span>
      </div>

      <!-- product title -->
      <h2 class="product-title" :title="title">
        {{ title }}
      </h2>

      <!-- product price -->
      <div>
        <span class="text-xl font-bold">
          $ {{ price }}
        </span>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-sm line-through opacity-50">
            $ {{ savePercent }}
          </span>
          <span class="discount-percent">
            save 20%
          </span>
        </div>
      </div>

      <!-- product rating -->
      <span class="text-xs tex-stone-500">
        {{ raiting }}k reviews
      </span>

      <!-- product action buttons -->
      <slot name="actions"></slot>

    </div>
  </div>
</template>


