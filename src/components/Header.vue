<template>
  <div class="header-container">
    <div class="header-content flex">
      <div class="title">
      <h2>devjobs</h2>
    </div>
    <div class="dark-mode">
      <span>☀️</span>
      <span>🌙</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  .header-container {
    background-image: url("../assets/bg-pattern-header.svg");
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    color:white
  }
  .header-content {
    justify-content: space-between;
    margin-left: 80px;
    margin-right: 80px;
    padding-top: 40px;
  }
  .title h2 {
    font-weight: bold;
    font-size: 1.8rem;
  }
</style>  