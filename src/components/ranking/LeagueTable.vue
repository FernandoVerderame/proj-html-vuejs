<script>
export default {
    name: 'LeagueTable'
};
</script>

<template>
    <div class="league-table border border-primary">
        <h2>League Table</h2>
        <table class="table">
            <thead>
                <tr>
                    <th class="team">Team</th>
                    <th>w</th>
                    <th>d</th>
                    <th>l</th>
                    <th>pts</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
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
}

thead {
    tr th {
        text-transform: uppercase;
        text-align: center;
        background-color: black;
        color: white;
        font-size: 20px;
    }
}

.team {
    text-align: start;
    width: 350px;
}
</style>