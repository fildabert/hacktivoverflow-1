<template>
    <q-page>
        <div class="row q-pt-md">
      <div class="col-6 offset-3">
        <MainCard v-for="post in $store.state.main.tagPosts" :key="post._id" :post="post"/>
      </div>


     
    </div>
    </q-page>
</template>

<script>
import MainCard from "../components/main-card"

export default {
  name: "TagPost",
  components: {
    MainCard
  },
  created() {
    var selectedTag = this.$route.params.tag
    this.$store.dispatch("GET_TAG_POSTS", selectedTag)
  },
  watch: {
    "$route.params.tag": {
      handler: function() {
        var selectedTag = this.$route.params.tag
        this.$store.dispatch("GET_TAG_POSTS", selectedTag)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style>

</style>
