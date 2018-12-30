<template>
  <div>
    <div>

      <GeneralContent/>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import GeneralContent from './Content.vue'
  import PaperNotification from './../../../components/UIComponents/NotificationPlugin/Notification.vue'
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
    },
    components: {
      TopNavbar,
      ContentFooter,
      GeneralContent,
      PaperNotification
    }
  }

</script>
