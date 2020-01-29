<template>
  <v-container>
    <h1>List</h1>

    <p v-for="lst in dataList" :key="lst.seqNo" @click="goPage(lst.seqNo)" style="cursor:pointer">{{ lst.title }}</p>

    <p>page :  {{ getPage }}</p>
        
  </v-container>
</template>

<script>
export default {
  data() {
     return {
       dataList : [
         {seqNo : 1, title : "가나다라 마바사 1" }
         ,{seqNo : 2, title : "가나다라 마바사 2" }
         ,{seqNo : 3, title : "가나다라 마바사 3" }
      ]
    }
  },
   computed: {
        getPage(){
            return this.$route.params.page == null ? 1 : this.$route.params.page
        }
    },
    methods: {
      goPage(seqNo){
      this.$router.push({ 
          name : 'board-view',
          params : {
              page : this.getPage,
              seqNo : seqNo
          }
        })
      }
    },
}
</script>
