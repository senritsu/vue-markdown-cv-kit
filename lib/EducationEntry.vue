<script setup lang="ts">
import EntryHeader from './components/EntryHeader.vue'

interface Education {
  time: string
  institution: string
  location: string
  department?: string
  degree: string
  thesis?: string
  extracurricularActivities?: string
}

defineProps<{
  item: Education
  condensed?: boolean
}>()
</script>

<template>
  <div class="item" :class="{ condensed }">
    <EntryHeader
      :title="item.institution"
      :time="item.time"
      :position="item.degree"
      :location="item.location"
      :condensed="condensed"
    ></EntryHeader>
    <ul v-if="!condensed">
      <li v-if="item.department">
        <span class="label">Department:</span> {{ item.department }}
      </li>
      <li v-if="item.thesis">
        <span class="label">Thesis:</span> {{ item.thesis }}
      </li>
      <li v-if="item.extracurricularActivities">
        <span class="label">Extracurricular:</span>
        {{ item.extracurricularActivities }}
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

.label {
  color: var(--color-text-muted);
  font-weight: bold;
}
</style>
