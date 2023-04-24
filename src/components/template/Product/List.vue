<template>
  <div>
    <h1 class="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
      {{ header.headerTitle }}
    </h1>
    <h3 class="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">
      {{ header.headerDescription }}
    </h3>
    <div class="list">
      <Card v-for="(product,i) in store.productData.products" :key="i" :product="product" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useProductStore } from '@/store/product';
import { computed, onMounted } from 'vue';
import Card from './Card.vue';

const store = useProductStore;

onMounted(async () => {
  await store.getAllProducts()
});

const header = computed(() => store.productData.header)
</script>

<style scoped>
.list {
  width: 100%;
}
</style>