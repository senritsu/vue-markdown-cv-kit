<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="credits">
    <span>This CV was created using</span>
    <a href="https://github.com/senritsu/vue-markdown-cv-kit">
      <fa-icon class="icon" :icon="faGithub"></fa-icon>
      <span>senritsu/vue-markdown-cv-kit</span>
    </a>
  </div>
</template>

<style scoped>
.credits {
  font-size: 7.8pt;
  flex: 1;
  /* margin-bottom: auto; */
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-light);
}

.icon {
  margin: 0 0.25em;
}

a {
  color: var(--color-awesome);
  text-decoration: none;
}
</style>
