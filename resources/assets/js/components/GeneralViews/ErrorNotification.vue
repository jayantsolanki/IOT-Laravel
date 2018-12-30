<template>
    <p class="alert alert-danger text-center" v-if="errors.length">

        <span v-for="msg in errors">
            <span class = "">{{ msg.description }}</span>
            <ul>
                <li v-for="error in msg.error">
                    {{error[0]}}
                </li>
            </ul>
        </span>
    </p>
</template>
<script>
  export default {
      props: ['errors']
  }

</script>
