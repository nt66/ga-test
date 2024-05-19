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
        app3: 'app3',
        app4: 'app4',
        app5: 'app5',
        app6: 'app6',
      };
    },
  methods: {
    getNumber() {
      return 42;
    },
    getAge() {
      return '30岁';
    },
    anotherMethod() {
      console.log(this.getNumber());
    }
  },
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
