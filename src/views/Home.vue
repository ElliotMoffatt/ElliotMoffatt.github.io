<template>
  <div class="home">

    <h3>Personal projects:</h3>
    <div class="row mt-5">

      <ProjectCard title="Spending Analyser"
                   subtitle="My personal favourite"
                   repoLink="https://github.com/ElliotMoffatt/spending_analyser_vue"
                   websiteLink="https://elliotmoffatt.github.io/spending_analyser_vue/#/">
        <template #description>
          A small webapp to automatically analyse my spending habits, by parsing a .txt or .csv transactions file from your bank, and analysing the data grouped by month and (self-defined) categories
        </template>
        <template #techused>
          Vue.js, html, css, js, bootstrap
        </template>
      </ProjectCard>

      <ProjectCard title="Blender addon"
                   repoLink="https://github.com/ElliotMoffatt/ffxiv-blender-breast-slider">
        <template #description>
          A small blender addon to help my partner test the clothing mods she makes for Final Fantasy XIV
        </template>
        <template #techused>
          Python
        </template>
      </ProjectCard>

      <ProjectCard title="NymParser"
                   repoLink="https://github.com/ElliotMoffatt/nymParser"
                   websiteLink="https://www.amazon.co.uk/dp/1082205273/ref=sr_1_7?keywords=synonym+and+antonym&qid=1563985888&s=gateway&sr=8-7">
        <template #description>
          Given a csv files full of synonym and antonym pairs, I used Python to parse the data into a number of tests to be used as practice for CEM style 11+ tests. I then outputted code that could be inserted into a LaTeX document. The book is Available on Amazon
        </template>
        <template #techused>
          Python, LaTeX
        </template>
      </ProjectCard>

      <ProjectCard title="Shuffled Sentences"
                   repoLink="https://github.com/ElliotMoffatt/ShuffledSentences"
                   websiteLink="https://www.amazon.co.uk/Shuffled-Sentences-Practice-Book-Preparation/dp/1089544685/ref=sr_1_1?keywords=shuffled+sentences+practice+book&qid=1565781395&s=gateway&sr=8-1">
        <template #description>
          <p>Successor to NymParser, for the Shuffled sentences part of the cem test.</p>
          <p>This time I actually created classes for tests and questions instead of using arrays of arrays of arrays.</p>
          <p>Also had a fixed seed for the randomness so i could shuffle the same way each time, saving me from having to create an intermediate save file after shuffling.</p>
        </template>
        <template #techused>
          Python, LaTeX
        </template>
      </ProjectCard>

      <ProjectCard title="Site for my local Burial Ground"
                   repoLink="https://github.com/ElliotMoffatt/GraveyardWebsiteInVue"
                   websiteLink="https://fogbg.org.uk/">
        <template #description>
          I created, and provide ongoing support, for the website for the volunteer group restoring our local burial ground
        </template>
        <template #techused>
          Vue.js, html, css, js, bootstrap
        </template>
      </ProjectCard>

      <ProjectCard title="11+ companion app"
                   repoLink="https://github.com/ElliotMoffatt/11PlusCompanionApp"
                   websiteLink="https://github.com/ElliotMoffatt/11PlusCompanionApp">
        <template #description>
          A small webapp to go alongside the synonyms and antonyms books (best used on mobile)
        </template>
        <template #techused>
          Vue.js, html, css, js, bootstrap
        </template>
      </ProjectCard>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Home',
  components: {
    ProjectCard
  }
}
</script>
