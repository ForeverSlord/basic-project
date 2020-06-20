import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前选择的左侧导肮
    selectedKeys: ["0"],
    // 登陆人的信息
    userId: "",
    userName: "",
    token: null,
    pages: [],
  },
  mutations: {
    changeSelectedKeys(state, obj) {
      state.selectedKeys = obj;
    },
    changeUser(state, obj) {
      state.userId = obj.id,
        state.userName = obj.name,
        state.token = obj.token
        state.pages = obj.pages || []
    }
  },
  actions: {},
  modules: {},
  // vuex持久化的插件，默认存储到local
  plugins: [createPersistedState({
    // 指定将数据存储到session
    storage: window.sessionStorage,
    reducer(val) {
      return {
        // 指定需要持久化的数据
        selectedKeys: val.selectedKeys,
        userId: val.userId,
        userName: val.userName,
        token: val.token,
        pages: val.pages
      }
    }
  })]
})