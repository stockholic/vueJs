<template>
  <v-container>
    <div>
        <h1>Form</h1>
        <p>params : {{ $route.params }}</p>
        <p>ex) /xxx/1234 : {{ getParam }} seqNo :  {{ getParam.seqNo }}</p>

        <hr>

        <h1>Query</h1>
        <p>query : {{ $route.query }} seqNo :  {{ $route.query.seqNo }}</p>
        <p>ex) /xxx?seqNo=merong</p>
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
        console.log("router", this.$router)
        // eslint-disable-next-line no-console
        console.log("route", this.$route)
    },
}
</script>
