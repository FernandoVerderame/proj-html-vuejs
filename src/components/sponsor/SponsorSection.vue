<script>
import SponsorCard from './SponsorCard.vue';
import { store } from "../../assets/data/store.js";

export default {
    name: 'SponsorSection',

    data: () => ({
        store,
    }),

    components: { SponsorCard }
};
</script>

<template>
    <!-- Sponsors -->
    <section id="sponsors">
        <div class="container">
            <div class="row">
                <SponsorCard v-for="sponsor in store.sponsors" :key="sponsor.id" :sponsor="sponsor" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

#sponsors {
    background-color: $black;
    padding: 50px 0;
}
</style>