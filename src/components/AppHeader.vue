<script>
import JumbotronHeader from './HeaderComponents/JumbotronHeader.vue';
import NavbarHeader from './HeaderComponents/NavbarHeader.vue';
import { store } from '../assets/data/store'

export default {
    name: 'AppHeader',
    data: () => ({
        headerLinks: store.headerLinks,
        slider: store.slider,

    }),
    components: { NavbarHeader, JumbotronHeader }

};
</script>

<template>
    <!--JUMBOTRON-->
    <JumbotronHeader :slider="slider" />
    <header>
        <div class="header-container">
            <div class="container">
                <!--HEADER SPONSOR-->
                <div class="header-sponsor">
                    <img role="button" src="../assets/img/sponsor1.png" alt="">
                    <img role="button" src="../assets/img/sponsor2.png" alt="">
                </div>
                <!--LOGO IMAGE-->
                <div class="logo">
                    <img role="button" src="../assets/img/logo-football.png" alt="">
                </div>
                <!--SOCIAL-LIST-->
                <div class="soial-list">
                    <span role="button"><font-awesome-icon class="text-white fa-2xl ms-5"
                            :icon="['fab', 'facebook-f']" /></span>
                    <span role="button"> <font-awesome-icon class="text-white fa-2xl ms-3"
                            :icon="['fab', 'instagram']" /></span>
                    <span role="button"><font-awesome-icon class="text-white fa-2xl ms-3"
                            :icon="['fab', 'twitter']" /></span>
                </div>
            </div>
            <!--NAVBAR-->
            <NavbarHeader :headerLinks="headerLinks" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.container {
    padding-top: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}

.header-container {
    width: 70%;
}

header {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>