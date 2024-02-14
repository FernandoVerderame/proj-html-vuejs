<script>
export default {
    name: 'LeagueTable',

    props: {
        teams: Array
    }

    /*
    computed: {
        teamSrc() {
            const url = new URL(`../../assets/img/${this.teams.logo}.png`, import.meta.url);
            return url.href;
        }
    }
    */
};
</script>

<template>
    <!-- Teams ranking -->
    <div class="league-table">
        <h2>League Table</h2>
        <table class="table border border-light-subtl">
            <thead>
                <tr>
                    <!-- Header ranking -->
                    <th class="team ps-3">Team</th>
                    <th>w</th>
                    <th>d</th>
                    <th>l</th>
                    <th>pts</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(team, i) in teams" :key="team.id">
                    <!-- Team -->
                    <td class="team">
                        <!-- Team ID -->
                        <span class="ps-2">{{ i + 1 }}</span>

                        <!-- Team image -->
                        <img :src="`src/assets/img/${team.logo}.png`" :alt="team.name">

                        <!-- Team name -->
                        <span>{{ team.name }}</span>
                    </td>

                    <!-- Wins -->
                    <td>{{ team.win }}</td>

                    <!-- Draw -->
                    <td>{{ team.draw }}</td>

                    <!-- Lose -->
                    <td>{{ team.lose }}</td>

                    <!-- Points -->
                    <td class="score">{{ team.points }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <!-- Show ranking button -->
                    <td role="button" colspan="5">View Full League Table</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

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
            background-color: $black;
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
        background-color: #F5F5F5;

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
        background-color: $black;
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