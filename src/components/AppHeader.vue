<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header>
        <div class="container text-center">
            <img src="../assets/img/sponsor1.png" alt="">
            <img src="../assets/img/sponsor2.png" alt="">
            <img src="../assets/img/logo-football.png" alt="">
            <span><font-awesome-icon class="text-white fa-xl ms-5" :icon="['fab', 'facebook-f']" /></span>
            <span> <font-awesome-icon class="text-white fa-xl ms-3" :icon="['fab', 'instagram']" /></span>
            <span><font-awesome-icon class="text-white fa-xl ms-3" :icon="['fab', 'twitter']" /></span>

        </div>
    </header>
</template>

<style>
.container {
    background-color: black;
}

header {
    background-color: black;
}
</style>