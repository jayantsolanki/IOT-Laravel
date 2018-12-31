<template>
    <p class="card text-center" v-if="errors.length">

        <span v-for="msg in errors">
            <span class = "text-danger"><i>{{ msg.description }}</i></span>
            <ol>
                <li class='text-danger' v-for="error in msg.error">
                    {{error[0]}}
                </li>
            </ol>
        </span>
    </p>
</template>
<script>
  export default {
      props: ['errors']
  }

</script>
