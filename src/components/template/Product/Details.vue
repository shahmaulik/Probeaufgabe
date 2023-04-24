<template>
  <div class="w-full max-w-full flex mb-8 mr-2">
    <img :src="productData?.imageURL" :alt="productData?.name" />
    <div class="bg-white p-4 flex flex-col justify-between leading-normal product-details">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ productData?.name }}</div>
        <p class="text-gray-700 text-base">Price: {{ productData?.price?.value }} {{ productData?.price?.currency }}</p>
      </div>
      <div class="flex items-center justify-between">
        <Rating :value="productData?.rating" />
        <p class="text-gray-900 leading-none">{{ formatedDate }}</p>
      </div>
    </div>
  </div>
  <p>{{ productData?.description }}</p>
  <p>{{ productData?.longDescription }}</p>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>
</template>

<script lang="ts" setup>
import Rating from './Rating.vue';
import { format } from 'date-fns'

const props = defineProps({
  product: Object
})

const productData = props.product;
var formatedDate = format(productData?.releaseDate, 'yyyy-MM-dd');
</script>
