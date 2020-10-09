<!--created by 杨涛 on 2020/9/29!-->
<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <cpn></cpn>
  </div>
</template>
<script>
  import Cpn from './Cpn.vue'
export default {
  name: 'App',
  data () {
    return {
      message: 'hello2222'
    }
  },
  components: {
    Cpn
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
  }
}
</script>

<style lang='less' scoped>
  .title{
    color: green;
  }
</style>
