<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      projects: []
    }
  },
  components: {

  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then(resp => {
        this.projects = resp.data.results;
      })
    }
  }
}

</script>

<template>
  <h1>Front Office Page</h1>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>