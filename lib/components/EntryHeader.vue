<script setup lang="ts">
defineProps<{
  title: string
  location: string
  time: string
  position: string
  condensed?: boolean
}>()
</script>

<template>
  <header>
    <div class="top">
      <div>
        <span class="title">{{ title }}</span>
        <span v-if="condensed" class="position">{{ position }}</span>
      </div>
      <div>
        <span v-if="condensed" class="time">{{ time }}</span>
        <span class="location">{{ location }}</span>
      </div>
    </div>
    <div class="bottom" v-if="!condensed">
      <span class="position">{{ position }}</span>
      <span class="time">{{ time }}</span>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

.top,
.bottom {
  display: flex;
  justify-content: space-between;
}

.top {
  margin-bottom: 1mm;
}

.bottom {
  margin-bottom: 2mm;
}

.title {
  font-size: 10pt;
  font-weight: bold;
  color: var(--color-text-dark);
}

.location {
  font-size: 9pt;
  font-weight: lighter;
  color: var(--color-awesome);
  font-style: italic;
}

.position {
  font-size: 8pt;
  font-variant: small-caps;
  color: var(--color-text-light);
}

.time {
  font-size: 8pt;
  color: var(--color-text-light);
  font-style: italic;
}

.top .position,
.top .time {
  margin: 0 0.5em;
}
</style>
