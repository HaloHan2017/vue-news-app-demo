<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name:'list'}">新闻列表</router-link>
        |
        <router-link :to="{name:'user'}">个人中心</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
