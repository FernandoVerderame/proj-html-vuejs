<script>
import PlayerCard from './PlayerCard.vue';
import GenericButton from '../generics/GenericButton.vue'

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
    components: { PlayerCard, GenericButton }
};
</script>

<template>
    <!-- Section Players -->
    <section id="players">
        <div class="container">
            <div class="title text-center">
                <h3>Players</h3>
            </div>
            <div class="row">
                <div class="col col-3 d-flex align-items-center" v-for="(player, i) in players" :key="i">
                    <PlayerCard :player="player" />
                </div>
            </div>
            <div class="action text-center">
                <GenericButton buttonText="View All Players" class="black" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#players {
    background-image: url('../../assets/img/player.jpg');
    min-height: 700px;
    display: flex;
    align-items: center;

    .title {
        margin-bottom: 50px;

        h3 {
            color: #fff;
            font-weight: 700;
            vertical-align: top;
            font-size: 35px;
        }
    }

    .action {
        margin-top: 50px;

        button {
            border-radius: 50px;
        }
    }
}
</style>