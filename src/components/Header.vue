<template>
  <div class="header">
    <div class="menu" @click="emit('toggleMenu')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
    <div class="search-bar">
      <span class="search-bar__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <input class="search-bar__input" placeholder="Search" />
    </div>
    <div class="header__personal">
      <div class="header__notification">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 6.54352V9.87352"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M12.02 2.10352C8.34002 2.10352 5.36002 5.08352 5.36002 8.76352V10.8635C5.36002 11.5435 5.08002 12.5635 4.73002 13.1435L3.46002 15.2635C2.68002 16.5735 3.22002 18.0335 4.66002 18.5135C9.44002 20.1035 14.61 20.1035 19.39 18.5135C20.74 18.0635 21.32 16.4835 20.59 15.2635L19.32 13.1435C18.97 12.5635 18.69 11.5335 18.69 10.8635V8.76352C18.68 5.10352 15.68 2.10352 12.02 2.10352Z"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M15.33 18.9235C15.33 20.7535 13.83 22.2535 12 22.2535C11.09 22.2535 10.25 21.8735 9.64998 21.2735C9.04998 20.6735 8.66998 19.8335 8.66998 18.9235"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
      <div class="header__avatar"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['toggleMenu']);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  gap: 10px;
  justify-content: space-between;

  &__personal {
    display: flex;
    gap: 10px;
  }

  &__avatar {
    background: center / cover url('https://picsum.photos/200/300?grayscale')
      #fff;
    width: 52px;
    height: 52px;
    border-radius: 3px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &__notification {
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &::after {
      content: '';
      width: 10px;
      height: 10px;
      display: block;
      position: absolute;
      top: -3px;
      right: -3px;
      background-color: #ffbc0f;
      border-radius: 50%;
    }
  }
}
.search-bar {
  position: relative;
  flex: 1;

  &__icon {
    position: absolute;
    left: 20px;
    top: 13px;
  }

  &__input {
    padding: 8px 8px 8px 60px;
    max-width: 655px;
    width: 100%;
  }
}

.menu {
  width: 30px;
  opacity: 0.5;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;
  display: none;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .menu {
    display: flex;
  }
}

@media (max-width: 620px) {
  .header {
    align-self: self-end;
    width: 100%;
  }

  .search-bar {
    display: none;
  }
}
</style>
