<template>
  <v-app>
    <v-main>
      <search-box-user @user-selected="v => userSelected = v" />
      <list-of-repos :user="userSelected" @selected-repo="url => selectedRepoUrl = url" />
      <list-content-of-repository :url="selectedRepoUrl" />
    </v-main>
  </v-app>
</template>

<script>
import searchBoxUser from '@/components/search-box-user';
import ListRepos from '@/components/list-repos';
import ListContentRepo from '@/components/list-directory';



export default {
  name: 'App',

  components: {
    'search-box-user': searchBoxUser,
    'list-of-repos': ListRepos,
    'list-content-of-repository': ListContentRepo
  },

  data: () => ({
    userSelected: null,
    selectedRepoUrl: null,
  }),
};
</script>
