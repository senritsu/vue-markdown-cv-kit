<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'

defineProps<{
  summary?: string
}>()
</script>

<template>
  <VueMarkdown class="summary" :source="summary" />
</template>

<style scoped>
.summary {
  color: var(--color-text);
  font-size: 9pt;
}

.summary :deep(a),
.summary :deep(a:visited) {
  color: var(--color-awesome);
  text-decoration: none;
}
</style>
