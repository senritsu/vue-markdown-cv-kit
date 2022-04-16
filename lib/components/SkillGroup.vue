<script setup lang="ts">
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import TagList from './TagList.vue'

defineProps<{
  name: string
  skills: { name: string; rating: number }[]
  unrated?: string
}>()
</script>

<template>
  <div class="group">
    <h5>{{ name }}</h5>
    <div class="skills">
      <div class="skill" v-for="skill in skills">
        <span>{{ skill.name }}</span>
        <div class="rating">
          <fa-icon
            v-for="i in 5"
            :class="{ empty: i > skill.rating }"
            :icon="faCircle"
          />
        </div>
      </div>
    </div>

    <TagList class="unrated" v-if="unrated" :tags="unrated"></TagList>
  </div>
</template>

<style scoped>
@media all {
  h5 {
    font-size: 10pt;
    font-weight: bold;
    color: var(--color-text-dark);
  }

  .group {
    display: flex;
    flex-direction: column;

    font-size: 9pt;
    color: var(--color-text);
  }

  .rating {
    font-size: 0.5em;
    color: var(--color-awesome);
    transition: color 0.3s;
    display: flex;
    gap: 0.4em;
  }

  .rating .empty {
    color: whitesmoke;
  }

  .unrated {
    margin-top: 3mm;
  }

  .skill {
    font-size: 12pt;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
