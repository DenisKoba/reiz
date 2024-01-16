<template>
  <div class="app-wrapper">
    <SidebarMenu ref="target" :class="['sidebar-menu', { open: isVisible }]" />
    <div class="app-wrapper__content">
      <Header @toggle-menu="toggleMenu" />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SidebarMenu from './components/SidebarMenu.vue';
import Header from './components/Header.vue';
import { onClickOutside } from '@vueuse/core';

const isVisible = ref(false);
const target = ref(null);

onClickOutside(target, () => (isVisible.value = false));

const toggleMenu = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  padding: 0;

  &__content {
    background-color: #f8f8f8;
    flex: 1;
    padding: 56px 41px 33px 41px;
    display: flex;
    flex-direction: column;
  }
}

.open {
  transform: translateX(0) !important;
  transition: 1s;
}

@media (max-width: 1024px) {
  .sidebar-menu {
    transform: translateX(-230px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    transition: 1s;
  }
}

@media (max-width: 620px) {
  .app-wrapper {
    &__content {
      padding: 20px;
    }
  }
}
</style>
