
<template>
<div class="account-form">
    <img src="https://compass-ssl.microsoft.com/assets/7c/f5/7cf5c795-b490-4bed-9289-f6826c9dd76b.svg?n=account-icon-gray.svg" class="avatar">
    <h2>Login</h2>
    <!-- <p><ul>
        <li v-for="error in success">{{ error.status }}</li>
        </ul></p> -->

    <form method="POST" action="/login">
        <div class="input-group input-group-lg">
            <span class="input-group-addon" id="sizing-addon1"><i class="glyphicon glyphicon-user"></i></span>
            <input id="email" type="email" class="form-control" v-model="email" required autofocus aria-describedby="sizing-addon1" placeholder="Email">
        </div>

        <div class="input-group input-group-lg">
            <span class="input-group-addon" id="sizing-addon1"><i class="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" class="form-control" v-model="password" required aria-describedby="sizing-addon1" placeholder="Password">
        </div>
        <div class="row mb-0">
            <div class="col-md-8 col-md-offset-4 col-xs-8 col-xs-offset-4">
                <button type="submit" class="btn btn-danger" @click="handleSubmit">
                    <b>Sign In</b>
                </button>
            </div>
        </div>
        <hr/>
        <div class="row mb-0">
            <div class="col-md-8 col-md-offset-4 col-xs-8 col-xs-offset-4">
                <router-link class="btn btn-success" to="register">Sign Up</router-link>
            </div>
        </div>
    </form>
    <ErrorNotification :errors="errors"></ErrorNotification>
    <SuccessNotification :success="success"></SuccessNotification>
</div>
</template>
<script>
    import ErrorNotification from '../../../components/GeneralViews/ErrorNotification.vue'
    import SuccessNotification from '../../../components/GeneralViews/SuccessNotification.vue'
    export default {
        components: {
        ErrorNotification,
        SuccessNotification
        },
        data(){
            return {
                errors: [],
                success: [],
                email : "",
                password : ""
            }
        },
        
        methods : {
            handleSubmit(e){
                e.preventDefault()

                if (this.password.length > 0) {
                    axios.post('api/login', {
                        email: this.email,
                        password: this.password
                      })
                      .then(response => {
                        // alert(1)
                        
                        // localStorage.setItem('email',response.data.success.user.email)
                        // localStorage.setItem('name',response.data.success.user.name)
                        // localStorage.setItem('jwt',response.data.success.token)
                        
                        if (response.data.type != 'success'){
                            console.log(response.data)
                            localStorage.setItem('user',JSON.stringify(response.data.success.data))
                            this.success.push(response.data.success)
                            // this.$router.push('/')
                            // this.$router.push("/"+response.data.success.user.role)
                        }
                        else{
                            console.log(response.data.error.description)
                            this.errors.push(response.data.error.error)
                        }
                      })
                      .catch(function (error) {
                        console.error(error.response.data.error.description);
                        // this.errors=error.response.data.error.error
                        this.errors.push(error.response.data.error.description)
                      });
                }
            },
            updateProfile () {
                alert('Your data: ' + JSON.stringify(this.user))
            }
        }
    }
</script>
<style>
  .account-form
  {
      height: 500px;
  }
</style>
