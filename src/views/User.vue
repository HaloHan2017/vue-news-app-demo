<template>
  <div>
    <h2>User</h2>
    <button @click="add">添加新闻</button>
    <h2>test git</h2>
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
