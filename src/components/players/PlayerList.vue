<script>
import PlayerCard from './PlayerCard.vue';

export default {
    name: 'PlayerList',
    data: () => ({
        players: [{
            name: 'Adam Brown', role: 'Forwarder', shirtNumber: 7, src: 'player1.jpg'
        }, {
            name: 'Michael Kayn', role: 'Forwarder', shirtNumber: 9, src: 'player2.jpg'
        }, {
            name: 'Micheal Lee', role: 'Forwarder', shirtNumber: 11, src: 'player3.jpg'
        }, {
            name: 'Ethan Smith', role: 'Midfielder', shirtNumber: 15, src: 'player4.jpg'
        }]
    }),
    components: { PlayerCard }
};
</script>

<template>
    <!-- Section Players -->
    <section id="players">
        <div class="container">
            <h3 class="text-center">Players</h3>
            <div class="row">
                <div class="col col-3 d-flex align-items-center" v-for="(player, i) in players" :key="i">
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