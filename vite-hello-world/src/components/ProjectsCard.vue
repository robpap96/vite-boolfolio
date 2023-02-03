<script>
import axios from "axios";
export default {
    name:"ProjectsCard",
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
}
</script>
<template>
    <section>
        <h2>Lista dei Progetti</h2>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div v-for="project in projects" class="card" >
                        <img src="{{ project.cover_image }}" class="card-img-top" alt="{{ project.name }}">
                        <div class="card-body">
                          <h5 class="card-title">{{ project.name }}</h5>
                          <p class="card-text">{{ project.content }}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<style lang="scss" scoped>
    
</style>