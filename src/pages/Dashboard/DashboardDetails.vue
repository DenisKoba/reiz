<template>
  <div>{{ product }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchSingleProduct, Product } from '../../core/api/fetchProducts';

const product = ref<Product>();
const route = useRoute();
const getProduct = async (): Promise<void> => {
  product.value = await fetchSingleProduct(route.params?.id ?? '');
};

getProduct();
</script>

<style scoped lang="scss"></style>
