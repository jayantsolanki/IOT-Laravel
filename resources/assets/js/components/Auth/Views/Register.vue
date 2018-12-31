<template>
    <div class="account-form">
        <notifications>

        </notifications>
        <img src="https://compass-ssl.microsoft.com/assets/7c/f5/7cf5c795-b490-4bed-9289-f6826c9dd76b.svg?n=account-icon-gray.svg" class="avatar">
        <h2>Registration</h2>
        <form method="POST" action="/register">
            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1"><i class="ti-user"></i></span>
                <input id="name" type="text" class="form-control" v-model="name" required autofocus placeholder="Full Name">
            </div>

            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1"><i class="ti-email"></i></span>
                <input id="email" type="email" class="form-control" v-model="email" required placeholder="Email">
            </div>

            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1"><i class="ti-map-alt"></i></span>
                <select  v-model="region" required="" class="form-control" name="region" id="region">
                    <option value="" selected disabled>Choose your region</option>
                    <option value="1">America/Pacific (UTC−08:00)</option>
                    <option value="2">America/Mountain (UTC−07:00)</option>
                    <option value="3">America/Central (UTC−06:00)</option>
                    <option value="4">America/Eastern (UTC−05:00)</option>
                    <option value="5">Asia/Kolkata (UTC+05:30)</option>
                    <option value="6">Europe/London (UTC 00:00)</option>
                </select>
            </div>

            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1"><i class="ti-lock"></i></span>
                <input id="password" type="password" class="form-control" v-model="password" required placeholder="Password">
            </div>

            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1"><i class="ti-lock"></i></span>
                <input id="password_confirmation" type="password" class="form-control" v-model="password_confirmation" required placeholder="Retype Password">
            </div>

            <div class="row text-center">
                <div class="">
                    <button type="submit" class="btn btn-success" @click="handleSubmit">
                        Register
                    </button>
                </div>
            </div>
            <hr/>
            <div class="row text-center">
                <div class="">
                    <router-link  to="login" class="btn btn-danger">
                        Already registered! Sign In
                    </router-link>
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
                name : "",
                email : "",
                region: "",
                password : "",
                password_confirmation : ""
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()
                var self=this;// important lesson
                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    axios.post('api/register', {
                        name: this.name,
                        email: this.email,
                        region: this.region,
                        password: this.password,
                        password_confirmation : this.password_confirmation
                      })
                      .then(response => {
                        if (response.data.type != 'success'){
                            console.log(response.data)
                            localStorage.setItem('user',JSON.stringify(response.data.success.data))
                            self.errors=[]
                            self.success=[response.data.success]
                            response.data.success.description=response.data.success.description+', please complete your profile'
                            self.notifyVue('top', 'center', response.data.success)
                            this.$router.push('/')
                        }
                      })
                      .catch(error => {
                        if(error.response.data.message){//for 500 error
                            console.log(error.response.data)
                            var error={description: '500: Bad Server request, contact admin', error:{server:[error.response.data.message]}}
                            self.success=[]
                            self.errors=[error]
                            self.notifyVue('top', 'center', error)

                        }
                        else
                       {
                            console.error(error.response.data.error.description)
                            self.success=[]
                            self.errors=[error.response.data.error]
                            self.notifyVue('top', 'center', error.response.data.error)
                        }
                      });
                } else {
                    this.password = ""
                    this.password_confirmation = ""
                    var error = {type: 'error', description: 'Passwords do not match'}
                    self.notifyVue('top', 'center', error)
                }
            },
            notifyVue (verticalAlign, horizontalAlign, message) {
                var type = null ,icon = null
                if(message.type=='success'){
                    type='success'
                    icon='ti-thumb-up'
                }
                else{
                    type='danger'
                    icon='ti-alert'
                }
                this.$notifications.notify(
                {
                    message: message.description,
                    icon: icon,
                    horizontalAlign: horizontalAlign,
                    verticalAlign: verticalAlign,
                    type: type
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            if (localStorage.getItem('jwt') && false) {
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
  select#region{
      border: 1px solid #fff;
      /* background: transparent; */
      background-color: transparent;
      color: #fff;
      font-size: 16px;
  }
  option { 
    /* Whatever color  you want */
    background-color: #AAAAAA;
}
  .account-form
  {
      height: 600px;
  }
</style>