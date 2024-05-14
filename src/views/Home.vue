<template>
    <div class="home">
      <h1>This is Home page!</h1>
    </div>
    <div class="links">
      <router-link :to="home" class="link">Home</router-link>
      <router-link :to="user" class="link">User</router-link>
      <router-link :to="about" class="link">About</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyHome',
    data() {
      return {
        home: '/',
        user: '/user',
        about: '/about'
      };
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .link {
    margin-right: 20px;
  }
  </style>
  