<script>
import axios from "axios";
import {store} from "../store";
import ProjectsCard from "./ProjectsCard.vue";

export default {
    name:"ProjectsList",
    components: {
        ProjectsCard,
    },
    data() {
        return{
            store,
            projects: [],
        };
    },
    created() {
        axios.get(`${this.store.api_url}/projects`)
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