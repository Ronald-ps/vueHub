<template>
  <v-container>
    <list-of-repos :user="user" @selected-repo="selectedRepo" />
    <tree-view-directory />
  </v-container>
</template>

<script>
import ListRepos from '@/components/list-repos';
import treeViewDirectory from '@/components/tree-view-directory';

export default {
  components: {
    'list-of-repos': ListRepos,
    'tree-view-directory': treeViewDirectory,
  },
  props: {
    user: {
      type: String
    }
  },
  data() {
    return {
      selectedRepoInfos: null
    }
  },
  methods: {
    selectedRepo(infos) {
      this.selectedRepoInfos = infos
    }
  }
}
</script>
