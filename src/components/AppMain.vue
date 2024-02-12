<script>
import CurrentMatch from './matches/CurrentMatch.vue';
import UpcomingMatches from './matches/UpcomingMatches.vue';
import PlayerList from './players/PlayerList.vue';
import RankingSection from './ranking/RankingSection.vue';

export default {
    name: 'AppMain',

    components: { CurrentMatch, UpcomingMatches, PlayerList, RankingSection }
};
</script>

<template>
    <CurrentMatch />
    <UpcomingMatches />
    <PlayerList />
    <RankingSection />
</template>

<style></style>