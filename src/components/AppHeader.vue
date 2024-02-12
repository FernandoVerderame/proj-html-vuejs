<script>
import JumbotronHeader from './HeaderComponents/JumbotronHeader.vue';
import NavbarHeader from './HeaderComponents/NavbarHeader.vue';

export default {
    name: 'AppHeader',
    components: { NavbarHeader, JumbotronHeader }
};
</script>

<template>
    <JumbotronHeader />
    <header>
        <div class="container text-center">
            <img src="../assets/img/sponsor1.png" alt="">
            <img src="../assets/img/sponsor2.png" alt="">
            <img src="../assets/img/logo-football.png" alt="">
            <span><font-awesome-icon class="text-white fa-xl ms-5" :icon="['fab', 'facebook-f']" /></span>
            <span> <font-awesome-icon class="text-white fa-xl ms-3" :icon="['fab', 'instagram']" /></span>
            <span><font-awesome-icon class="text-white fa-xl ms-3" :icon="['fab', 'twitter']" /></span>
            <NavbarHeader />
        </div>

    </header>
</template>

<style>
.container {
    padding-top: 15px;
}

header {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

}
</style>