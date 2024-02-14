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

<style lang="scss">
@use './assets/scss/vars' as *;

html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background: $white;
}

html::-webkit-scrollbar-thumb {
  background: $black;
}
</style>