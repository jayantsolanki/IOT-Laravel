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
    }
    // mounted(){
    //     this.isLoggedIn = JSON.parse(window.localStorage.getItem('user'));
    //     this.name = this.isLoggedIn.user.name
    // }
    // methods: {
    //     logout() {
    //         alert("Trying to sign out")
    //         this.isLoggedIn = false;
    //         localStorage.removeItem('user')
    //         this.$router.go('login')
    //     }
    // }
  }
</script>

<style lang="scss"></style>
