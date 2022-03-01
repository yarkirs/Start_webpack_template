<template lang="pug">
    .container
      img(src="/assets/img/logo.png" :alt="message")
      p {{ message }}
      h1(class='text-center text-primary') hello bootstrap
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello vue!',
    }
  },

}
</script>

<style lang="scss" >

.container {
  text-align: center;
}
img {
  max-width: 200px;
}
</style>
