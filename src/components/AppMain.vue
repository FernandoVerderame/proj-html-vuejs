<script>
import CurrentMatch from './matches/CurrentMatch.vue';
import UpcomingMatches from './matches/UpcomingMatches.vue';
import PlayerList from './players/PlayerList.vue';

export default {
    name: 'AppMain',

    components: { CurrentMatch, UpcomingMatches, PlayerList }
};
</script>

<template>
    <CurrentMatch />
    <UpcomingMatches />
    <PlayerList />
</template>

<style></style>