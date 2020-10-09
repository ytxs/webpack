<!--created by 杨涛 on 2020/9/29!-->
<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>{{name}}</p>
  </div>
</template>
<script>
export default {
  name: 'Cpn',
  data () {
    return {
      name: 'CPN组件的name'
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
  }
}
</script>

<style lang='less' scoped>
</style>