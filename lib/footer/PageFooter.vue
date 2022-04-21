<script setup lang="ts">
defineProps<{
  page: number
  date: string
  name: string
}>()
</script>

<template>
  <footer>
    <div>{{ date }}</div>
    <div>{{ name }} • CV</div>
    <div>{{ page }}</div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
  display: flex;

  font-size: 8pt;
  font-variant: small-caps;
  color: var(--color-text-light);
}

footer > * {
  flex: 1;
  display: flex;
  justify-content: center;
}

footer > :first-child {
  justify-content: flex-start;
}

footer > :last-child {
  justify-content: flex-end;
}
</style>
