<template>
  <v-app>
    <v-main>
      <search-box-user @user-selected="v => userSelected = v" />
      <list-of-repos :user="userSelected" />
    </v-main>
  </v-app>
</template>

<script>
import searchBoxUser from '@/components/search-box-user';
import ListRepos from '@/components/list-repos';


export default {
  name: 'App',

  components: {
    'search-box-user': searchBoxUser,
    'list-of-repos': ListRepos
  },

  data: () => ({
    userSelected: null
  }),
};
</script>
