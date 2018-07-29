<template>
    <div>
      <div class="activeRoute">
        我是User Page
      </div>
      <tabbar>
        <tabbar-item link="/home">
          <img slot="icon" src="../../../static/icon/home.png">
          <img slot="icon-active" src="../../../static/icon/home-selected.png">
          <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item link="/userMessage" show-dot>
          <img slot="icon" src="../../../static/icon/class.png">
          <img slot="icon-active" src="../../../static/icon/class-selected.png">
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item link="/userExplorer">
          <img slot="icon" src="../../../static/icon/find.png">
          <img slot="icon-active" src="../../../static/icon/find-selected.png">
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item badge="2" selected>
          <img slot="icon" src="../../../static/icon/user.png">
          <img slot="icon-active" src="../../../static/icon/user-selected.png">
          <span slot="label">Users</span>
        </tabbar-item>
      </tabbar>
    </div>
</template>

<script>
  import { XButton } from 'vux'
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    data(){
      return{
        id:null
      }
    },
    created(){
      this.id = this.$route.params.id
    },
    components:{
      XButton,
      Tabbar,
      TabbarItem
    },
    methods:{
      
    }
  }
</script>
<style lang="less">
  .activeRoute{
    font-size:18px;
  }
</style>


