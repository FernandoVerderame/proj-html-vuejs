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
                <tr>
                    <td class="team">
                        <span>1</span>
                        <img src="../../assets/img/league-club-1.png" alt="Instabul Sports">
                        <span>Instabul Sports</span>
                    </td>
                    <td>18</td>
                    <td>2</td>
                    <td>0</td>
                    <td class="score">42</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>2</span>
                        <img src="../../assets/img/league-club-2.png" alt="United Fs Club">
                        <span>United Fs Club</span>
                    </td>
                    <td>14</td>
                    <td>2</td>
                    <td>1</td>
                    <td class="score">35</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>3</span>
                        <img src="../../assets/img/league-club-3.png" alt="Schalke Club">
                        <span>Schalke Club</span>
                    </td>
                    <td>13</td>
                    <td>3</td>
                    <td>0</td>
                    <td class="score">32</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>4</span>
                        <img src="../../assets/img/league-club-4.png" alt="Inter Club">
                        <span>Inter Club</span>
                    </td>
                    <td>13</td>
                    <td>2</td>
                    <td>1</td>
                    <td class="score">31</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>5</span>
                        <img src="../../assets/img/league-club-5.png" alt="Madrid Club">
                        <span>Madrid Club</span>
                    </td>
                    <td>12</td>
                    <td>1</td>
                    <td>2</td>
                    <td class="score">30</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>6</span>
                        <img src="../../assets/img/league-club-6.png" alt="Schalke Club">
                        <span>Schalke Club</span>
                    </td>
                    <td>11</td>
                    <td>0</td>
                    <td>3</td>
                    <td class="score">28</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>7</span>
                        <img src="../../assets/img/league-club-7.png" alt="Arsenal Club">
                        <span>Arsenal Club</span>
                    </td>
                    <td>10</td>
                    <td>5</td>
                    <td>0</td>
                    <td class="score">26</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>8</span>
                        <img src="../../assets/img/league-club-8.png" alt="Bayern Club">
                        <span>Bayern Club</span>
                    </td>
                    <td>10</td>
                    <td>2</td>
                    <td>2</td>
                    <td class="score">24</td>
                </tr>
                <tr>
                    <td class="team">
                        <span>9</span>
                        <img src="../../assets/img/league-club-9.png" alt="Atletico Club">
                        <span>Atletico Club</span>
                    </td>
                    <td>9</td>
                    <td>0</td>
                    <td>4</td>
                    <td class="score">20</td>
                </tr>

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

.team {
    text-align: start;
    width: 350px;
}
</style>