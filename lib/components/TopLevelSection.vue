<script setup lang="ts">
import { ref } from 'vue'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

defineProps<{
  name: string
}>()

const hidden = ref(false)
</script>

<template>
  <div class="section">
    <div class="toggle" :class="{ hidden }">
      <button @click="hidden = !hidden">
        <fa-icon :icon="hidden ? faEye : faEyeSlash"></fa-icon>
      </button>
    </div>

    <template v-if="!hidden">
      <div class="section-header">
        <h3>
          <span class="awesome">{{ name.substring(0, 3) }}</span
          >{{ name.substring(3) }}
        </h3>
        <div class="filler" />
      </div>
      <slot></slot>
    </template>
  </div>
</template>

<style scoped>
@media all {
  .section-header {
    display: flex;
    align-items: baseline;
    margin-top: 4mm;
    margin-bottom: 1mm;
  }

  h3 {
    font-size: 16pt;
    font-weight: bold;
    color: var(--color-text-dark);
  }

  .section-header .awesome {
    color: var(--color-awesome);
    transition: color 0.3s;
  }

  .filler {
    flex: 1;
    border-bottom: 1pt solid var(--color-black);
  }
}

@media screen {
  .toggle {
    position: absolute;
    top: 1.1em;
    left: -2em;
    opacity: 0.2;

    transition: opacity 0.3s;
  }

  .toggle.hidden {
    left: -5em;
  }

  .toggle:hover {
    opacity: 0.5;
  }

  .toggle button {
    cursor: pointer;
    border: 1px solid whitesmoke;
    color: var(--color-text-muted);
    border-radius: 0.25em;
  }
}

@media print {
  .toggle {
    display: none;
  }
}
</style>
