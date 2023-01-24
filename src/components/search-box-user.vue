<template>
  <div>
    <v-autocomplete label="Pesquise" v-model="user" :items="items" hide-no-data
      @input.native="event => getItems(event.target.value)" :loading="itemsLoading" />
  </div>
</template>

<script>
import { api } from '@/api/githubMock';

export default {
  data() {
    return {
      items: null,
      itemsLoading: false,
      user: '',
    }
  },
  watch: {
    user(v) {
      if (v) {
        this.$emit('user-selected', v)
      }
    },
  },
  methods: {
    async getItems(searchTerm) {
      this.itemsLoading = true
      const { items } = await api.searchUsers(searchTerm)
      if (items) {
        this.items = items.map(item => item.login)
      }
      this.itemsLoading = false
    }
  }
}
</script>
