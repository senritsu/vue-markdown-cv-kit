<script setup lang="ts">
import { ref } from 'vue'

import Toolbar from './components/Toolbar.vue'
import {
  ProfileHeader,
  PageFooter,
  ProfileSummary,
  TopLevelSection,
  EmploymentEntry,
  EducationEntry,
  ProjectEntry,
  SkillsOverview,
  Languages,
  TagList,
  CreditsFooter,
} from '../lib'

// TODO file picker, localstorage, etc.
import cvSource from './assets/cv.md?raw'

import { parseCv } from '../lib/parse'

const cv = parseCv(cvSource)

const color = ref('purple')
const hideRatings = ref(false)
</script>

<template>
  <Toolbar v-model:color="color" v-model:hideRatings="hideRatings"></Toolbar>
  <main :style="{ '--color-awesome': `var(--color-awesome-${color})` }">
    <section class="page">
      <ProfileHeader :profile="cv.profile"></ProfileHeader>

      <TopLevelSection name="Summary">
        <ProfileSummary :summary="cv.profile.summary"></ProfileSummary>
      </TopLevelSection>

      <TopLevelSection :name="cv.experience.label">
        <EmploymentEntry
          v-for="(item, i) in cv.experience.entries"
          :item="item"
          :condensed="i > 0"
        ></EmploymentEntry>
      </TopLevelSection>

      <TopLevelSection :name="cv.education.label">
        <EducationEntry
          v-for="(item, i) in cv.education.entries"
          :item="item"
          :condensed="i > 0"
        ></EducationEntry>
      </TopLevelSection>

      <TopLevelSection :name="cv.groupedSkills.label">
        <SkillsOverview
          :groups="cv.groupedSkills.entries"
          v-bind="{ hideRatings }"
        ></SkillsOverview>
      </TopLevelSection>

      <TopLevelSection :name="cv.languages.label">
        <Languages :languages="cv.languages.entries"></Languages>
      </TopLevelSection>

      <TopLevelSection :name="cv.interests.label">
        <TagList :tags="cv.interests.entries"></TagList>
      </TopLevelSection>

      <PageFooter
        :page="1"
        :name="cv.profile.name"
        :date="cv.date"
      ></PageFooter>
    </section>
    <section class="page">
      <TopLevelSection :name="cv.projects.label">
        <ProjectEntry
          v-for="(item, i) in cv.projects.entries"
          :item="item"
        ></ProjectEntry>
      </TopLevelSection>

      <CreditsFooter></CreditsFooter>

      <PageFooter
        :page="2"
        :name="cv.profile.name"
        :date="cv.date"
      ></PageFooter>
    </section>
  </main>
</template>

<style>
@import './assets/base.css';
@import './assets/typography.css';

@media all {
  html,
  body,
  #app {
    width: 100%;
    margin: 0;
    background-color: #6f6e73;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  section.page {
    width: 21cm;
    height: 29.7cm;
    margin: 0;
    padding: 0.5cm 1.2cm 1cm 1.2cm;

    display: flex;
    flex-direction: column;
    background-color: var(--color-white);

    page-break-after: always;
  }
}

@media screen {
  .toolbar {
    margin: 2em;
  }

  section.page:not(:first-of-type) {
    margin-top: 2cm;
  }
}

@media print {
  .no-print {
    display: none;
  }

  html,
  body,
  #app {
    background-color: green;
  }

  @page {
    size: A4;
    margin: 0;
  }
}
</style>
