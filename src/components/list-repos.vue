<template>
  <div>
    <v-card elevation="3" v-show="isVisible(repo.id)" v-for="repo in repos" :key="repo.id" class="mb-3"
      @click="selectRepo(repo)">
      <v-card-title>
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
      repos: [],
      selectedRepoId: null
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
    },
    selectRepo(repo) {
      if (this.selectedRepoId === repo.id) {
        this.selectedRepoId = null
        this.$emit('deselected-repo')
        return
      }
      this.selectedRepoId = repo.id
      this.$emit('selected-repo', { user: this.user, repo: repo.name })
    },
    isVisible(repoId) {
      if (!this.selectedRepoId) return true
      return this.selectedRepoId === repoId
    }
  }

}
</script>
