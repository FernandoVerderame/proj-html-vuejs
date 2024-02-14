<script>
import GenericButton from '../generics/GenericButton.vue'

export default {
    name: 'JumbotronFigure',
    components: { GenericButton },
    props: { slide: Object },
    computed: {
        createImagePath() {
            const url = new URL(`../../assets/img/${this.slide.image}`, import.meta.url);
            return url.href
        }
    }
}
</script>

<template>
    <figure>
        <img class="jumbotron-img" :src="createImagePath" alt="">
        <div class="jumbotron-text text-center lh-sm container-jumbotron">
            <p class="big-text"> {{ slide.primaryText }} </p>
            <p class="fw-bold">{{ slide.description }}</p>
            <GenericButton buttonText="Learn More &#8594;" class="transparent mt-4" />
        </div>
    </figure>
</template>

<style lang="scss" scoped>
.jumbotron-text {
    position: absolute;
    bottom: 30px;
    color: white;
    left: 50%;
    transform: translate(-50%, -50%);
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

figure {
    height: 100%;
    display: none;
}

.big-text {
    font-size: 5rem;
    font-weight: bold;
}

p {
    margin: 0;
}
</style>