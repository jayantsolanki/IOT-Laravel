<template>
  <router-view></router-view>
</template>
<script>
  export default {}
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0
  }

  body{
      margin: 0;
      padding: 0;
  }
  body:before{
      content: '';
      position: fixed;
      width: 100vw;
      height: 100vh;
      /* background-image: url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"); */
      /* background-image: url("https://images.pexels.com/photos/593322/pexels-photo-593322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
      /* background-image: url("https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
      /* background-image: url("https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?cs=srgb&dl=blue-blue-background-botanical-1445416.jpg&fm=jpg"); */
      /* background-image: url("https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
      background-image: url("https://images.pexels.com/photos/1261154/pexels-photo-1261154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      -webkit-filter: blur(3px);
      -moz-filter: blur(3px);
      -o-filter: blur(3px);
      -ms-filter: blur(3px);
      filter: blur(3px);
  }
  @media (max-width:960px) { /*for small screens*/
    .account-form
      {
          /* position: absolute; */
          /* top: 50%; */
          /* left: 50%; */
          /* transform: translate(-50%,-50%); */
          /* width: 80%; */
          /* height: 500px; */
          /* padding: 80px 40px; */
          margin-top: 92%;
          /* margin-left:10%; */
          /* margin-right: 10%; */
          /* padding-top: 100%; */
          /* box-sizing: border-box; */
          /* background: rgba(0,0,0,.5); */
          /* background: rgba(102,102,102,.5); */
      }

  }

  .account-form
  {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 400px;
      height: 600px;
      padding: 80px 40px;
      box-sizing: border-box;
      background: rgba(0,0,0,.5);
      /* background: rgba(102,102,102,.5); */
  }
  .avatar {
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      /* top: calc(-80px/2); */
      top: 0px;
      left: calc(50% - 40px);
      /* opacity: 0.5; */
      z-index: -10;
  }
  .account-form h2 {
      margin: 0;
      padding: 0 0 20px;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
  }
  .account-form p
  {
      margin: 0;
      padding: 0;
      font-weight: bold;
      color: #fff;
  }
  .account-form input
  {
      width: 100%;
      margin-bottom: 20px;
  }
  .account-form input[type="email"],
  .account-form input[type="password"]
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
  /* .account-form input[type="submit"] {
      height: 30px;
      color: #fff;
      font-size: 15px;
      background: red;
      cursor: pointer;
      border-radius: 25px;
      border: none;
      outline: none;
      margin-top: 15%;
  } */
  .account-form a
  {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
  }
  input[type="checkbox"] {
      width: 20%;
  }

  .input-group-addon{
    border: 1px solid #fff;
      /* border-bottom: 1px solid #fff; */
      background: transparent;
      outline: none;
      /* height: 40px; */
      color: #fff;
      font-size: 16px;
      font-weight: bold;
  }
</style>
