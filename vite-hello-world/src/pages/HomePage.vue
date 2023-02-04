<template>
    <div>
        <h1>Home Page</h1>
        <ProjectsList/>
    </div>
</template>

<script>
import ProjectsList from '../components/ProjectsList.vue';
export default {
    name: 'HomePage',
    components: {
        ProjectsList,
    }, 
};
</script>

<style lang="scss" scoped>
    
</style>