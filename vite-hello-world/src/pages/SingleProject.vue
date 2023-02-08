<template>
    <div class="container">
        <div v-if="project">
            <img v-if="project.image_url" :src="project.image_url" :alt="project.name">
           <h1> {{ project.name }} </h1>
           <p> {{ project.content }} </p>
        </div>
        <div class="mt-3">    
            <div class="mb-3" v-if="project.comments?.length > 0">
                <h3>Commenti</h3>
                <ul>
                    <li v-for="comment in project.comments">
                        <h4>{{ comment.name ?? 'Anonimo' }}</h4>
                        <p>{{ comment.content }} </p>
                    </li>
                </ul>
            </div>
            <h3>inserisci un commento </h3>
            <form  @submit.prevent="addComment()">
                <div class="mt-3">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" id="name" placeholder="Inserisci il tuo nome" v-model="formData.name" />
                </div>
                <div class="mt-3">
                    <label for="name">Contenuto</label>
                    <textarea class="form-control" id="content" cols="30" rows="10" placeholder="Inserisci il contenuto" v-model="formData.content" required></textarea>
                </div>
                <button class="btn btn-dark mt-3" type="submit">Aggiungi il commento</button>
            </form>
        </div>
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
            project: '',
            formData: {
                name: '',
                content: '',
            },
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
            axios.get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.project = response.data;
            })
            .catch((err) => {
                console.log(err);
                this.$router.push({ name: "page-404" })
            });
        },
        addComment() {
            axios.post(`http://localhost:8000/api/comments/${this.project.id}`,{          
                name: this.formData.name,
                content: this.formData.content,
            }).then((res) => {

            }).catch((err) =>{})
        },
    },

};
</script>

<style lang="scss" scoped>
    
</style>