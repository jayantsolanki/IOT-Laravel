<template>
  <router-view></router-view>
</template>

<script>
  export default {
    data(){
        return {
            isLoggedIn : null,
            name : null
        }
    },
    mounted(){
        this.isLoggedIn = localStorage.getItem('jwt')
        this.name = localStorage.getItem('user')
    }
  }
</script>

<style lang="scss"></style>
