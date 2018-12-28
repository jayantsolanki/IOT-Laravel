<template>
    <div class="account-form">
        <img src="https://compass-ssl.microsoft.com/assets/7c/f5/7cf5c795-b490-4bed-9289-f6826c9dd76b.svg?n=account-icon-gray.svg" class="avatar">
        <h2>Registration</h2>
        <form method="POST" action="/register">
            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1">Name</span>
                <input id="name" type="text" class="form-control" v-model="name" required autofocus placeholder="Full Name">
            </div>

            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1">E-Mail</span>
                <input id="email" type="email" class="form-control" v-model="email" required placeholder="Email">
            </div>

            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1">Password</span>
                <input id="password" type="password" class="form-control" v-model="password" required placeholder="Password">
            </div>

            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1">Retype Password</span>
                <input id="password-confirm" type="password" class="form-control" v-model="password_confirmation" required placeholder="Password">
            </div>

            <div class="row mb-0">
                <div class="col-md-8 col-md-offset-4 col-xs-8 col-xs-offset-4">
                    <button type="submit" class="btn btn-success" @click="handleSubmit">
                        Register
                    </button>
                </div>
            </div>
            <hr/>
            <div class="row mb-0">
                <div class="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2">
                    <router-link  to="login" class="btn btn-danger">
                        Already registered! Sign In
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : ""
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()

                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    axios.post('api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        c_password : this.password_confirmation
                      })
                      .then(response => {
                        localStorage.setItem('user',response.data.success.name)
                        localStorage.setItem('jwt',response.data.success.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$router.go('/')
                        }
                      })
                      .catch(error => {
                        console.error(error);
                      });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    return alert('Passwords do not match')
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if (localStorage.getItem('jwt')) {
                return next('/');
            }

            next();
        }
    }
</script>
<style>
 .account-form input[type="text"]
  {
      /* border: none; */
      border: 1px solid #fff;
      /* border-bottom: 1px solid #fff; */
      background: transparent;
      outline: none;
      /* height: 40px; */
      color: #fff;
      font-size: 16px;
  }
  .account-form
  {
      height: 600px;
  }
</style>