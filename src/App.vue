<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'Football Club',

  components: { AppHeader, AppMain, AppFooter }
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style></style>