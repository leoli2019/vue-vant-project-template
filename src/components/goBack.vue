<template>
  <div>
    <div class="goback">
      <el-button @click="goBack">{{ text }}</el-button>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'goBack',
  props: {
    text: {
      type: String,
      default: '返回上一页'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.goback {
  @include clearfix;
  button {
    float: left;
  }
}
hr {
  margin: 20px 0;
}
</style>
