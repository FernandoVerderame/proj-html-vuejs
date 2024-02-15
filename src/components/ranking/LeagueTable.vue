<script>
import TrTable from './TrTable.vue';

export default {
    name: 'LeagueTable',

    components: { TrTable },

    props: {
        teams: Array
    }

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
                <TrTable v-for="(team, i) in teams" :key="team.id" :team="team" :i="i" />
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
            color: $white;
            font-size: 20px;
        }
    }
}

tfoot {
    td {
        color: $white;
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