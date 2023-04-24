<template>
 <div class="lg:w-full max-w-full flex mb-8 mr-2">
  <img :src="productData?.imageURL" :alt="productData?.name" v-if="productData?.available" @click="router.push(`/product/${productData?.id}`)" />
  <div class="border-r border-b border-l border-gray-400 border-t lg:border-gray-400 bg-white lg:rounded-b-none p-4 flex flex-col justify-between leading-normal product-details">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">{{ productData?.name }}</div>
      <p class="text-gray-700 text-base">{{ productData?.description }}</p>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-gray-900 leading-none">{{ productData?.price?.value }} {{ productData?.price?.currency }}</p>
      <Rating :value="productData?.rating" />
    </div>
  </div>
  <img :src="productData?.imageURL" :alt="productData?.name" v-if="!productData?.available" @click="router.push(`/product/${productData?.id}`)"/>
</div>
</template>
<script lang="ts" setup>
import Rating from './Rating.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  product: {
    type: Object
  }
});

const productData = props.product;
</script>

<style scoped>
.product-details {
  width: 80%;
}
</style>