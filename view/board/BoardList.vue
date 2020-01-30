  <template>
    <v-container>
      <h1>List {{ page }} {{ seqNo }}</h1>

      <p v-for="(lst, idx) in dataList" :key="idx" @click="goPage(lst.seqNo)" style="cursor:pointer">{{ lst.title }}</p>
      <p>page :  {{ getPage }}</p>
      <button @click="createUser()"> 유저추가</button>
      <p></p>
      <hr>

      <!--  store 사용 -->
      <ul>
        <li v-for="(lst, idx) in $store.state.users" :key="idx">{{ lst.name }}</li>
      </ul>
      <!-- <p>counter :  {{ $store.state.users.length }}</p>  -->
      <p>state counter :  {{ users.length }}</p> 
      <p>getters counter :  {{ $store.getters.getUserCount }}</p> 
      <p>rate :  {{ $store.getters.getNameRate }} %</p> 

       <!--  mapGetters 사용 -->
       <p>mapGetters counter :  {{ userCount }}</p> 
      <p>mapGetters rate :  {{ nameRate }} %</p> 

          
    </v-container>
  </template>

  <script>

import { mapState, mapGetters } from 'vuex';

  export default {

    props : ['page', 'seqNo'],

    data() {
      return {
        dataList : [
          {seqNo : 111, title : "가나다라 마바사 1" }
          ,{seqNo : 222, title : "가나다라 마바사 2" }
          ,{seqNo : 333, title : "가나다라 마바사 3" }
        ],
       
      }
      
    },

/**
 * computed와 methods와의 차이점
  1. template에서 호출시 ()를 적지 않아야 된다.
  2. return 값이 반드시 존재해야한다.
  3. 파라메터를 받을 수 없다.

  - 한번 연산한 값을 캐싱 해놓았다가 필요한 부분에 다시 재 사용한다
  - 같은 페이지내에서 같은 연산을 여러번 반복해야 할 경우에 성능면에서 효율적으로 사용할 수 있다.
  - 캐싱 효과가 필요하다면 computed를 사용하고 캐싱이 필요없다면 methods를 사용하도록 하자.
 */      
    computed: {
          getPage(){
              return this.$route.params.page == null ? 1 : this.$route.params.page
          },
          // ...mapGetters(['getUserCount','getNameRate'])
          ...mapGetters({
            userCount : 'getUserCount',
              nameRate : 'getNameRate'
          }),
          ...mapState(['users'])
      },
      methods: {
/* 
        goPage(seqNo){
        this.$router.push({ 
            name : 'board-view',
            params : {
                page : this.getPage,
                seqNo : seqNo
            }
          })
        },
 */
        
        goPage(seqNo){
          this.$emit('goView', seqNo)
        },
        

      createUser(){
        let obj = {userId: "merong5", passwd : "1234", name : "메렁 5" }

        //store 의 mutations addUser 를 실행, obj 는 payload 에 의해 전달
        //this.$store.commit('addUser', obj)

        //store 의 actions addUser 를 실행, obj 는 payload 에 의해 전달
        this.$store.dispatch('addUser', obj)
      }


        
      },
  }
  </script>
