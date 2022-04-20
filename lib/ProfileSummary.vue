<script setup lang="ts">
defineProps<{
  summary?: string
}>()
</script>

<template>
  <p>{{ summary }}</p>
</template>

<style scoped>
p {
  color: var(--color-text);
  font-size: 9pt;
}
</style>
