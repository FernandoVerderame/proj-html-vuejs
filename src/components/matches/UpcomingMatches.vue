<script>
import { store } from "../../assets/data/store.js";
import MatchCard from "./MatchCard.vue";

export default {
    name: 'Upcoming Matches',
    data: () => ({
        store,
    }),
    computed: {
        upcomingCalendar() {
            return store.spotlightCalendar.slice(1).reverse();
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
            <!-- <MatchCard v-for="game in upcomingCalendar" :team1ID="game.team1ID" :team2ID="game.team2ID" :date="game.date"
                :stadium="game.stadium" /> -->
        </div>
    </section>
</template>

<style lang="scss">
.upcoming-matches {
    background-image: url(../../assets/img/saha.jpg);
    background-position: center;
    background-size: cover;

    * {
        color: white;
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