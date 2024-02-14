<script>
export default {
    name: 'ResultCard',

    props: {
        match: Object,
        i: Number,
        teams: Array
    },

    methods: {
        findTeamData(id) {
            return this.teams.find(team => team.id === id)
        }
    }
};
</script>

<template>
    <div :class="{ even: i % 2 === 0, odd: i % 2 !== 0 }"
        class="card-match d-flex justify-content-center align-items-center">

        <!-- Home team -->
        <img :src="`src/assets/img/${findTeamData(match.team1ID).logo}.png`" :alt="findTeamData(match.team1ID).name">
        <div class="team-name">{{ findTeamData(match.team1ID).name }}</div>
        <div class="versus">vs</div>

        <!-- Away team -->
        <div class="team-name">{{ findTeamData(match.team2ID).name }}</div>
        <img :src="`src/assets/img/${findTeamData(match.team2ID).logo}.png`" :alt="findTeamData(match.team2ID).name">
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

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

.even {
    background-color: $light-gray;
}

.odd {
    background-color: $gray;
}
</style>