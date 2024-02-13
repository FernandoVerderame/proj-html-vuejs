<script>
import LeagueTable from './LeagueTable.vue';
import FixturesAndResults from './FixturesAndResults.vue';

export default {
    name: 'RankingSection',

    components: { LeagueTable, FixturesAndResults }
};
</script>

<template>
    <section id="ranking">
        <div class="container">
            <div class="d-flex gap-5">
                <LeagueTable />
                <FixturesAndResults />
            </div>
            <div class="reklam d-flex justify-content-center">
                <img src="../../assets/img/reklam.jpg" alt="reklam">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#ranking {
    padding: 50px 0;
}

.reklam img {
    width: 70vw;
    margin-top: 40px;
}
</style>