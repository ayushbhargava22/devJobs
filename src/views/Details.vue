<template>
  <div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      companies: null,
      router: this.$route.params.jobid,
    }
  },
  computed: {
    ...mapGetters(['getJobs'])
  },
  mounted(){
    this.findId();
  },
  methods: {
    findId() {
      for (var i = 0; i < this.getJobs.length; i++) {
          if (this.getJobs[i].id == this.router) {
              this.companies = (this.getJobs[i]);
              break;
          }
      }
    }
  }
}
</script>

<style>

</style>