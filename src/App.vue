<script setup lang="ts">
import { ref } from 'vue'

import Toolbar from './components/Toolbar.vue'
import {
  ProfileHeader,
  PageFooter,
  ProfileSummary,
  ResumeSection,
  EmploymentEntry,
  EducationEntry,
  ProjectEntry,
  SkillsOverview,
  Languages,
  TagList,
} from '../lib'

// TODO file picker, localstorage, etc.
import cvSource from './assets/cv.md?raw'

import { parseCv } from '../lib/parse'

const cv = parseCv(cvSource)

const color = ref('purple')
</script>

<template>
  <Toolbar v-model:color="color"></Toolbar>
  <main :style="{ '--color-awesome': `var(--color-awesome-${color})` }">
    <section class="page">
      <ProfileHeader :profile="cv.profile"></ProfileHeader>

      <ResumeSection name="Summary">
        <ProfileSummary :summary="cv.profile.summary"></ProfileSummary>
      </ResumeSection>

      <ResumeSection name="Professional Experience">
        <EmploymentEntry
          v-for="(item, i) in cv.experience"
          :item="item"
          :condensed="i > 0"
        ></EmploymentEntry>
      </ResumeSection>

      <ResumeSection name="Education">
        <EducationEntry
          v-for="(item, i) in cv.education"
          :item="item"
          :condensed="i > 0"
        ></EducationEntry>
      </ResumeSection>

      <ResumeSection name="Skills">
        <SkillsOverview :groups="cv.SkillsOverview"></SkillsOverview>
      </ResumeSection>

      <ResumeSection name="Languages">
        <Languages :languages="cv.languages"></Languages>
      </ResumeSection>

      <ResumeSection name="Adjacent Interests">
        <TagList :tags="cv.interests"></TagList>
      </ResumeSection>

      <PageFooter
        :page="1"
        :name="cv.profile.name"
        :date="cv.date"
      ></PageFooter>
    </section>
    <section class="page">
      <ResumeSection name="Select Projects">
        <ProjectEntry
          v-for="(item, i) in cv.projects"
          :item="item"
        ></ProjectEntry>
      </ResumeSection>

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
