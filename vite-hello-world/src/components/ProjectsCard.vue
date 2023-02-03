<template>
    <div>
        <div class="card">
            <img v-if="data.image_url" :src="data.image_url" class="card-img-top" :alt="data.name">
            <div class="card-body">
              <h5 class="card-title">{{ data.name }}</h5>
              <p class="card-text">{{ data.content }}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name :'ProjectsCard',
    props: {
        data: Object,
    },
    
};
</script>
<style lang="scss" scoped>
    
</style>