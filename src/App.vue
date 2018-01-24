<template>
  <div @androidback="back">
    <text>1111</text>
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
