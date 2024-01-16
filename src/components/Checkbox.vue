<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="(event) => emit('update:modelValue', event.target.checked)"
  />
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['update:modelValue']);
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>
