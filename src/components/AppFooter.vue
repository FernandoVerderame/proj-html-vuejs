<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LinkList from './footercomponents/LinkList.vue';
import FooterInfo from './footercomponents/FooterInfo.vue';
import FooterNews from './footercomponents/FooterNews.vue';
import FooterList from './footercomponents/FooterList.vue';

export default {
    name: 'AppFooter',
    components: { LinkList, FooterInfo, FooterNews, FooterList },
    data: () => ({
        educationLinks: [
            {
                text: 'fixtures & results',
                url: '#'
            },
            {
                text: 'league table',
                url: '#'
            },
            {
                text: 'players',
                url: '#'
            },
            {
                text: 'gallery',
                url: '#'
            }],
        quickLinks: [
            {
                text: 'home',
                url: '#'
            },
            {
                text: 'blog',
                url: '#'
            },
            {
                text: 'gallery',
                url: '#'
            },
            {
                text: 'contact',
                url: '#'
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
                <FooterList />
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