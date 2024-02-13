<script>
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

export default {
    name: 'CurrentMatch',
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
        ]
    }),
    methods: {
        findTeamData(id) {
            return this.teams.find(team => team.id === id)
        }
    }
};
</script>

<template>
    <!-- Match -->
    <section class="daily-match text-center container py-3" v-for="game in calendar" :key="game.id">
        <!-- Squadra 1 vs Squadra 2 -->
        <div class="teams d-flex justify-content-center align-items-center gap-3">
            <div class="team1 d-flex align-items-center gap-2">
                {{ findTeamData(game.team1ID).name }}
                <img :src="`src/assets/img/${findTeamData(game.team1ID).logo}.png`" :alt="findTeamData(game.team1ID).name">
            </div>
            <div class="fs-1">VS</div>
            <div class="team2 d-flex align-items-center gap-2">
                <img :src="`src/assets/img/${findTeamData(game.team2ID).logo}.png`" :alt="findTeamData(game.team2ID).name">
                {{ findTeamData(game.team2ID).name }}
            </div>
        </div>
        <!-- Data e Luogo -->
        <div class="details d-flex justify-content-center">
            <div class="date"><i class="fa-regular fa-calendar-days"></i> {{ game.date }}</div>
            <div class="Stadium"><i class="fa-regular fa-circle"></i> {{ game.stadium }}</div>
        </div>
        <!-- More details button -->
        <button>View Match Detail</button>
    </section>
    <!-- Daily Match -->
    <!-- <section class="daily-match text-center container py-3"> -->
    <!-- Squadra 1 vs Squadra 2 -->
    <!-- <div class="teams d-flex justify-content-center align-items-center gap-3">
            <div class="team1 d-flex align-items-center">
                {{ findTeamData(1).name }}
                <img :src="`src/assets/img/${findTeamData(1).logo}.png`" :alt="findTeamData(1).name">
            </div>
            <div class="fs-1">VS</div>
            <div class="team2 d-flex align-items-center">
                <img :src="`src/assets/img/${findTeamData(2).logo}.png`" :alt="findTeamData(2).name">
                {{ findTeamData(2).name }}
            </div>
        </div> -->
    <!-- Data e Luogo -->
    <!-- <div class="details d-flex justify-content-center">
            <div class="date"><i class="fa-regular fa-calendar-days"></i> May 21, 2022 18:05 pm</div>
            <div class="Stadium"><i class="fa-regular fa-circle"></i> Expert Stadium</div>
        </div> -->
    <!-- More details button -->
    <!-- <button>View Match Detail</button>
    </section> -->
</template>

<style lang="scss" scoped>
.teams {
    font-size: x-large;
    font-weight: 700;
    margin-bottom: 1rem;
}

.details {
    font-size: medium;
    font-weight: 700;
    gap: 1rem;
    margin-bottom: 1rem;
}

button {
    background-color: black;
    color: white;
    border-radius: 25px;
    font-weight: 600;
    padding: 1.2rem 3.6rem;
}

.details i {
    font-weight: 100;
}
</style>