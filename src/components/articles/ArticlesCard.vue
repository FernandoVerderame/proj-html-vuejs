<script>
import GenericButton from "../generics/GenericButton.vue";

export default {
    name: 'ArticlesCard',
    props: { article: Object },
    computed: {
        articleImage() {
            const url = new URL(`../../assets/img/${this.article.image}`, import.meta.url)
            return url.href
        }
    },
    components: { GenericButton }
};
</script>
<template>
    <div class="card">
        <img :src="articleImage" class="card-img-top" alt="...">
        <p class="card-text"><small class="text-muted">{{ article.date }}</small></p>
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text">{{ article.text }}</p>
            <GenericButton buttonText="More" class="black" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>