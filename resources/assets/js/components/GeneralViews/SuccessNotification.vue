<template>
    <p class="text-center" v-if="success.length">
        <span class="label label-success" v-for="msg in success">{{ msg.description }}</span>
    </p>
</template>
<script>
  export default {
      props: ['success']
  }

</script>
