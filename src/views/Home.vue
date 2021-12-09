<template>
  <div class="home">
    <router-link to="/cube">
      <div class="list_item">正方体</div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="less">

*{
  text-decoration: none;
}
.list_item{
  width:50vw;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 28px;
  border-radius: 10px;
  background: orange;
}
</style>
