<template>
  <DashboardSearch />
  <DashboardList :headers="headers" :rows="rows" @load-more="loadMoreProducts">
    <template #checkbox-header>
      <div class="header-cell">
        <Checkbox v-model="checkedAll" @update:model-value="(value: boolean) => selectAllProducts(value)" />
      </div>
    </template>
    <template #checkbox-row="{ id }">
      <div class="row-cell">
        <Checkbox :checked="selectedProducts.includes(id)" @update:model-value="(value: boolean) => toggleSingleSelected(id, value)" />
      </div>
    </template>
  </DashboardList>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import DashboardSearch from './DashboardSearch.vue';
import DashboardList from './DashboardList.vue';
import Checkbox from '../../components/Checkbox.vue';

import { Product } from '../../core/api/fetchProducts';
import { useProducts } from './composables/useProducts';

const { products, fetchProductsInitially, loadMoreProducts, toggleSingleSelected, selectAllProducts, selectedProducts } = useProducts();

const checkedAll = ref(false);

const shortenedList = (list: Product[]): Partial<Product>[] => {
  return list.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    brand: item.brand,
    price: `$${item.price}`,
    stock: item.stock,
    rating: `$${item.rating}`
  }));
};

const headers = computed(() =>
  Object.keys(shortenedList(products.value)?.[0] ?? {}),
);
const rows = computed<Partial<Product>[]>(
  () => shortenedList(products.value) ?? [],
);

fetchProductsInitially();
</script>
<style scoped>
.header-cell,
.row-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 20px;
}
</style>
