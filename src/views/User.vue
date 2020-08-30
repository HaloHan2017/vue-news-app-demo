<template>
  <div>
    <h2>User</h2>
    <button @click="add">添加新闻</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    add () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>

</style>
