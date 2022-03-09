<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0
  }
  .container {
    width: 100%;
    height: 100vh;
  }
  .flex {
     display : flex;
  }
  .flex-direction {
    flex-direction: column;
  }
</style>
