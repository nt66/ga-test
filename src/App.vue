<template>
   <router-view />
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        app1: 'app1',
        app2: 'app2',
      };
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
