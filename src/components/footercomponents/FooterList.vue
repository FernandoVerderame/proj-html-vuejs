<script>
import LinkList from './LinkList.vue';
export default {
    name: 'FooterList',
    components: { LinkList },
    props: {
        educationLinks: Array,
        quickLinks: Array
    }
}
</script>

<template>
    <div class="col col-4 offset-1 footer-list">
        <div class="education">
            <h4>Education</h4>
            <ul>
                <LinkList v-for="(link, i) in educationLinks" :key="i" :link="link" />
            </ul>
        </div>
        <div class="links">
            <h4>Quick Links</h4>
            <ul>
                <LinkList v-for="(link, i) in quickLinks" :key="i" :link="link" />
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-list {
    display: flex;
    gap: 60px;

    h4 {
        margin-bottom: 20px;
        font-size: 25px;
        font-weight: 700;
    }

    ul {
        padding: 0;
    }
}
</style>