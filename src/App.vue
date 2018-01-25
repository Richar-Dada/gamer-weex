<template>
  <div @androidback="back" class="root">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>

<style>
  @import './assets/css/common.css'
</style>
