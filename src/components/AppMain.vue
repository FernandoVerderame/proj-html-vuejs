<script>
import CurrentMatch from './matches/CurrentMatch.vue';
import UpcomingMatches from './matches/UpcomingMatches.vue';

export default {
    name: 'AppMain',

    components: { CurrentMatch, UpcomingMatches }
};
</script>

<template>
    <CurrentMatch />
    <UpcomingMatches />
</template>

<style></style>