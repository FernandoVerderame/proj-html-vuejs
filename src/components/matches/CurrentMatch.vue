<script>
import { store } from "../../assets/data/store.js";
import MatchCard from "./MatchCard.vue";
import GenericButton from "../generics/GenericButton.vue";

export default {
    name: 'CurrentMatch',
    data: () => ({
        spotlightCalendar: store.spotlightCalendar,
        teams: store.teams
    }),
    components: { MatchCard, GenericButton },
    computed: {
        currentMatch() {
            return this.spotlightCalendar[0];
        }
    },
    methods: {
        findTeamData(id) {
            return this.teams.find(team => team.id == id)
        }
    }
};
</script>

<template>
    <!-- Match -->
    <section class="daily-match text-center container pt-3 pb-4">
        <MatchCard :team1="findTeamData(currentMatch.team1ID)" :team2="findTeamData(currentMatch.team2ID)"
            :date="currentMatch.date" :stadium="currentMatch.stadium" />
        <!-- More details button -->
        <GenericButton buttonText="View Match Details" class="black" />
    </section>
</template>

<style lang="scss" scoped></style>