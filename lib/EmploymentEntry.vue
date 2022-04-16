<script setup lang="ts">
import EntryHeader from './components/EntryHeader.vue'

interface WorkExperience {
  time: string
  location: string
  employer: string
  position: string
  responsibilities: string[]
}

defineProps<{
  item: WorkExperience
  condensed: boolean
}>()
</script>

<template>
  <div class="item" :class="{ condensed }">
    <EntryHeader
      :title="item.employer"
      :time="item.time"
      :position="item.position"
      :location="item.location"
      :condensed="condensed"
    ></EntryHeader>
    <ul v-if="!condensed">
      <li v-for="responsibility in item.responsibilities">
        {{ responsibility }}
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
