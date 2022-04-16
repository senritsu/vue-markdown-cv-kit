<script setup lang="ts">
import EntryHeader from './components/EntryHeader.vue'

interface Project {
  time: string
  description: string
  name: string
  position: string
  customer: string
  details: string[]
}

defineProps<{
  item: Project
  condensed?: boolean
}>()
</script>

<template>
  <div class="item" :class="{ condensed }">
    <EntryHeader
      :title="item.name"
      :time="item.time"
      :position="item.position"
      :location="item.customer"
      :condensed="condensed"
    ></EntryHeader>
    <ul v-if="!condensed">
      <li v-for="detail in item.details">
        {{ detail }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  font-size: 9pt;
  color: var(--color-text);
  padding-inline-start: 0.5cm;
}
.item:not(.condensed) {
  margin-bottom: 3mm;
}
</style>
