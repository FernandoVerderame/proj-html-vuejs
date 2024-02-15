<script>
import { store } from "../../assets/data/store.js";
import MatchCard from "./MatchCard.vue";

export default {
    name: 'Upcoming Matches',
    data: () => ({
        spotlightCalendar: store.spotlightCalendar,
        teams: store.teams
    }),
    computed: {
        upcomingCalendar() {
            return this.spotlightCalendar.slice(1).reverse();
        }
    },
    methods: {
        findTeamData(id) {
            return this.teams.find(team => team.id == id)
        }
    },
    components: { MatchCard }
};
</script>

<template>
    <!-- Match -->
    <section class="upcoming-matches text-center ">
        <div class="container py-3">
            <h2>Upcoming Matches</h2>
            <MatchCard v-for="game in upcomingCalendar" :team1="findTeamData(game.team1ID)"
                :team2="findTeamData(game.team2ID)" :date="game.date" :stadium="game.stadium" />
        </div>
    </section>
</template>

<style lang="scss">
@use '../../assets/scss/vars' as *;

.upcoming-matches {
    background-image: url(../../assets/img/saha.jpg);
    background-position: center;
    background-size: cover;

    * {
        color: $white;
    }

    h2 {
        font-weight: 700;
        padding: 2rem;
        margin: 0;
    }

    .teams {
        background-color: rgba($color: #000000, $alpha: 0.2);
    }

    .vs {
        font-size: 40px;
    }

    .details {
        background-color: rgba($color: #000000, $alpha: 0.3);

    }

    .date::before,
    .stadium::before {
        filter: invert(1);
    }
}
</style>