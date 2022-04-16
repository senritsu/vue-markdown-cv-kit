<script setup lang="ts">
defineProps<{
  page: number
  date: string
  name: string
}>()
</script>

<template>
  <footer>
    <span>{{ date }}</span>
    <span>{{ name }} • CV</span>
    <span>{{ page }}</span>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  font-size: 8pt;
  font-variant: small-caps;
  color: var(--color-text-light);
}
</style>
