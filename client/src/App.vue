<template>
  <div id="q-app">
    <q-ajax-bar
      position="top"
      color="blue-grey-6"
      size="5px"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.commit("CHECK_LOGIN")
    this.$store.dispatch("GET_POSTS")
    if(this.$store.state.main.isLogin) {
      this.$store.dispatch("GET_WATCHED_TAGS")
    }
  }
}
</script>

<style>
</style>
