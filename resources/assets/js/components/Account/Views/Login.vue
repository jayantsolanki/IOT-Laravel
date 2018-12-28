
<template>
<div class="account-form">
    <img src="https://compass-ssl.microsoft.com/assets/7c/f5/7cf5c795-b490-4bed-9289-f6826c9dd76b.svg?n=account-icon-gray.svg" class="avatar">
    <h2>Login</h2>
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
</div>
</template>
<script>
    export default {
        data(){
            return {
                email : "",
                password : "",
                user: {
                    company: 'Paper Dashboard',
                    username: 'michael23',
                    email: '',
                    lastName: 'Faker',
                    address: 'Melbourne, Australia',
                    city: 'melbourne',
                    postalCode: '',
                    aboutMe: `Oh so, your weak rhyme. You doubt I'll bother, reading into it.I'll probably won't, left to my own devicesBut that's the difference in our opinions.`
                }
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
                        localStorage.setItem('user',JSON.stringify(response.data.success))
                        // localStorage.setItem('email',response.data.success.user.email)
                        // localStorage.setItem('name',response.data.success.user.name)
                        // localStorage.setItem('jwt',response.data.success.token)

                        if (response.data.success.token != null){
                            this.$router.go('/')
                        }
                      })
                      .catch(function (error) {
                        console.error(error);
                      });
                }
            },
            updateProfile () {
                alert('Your data: ' + JSON.stringify(this.user))
            }
        },
        beforeRouteEnter (to, from, next) {
            const status =  JSON.parse(window.localStorage.getItem('user'));
            if (status!=null || status!=undefined) {
                return next('/admin');
            }

            next();
        }
    }
</script>
<style>
  .account-form
  {
      height: 400px;
  }
</style>
