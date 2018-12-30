<template>
    <p class= "alert alert-danger" v-if="errormsgs.length">
        {{errormsgs}}
        <!-- <b>Please correct the following error(s):</b>
        <ul>
        <li v-for="error in errors">{{ error }}</li>
        </ul> -->
    </p>
</template>
<script>
  export default {
      props: ['errormsgs']
  }

</script>
