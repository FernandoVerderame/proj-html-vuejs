<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FooterInfo from './footercomponents/FooterInfo.vue';
import FooterNews from './footercomponents/FooterNews.vue';
import FooterList from './footercomponents/FooterList.vue';

export default {
    name: 'AppFooter',
    components: { FooterInfo, FooterNews, FooterList },
    data: () => ({
        educationLinks: [
            {
                text: 'fixtures & results',
                url: '#',
                id: 1
            },
            {
                text: 'league table',
                url: '#',
                id: 2
            },
            {
                text: 'players',
                url: '#',
                id: 3
            },
            {
                text: 'gallery',
                url: '#',
                id: 4
            }],
        quickLinks: [
            {
                text: 'home',
                url: '#',
                id: 5
            },
            {
                text: 'blog',
                url: '#',
                id: 6
            },
            {
                text: 'gallery',
                url: '#',
                id: 7
            },
            {
                text: 'contact',
                url: '#',
                id: 8
            }]
    }),
    methods: {
        sendForm(term) {
            const email = 'La tua email è: ';
            console.log(email + term);
        }
    }
};
</script>

<template>
    <!-- Footer -->
    <footer>

        <!-- Footer Top -->
        <div class="footer-top container py-5">
            <div class="row">
                <FooterInfo />
                <FooterNews @submit-form="sendForm" />
                <FooterList :educationLinks="educationLinks" :quickLinks="quickLinks" />
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom text-center py-4">
            <p class="mb-0">2022 Football Club - All Rights Reserved.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-image: url('../assets/img/footer-bg-football.jpg');
    color: #fff;
}
</style>