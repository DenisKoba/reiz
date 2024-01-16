<template>
  <div class="search-group">
    <h1 class="search-group__heading">Products information</h1>
    <div class="search-group__inputs">
      <div class="search-group__input-wrapper">
        <label>Title</label>
        <input
          v-model="searchTitle"
          class="search-group__input"
          placeholder="Search title"
        />
      </div>
      <div class="search-group__input-wrapper">
        <label>Brand</label>
        <input
          v-model="searchBrand"
          class="search-group__input"
          placeholder="Search brand"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from './composables/useProducts';
import { ref, watch } from 'vue';

const searchTitle = ref<string>('');
const searchBrand = ref<string>('');

const { fetchProductsInitially, searchProductsCall } = useProducts();

watch([searchTitle, searchBrand], ([title, brand]) => {
  if (!title && !brand) {
    fetchProductsInitially();
    return;
  } else {
    searchProductsCall(searchTitle.value, searchBrand.value);
  }
});
</script>

<style scoped lang="scss">
.search-group {
  margin: 0 0 34px 0;

  &__heading {
    color: #000;
    font-family: Poppins, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 43px 0 30px 0;
  }

  &__inputs {
    display: flex;
    gap: 22px;
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;

    & > input {
      max-width: 266px;
      width: 100%;
      padding: 8px 20px;
    }

    & > label {
      margin: 0 0 16px 0;
    }
  }
}

@media (max-width: 620px) {
  .search-group {
    &__heading {
      padding: 10px 0 10px 0;
    }

    &__inputs {
      flex-direction: column;
    }

    &__input-wrapper {
      margin: 0;
      max-width: unset;
    }
  }
}
</style>
