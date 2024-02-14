<script>
export default {
    name: 'MatchCard',
    props: {
        team1: Object,
        team2: Object,
        date: String,
        stadium: String,
    },
    methods: {
        createImagePath(imgName) {
            const url = new URL(`../../assets/img/${imgName}.png`, import.meta.url);
            return url.href
        }
    }
};
</script>

<template>
    <!-- Squadra 1 vs Squadra 2 -->
    <div class="teams d-flex justify-content-center align-items-center gap-3">
        <span class="team1 d-flex align-items-center gap-2">
            {{ team1.name }}
            <img :src="createImagePath(team1.logo)" :alt="team1.name">
        </span>
        <span class="vs">VS</span>
        <span class="team2 d-flex align-items-center gap-2">
            <img :src="createImagePath(team2.logo)" :alt="team2.name">
            {{ team2.name }}
        </span>
    </div>
    <!-- Data e Luogo -->
    <div class="details d-flex justify-content-center">
        <span class="date">{{ date }}</span>
        <span class="stadium">{{ stadium }}</span>
    </div>
</template>

<style lang="scss" scoped>
.teams {
    font-size: 28px;
    font-weight: 700;
    padding: 0.5rem;
}

.vs {
    font-size: 65px;
}

.details {
    font-size: medium;
    font-weight: 700;
    gap: 1rem;
    margin-bottom: 1rem;
}

.date::before,
.stadium::before {
    content: "";
    background-size: 1rem 1rem;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
}

.date::before {
    background-image: url(../../assets/img/timetable.png);
}

.stadium::before {
    background-image: url(../../assets/img/add.png);
}
</style>