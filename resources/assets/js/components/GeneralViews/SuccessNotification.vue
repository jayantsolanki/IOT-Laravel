<template>
    <p class="text-center">
        <span class="badge badge-success" v-for="msg in success">{{ msg.description }}</span>
    </p>
</template>
<script>
  export default {
      props: ['success']
  }

</script>
