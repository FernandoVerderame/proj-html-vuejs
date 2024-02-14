<script>
import FooterForm from './FooterForm.vue';
export default {
    name: 'FooterNews',
    components: { FooterForm },
    emits: ['submit-form']
}
</script>

<template>
    <div class="col col-4">
        <div class="news">
            <div class="news-text">
                <h3>Join Our Newsletter</h3>
                <p>Subscribe to be informed about important developments in our club and football world.</p>
            </div>
            <div class="news-form"></div>
        </div>
        <div class="form">
            <FooterForm placeholder="Your Email Addres" @submit-form="$emit('submit-form', $event)" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>