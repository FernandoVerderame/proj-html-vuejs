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
            <div class="row">
                <div class="col col-3">
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
}
</style>