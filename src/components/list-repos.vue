<template>
  <div>
    <v-card elevation="3" v-for="repo in repos" :key="repo.id" class="mb-3">
      <v-card-title @click="$emit('selected-repo', { user, repo: repo.name })">
        {{ repo.name }}
      </v-card-title>
      <v-icon></v-icon>
      <v-card-text>{{ repo.language || '' }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import { api } from '@/api/github'
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
      this.getRepos(val)
    }
  },
  methods: {
    async getRepos(user) {
      const repos = await api.listRepos(user)
      this.repos = repos
    }
  }

}
</script>
