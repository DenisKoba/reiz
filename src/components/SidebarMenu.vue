<template>
  <div class="sidebar-menu">
    <div class="sidebar-menu__title">Sales</div>
    <ul class="sidebar-menu__links">
      <li v-for="(item, index) in menu" :key="index">
        <RouterLink @click="toggleSelected(item.route)" :to="item.route">
          <component
            :class="{ active: item.active }"
            :is="components[item.icon]"
          />
          <span :class="{ active: item.active }">{{ item.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const components = {
  dashboard: defineAsyncComponent(() => import('./svg/Dashboard.vue')),
  lab: defineAsyncComponent(() => import('./svg/Clipboard.vue')),
  appointment: defineAsyncComponent(() => import('./svg/Calendar.vue')),
  medicine: defineAsyncComponent(() => import('./svg/Bag.vue')),
  message: defineAsyncComponent(() => import('./svg/SMS.vue')),
  payment: defineAsyncComponent(() => import('./svg/EmptyWallet.vue')),
  settings: defineAsyncComponent(() => import('./svg/Settings.vue')),
};

const menu = ref([
  { title: 'Dashboard', icon: 'dashboard', route: '/dashboard', active: true },
  { title: 'Lab Test', icon: 'lab', route: '/lab', active: false },
  {
    title: 'Appointment',
    icon: 'appointment',
    route: '/appointment',
    active: false,
  },
  {
    title: 'Medicine Order',
    icon: 'medicine',
    route: '/medicine-order',
    active: false,
  },
  { title: 'Message', icon: 'message', route: '/message', active: false },
  { title: 'Payment', icon: 'payment', route: '/payment', active: false },
  { title: 'Settings', icon: 'settings', route: '/settings', active: false },
]);

const toggleSelected = (route: string) => {
  menu.value.forEach((item) => (item.active = false));
  menu.value.find((item) => item.route === route).active = true;
};
</script>

<style scoped lang="scss">
.sidebar-menu {
  max-width: 230px;
  padding: 55px 30px 0 0;
  background-color: #fff;

  &__title {
    color: #013cc6;
    font-family: Poppins, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 0 0 30px;
  }

  &__links {
    color: #131313;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
    list-style: none;
    margin: 70px 0 0 0;
    padding: 0;

    & > li {
      padding: 0 0 40px 28px;
      cursor: pointer;
      border-left: 3px solid transparent;

      & > a {
        display: flex;
        align-items: center;

        &:hover {
          color: #013cc6;
        }

        & > svg {
          margin: 0 15px 0 0;
        }
      }
    }
  }
}

.active {
  color: #013cc6;
  fill: #013cc6;
  :deep(path) {
    stroke: #013cc6;
  }
}
</style>