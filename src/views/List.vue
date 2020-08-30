<template>
  <div>
    <h2>News</h2>
    <ul>
      <li v-for="(newItem,index) in pageNews" :key="index">
        {{ newItem.title }} -- {{ newItem.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'List',
  store,
  computed: {
    pageNews () {
      return store.state.news
    }
  }
}
</script>

<style scoped>

</style>
