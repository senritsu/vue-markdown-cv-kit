<script setup lang="ts">
import { computed } from 'vue'

import { faMobile, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import {
  faXingSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'

import type { Profile } from '../../src/types'

import HeaderSocialEntry from './SocialEntry.vue'
import HeaderSocialSeparator from './SocialSeparator.vue'

const props = defineProps<{
  profile: Profile
}>()

const nameParts = computed(() => {
  const [last, ...first] = props.profile.name.split(' ').reverse()

  return { first: first.reverse().join(' '), last }
})
</script>

<template>
  <header>
    <div class="name">
      <span class="first-name">{{ nameParts.first }}&nbsp;</span>
      <span class="last-name">{{ nameParts.last }}</span>
    </div>
    <span class="positions">
      {{ profile.positions?.join(' • ') }}
    </span>
    <span class="address">{{ profile.location }}</span>
    <div class="social">
      <HeaderSocialEntry :icon="faMobile" :entry="profile.phone" />

      <HeaderSocialSeparator />
      <HeaderSocialEntry :icon="faEnvelope" :entry="profile.email" />

      <template v-if="profile.homepage">
        <HeaderSocialSeparator />
        <HeaderSocialEntry :icon="faHome" :entry="profile.homepage" />
      </template>

      <template v-if="profile.github">
        <HeaderSocialSeparator />
        <HeaderSocialEntry :icon="faGithubSquare" :entry="profile.github" />
      </template>
      <template v-if="profile.linkedin">
        <HeaderSocialSeparator />
        <HeaderSocialEntry :icon="faLinkedin" :entry="profile.linkedin" />
      </template>
      <template v-if="profile.xing">
        <HeaderSocialSeparator />
        <HeaderSocialEntry :icon="faXingSquare" :entry="profile.xing" />
      </template>
    </div>
    <div v-if="profile.quote" class="quote">“{{ profile.quote }}”</div>
  </header>
</template>

<style scoped>
@media all {
  header {
    font-family: 'Roboto', sans-serif;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    font-size: 32pt;
    margin: 0;
  }

  .first-name {
    font-weight: 100;
    color: var(--color-text-light);
  }

  .last-name {
    font-weight: 700;
    color: var(--color-text);
  }

  .positions {
    font-size: 7.6pt;
    color: var(--color-awesome);
    transition: color 0.3s;
    font-variant: small-caps;
  }

  .address {
    font-size: 8pt;
    font-style: italic;
    color: var(--color-text-light);
    margin: 0.25em 0;
  }

  .social {
    font-size: 6.8pt;
    display: flex;
    color: var(--color-text);
  }

  .quote {
    font-size: 9pt;
    font-style: italic;
    color: var(--color-text-muted);
    margin-top: 1.5em;
  }
}
</style>
