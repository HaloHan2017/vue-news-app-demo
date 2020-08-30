<template>
  <div>
    <div>标题：</div>
    <label>
      <input type="text" v-model="title"/>
    </label>
    <div>内容：</div>
    <label>
      <input type="text" v-model="content"/>
    </label>
    <br>
    <button @click="addNewItem">添加新闻</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Add',
  store,
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addNewItem () {
      store.commit('addNewItem', {
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
      this.$router.push('/home/list')
    }
  }
}
</script>

<style scoped>

</style>
