<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="tags">
    <span class="tag" v-for="tag in tags">{{ tag }}</span>
  </div>
</template>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2pt;

  font-size: 7.6pt;
  color: var(--color-text);
}
.tag {
  padding: 1pt 2pt;
  background-color: whitesmoke;
  border-radius: 2pt;
}
</style>
