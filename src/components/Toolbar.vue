<script setup lang="ts">
defineProps<{
  color: string
}>()

const emit = defineEmits<{
  (e: 'update:color', color: string): void
}>()

const colors = [
  'emerald',
  'skyblue',
  'red',
  'pink',
  'orange',
  'nephritis',
  'concrete',
  'darknight',
  'purple',
]
</script>

<template>
  <aside class="no-print toolbar">
    <div class="colors">
      <button
        class="color"
        :class="{ selected: color === entry }"
        v-for="entry in colors"
        :style="{ backgroundColor: `var(--color-awesome-${entry})` }"
        @click="emit('update:color', entry)"
      ></button>
    </div>
  </aside>
</template>

<style scoped>
.colors {
  display: flex;
  padding: 1em;
  background-color: whitesmoke;
  align-items: center;
  gap: 1em;
  border-radius: 0.25em;
}

.color {
  border: 2px solid var(--color-darkgray);
  width: 3em;
  height: 3em;
  border-radius: 0.25em;
  transition: transform 0.15s;
  cursor: pointer;
}

.color.selected {
  transform: scale(1.2);
}
</style>
