<script setup lang="ts">
import { faCircle, faBookmark } from '@fortawesome/free-solid-svg-icons'

import TagList from './TagList.vue'

defineProps<{
  name: string
  skills: { name: string; rating: number }[]
  hideRatings?: boolean
  unrated?: string[]
}>()
</script>

<template>
  <div class="group">
    <h5>{{ name }}</h5>
    <ul v-if="hideRatings" class="skill-list">
      <li class="skill-item" v-for="skill in skills">{{ skill.name }}</li>
    </ul>

    <div v-else class="skill" v-for="skill in skills">
      <span>{{ skill.name }}</span>
      <div class="rating">
        <fa-icon
          v-for="i in 5"
          :class="{ empty: i > skill.rating }"
          :icon="faCircle"
        />
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

  .highlight {
    font-size: 0.75em;
    color: var(--color-awesome);
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

  .skill-list {
    padding-inline-start: 0.5cm;
  }

  .skill-item,
  .skill {
    font-size: 12pt;
  }

  .skill {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
