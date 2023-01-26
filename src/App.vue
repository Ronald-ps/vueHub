<template>
  <v-app>
    <v-main>
      <search-box-user @user-selected="v => userSelected = v" />
      <list-of-repos v-show="!viewDirectory" :user="userSelected" @selected-repo="selectedRepo" />
      <tree-view-directory :repoInfos="selectedRepoInfos" />
    </v-main>
  </v-app>
</template>

<script>
import searchBoxUser from '@/components/search-box-user';
import ListRepos from '@/components/list-repos';
import treeViewDirectory from '@/components/tree-view-directory';



export default {
  name: 'App',

  components: {
    'search-box-user': searchBoxUser,
    'list-of-repos': ListRepos,
    'tree-view-directory': treeViewDirectory,
  },

  data: () => ({
    userSelected: null,
    selectedRepoInfos: null,
    viewDirectory: false
  }),
  methods: {
    selectedRepo(infos) {
      this.selectedRepoInfos = infos
    }
  }
};
</script>
