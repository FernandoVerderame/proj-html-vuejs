<script>
export default {
    name: 'ResultCard',

    props: {
        match: Object,
        team1: Object,
        team2: Object
    },

    methods: {
        teamLogo(image) {
            const url = new URL(`../../assets/img/${image}.png`, import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <div class="card-match d-flex justify-content-center align-items-center">

        <!-- Home team -->
        <img :src="teamLogo(team1.logo)" :alt="team1.name">
        <div class="team-name">{{ team1.name }}</div>
        <div class="versus">vs</div>

        <!-- Away team -->
        <div class="team-name">{{ team2.name }}</div>
        <img :src="teamLogo(team2.logo)" :alt="team2.name">
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