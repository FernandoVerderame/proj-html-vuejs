<script>
import SponsorCard from './SponsorCard.vue';

export default {
    name: 'SponsorSection',

    data: () => ({
        sponsors: [
            {
                id: 1,
                name: 'Regula 32',
                image: 'client2.png'
            },
            {
                id: 2,
                name: 'Relans Konsept',
                image: 'client3.png'
            },
            {
                id: 3,
                name: 'Standards and Partners',
                image: 'client4.png'
            },
            {
                id: 4,
                name: 'Elit Eva Sanayi',
                image: 'client7.png'
            },
            {
                id: 5,
                name: 'Nizam Turizm',
                image: 'client9.png'
            },
            {
                id: 6,
                name: 'Zylkade Turizm',
                image: 'client10.png'
            }
        ]
    }),

    components: { SponsorCard }
};
</script>

<template>
    <!-- Sponsors -->
    <section id="sponsors">
        <div class="container">
            <div class="row">
                <SponsorCard v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor" />
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