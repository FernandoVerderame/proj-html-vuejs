<script>
import { store } from "../../assets/data/store.js";
import MatchCard from "./MatchCard.vue";
import GenericButton from "../generics/GenericButton.vue";

export default {
    name: 'CurrentMatch',
    data: () => ({
        store,
        teams: [
            {
                id: 1,
                name: "Istanbul Sports",
                logo: "league-club-1"
            },
            {
                id: 2,
                name: "United Fs Club",
                logo: "league-club-2"
            },
            {
                id: 3,
                name: "Schalke Club",
                logo: "league-club-3"
            },
            {
                id: 4,
                name: "Inter Club",
                logo: "league-club-4"
            },
            {
                id: 5,
                name: "Madrid Club",
                logo: "league-club-5"
            },
            {
                id: 6,
                name: "Schalke Club",
                logo: "league-club-6"
            },
            {
                id: 7,
                name: "Arsenal Club",
                logo: "league-club-7"
            },
            {
                id: 8,
                name: "Bayern Club",
                logo: "league-club-8"
            },
            {
                id: 9,
                name: "Atletico Club",
                logo: "league-club-9"
            },
        ],
    }),
    components: { MatchCard, GenericButton },
    computed: {
        currentMatch() {
            return store.spotlightCalendar[0];
        },
        currentFirstTeam() {
            return this.findTeamData(this.currentMatch.team1ID)
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