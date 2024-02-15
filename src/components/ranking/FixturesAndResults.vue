<script>
import ResultCard from './ResultCard.vue';

export default {
    name: 'FixturesAndResults',

    components: { ResultCard },

    props: {
        teams: Array,
        baseCalendar: Array
    },

    methods: {
        findTeamData(id) {
            return this.teams.find(team => team.id === id)
        }
    }
}
</script>

<template>
    <!-- Matches -->
    <div class="results">
        <h2>Fixtures & Results</h2>
        <div class="matches">
            <ResultCard v-for="(match, i) in baseCalendar" :key="match.id" :match="match"
                :team1="findTeamData(match.team1ID)" :team2="findTeamData(match.team2ID)"
                :class="{ even: i % 2 === 0, odd: i % 2 !== 0 }" />

            <!-- Show matches button -->
            <div role="button" class="button-fixtures">View Full Fixtures</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

.results {
    width: 100%;
}

h2 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 40px;
}

.matches .button-fixtures {
    color: $white;
    background-color: $black;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 20px 0;
}
</style>