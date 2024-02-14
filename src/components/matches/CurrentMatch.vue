<script>
import { store } from "../../assets/data/store.js";
import MatchCard from "./MatchCard.vue";
import GenericButton from "../generics/GenericButton.vue";

export default {
    name: 'CurrentMatch',
    data: () => ({
        store,
    }),
    components: { MatchCard, GenericButton },
    computed: {
        checkRapido() {
            return store.spotlightCalendar[0];
        }
    }
};
</script>

<template>
    <!-- Match -->
    <section class="daily-match text-center container pt-3 pb-4">
        <MatchCard :team1ID="store.spotlightCalendar[0].team1ID" :team2ID="store.spotlightCalendar[0].team2ID"
            :date="store.spotlightCalendar[0].date" :stadium="store.spotlightCalendar[0].stadium" />
        <!-- More details button -->
        <GenericButton buttonText="View Match Details" class="black" />
    </section>
</template>

<style lang="scss" scoped></style>