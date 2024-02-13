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
            <LeagueTable />
            <FixturesAndResults />
        </div>
    </section>
</template>

<style></style>