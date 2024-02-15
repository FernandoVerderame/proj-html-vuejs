<script>
export default {
    name: 'TrTable',

    props: {
        team: Object,
        i: Number
    },

    computed: {
        teamSrc() {
            const url = new URL(`../../assets/img/${this.team.logo}.png`, import.meta.url);
            return url.href;
        }
    }
};
</script>

<template>
    <tr>
        <!-- Team -->
        <td class="team">
            <!-- Team ID -->
            <span class="ps-2">{{ i + 1 }}</span>

            <!-- Team image -->
            <img :src="teamSrc" :alt="team.name">

            <!-- Team name -->
            <span>{{ team.name }}</span>
        </td>

        <!-- Wins -->
        <td class="text-center">{{ team.win }}</td>

        <!-- Draw -->
        <td class="text-center">{{ team.draw }}</td>

        <!-- Lose -->
        <td class="text-center">{{ team.lose }}</td>

        <!-- Points -->
        <td class="score text-center">{{ team.points }}</td>
    </tr>
</template>

<style lang="scss" scoped>
td {
    font-size: 20px;
    text-align: left;
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
</style>