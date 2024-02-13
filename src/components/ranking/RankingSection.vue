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
        <div class="container d-flex">
            <LeagueTable />
            <FixturesAndResults />
        </div>
    </section>
</template>

<style lang="scss" scoped>
#ranking {
    padding: 60px 0;
}

.container {
    gap: 50px;
}
</style>