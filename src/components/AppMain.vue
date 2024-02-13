<script>
import CurrentMatch from './matches/CurrentMatch.vue';
import UpcomingMatches from './matches/UpcomingMatches.vue';
import PlayerList from './players/PlayerList.vue';
import RankingSection from './ranking/RankingSection.vue';
import SponsorSection from './sponsor/SponsorSection.vue';
import ArticlesSection from './articles/ArticlesSection.vue';

export default {
    name: 'AppMain',

    components: { CurrentMatch, UpcomingMatches, PlayerList, RankingSection, SponsorSection, ArticlesSection }
};
</script>

<template>
    <CurrentMatch />
    <UpcomingMatches />
    <PlayerList />
    <RankingSection />
    <SponsorSection />
    <ArticlesSection />
</template>

<style></style>