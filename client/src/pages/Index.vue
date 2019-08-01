<template>
  <q-page class="">
    <div class="row q-mt-sm q-gutter-md">
      <div class="col-6 offset-2">

        <q-card style="width: 100%;" class="q-mb-sm" v-show="$store.state.main.posts.length===0" v-for="i in 5" :key="i">
          <div class="row" style="max-height: 300px; min-height: 180px;">
              <q-card-section class="col-1 bg-grey-3">
                <div class="column items-center">
                  
                  <q-icon name="expand_less" style="font-size: 40px;" class="upvote q-pt-md"/>
                  <ContentLoader class="q-py-sm" style="height: 35px;">
                    <rect x="130" y="0" rx="3" ry="3" width="130" height="300" />
                  </ContentLoader>
                  <q-icon name="expand_more" style="font-size: 40px;" class="downvote q-pb-md"/>
                </div>
              </q-card-section>

              <q-card-section class="col-11 q-mt-lg">
                
                <ContentLoader style="height: 130px;">
                  <rect x="0" y="0" rx="3" ry="3" width="300" height="20" />
                  <rect x="0" y="35" rx="3" ry="3" width="160" height="40" />
                </ContentLoader>
                <q-separator />
              <q-card-actions>
                <ContentLoader style="height: 30px;">

                </ContentLoader>
              </q-card-actions>
            </q-card-section>
          </div>
        </q-card>
        <!-- <ContentLoader>
          <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
        </ContentLoader> -->
        <div v-show="$store.state.main.posts.length > 0">
          <MainCard v-for="post in $store.state.main.posts" :key="post._id" :post="post"/>

        </div>
      </div>


      <div class="col-3">
        <div class="column">
          <div class="col">
            <q-card style="width: 100%;">
                <q-toolbar class="bg-grey-3">
                  <q-toolbar-title>Posts of the day</q-toolbar-title>
                </q-toolbar>
                <div v-if="loading">
                  <q-list>
                    <q-item>
                    <ContentLoader style="height: 100px;">
                      <rect x="0" y="25" rx="3" ry="3" width="20" height="50" />
                      <rect x="40" y="5" rx="3" ry="3" width="150" height="30" />
                      <rect x="40" y="40" rx="3" ry="3" width="340" height="15" />
                      <rect x="40" y="60" rx="3" ry="3" width="630" height="15" />
                    </ContentLoader>
                    </q-item>
                  </q-list>

                </div>
                <div v-if="!loading">
                  <q-list v-if="potds.length > 0">
                    <PotdCard v-for="potd in potds" :key="potd._id" :potd="potd"/>  
                  </q-list>
                  <q-list v-if="potds.length === 0">
                    <q-item>
                      <q-item-section side>
                        <q-item-label><q-icon name="far fa-sad-cry" style="font-size: 25px;" /></q-item-label>
                      </q-item-section>
                      <q-item-section>
                        There are no new posts today
                      </q-item-section>

                    </q-item>
                  </q-list>
                </div>
            </q-card>
          </div>
          <div class="col q-mt-md" v-if="$store.state.main.isLogin">
            <q-card style="width: 100%;">
                <q-toolbar class="bg-grey-3">
                  <q-toolbar-title>Watched Tags</q-toolbar-title>
                </q-toolbar>
                <q-card-section>
                  <q-chip clickable removable icon="label" color="blue-grey-4" v-for="tag in $store.state.main.watchedTags" @click="viewTag(tag)" @remove="removeTag(tag)" :key="tag">{{tag}}</q-chip>
                </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { ContentLoader } from "vue-content-loader"
import MainCard from "../components/main-card"
import PotdCard from "../components/potd-card"
import axios from "axios"

export default {
  name: 'home',
  created () {
    this.loading = true
    axios.request({
      method: "GET",
      url: `${this.$store.state.main.baseUrl}/posts/potd`
    })
    .then(response =>{
      setTimeout(() =>{
        this.loading = false
        this.potds = response.data
      }, 1000)
    })
    .catch(err =>{
      console.log(err.response)
    })
  },
  data () {
    return {
      potds: "",
      loading: false
    }
  },
  methods: {
    viewTag(tag) {
      this.$router.push(`/tag/${tag}`)
    },
    removeTag(tag) {
      this.$store.dispatch("REMOVE_WATCHED_TAGS", tag)
    }
  },
  components: {
    MainCard,
    PotdCard,
    ContentLoader
  }
}
</script>
