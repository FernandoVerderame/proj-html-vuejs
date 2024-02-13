<script>
import MatchCard from "./MatchCard.vue"

export default {
    name: 'Upcoming Matches',
    data: () => ({
        calendar: [
            {
                id: 1,
                team1ID: 1,
                team2ID: 2,
                date: "May 21, 2022 18:05 pm",
                stadium: "Expert Stadium"
            },
            {
                id: 2,
                team1ID: 1,
                team2ID: 2,
                date: "June 12, 2022 09:00 am",
                stadium: "Expert Stadium"
            },
            {
                id: 3,
                team1ID: 7,
                team2ID: 9,
                date: "July 8, 2022 12:00 pm",
                stadium: "Expert Stadium"
            },
            {
                id: 4,
                team1ID: 2,
                team2ID: 8,
                date: "August 3, 2022 19:00 pm",
                stadium: "Expert Stadium"
            },
            {
                id: 5,
                team1ID: 9,
                team2ID: 6,
                date: "September 18, 2022 21:00 pm",
                stadium: "Expert Stadium"
            },
            {
                id: 6,
                team1ID: 3,
                team2ID: 4,
                date: "October 20, 2022 17:00 pm",
                stadium: "Expert Stadium"
            },
        ],
        // upcomingCalendar: []
    }),
    computed: {
        secondCalendar() {
            return this.calendar.slice(1).reverse();
        }
    },
    components: { MatchCard }
};
</script>

<template>
    <!-- Match -->
    <section class="upcoming-matches text-center container py-3">
        <h2>Upcoming Matches</h2>
        <MatchCard v-for="game in secondCalendar" :team1ID="game.team1ID" :team2ID="game.team2ID" :date="game.date"
            :stadium="game.stadium" />
    </section>
</template>

<style lang="scss" scoped>
.upcoming-matches * {
    font-weight: 700;
}
</style>