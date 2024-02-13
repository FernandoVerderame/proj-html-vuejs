<script>
export default {
    name: 'MatchCard',
    data: () => ({
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
    methods: {
        findTeamData(id) {
            return this.teams.find(team => team.id == id)
        }
    },
    props: {
        team1ID: Number,
        team2ID: Number,
        date: String,
        stadium: String,
    }
};
</script>

<template>
    <!-- Squadra 1 vs Squadra 2 -->
    <div class="teams d-flex justify-content-center align-items-center gap-3">
        <div class="team1 d-flex align-items-center gap-2">
            {{ findTeamData(team1ID).name }}
            <img :src="`src/assets/img/${findTeamData(team1ID).logo}.png`" :alt="findTeamData(team1ID).name">
        </div>
        <div class="fs-1">VS</div>
        <div class="team2 d-flex align-items-center gap-2">
            <img :src="`src/assets/img/${findTeamData(team2ID).logo}.png`" :alt="team2ID">
            {{ findTeamData(team2ID).name }}
        </div>
    </div>
    <!-- Data e Luogo -->
    <div class="details d-flex justify-content-center">
        <div class="date">{{ date }}</div>
        <div class="Stadium">{{ stadium }}</div>
    </div>
</template>

<!-- <style lang="scss" scoped></style> -->