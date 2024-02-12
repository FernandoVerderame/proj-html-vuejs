<script>
import PlayerCard from './PlayerCard.vue';

export default {
    name: 'PlayerList',
    components: { PlayerCard }
};
</script>

<template>
    <!-- Section Players -->
    <section id="players">
        <div class="container">
            <h3 class="text-center">Players</h3>
            <div class="row">
                <div class="col col-3 d-flex align-items-center">
                    <PlayerCard />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#players {
    background-image: url('../../assets/img/player.jpg');
    height: 700px;

    .col {
        margin-top: 40px;
    }

    h3 {
        color: #fff;
        padding: 20px 0;
    }
}
</style>