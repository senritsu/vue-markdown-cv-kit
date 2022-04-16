<script setup lang="ts">
defineProps<{
  languages: {
    name: string
    proficiency: string
  }[]
}>()
</script>

<template>
  <div class="languages">
    <span v-for="language in languages">
      <span class="language">{{ language.name }}: </span>
      <span>{{ language.proficiency }}</span>
    </span>
  </div>
</template>

<style scoped>
.languages {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 9pt;
  color: var(--color-text);
}

.language {
  font-size: 10pt;
  font-weight: bold;
  color: var(--color-text-dark);
}
</style>
