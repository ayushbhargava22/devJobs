<template>
  <div class="card-container">
    <div class="card" v-for="data in getJobs" :key="data.id">
      <router-link :to="{ name: 'Details', params: { jobid: data.id },}">
        <div class="content-wrapper">
          <div class="image">
            <img v-bind:src="data.logo">
          </div>
          <div class="time flex">
            <p class="posted-time"> {{data.postedAt}} </p>
            <p class="seperator"></p>
            <p class="contract"> {{data.contract}} </p>
          </div>
          <div class="position">
            <h3 class="position-data"> {{data.position}} </h3>
          </div>
          <div class="company">
            <p> {{data.company}} </p>
          </div>
          <div class="location">
            <p>{{data.location}}</p>
          </div>
        </div>
      </router-link>
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
  .image {
    position: relative;
    background-color: rgb(234,147,16);
    width: 3rem;
    height: 3rem;
    border-radius: 0.8rem;
    align-items: center;
    display: flex;
    justify-content: center;
    top: -25px;
  }
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
    padding-top: 5px;
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
  .position {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .position-data {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .company {
    color: grey;
    font-weight: bold;
  }
  .location {
    margin-top: 40px;
    color: blue;
    font-weight: bold;
    font-size: 0.9rem;
  }
  a {
    text-decoration: none;
  }
</style>