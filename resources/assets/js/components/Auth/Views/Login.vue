
<template>
<div class="account-form">
    <notifications>

    </notifications>
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
        <div class="row text-center">
            <div class="">
                <button type="submit" class="btn btn-danger" @click="handleSubmit">
                    <b>Sign In</b>
                </button>
            </div>
        </div>
        <hr/>
        <div class="row text-center">
            <div class="">
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
                var self=this;// important lesson
                if (this.password.length > 0) {
                    axios.post('api/login', {
                        email: this.email,
                        password: this.password
                      })
                      .then(response => {
                        if (response.data.type != 'success'){
                            console.log(response.data)
                            localStorage.setItem('user',JSON.stringify(response.data.success.data))
                            // this.success.push(response.data.success)
                            self.errors=[]
                            self.success=[response.data.success]
                            self.notifyVue('top', 'center', response.data.success)
                            this.$router.push('/')
                        }
                      })
                      .catch(function (error) {
                        if(error.response.data.message){//for 500 error
                            var error={description: '500: Bad Server request, contact admin', error:{server:[error.response.data.message]}}
                            console.log(error)
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
        }
    }
</script>
<style>
  .account-form
  {
      height: 600px;
  }
</style>
