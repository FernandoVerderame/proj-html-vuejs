<script>
export default {
    name: 'SponsorCard',

    props: {
        sponsor: Object
    },

    computed: {
        sponsorImage() {
            const url = new URL(`../../assets/img/${this.sponsor.image}`, import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <!-- Sponsor card -->
    <div class="sponsor-card col-2">
        <figure>
            <img :src="sponsorImage" :alt="sponsor.name">
        </figure>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

.sponsor-card {

    figure {
        margin: 0;
    }

    img {
        width: 190px;
        border: 2px solid $white;
        padding: 12px;
        border-radius: 30px;
        transition: transform 0.5s;

        &:hover {
            transform: translateY(-5px);
        }
    }
}
</style>