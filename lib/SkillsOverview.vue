<script setup lang="ts">
import SkillGroup from './components/SkillGroup.vue'

defineProps<{
  groups: {
    name: string
    skills: { name: string; rating: number }[]
    unrated?: string
  }[]
}>()
</script>

<template>
  <div class="skills">
    <SkillGroup v-for="group in groups" v-bind="group"></SkillGroup>
  </div>
</template>

<style scoped>
.skills {
  display: flex;
  gap: 2em;
}

.skills > * {
  flex: 1;
}
</style>
