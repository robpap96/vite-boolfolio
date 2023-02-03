<script>
import axios from "axios";
import ProjectsCard from "./ProjectsCard.vue";

export default {
    name:"ProjectsList",
    components: {
        ProjectsCard,
    },
    data() {
        return{
            projects: [],
        };
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/projects')
        .then((response) => {
            this.projects = response.data;
        });
    },
};
</script>
<template>
    <section>
        <h2>Lista dei Progetti</h2>
        <div class="container">
            <div class="row">
                <div class="col-3" v-for="project in projects">
                    <ProjectsCard :data="project"/>
                </div>
            </div>
        </div>

    </section>
</template>
<style lang="scss" scoped>
    
</style>