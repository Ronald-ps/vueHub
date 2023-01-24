<template>
  <div>
    <v-card elevation="3" v-for="repo in repos" :key="repo.id" class="mb-3">
      <v-card-title>
        {{ repo.name }}
      </v-card-title>
      <v-icon></v-icon>
      <v-card-text>{{ repo.language || '' }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import { api } from '@/api/githubMock'
export default {
  components: {

  },
  props: {
    user: String,
  },
  data() {
    return {
      repos: []
    }
  },
  watch: {
    user(val) {
      console.log("novo valor", val)
      this.getRepos(val)
    }
  },
  methods: {
    async getRepos(user) {
      const repos = await api.listRepos(user)
      this.repos = repos
      console.log(this.repos)
    }
  }

}
</script>
