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
        <span class="team1 d-flex align-items-center gap-2">
            {{ findTeamData(team1ID).name }}
            <img :src="`src/assets/img/${findTeamData(team1ID).logo}.png`" :alt="findTeamData(team1ID).name">
        </span>
        <span class="vs">VS</span>
        <span class="team2 d-flex align-items-center gap-2">
            <img :src="`src/assets/img/${findTeamData(team2ID).logo}.png`" :alt="team2ID">
            {{ findTeamData(team2ID).name }}
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