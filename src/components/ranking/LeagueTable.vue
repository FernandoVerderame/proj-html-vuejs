<script>
export default {
    name: 'LeagueTable',

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
        ]
    })
};
</script>

<template>
    <div class="league-table">
        <h2>League Table</h2>
        <table class="table border border-light-subtl">
            <thead>
                <tr>
                    <th class="team ps-3">Team</th>
                    <th>w</th>
                    <th>d</th>
                    <th>l</th>
                    <th>pts</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="team in teams" :key="team.id">
                    <td class="team">
                        <span class="ps-2">{{ team.id }}</span>
                        <img :src="`../../assets/img/${team.logo}.png`" :alt="team.name">
                        <span>{{ team.name }}</span>
                    </td>
                    <td>{{ team.win }}</td>
                    <td>{{ team.draw }}</td>
                    <td>{{ team.lose }}</td>
                    <td class="score">{{ team.points }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td role="button" colspan="5">View Full League Table</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.league-table {
    width: 100%;
}

h2 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 40px;
}

thead {
    tr {
        th {
            text-transform: uppercase;
            text-align: center;
            background-color: black;
            color: white;
            font-size: 20px;
        }
    }
}

tbody {
    td {
        font-size: 20px;
        text-align: center;
        vertical-align: middle;
        background-color: #f5f5f5;

        img {
            width: 60px;
            margin: 0px 15px;
        }

        &.score {
            font-weight: 700;
        }
    }
}

tfoot {
    td {
        color: white;
        background-color: black;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        padding: 20px 0;
    }
}

.team {
    text-align: start;
    width: 350px;
}
</style>