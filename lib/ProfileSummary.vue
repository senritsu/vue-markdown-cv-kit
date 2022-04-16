<script setup lang="ts">
defineProps<{
  summary?: string
}>()
</script>

<template>
  <span>{{ summary }}</span>
</template>

<style scoped>
span {
  color: var(--color-text);
  font-size: 9pt;
}
</style>
