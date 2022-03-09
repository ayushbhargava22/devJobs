<template>
  <div class="card-container">
    <div class="card" v-for="data in getJobs" :key="data.id">
      <div class="content-wrapper">
        <div class="time flex">
          <p class="posted-time"> {{data.postedAt}} </p>
          <p class="seperator"></p>
          <p class="contract"> {{data.contract}} </p>
        </div>
        <div class="position">
          <h3> {{data.position}} </h3>
        </div>
        <div class="company">
          <p> {{data.company}} </p>
        </div>
        <div class="location">
          <p>{{data.location}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
  computed: {
    ...mapGetters(['getJobs'])
  },
}
</script>

<style scoped>
  .card-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 50px;
    margin-left: 80px;
    margin-right: 80px;
  }
  .card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 8px;
    height: 220px;
    margin-right: 20px;
    margin-bottom: 50px
  }
  .content-wrapper {
    width: 90%;
    margin: 0 auto;
  }
  .time{
    padding-top: 20px;
    color: grey;
    font-weight: bold;
    font-size: 0.81rem;
    align-items: center;
  }
  .seperator {
    margin: 0 10px;
    font-size: 1.5rem;
    border: 1px solid grey;
    width: 2px;
    background: grey;
    height: 2px;
    border-radius: 50%
  }
</style>