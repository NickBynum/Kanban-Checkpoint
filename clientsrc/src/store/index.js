import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: [],
    comments: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setActiveList(state, lists) {
      state.lists = lists
    },
    setActiveTask(state, tasks) {
      state.tasks = tasks
    },
    setActiveComment(state, comments) {
      state.comments = comments
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    async getBoard({ commit, dispatch }, boardId) {
      try {
        let res = await api.get("boards/" + boardId)
        commit("setActiveBoard", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    //#endregion


    //#region -- LISTS --
    //NOTE if fails try setActiveBoard in commit, if fails again give up
async getListByBoardId({commit, dispatch}, boardId) {
  try {
    let res = await api.get("boards/" + boardId + "/list")
    commit('setActiveList', res.data)
  } catch (error) {
    console.error(error);
    
  }
},

    async editList({ commit, dispatch }, listId) {
      try {
        let res = await api.put("list/" + listId.id, listId)
        commit('setBoards', res.data)
        dispatch('getBoard', listId.boardId)
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion

    //#region --Tasks--
    async getTaskByListId({commit, dispatch}, listId) {
      try {
        let res = await api.get("list/" + listId + "/task")
        commit('setActiveTask', res.data)
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion



    //#region --Comments --
    async getCommentByTaskId({commit, dispatch}, taskId) {
      try {
        let res = await api.get("task/" + taskId + "/comment")
        commit('setActiveComment', res.data)
      } catch (error) {
        console.error(error);
      }
    }

    //#endregion
  }
})