<template>
  <div class="col col-auto">
    <div class="card m-1 mb-3" style="max-width: 600px; display:inline-block">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <h6 v-if="subtitle" class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
        <p class="card-text"><slot name="description"></slot></p>
        <p class="card-title text-muted" style="vertical-align:bottom">Tech used: <slot name="techused"></slot></p>
      </div>
      <div class="card-footer" v-if="repoLink || websiteLink">
        <a v-if="repoLink" :href="repoLink" target="_blank" class="card-link">Repo</a>
        <a v-if="websiteLink" :href="websiteLink" target="_blank" class="card-link">Website</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProjectCard',
  components: {
  },
  props: {
    title: String,
    subtitle: String,
    repoLink: String,
    websiteLink: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-footer{

  }
</style>
