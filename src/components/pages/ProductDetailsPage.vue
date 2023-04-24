<template>
  <div class="product-details-page">
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
import ProductDetails from '@/components/template/Product/Details.vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/product';
import { computed } from 'vue';

const route = useRoute();


const store = useProductStore;
const productId = route.params.id as string;
const product = computed(() => store.getProductById(parseInt(productId)))
</script>

<style scoped>
.product-details-page {
  margin: 10px;
  width: 100%;
}
</style>