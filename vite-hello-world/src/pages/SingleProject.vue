<template>
    <div v-if="project">
        <img v-if="project.image_url" :src="project.image_url" :alt="project.name">
       <h1> {{ project.name }} </h1>
       <p> {{ project.content }} </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data () {
        return {
            project: null,
        };
    },
    created() {
        axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((response) => {
            this.project = response.data;
        });
    }
};
</script>

<style lang="scss" scoped>
    
</style>