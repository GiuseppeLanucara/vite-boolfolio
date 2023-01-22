<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "ProjectsList",
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            projects: []
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.baseUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results;
            });
        }
    },
    components: { ProjectCard }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">Tutti i nostri Progetti</h2>
        <div class="row justify-content-center">
            <div class="col-10">

                <ProjectCard :project="project" v-for="project in projects" :key="project.id" />


            </div>
        </div>
    </div>
</template>