<template>
    <div v-if="project">
        <img v-if="project.image_url" :src="project.image_url" :alt="project.name">
       <h1> {{ project.name }} </h1>
       <p> {{ project.content }} </p>
    </div>
</template>

<script>
import axios from 'axios';
import {store} from '../store';

export default {
    name: 'SingleProject',
    data () {
        return {
            store,
            project: null,
        };
    },
    created() {
        this.getProject();
        
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getProject();
            } 
        );

    },
    methods: {
        getProject() {
            axios.get(`${this.store.api_url}/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.project = response.data;
            })
            .catch((err) => {
                console.log(err);
                this.$router.push({ name: "page-404" })
            });
        },
    },

};
</script>

<style lang="scss" scoped>
    
</style>