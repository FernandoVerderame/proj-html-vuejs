<script>
import LeagueTable from './LeagueTable.vue';
import FixturesAndResults from './FixturesAndResults.vue';

export default {
    name: 'RankingSection',

    components: { LeagueTable, FixturesAndResults }
};
</script>

<template>
    <LeagueTable />
    <FixturesAndResults />
</template>

<style></style>