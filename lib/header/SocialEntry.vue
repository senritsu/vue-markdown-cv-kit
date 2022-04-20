<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

defineProps<{
  icon: IconDefinition
  entry:
    | string
    | {
        label: string
        href: string
      }
}>()
</script>

<template>
  <div v-if="typeof entry === 'string'" class="social-entry">
    <fa-icon :icon="icon"></fa-icon><span> {{ entry }}</span>
  </div>
  <div v-else class="social-entry">
    <a :href="entry.href"><fa-icon :icon="icon" />{{ entry.label }}</a>
  </div>
</template>

<style scoped>
.social-entry a {
  text-decoration: none;
  color: var(--color-text);
}

.social-entry svg {
  margin-right: 0.3em;
  font-size: 1.25em;
}
</style>
