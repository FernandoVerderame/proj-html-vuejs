<script>
export default {
    name: 'FixturesAndResults',

    props: {
        teams: Array,
        baseCalendar: Array
    },

    methods: {
        findTeamData(id) {
            return this.teams.find(team => team.id === id)
        }
    }
};
</script>

<template>
    <!-- Matches -->
    <div class="results">
        <h2>Fixtures & Results</h2>
        <div class="matches">
            <div v-for="(match, i) in baseCalendar" :key="match.id" :class="{ even: i % 2 === 0, odd: i % 2 !== 0 }"
                class="card-match d-flex justify-content-center align-items-center">

                <!-- Home team -->
                <img :src="`src/assets/img/${findTeamData(match.team1ID).logo}.png`"
                    :alt="findTeamData(match.team1ID).name">
                <div class="team-name">{{ findTeamData(match.team1ID).name }}</div>
                <div class="versus">vs</div>

                <!-- Away team -->
                <div class="team-name">{{ findTeamData(match.team2ID).name }}</div>
                <img :src="`src/assets/img/${findTeamData(match.team2ID).logo}.png`"
                    :alt="findTeamData(match.team2ID).name">
            </div>

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

.card-match {
    padding: 11px 0;

    img {
        width: 60px;
        margin: 0px 15px;
    }

    .team-name {
        font-size: 20px;
    }

    .versus {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        margin: 0 20px;
    }
}

.matches .button-fixtures {
    color: white;
    background-color: $black;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 20px 0;
}

.even {
    background-color: $light-gray;
}

.odd {
    background-color: $gray;
}
</style>