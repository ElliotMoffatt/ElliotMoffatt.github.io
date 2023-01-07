<template>
  <div class="home">

    <h3>University</h3>
    <div class="row mb-5 mx-5">
      <div class="col mx-5">
        I studied joint-honours Mathematics and Computer Science at Durham University from 2015 to 2019, graduating with a 2:1 Masters degree
      </div>
    </div>

    <h3>Compsci projects:</h3>
    <div class="row">

      <ProjectCard title="Hex"
                   subtitle="Build the game Hex and an AI to play it">
        <template #description>
          In my first year at Durham, my end of year assessment for the Java module was to make the game Hex in Java and build an AI to play against. The AI used a Monte Carlo tree search.
        </template>
        <template #techused>
          Java
        </template>
      </ProjectCard>

      <ProjectCard title="Twitter Sentiment Analysis">
        <template #description>
          <p>
            The assessment for my web programming submodule in second year was to build a website for searching an FAQ, as well as allowing certain users (verified using the University login system) to make changes to the FAQ.
          </p>
          <p>
            Additionally, the website allowed users search a topic, and, using sentiment analysis and the twitter API, display tweets saying positive, negative and neutral things about the topic.
          </p>
        </template>
        <template #techused>
          HTML, CSS, Javascript, JQuery, Bootstrap, NodeJS, php, json
        </template>
      </ProjectCard>

      <ProjectCard title="VHDL"
                   repoLink="https://github.com/ElliotMoffatt/VHDLCoursework">
        <template #description>
          Used Altera Quartus to design, using VHDl, a 32bit Ripple Adder and a 32 bit Carry-Lookahead Adder, Test their respective timings, and discuss the strengths of FPGAs vs ASICs.
        </template>
        <template #techused>
          VHDL
        </template>
      </ProjectCard>

      <ProjectCard title="Fake News Detection">
        <template #description>
          The assessment for the Big Data submodule in 3rd year was, given a document containing 6000 articles labeled fake or real news, to build a Neural Network that, after being trained on a training set of the articles, could determine which articles in the test set were fake news and which were real news.
        </template>
        <template #techused>
          Natural Language Processing, Python, Tensorflow, Keras
        </template>
      </ProjectCard>

      <ProjectCard title="Optimising Sparse Matrix-Matrix Multiplication">
        <template #description>
          For my GPU, Many-Core, and Cluster Computing submodule, the assignment was to write code that efficiently Multiplys sparse matrices, using performance analysis tools to identify hotspots.
        </template>
        <template #techused>
          C, OpenACC, Intel VTune Amplifier
        </template>
      </ProjectCard>

      <ProjectCard title="Modelling Network Graphs"
                   repoLink="https://github.com/ElliotMoffatt/NetworksCoursework">
        <template #description>
          <p>The assignment for the Networks Analysis Submodule was to create models of different graph types, investigate distrubitions such as degree distribution and vertex brilliance, and compare the models to real data sets. </p>
          <p>I also produced search algorithms that perform efficiently for different types of graph.</p>
        </template>
        <template #techused>
          Python, Matplotlib
        </template>
      </ProjectCard>

      <ProjectCard title="Determining VR headset Orientation from IMU data"
                   repoLink="https://github.com/ElliotMoffatt/VR-coursework">
        <template #description>
          The assignment for the Virtual Reality Submodule was, given Accelerometer, Magnetometer and Gyroscope data over a 30 second time period, to deduce the orientation of the Inertial measurement unit, and create 2D graphs to show the orientation over time, as well as an animated 3D plot
        </template>
        <template #techused>
          Python
        </template>
      </ProjectCard>

      <ProjectCard title="Cryptocurrencies and Blockchain"
                   repoLink="https://github.com/ElliotMoffatt/BlockchainCoursework">
        <template #description>
          Implemented simple proof-of-work and proof-of-stake mining puzzles in python, and investigated the differences between Bitcoin and a cryptocurrency of my choice (TRON)
        </template>
        <template #techused>
          Python, ECDSA
        </template>
      </ProjectCard>

      <ProjectCard title="Dynamic Difficulty Adjustment"
                   subtitle="Masters Project"
                   repoLink="https://github.com/ElliotMoffatt/BulletHell"
                   websiteLink="https://elliotmoffatt.github.io/BulletHell/">
        <template #description>
          <p>My 4th year project title is "Dynamic Difficulty Adjustment with Limited Player Data".</p>
          <p>I have built a Bullet hell game and implemented a Dynamic Difficulty System in order to maximise player engagement by preventing the game's difficulty from being too boring or too frustrating. </p>
          <p>The paper outlines a Framework for implementing such a system in any game.</p>
        </template>
        <template #techused>
          Unity3D, C#
        </template>
      </ProjectCard>

    </div>

    <h3>Extra-curricular</h3>
    <div class="row mb-5 mx-5">
      <div class="col mx-5">
        <p>
          I was heavily involved with the University's Esports society from 2016-2019, acting as the society's treasurer for 2 years, and the Overwatch team 1 captain for all 3 years, during which my team achieved multiple podium finishes in both the NUEL and NSE (National esports tournaments)
        </p>
        <p>I also represented the university on its Fencing team (Sabre 2nd squad)</p>
      </div>
    </div>

  </div>
</template>

<script>// @ is an alias to /src

import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'University',
  components: {
    ProjectCard
  }
}</script>
