<template>
  <v-container>
    <div>
        <h1>View {{ page }} {{ seqNo }}</h1>
        <p>params : {{ $route.params }}</p>
        <p><button @click="goList()">List</button></p>
    </div>
  </v-container>
</template>
<script>
export default {
   props : ['page', 'seqNo'],

   computed: {
        getParam(){
            return this.$route.params
        }
    },
    created() {
        // eslint-disable-next-line no-console
        // console.log("router", this.$router)
        // eslint-disable-next-line no-console
        // console.log("route", this.$route)
    },
    methods: {
       goList(){
          this.$emit('goList')
        },
    },
}
</script>
