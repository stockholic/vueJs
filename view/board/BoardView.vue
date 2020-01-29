<template>
  <v-container>
    <div>
        <h1>View</h1>
        <p>params : {{ $route.params }}</p>
    </div>
  </v-container>
</template>
<script>
export default {
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
}
</script>
