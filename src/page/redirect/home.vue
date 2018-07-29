<template>
    <div class="redirect">
      <x-button type="primary" @click.native="onRouteClick">动态路由</x-button>

      <x-button type="primary" @click.native="onChildrenClick">子路由</x-button>
      <x-button type="primary" @click.native="onImgClick">图片裁剪</x-button>
      <tabbar>
        <tabbar-item selected> 
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
        <tabbar-item link="/user" badge="2">
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

      }
    },
    created(){
        
    },
    components:{
      XButton,
      Tabbar,
      TabbarItem
    },
    methods:{
      onRouteClick() {
        let id = parseInt(Math.random()*1000)
        this.$router.push(`/activeRoute/${id}`)
      },
      onChildrenClick() {
        this.$router.push('/childOneRoute')
      },
      onImgClick() {
        this.$router.push('/cropa')
      }
    }
  }
</script>
<style lang="less">

</style>


