<template>
  <div class="table">
    <div class="header">
      <slot name="checkbox-header"></slot>
      <div class="header-cell" v-for="(header, index) in headers" :key="index">
        {{ header }}
      </div>
    </div>
    <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
      <slot name="checkbox-row" :id="row.id"></slot>
      <div class="row-cell" v-for="(item, colIndex) in row" :key="colIndex">
        <RouterLink
          class="title"
          v-if="colIndex === 'title'"
          :to="{ name: 'dashboardDetails', params: { id: row.id } }"
          >{{ item }}</RouterLink
        >
        <span v-else>{{ item }}</span>
      </div>
    </div>
    <div ref="intersectionObserverElement"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useInfiniteScroll } from '../../composables/useInfiniteScroll';

const emit = defineEmits(['loadMore']);

defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
});

const { intersectionObserverElement } = useInfiniteScroll(() =>
  emit('loadMore'),
);
</script>

<style scoped lang="scss">
.table {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  flex: 1;
  overflow: scroll;
}

.header-cell {
  flex: 1;
  justify-self: left;
  display: flex;
  padding: 24px;
}

.header {
  display: flex;
  color: #000;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
}

.row {
  display: flex;
  border-bottom: 1px solid #f2f2f2;
}

.row-cell {
  flex: 1;
  display: flex;
  padding: 24px;
  color: #606060;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 1024px) {
  .header-cell {
    &:nth-child(4),
    &:nth-child(5) {
      display: none;
    }
  }

  .row-cell {
    &:nth-child(4),
    &:nth-child(5) {
      display: none;
    }
  }
}

.header-cell {
  &:nth-child(2) {
    display: none;
  }
}

.row-cell {
  &:nth-child(2) {
    display: none;
  }
}

@media (max-width: 500px) {
  .header-cell {
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }

  .row-cell {
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }
}

.title {
  color: #3d5fab;
}
</style>
