<script>
export default {
    name: 'FixturesAndResults',

    data: () => ({
        teams: [
            {
                id: 1,
                name: "Istanbul Sports",
                logo: "league-club-1",
                win: 18,
                draw: 2,
                lose: 0,
                points: 42
            },
            {
                id: 2,
                name: "United Fs Club",
                logo: "league-club-2",
                win: 14,
                draw: 2,
                lose: 1,
                points: 35
            },
            {
                id: 3,
                name: "Schalke Club",
                logo: "league-club-3",
                win: 13,
                draw: 3,
                lose: 0,
                points: 32
            },
            {
                id: 4,
                name: "Inter Club",
                logo: "league-club-4",
                win: 13,
                draw: 2,
                lose: 1,
                points: 31
            },
            {
                id: 5,
                name: "Madrid Club",
                logo: "league-club-5",
                win: 12,
                draw: 1,
                lose: 2,
                points: 30
            },
            {
                id: 6,
                name: "Schalke Club",
                logo: "league-club-6",
                win: 11,
                draw: 0,
                lose: 3,
                points: 28
            },
            {
                id: 7,
                name: "Arsenal Club",
                logo: "league-club-7",
                win: 10,
                draw: 5,
                lose: 0,
                points: 26
            },
            {
                id: 8,
                name: "Bayern Club",
                logo: "league-club-8",
                win: 10,
                draw: 2,
                lose: 2,
                points: 24
            },
            {
                id: 9,
                name: "Atletico Club",
                logo: "league-club-9",
                win: 9,
                draw: 0,
                lose: 4,
                points: 20
            }
        ],

        calendar: [
            {
                id: 1,
                team1ID: 1,
                team2ID: 2
            },
            {
                id: 2,
                team1ID: 3,
                team2ID: 4
            },
            {
                id: 3,
                team1ID: 5,
                team2ID: 6
            },
            {
                id: 4,
                team1ID: 7,
                team2ID: 8
            },
            {
                id: 5,
                team1ID: 9,
                team2ID: 1
            },
            {
                id: 6,
                team1ID: 2,
                team2ID: 3
            },
            {
                id: 7,
                team1ID: 4,
                team2ID: 5
            },
            {
                id: 8,
                team1ID: 6,
                team2ID: 7
            },
            {
                id: 9,
                team1ID: 8,
                team2ID: 9
            }
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
    <!-- Matches -->
    <div class="results">
        <h2>Fixtures & Results</h2>
        <div class="matches">
            <div v-for="(match, i) in calendar" :key="match.id" :class="{ even: i % 2 === 0, odd: i % 2 !== 0 }"
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