import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {    //data 역활
    users : [
       {userId: "merong1", passwd : "1234", name : "메렁 1" }
      ,{userId: "merong2", passwd : "1234", name : "메렁 2" }
      ,{userId: "merong3", passwd : "1234", name : "메롱 3" }
    ],
    isLogin : false,
    isLoginError : false
  },
  getters : {   //computed 역활
/* 
    userCount : function(state){
      return state.users.length
    },
   */ 
    getUserCount : state => {
      return state.users.length
    },
    getNameCount : state => {
      let count = 0;
      state.users.forEach(user => {
        if(user.name == "메렁 1") count++;
      })
      return count;
    },
    getNameRate : (state, getters) => {
      return Math.round(getters.getNameCount / getters.getUserCount *  100)
    }
  },

  mutations: {    //state 값을 변화 시키는 역활, 동기처리  commit
    addUser : (state, payload) => {
        state.users.push(payload);
    },
    //로그인 성공
    loginSuccess : state => {
      state.isLogin = true;
      state.isLoginError = false;
    },
    //로그인 실패
    loginError : state => {
      state.isLogin = false;
      state.isLoginError = true;
    }
  },
  //mutations 하기전에 actions 를 먼저 실행하고(dispatch) 중간에 비즈니스 로식 실행,  mutations 을 실행한다.  
  actions: {  
    /* addUser : (context, payload) => {
      context.commit('addUser',payload)   mutations 의 addUser
    } */
    addUser : ({ commit }, payload) => {
      //TODO
      //state 변경 시켜줘
      commit('addUser', payload);
    },
    // eslint-disable-next-line no-unused-vars
    login ({state, commit }, obj) {

    },

  },
  modules: {}
});
