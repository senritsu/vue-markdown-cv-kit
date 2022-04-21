<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color: string
  hideRatings: boolean
}>()

const emit = defineEmits<{
  (e: 'update:color', color: string): void
  (e: 'update:hideRatings', value: boolean): void
}>()

const hideRatingsModel = computed<boolean>({
  get() {
    return props.hideRatings
  },
  set(value) {
    emit('update:hideRatings', value)
  },
})

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
    <label for="hide-ratings"
      ><input type="checkbox" v-model="hideRatingsModel" />Hide ratings</label
    >
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
