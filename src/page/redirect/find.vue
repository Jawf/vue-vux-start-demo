<template>
    <div>
      <div class="activeRoute">
        我是Find Page
      </div>
    </div>
</template>

<script>
  import { XButton } from 'vux'
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
      XButton
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


